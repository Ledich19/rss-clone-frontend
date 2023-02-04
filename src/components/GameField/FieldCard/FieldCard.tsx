import React from 'react';
import './FieldCard.scss';
import { BoardItemType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, toggleVisibleCard } from '../../../reducers/gameBoardReducer';
import { decrementSpinnerValue } from '../../../reducers/spinnertReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCard = ({ heightField, item }: PropsType) => {
  const { characters, activePlayer } = useAppSelector((state) => state.characters);
  const spinnerValue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const checkPossibilityMove = (i: number, j: number, move: number) => {
    const gameFieldArray = gameField.flat(1);
    const characterItem = gameFieldArray.find((ceil) => ceil.id === `${i}-${j}`);
    const checkItemsId = [
      characterItem && characterItem.top ? `${i - 1}-${j}` : 'none',
      characterItem && characterItem.bottom ? `${i + 1}-${j}` : 'none',
      characterItem && characterItem.right ? `${i}-${j + 1}` : 'none',
      characterItem && characterItem.left ? `${i}-${j - 1}` : 'none',
    ];
    const checkItemsObj = gameFieldArray.filter(
      (ceil) => checkItemsId
        .includes(ceil.id) && ((ceil.state === null || ceil.state === 'player')
          || (typeof ceil.state === 'object' && ceil.state.type) === activePlayer),
    ).map((e) => ({ id: e.id, movie: move }));
    return checkItemsObj;
  };
  // console.log('fn', checkPossibilityMove(+iTo, +jTo));
  type ForFn = { id: string, movie: number };
  const checkPossibilityMoveArray = (arr: ForFn[], move: number): ForFn[] => {
    let newArr: ForFn[] = [];
    arr.forEach((e) => {
      const [i, j] = e.id.split('-');
      newArr = newArr.concat(checkPossibilityMove(+i, +j, move));
    });
    return newArr;
  };
  const canIMove = (id: string) => {
    let result = [{ id, movie: 0 }];
    let workArr = [{ id, movie: 0 }];
    for (let i = 1; i <= spinnerValue; i += 1) {
      workArr = checkPossibilityMoveArray(workArr, i);
      result = result.concat(workArr);
    }
    const isPosible = result.filter((el) => el.id === item.id).sort((a, b) => {
      if (a.movie > b.movie) {
        return 1;
      }
      if (a.movie < b.movie) {
        return -1;
      }
      return 0;
    })[0];
    return isPosible;
  };

  const handleMove = (id: string) => {
    const player = gameField
      .flat(1)
      .find(
        (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === activePlayer,
      );
    // const [iTo, jTo] = id.split('-');
    const can = player ? canIMove(player.id) : null;

    if (player && can) {
      const [iFrom, jFrom] = player.id.split('-');
      const [iTo, jTo] = id.split('-');
      const pathLength = Math.abs(+iFrom - +iTo) + Math.abs(+jFrom - +jTo);
      if (spinnerValue >= pathLength) {
        const body = characters.find((character) => character.type === activePlayer) || null;
        dispatch(moveCharacter({ from: player.id, to: id, body }));
        dispatch(decrementSpinnerValue(can.movie));
      }
    }
  };

  const handleOpen = (id: string) => {
    dispatch(toggleVisibleCard(id));
  };
  const handler = item.state ? handleOpen : handleMove;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const player = gameField
      .flat(1)
      .find(
        (ceil) => ceil.state
        && typeof ceil.state === 'object'
        && ceil.state.type === activePlayer,
      );
    const can = player ? canIMove(player.id) : null;
    if (can) {
      (e.target as HTMLElement).style.background = ' rgba(16, 240, 16, 0.3)';
    } else {
      (e.target as HTMLElement).style.background = 'rgba(248, 5, 5, 0.3)';
    }
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.background = 'rgba(0, 0, 0, 0)';
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
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
        item.id
      )}
    </div>
  );
};

export default FieldCard;
