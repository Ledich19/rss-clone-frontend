import React, {useState} from "react";
import { useAppSelector } from "../../../../app/hooks";
import './card.scss';

const Card = () => {
  
  const {cards} = useAppSelector(state => state.gameSet);

  return (
    <div className="cards__card card">
      Карточки
    </div>
  )
};
export default Card;