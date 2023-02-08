import React, { useState } from 'react';
import './PlayerOption.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CharacterType } from '../../app/types';

type PropertyType = {
  player: CharacterType
};

const PlayerOption = ({ player }: PropertyType) => {
  const { characters } = useAppSelector((state) => state.gameSet.cards);

  return (
    <div className="player-option">
      <div className="player-option__box">
        <img className="player-option__image" src={`./images/${player.img}`} alt="" />
        <div className="player-option__control">
          <input className="player-option__player-name" type="text" placeholder={`plyer ${1}`} />
          <select className="player-option__choose" name="select">
            {characters.map((character) => (
              <option key={character.type} value={character.type}>
                {character.type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="player-option__description">
        Увлекается боевыми искусствами: у него всегда есть с собой нож (можно использовать его в
        любой момент, как если бы у Саши была такая карточка оружия).
      </div>
    </div>
  );
};
export default PlayerOption;
