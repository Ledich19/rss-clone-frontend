import React, { useEffect, useRef, useState } from 'react';
import './Random.scss';
import { useAppDispatch } from '../../../app/hooks';
import { CharacterType } from '../../../app/types';
import { changePlayer } from '../../../reducers/playersReducer';

type PropertyType = {
  list: CharacterType[];
  playerName: string;
};

const Random = ({ list, playerName }: PropertyType) => {
  const dispatch = useAppDispatch();
  const dice = useRef<HTMLDivElement>(null);
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleChoose = () => {
    if (dice.current) dice.current.style.animation = 'spin 1s infinite linear';
    const setPlayer = () => {
      if (dice.current) dice.current.style.animation = 'spin 10s infinite linear';
      const number = getRandomInt(0, list.length - 1);
      dispatch(changePlayer({ ...list[number], playerName }));
    };
    setTimeout(setPlayer, 1000);
  };
  return (
    <button title='random player' onClick={handleChoose} className="random">
      <div id="wrapper">
        <div id="platform">
          <div ref={dice} id="dice">
            <div className="side front">
              <div className="dot center"></div>
            </div>
            <div className="side front inner"></div>
            <div className="side top">
              <div className="dot dtop dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side top inner"></div>
            <div className="side right">
              <div className="dot dtop dleft"></div>
              <div className="dot center"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side right inner"></div>
            <div className="side left">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side left inner"></div>
            <div className="side bottom">
              <div className="dot center"></div>
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side bottom inner"></div>
            <div className="side back">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
              <div className="dot center dleft"></div>
              <div className="dot center dright"></div>
            </div>
            <div className="side back inner"></div>
            <div className="side cover x"></div>
            <div className="side cover y"></div>
            <div className="side cover z"></div>
          </div>
        </div>
      </div>
    </button>
  );
};
export default Random;
