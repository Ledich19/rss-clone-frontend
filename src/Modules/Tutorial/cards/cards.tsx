import React, {useState} from "react";
import { useAppSelector } from "../../../app/hooks";
import Card from "./card/card";
import './cards.scss';


const Cards = () => {
  const [visible, setVisibility] = useState('cards__content visible');
  const [activity, setActivity] = useState('rotate(0deg)');
  const changeVisibility = () => {
    if(visible === 'cards__content visible'){
      setVisibility('cards__content');
      setActivity('rotate(180deg)');
    }
    else {
      setVisibility('cards__content visible');
      setActivity('rotate(0deg)');
    }
  }

  const {cards} = useAppSelector(state => state.gameSet);
  console.log(cards);
  
  return (
    <div className="item cards">
      <div className="item__top">
        <h4 className="item__title">Карточки</h4>
        <button style={{transform: activity}} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <div className={visible}>
        <Card />
      </div>
    </div>
  )
}

export default Cards;