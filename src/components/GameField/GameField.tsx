import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './GameField.scss';

const GameField = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const heightField = gameFieldMatrix.length;
  const widthField = gameFieldMatrix[0].length;
  // const itemSize = {
  //   height: `calc(100vh / ${heightField})`,
  //   width: `calc(100vh / ${heightField})`,
  // };

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => {
        return (
          <div className="field__row" key={`rowId${i}`}>
            {row.map((item) => {
              const style = {
                height: `calc(100vh / ${heightField})`,
                width: `calc(100vh / ${heightField})`,
                borderLeft: !item.left ? 'solid 4px black' : '',
                borderRight: !item.right ? 'solid 4px black' : '',
                borderTop: !item.top ? 'solid 4px black' : '',
                borderBottom: !item.bottom ? 'solid 4px black' : '',
              };
              return <div style={style} key={item.id} className="field__item">
               {/* <img src={`./images/characters/boris.png`} alt="" className='field__img'/> */}
                
                {item.id}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameField;
