import React, {useState} from "react";
import { useAppSelector } from "../../../app/hooks";
import './item.scss';

const Item = () => {

  const [visible, setVisibility] = useState('translateY(0px)');
  const [activity, setActivity] = useState('rotate(0deg)');
  const changeVisibility = () => {
    if(visible === 'translateY(-100px)'){
      setVisibility('translateY(0px)');
      setActivity('rotate(0deg)');
    }
    else {
      setVisibility('translateY(-100px)');
      setActivity('rotate(180deg)');
    }
  }

  const rules = useAppSelector(state => state.rules);

  return (
    <div className="item">
      <div className="item__top">
        <h4 className="item__title">{rules.goal.title}</h4>
        <button style={{transform: activity}} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <p style={{transform: visible}} className="item__text">{rules.goal.text}</p>
    </div>
  )
};

export default Item;