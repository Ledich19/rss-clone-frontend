import React from 'react';
import { useAppSelector } from '../../app/hooks';
import FieldCard from './FieldCard/FieldCard';
import './GameField.scss';

const GameField = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const heightField = gameFieldMatrix.length;

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => {
        return (
          <div className="field__row" key={`rowId${i}`}>
            {row.map((item) => <FieldCard key={item.id} heightField={heightField} item={item}/>)}
          </div>
        );
      })}
    </div>
  );
};

export default GameField;
