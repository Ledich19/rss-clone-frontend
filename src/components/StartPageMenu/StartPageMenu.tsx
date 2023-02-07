import React, { useState } from 'react';
import './StartPageMenu.scss';

const StartPageMenu = () => {
  console.log('');
  return (
  <div className="start-menu">
    <button className="start-menu__btn">Start</button>
    <button className="start-menu__btn">Load</button>
    <button className="start-menu__btn">Tutorial</button>
  </div>
  );
};
export default StartPageMenu;
