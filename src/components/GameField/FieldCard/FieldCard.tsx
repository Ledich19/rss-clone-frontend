import React, { useRef } from 'react';
import './FieldCard.scss';
import { BoardItemType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, removeCardState, setVisibleCard } from '../../../reducers/gameBoardReducer';
import { decrementSpinnerValue, setIsNearEnemy, setSpinnerValue } from '../../../reducers/spinnertReducer';
import { addToPlayerInventory, setCanPlayerMove } from '../../../reducers/playersReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number, col: number }
};
type ToMovieItem = { id: string, movie: number };

const FieldCard = ({ heightField, item }: PropsType) => {
  const { characters, activePlayer, canPlayerMove } = useAppSelector((state) => state.characters);
  const spinnerValue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const movieInfo = useRef<HTMLDivElement>(null);
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
    lineHeight: `calc(100vh / ${heightField})`,
    background: item.value && item.value === 'finish' ? 'rgba(232, 248, 5, 0.3)' : 'rgba(0, 0, 0, 0)',
  };

  const createNearCeil = (element: BoardItemType | undefined, i:number, j:number) => [
    element && element.top ? `${i - 1}-${j}` : 'none',
    element && element.bottom ? `${i + 1}-${j}` : 'none',
    element && element.right ? `${i}-${j + 1}` : 'none',
    element && element.left ? `${i}-${j - 1}` : 'none',
  ];

  const CheckOptionMove = (i: number, j: number, move: number) => {
    const gameFieldArray = gameField.flat(1);
    const ceilElement = gameFieldArray.find((ceil) => ceil.id === `${i}-${j}`);
    const checkItemsId = createNearCeil(ceilElement, i, j);
    const checkItemsObj = gameFieldArray
      .filter((ceil) => checkItemsId
        .includes(ceil.id) && (ceil.state === null));
    return checkItemsObj.map((e) => ({ id: e.id, movie: move }));
  };

  const canIOpen = (player: string, id: string) => {
    const [i, j] = player.split('-');
    const gameFieldArray = gameField.flat(1);
    const ceilElement = gameFieldArray.find((ceil) => ceil.id === player);
    const checkItemsId = createNearCeil(ceilElement, +i, +j);
    const checkItemsObj = gameFieldArray.filter((ceil) => checkItemsId
      .includes(ceil.id) && ceil.state)
      .map((e) => e.id);
    return checkItemsObj.includes(id);
  };

  const checkPossibilityMoveArray = (arr: ToMovieItem[], move: number): ToMovieItem[] => {
    let resultArray: ToMovieItem[] = [];
    arr.forEach((e) => {
      const [i, j] = e.id.split('-');
      resultArray = resultArray.concat(CheckOptionMove(parseInt(i, 10), parseInt(j, 10), move));
    });
    return resultArray;
  };

  const canIMove = (id: string) => {
    let resultArray = [{ id, movie: 0 }];
    let workArray = [{ id, movie: 0 }];
    for (let i = 1; i <= spinnerValue; i += 1) {
      workArray = checkPossibilityMoveArray(workArray, i);
      resultArray = resultArray.concat(workArray);
    }
    const movementOptions = resultArray
      .filter((el) => el.id === item.id)
      .sort((a, b) => {
        if (a.movie > b.movie) {
          return 1;
        }
        if (a.movie < b.movie) {
          return -1;
        }
        return 0;
      });
    return movementOptions[0];
  };

  const handleMove = (id: string) => {
    const player = gameField
      .flat(1)
      .find(
        (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === activePlayer,
      );
    const canMovie = player ? canIMove(player.id) : null;

    if (player && canMovie && canPlayerMove) {
      if (spinnerValue) {
        const body = characters.find((character) => character.type === activePlayer) || null;
        dispatch(moveCharacter({ from: player.id, to: id, body }));
        dispatch(decrementSpinnerValue(canMovie.movie));
      }
    }
  };

  const handleOpenCard = (id: string) => {
    const gameFieldArr = gameField.flat(1);
    const player = gameFieldArr.find((ceil) => ceil.state?.type === activePlayer);
    const thingCeil = gameFieldArr.find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(player.id, thingCeil.id) : null;
    if (player && spinnerValue > 0 && canOpen && thingCeil && thingCeil.state) {
      dispatch(setVisibleCard(id));
      dispatch(setSpinnerValue(0));
      if ((thingCeil.state.category === 'weapon' || thingCeil.state.category === 'thing')) {
        setTimeout(() => {
          dispatch(removeCardState(id));
          const body = characters.find((character) => character.type === activePlayer) || null;
          dispatch(moveCharacter({ from: player.id, to: id, body }));
        }, 5000);
        dispatch(addToPlayerInventory({
          player: activePlayer, value: thingCeil.state,
        }));
      }
      if (thingCeil.state.category === 'enemy') {
        dispatch(setIsNearEnemy([thingCeil.id]));
        dispatch(setCanPlayerMove(false));
      }
    }
  };
  const handler = item.state ? handleOpenCard : handleMove;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const player = gameField
      .flat(1)
      .find(
        (ceil) => ceil.state
        && typeof ceil.state === 'object'
        && ceil.state.type === activePlayer,
      );
    const canMovie = player ? canIMove(player.id) : null;
    if (canMovie && canPlayerMove) {
      const parentElement = e.target.closest('.field-card');
      (parentElement as HTMLElement).style.background = 'rgba(0, 255, 26, 0.3';

      if (movieInfo.current) {
        movieInfo.current.innerHTML = `${canMovie.movie}`;
      }
    } else {
      const parentElement = e.target.closest('.field-card');
      (parentElement as HTMLElement).style.background = 'rgba(248, 5, 5, 0.3)';
    }
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const parentElement = e.target.closest('.field-card');
    if (item.value === 'finish') {
      (parentElement as HTMLElement).style.background = 'rgba(232, 248, 5, 0.3)';
    } else {
      (parentElement as HTMLElement).style.background = 'rgba(0, 0, 0, 0)';
    }
    if (movieInfo.current) {
      movieInfo.current.innerHTML = '';
    }
  };
  return (
    <div
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={() => handler(item.id)}
      style={style}
      className="field-card"
    >
      {item.state && typeof item.state === 'object' ? (
        <div className={'flip-container'}>
          <div className={`flipper ${item.state.isVisible ? '_front' : ''}`}>
            <div className="front">
              <img src={'./images/backCard.png'} alt="back card" />
            </div>
            <div className="back">
              <img src={`./images/${item.state.img}`} alt="back card" />
            </div>
          </div>
        </div>
      ) : (
        <div ref={movieInfo}>
          {/* <div className='_movie-text'>{item.id}</div> */}
          {/* <div className='_small-text'>{item.id}</div> */}
        </div>
      )}
    </div>
  );
};

export default FieldCard;
