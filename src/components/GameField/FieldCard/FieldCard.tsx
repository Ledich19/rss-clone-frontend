import React from 'react';
import './FieldCard.scss';
import { BoardItemType } from './../../../app/types';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCard = ({ heightField, item }: PropsType) => {
  console.log(item.state);
  
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
    borderLeft: !item.left ? 'solid 4px black' : '',
    borderRight: !item.right ? 'solid 4px black' : '',
    borderTop: !item.top ? 'solid 4px black' : '',
    borderBottom: !item.bottom ? 'solid 4px black' : '',
  };

  return (
    <div style={style} className="field-card">
      {item.id}
    </div>
  );
};

export default FieldCard;
