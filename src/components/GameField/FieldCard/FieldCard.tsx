import React, { useState } from 'react';
import './FieldCard.scss';
import { BoardItemType } from './../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleVisibleCard } from '../../../reducers/gameBoardReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCard = ({ heightField, item }: PropsType) => {
const dispatch = useAppDispatch()
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
    borderLeft: !item.left ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderRight: !item.right ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderTop: !item.top ? 'solid 2px rgba(0, 0, 0, 0)' : '',
    borderBottom: !item.bottom ? 'solid 2px rgba(0, 0, 0, 0)' : '',
  };

  const handleOpen = () => {console.log
    dispatch(toggleVisibleCard(item.id))
  };
  ///
  ///images/${item.state.img}
  return (
    <div onClick={handleOpen} style={style} className="field-card">
      {item.state && item.state !== 'player' && item.state !== 'finish' ? (
        <div  className={`flip-container`}>
          <div className={`flipper ${item.state.isVisible ? '_front' : ''}`}>
            <div className="front">
              <img src={`./images/backCard.png`} alt="back card" />
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
