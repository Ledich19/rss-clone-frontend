import { useState } from 'react';
import { ContentRules } from '../../../app/types';
import './Item.scss';

const Item = (props:ContentRules) => {
  const [visible, setVisibility] = useState('item__text');
  const [activity, setActivity] = useState('rotate(0deg)');

  const changeVisibility = (e: React.MouseEvent) => {
    if (visible === 'item__text') {
      setVisibility('item__text visible');
      setActivity('rotate(180deg)');
    } else {
      setVisibility('item__text');
      setActivity('rotate(0deg)');
    }
  };
  return (
    <div className="item">
      <div className="item__top">
        <h4 className="item__title" onClick={changeVisibility}>{props.title}</h4>
        <button style={{ transform: activity }} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <div className={visible} >
        {props.text && <p className='item__subtitle'>{props.text}</p>}
        <ul className='item__list'>
          {props.items && props.items.map((item, index) => <li className='item__element' key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Item;
