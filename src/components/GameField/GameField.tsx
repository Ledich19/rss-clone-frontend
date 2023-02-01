import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './GameField.scss';

const GameField = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const heightField = gameFieldMatrix.length;
  const widthField = gameFieldMatrix[0].length;
  const itemSize = {
      height: `calc(100vh / ${heightField})`,
      width: `calc(100vh / ${heightField})`,
  } 

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => {
        return (
          <div className="field__row" key={`rowId${i}`}>
            {row.map((item) => {
              return <div style={itemSize} key={item.id} className="field__item"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameField;
