import React from 'react';
import GameField from '../../components/GameField/GameField';
import './GameBoard.scss';
import Aside from '../Aside/Aside';

const GameBoard = () => (
  <div className="game">
    <GameField />
    <Aside/>
  </div>
);

export default GameBoard;
