import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Item from './goal-component/item';
import InBox from './inBox-component/inBox';
import Cards from './cards/cards';

import './Tutorial.scss';

const Tutorial = () => {
  const rules = useAppSelector((state) => state.rules);
  return (
    <div className="rules">
      <div className="rules__container">
        <div className="rules__header">
          <img src="images/tutorial_page/logo.png" alt="logo" className="rules__logo" />
          <div className='rules__info'>
            <div className="rules__table table">
              <ul className="table__list">
                {rules.table.text.map((rule, index) => <li key={index} className="table__item">{rule}</li>)}
              </ul>
            </div>
            <p className="rules__about-game">{rules.aboutGame}</p>
          </div>
        </div>
        <Item />
        <InBox />
        <Cards />
      </div>
    </div>
  );
};

export default Tutorial;
