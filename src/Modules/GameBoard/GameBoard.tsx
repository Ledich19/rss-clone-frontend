import React from 'react';
import GameField from '../../components/GameField/GameField';
import Spinner from '../../components/Spinner/Spinner';
import './GameBoard.scss';

const GameBoard = () => (
  <div className="game">
    <GameField />
    <Spinner/>
  </div>
);

export default GameBoard;
