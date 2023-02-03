import React, {useState} from "react";
import { useAppSelector } from "../../../app/hooks";
import './item.scss';

const Item = () => {

  const [visible, setVisibility] = useState('item__text visible');
  const [activity, setActivity] = useState('rotate(0deg)');
  const changeVisibility = () => {
    if(visible === 'item__text visible'){
      setVisibility('item__text');
      setActivity('rotate(180deg)');
    }
    else {
      setVisibility('item__text visible');
      setActivity('rotate(0deg)');
    }
  }

  const rules = useAppSelector(state => state.rules);

  return (
    <div className="item">
      <div className="item__top">
        <h4 className="item__title">{rules.goal.title}</h4>
        <button style={{transform: activity}} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <p style={{transform: visible}} className={visible}>{rules.goal.text}</p>
    </div>
  )
};

export default Item;