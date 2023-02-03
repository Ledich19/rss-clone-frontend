import React, { useState } from 'react';
import './FieldCard.scss';
import { BoardItemType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, toggleVisibleCard } from '../../../reducers/gameBoardReducer';
import { decrementSpinerValue } from '../../../reducers/spinnertReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCard = ({ heightField, item }: PropsType) => {
  const activePleyr = useAppSelector((state) => state.characters.active);
  const { characters } = useAppSelector((state) => state.characters);
  const spinerWalue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
    borderLeft: !item.left ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderRight: !item.right ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderTop: !item.top ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderBottom: !item.bottom ? 'solid 2px rgba(0, 0, 0, 0)' : '',
  };

  const handleMove = (id: string) => {
    const player = gameField
      .flat(1)
      .find(
        (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === activePleyr,
      );
    if (player) {
      const [iFrom, jFrom] = player.id.split('-');
      const [iTo, jTo] = id.split('-');
      const pathLength = Math.abs(+iFrom - +iTo) + Math.abs(+jFrom - +jTo);
      if (spinerWalue >= pathLength) {
        console.log(pathLength, spinerWalue);
        console.log(player.id, iFrom, jFrom, iTo, jTo);
        const body = characters.find((character) => character.type === activePleyr) || null;
        dispatch(moveCharacter({ from: player.id, to: id, body }));
        dispatch(decrementSpinerValue(pathLength));
      }
    }
  };

  const handleOpen = (id: string) => {
    dispatch(toggleVisibleCard(id));
  };
  const handler = item.state ? handleOpen : handleMove;

  return (
    <div onClick={() => handler(item.id)} style={style} className="field-card">
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
