import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPageMenu.scss';

const StartPageMenu = () => {
  console.log('');
  return (
    <div className="start-menu">
      <button className="start-menu__btn">Start</button>
      <button className="start-menu__btn">Load</button>
      <Link rel="stylesheet" to={'/tutorial'}>
        <button className="start-menu__btn">Tutorial</button>
      </Link>
    </div>
  );
};
export default StartPageMenu;
