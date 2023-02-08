import { log } from 'console';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ChooseAmount from '../../components/ChooseAmount/ChooseAmount';
import PlayerOption from '../../components/PlayerOption/PlayerOption';
import { addPlayer, removeLastPlayer, setAmount } from '../../reducers/playersReducer';
import './StartGameOption.scss';

const StartGameOption = () => {
  const dispatch = useAppDispatch();
  const { amount, characters } = useAppSelector((state) => state.characters);
  const charactersCards = useAppSelector((state) => state.gameSet.cards.characters);

  useEffect(() => {
    const count = parseInt(amount, 10) - characters.length;
    const choosePlayers = characters.map((character) => character.type);
    const availablePlayers = charactersCards.filter(
      (character) => !choosePlayers.includes(character.type),
    );
    if (count >= 1) {
      for (let i = 0; i < count; i += 1) {
        dispatch(addPlayer(availablePlayers[0]));
      }
    }
    if (count < 0) {
      for (let i = 0; i < Math.abs(count); i += 1) {
        dispatch(removeLastPlayer());
      }
    }
  }, [amount]);
  useEffect(() => {
    dispatch(setAmount('1'));
  }, []);

  return (
    <div className="options">
      <div className="options__board">
        <div className="options__players">
          <ChooseAmount />
          {characters.map((player) => (
            <PlayerOption key={player.type} player={player} />
          ))}
        </div>
        <div className="options__game-board"></div>
      </div>
    </div>
  );
};

export default StartGameOption;
