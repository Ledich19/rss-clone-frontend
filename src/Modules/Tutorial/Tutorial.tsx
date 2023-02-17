import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import Item from './Item/Item';
import InBox from './InBox/InBox';
import Cards from './Cards/cards';
import Info from './Info/Info';
import Questions from './questions/questions';
import AboutSpinner from './AboutSpinner/AboutSpinner';

import './Tutorial.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const Tutorial = () => {
  const rules = useAppSelector((state) => state.rules);
  const [scroll, setScroll] = useState(false);

  const showButton = () => (window.scrollY > 800 ? setScroll(true) : setScroll(false));

  useEffect(() => {
    window.addEventListener('scroll', showButton);
    return () => {
      window.removeEventListener('click', showButton);
    };
  });

  const scrollToUp = () => {
    const openedItems = document.querySelectorAll('.visible');
    openedItems.forEach((item) => {
      const button = item.previousElementSibling?.lastElementChild as HTMLElement;
      item.classList.remove('visible');
      button.style.transform = 'rotate(0deg)';
    });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="rules">
      <div className="rules__container">
        <div className="rules__header">
          <img src="images/tutorial_page/logo.png" alt="logo" className="rules__logo" />
          <div className='rules__info'>
            <div className='rules__block'>
              <img src="images/tutorial_page/zombie.png" alt="zombie" className="rules__img" />
              <div className="rules__table table">
                <ul className="table__list">
                  {rules.table.text.map((rule, index) => <li key={index} className="table__item">{rule}</li>)}
                </ul>
              </div>
              <BurgerMenu tutorial='none'/>
            </div >
            <p className="rules__about-game">{rules.aboutGame}</p>
          </div>
        </div>
        <div className='rules__body'>
          <div className='rules__items'>
            <Item title={rules.goal.title} text={rules.goal.text}/>
            <InBox />
            <Cards />
            <AboutSpinner />
            <Info />
          </div>
          <div className="rules__answer qa">
            <Questions/>
          </div>
        </div>
      </div>
      <button style={{ visibility: scroll ? 'visible' : 'hidden' }} className="rules__up" onClick={scrollToUp}></button>
    </div>
  );
};

export default Tutorial;
