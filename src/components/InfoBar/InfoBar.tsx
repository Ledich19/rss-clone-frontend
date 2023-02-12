import React, { useState } from 'react';
import './InfoBar.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Inventory from './Inventory/Inventory';
import { ThingType, WeaponType } from '../../app/types';
import PlayersCards from './Players/PlayersCards';

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
  console.log(characters);
  return (
    <div className="info" >
      <img className="info__background" src={'./images/info/wood.jpg'} alt="background" />
      <div className="info__active-player_name">
        <span>Ход игрока: {currentPlayer.name}</span>
      </div>
      <div className="info__players">
        <PlayersCards characters={characters} />
      </div>
{/*       <div className="info__active-player_image">
        <img src={`./images/${currentPlayer.img}`} alt="playerImage" />
        <Health health={currentPlayer.health}/>
      </div> */}
      <div className="info__active-player_weapons">
        <Inventory title={'оружие'} inv={currentPlayerWeapons}/>
      </div>
      <div className="info__active-player_things">
        <Inventory title={'вещи'} inv={currentPlayerThings}/>
      </div>
    </div>
  );
};
export default InfoBar;
