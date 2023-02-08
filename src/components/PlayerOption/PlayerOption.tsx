import React, { useState } from 'react';
import './PlayerOption.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CharacterType } from '../../app/types';
import { addPlayer, chengePlayer } from '../../reducers/playersReducer';

type PropertyType = {
  player: CharacterType;
};

const PlayerOption = ({ player }: PropertyType) => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters);
  const charactersCards = useAppSelector((state) => state.gameSet.cards.characters);
  const choosePlayers = characters.map((character) => character.type);
  const charactersList = charactersCards.filter(
    (character) => !choosePlayers.includes(character.type) || character.type === player.type,
  );

  const handleChoose = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const choosedPlayer = charactersCards.find((character) => character.type === e.target.value);
    if (choosedPlayer) {
      dispatch(chengePlayer({ ...choosedPlayer, playerName: player.playerName }));
    } else {
      dispatch(
        chengePlayer({
          category: 'character',
          isVisible: true,
          active: true,
          type: 'empty',
          name: 'Player',
          img: 'things/plank.png',
          playerName: player.playerName,
          description: '',
          count: 0,
          health: 0,
          inventory: [],
        }),
      );
    }
  };

  return (
    <div className="player-option">
      <div className="player-option__box">
        <img className="player-option__image" src={`./images/${player.img}`} alt="" />
        <div className="player-option__control">
          <input
            className="player-option__player-name"
            type="text"
            placeholder={`${player.playerName}`}
          />
          <select value={player.type} onChange={handleChoose} className="player-option__choose" name="select">
            <option value="empty"> empty </option>
            {charactersList.map((character) => (
              <option key={character.type} value={character.type}>
                {character.type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="player-option__description">{player.description}</div>
    </div>
  );
};
export default PlayerOption;
