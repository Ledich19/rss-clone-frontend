import React, { useState } from 'react';
import './InfoBar.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const InfoBar = () => {
  const { characters, activePlayer, canPlayerMove } = useAppSelector((state) => state.characters);
  const Arr = characters.filter(el => el.type === activePlayer);
  const currentPlayer = Arr[0];
  console.log(currentPlayer);
  return (
    <div className="info" >
      <div className="info__round">Раунд</div>
      <div className="info__active-player_name">Ход игрока: {currentPlayer.name}</div>
      <div className="info__active-player_image">
        <img src={`./images/${currentPlayer.img}`} alt="playerImage" />
      </div>
    </div>
  );
};
export default InfoBar;
