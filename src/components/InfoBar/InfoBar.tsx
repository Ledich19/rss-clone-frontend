import React, { useState } from 'react';
import './InfoBar.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Inventory from './Inventory/Inventory';
import { ThingType, WeaponType } from '../../app/types';
import Health from './Health/Health';

const InfoBar = () => {
  const { characters, activePlayer } = useAppSelector((state) => state.characters);
  const Arr = characters.filter((el) => el.type === activePlayer);
  const currentPlayer = Arr[0];
  let currentPlayerWeapons: Array<ThingType | WeaponType> = [];
  let currentPlayerThings: Array<ThingType | WeaponType> = [];
  if (currentPlayer.inventory) {
    currentPlayerWeapons = currentPlayer.inventory.filter((el) => el.category === 'weapon');
    currentPlayerThings = currentPlayer.inventory.filter((el) => el.category === 'things');
  }
  console.log(currentPlayer);
  return (
    <div className="info" >
      <h2 className="info__round">Раунд:</h2>
      <h3 className="info__active-player_name">Ход игрока: {currentPlayer.name}</h3>
      <div className="info__active-player_image">
        <img src={`./images/${currentPlayer.img}`} alt="playerImage" />
        <Health health={currentPlayer.health}/>
      </div>
      <div className="info__active-player_weapons">
        <Inventory inv={currentPlayerWeapons}/>
      </div>
      <div className="info__active-player_things">
        <Inventory inv={currentPlayerThings}/>
      </div>
    </div>
  );
};
export default InfoBar;
