import React, { useRef } from 'react';
import './FieldCard.scss';
import {
  BoardItemType, CeilInventoriType, EnemyType, ThingType,
} from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, removeCardState, setVisibleCard } from '../../../reducers/gameBoardReducer';
import {
  decrementSpinnerValue,
  setIsNearEnemy,
  setSpinnerValue,
} from '../../../reducers/spinnertReducer';
import {
  addToPlayerInventory,
  setActiveEnemy,
  setCanPlayerMove,
  setNextActivePlayer,
} from '../../../reducers/playersReducer';
import {
  canIOpen, createNearCeil, getActivePlayerCeil, getNextPlayer,
} from '../../../app/healpers';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number; col: number };
};
type ToMovieItem = { id: string; movie: number };

const FieldCard = ({ heightField, item }: PropsType) => {
  const {
    characters, activePlayer, canPlayerMove, enemyChoose,
  } = useAppSelector(
    (state) => state.characters,
  );
  const spinnerValue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const movieInfo = useRef<HTMLDivElement>(null);
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
    lineHeight: `calc(100vh / ${heightField})`,
    background:
      item.value && item.value === 'finish' ? 'rgba(232, 248, 5, 0.3)' : 'rgba(0, 0, 0, 0)',
  };

  const CheckOptionMove = (i: number, j: number, move: number) => {
    const gameFieldArray = gameField.flat(1);
    const ceilElement = gameFieldArray[i * gameField[0].length + j];
    const checkItemsId = createNearCeil(ceilElement, i, j);
    const checkItemsObj = gameFieldArray.filter(
      (ceil) => checkItemsId.includes(ceil.id) && ceil.state === null,
    );
    return checkItemsObj.map((e) => ({ id: e.id, movie: move }));
  };

  const checkPossibilityMoveArray = (arr: ToMovieItem[], move: number): ToMovieItem[] => arr
    .flatMap((e) => {
      const [i, j] = e.id.split('-');
      return CheckOptionMove(parseInt(i, 10), parseInt(j, 10), move);
    });

  const canIMove = (id: string, spinner: number) => {
    let resultArray = [{ id, movie: 0 }];
    let workArray = [{ id, movie: 0 }];
    for (let i = 1; i <= spinner; i += 1) {
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

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    const isDied = characters.find((ch) => !ch.isAlive && ch.type === activePlayer);
    let playerId = null;
    let body = null;

    if (isDied && id && enemyChoose) {
      playerId = enemyChoose.id;
      body = enemyChoose.value;
    } else {
      playerId = getActivePlayerCeil(gameField, activePlayer)?.id;
      body = characters.find((character) => character.type === activePlayer) || null;
    }

    const canMovie = playerId ? canIMove(playerId, spinnerValue) : null;
    if (playerId && canMovie && canPlayerMove && id && spinnerValue) {
      dispatch(moveCharacter({ from: playerId, to: id, body }));
      dispatch(decrementSpinnerValue(canMovie.movie));
      if (spinnerValue - canMovie.movie === 0) {
        dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
      }
      if (isDied && id && enemyChoose) {
        dispatch(
          setActiveEnemy({
            id,
            value: body as EnemyType,
          }),
        );
      }
    }
  };

  const handleOpenCard = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    const player = getActivePlayerCeil(gameField, activePlayer);

    const thingCeil = gameField.flat(1).find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(gameField, player.id, thingCeil.id) : null;
    if (player && spinnerValue > 0 && canOpen && thingCeil && thingCeil.state && id) {
      dispatch(setVisibleCard(id));
      dispatch(setSpinnerValue(0));

      const { category } = thingCeil.state;
      switch (category) {
        case 'weapon':
        case 'thing':
          dispatch(
            addToPlayerInventory({
              player: activePlayer,
              value: thingCeil.state as ThingType,
            }),
          );
          setTimeout(() => {
            const body = characters.find((character) => character.type === activePlayer) || null;
            dispatch(removeCardState(id));
            dispatch(moveCharacter({ from: player.id, to: id, body }));
            dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
          }, 3000);
          break;
        case 'enemy':
          dispatch(setIsNearEnemy([thingCeil.id]));
          dispatch(setCanPlayerMove(false));
          break;
        // case 'deadBody':
        //   (thingCeil.state as CeilInventoriType).value.forEach((el) => {
        //     dispatch(
        //       addToPlayerInventory({
        //         player: activePlayer,
        //         value: el,
        //       }),
        //     );
        //   });
        //   break;
        default:
          break;
      }
    }
  };
  const handler = item.state ? handleOpenCard : handleMove;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const id = e.currentTarget.getAttribute('data-ceil-id');
    let playerId = null;
    const isDied = characters.find((ch) => !ch.isAlive && ch.type === activePlayer);

    if (isDied && id && enemyChoose) {
      playerId = enemyChoose.id;
    } else {
      playerId = getActivePlayerCeil(gameField, activePlayer)?.id;
    }

    const canMovie = playerId ? canIMove(playerId, spinnerValue) : null;
    if (canMovie && canPlayerMove) {
      const parentElement = target.closest('.field-card');
      (parentElement as HTMLElement).style.background = 'rgba(189, 219, 68, 0.573)';

      if (movieInfo.current) {
        movieInfo.current.innerHTML = `${canMovie.movie}`;
      }
    } else {
      const parentElement = target.closest('.field-card');
      (parentElement as HTMLElement).style.background = 'rgba(202, 17, 48, 0.554)';
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
      data-ceil-id={item.id}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handler}
      style={style}
      className="field-card"
      data-tag={item.id}
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
