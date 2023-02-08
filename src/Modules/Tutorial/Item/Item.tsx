import { useState } from 'react';
import { ContentRules } from '../../../app/types';
import './Item.scss';

const Item = (props:ContentRules) => {
  const [visible, setVisibility] = useState(false);
  const changeVisibility = () => (visible ? setVisibility(false) : setVisibility(true));
  return (
    <div className="item">
      <div className="item__top">
        <h4 className="item__title" onClick={changeVisibility}>{props.title}</h4>
        <button style={{ transform: visible ? 'rotate(180deg)' : 'rotate(0deg)' }} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <div className={visible ? 'item__text visible' : 'item__text'} >
        {props.text && <p className='item__subtitle'>{props.text}</p>}
        <ul className='item__list'>
          {props.items && props.items.map((item, index) => <li className='item__element' key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Item;
