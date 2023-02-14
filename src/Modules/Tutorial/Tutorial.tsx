import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { set } from '../../reducers/themeReducer';
import useScrollBlock from '../../hooks/useScrollBlock';
import Item from './Item/Item';
import InBox from './InBox/InBox';
import Cards from './Cards/cards';
import Info from './Info/Info';
import Questions from './Questions/Questions';
import AboutSpinner from './AboutSpinner/AboutSpinner';

import './Tutorial.scss';

const Tutorial = () => {
  const rules = useAppSelector((state) => state.rules);
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'default' : 'dark';
    dispatch(set(next));
  };

  const changeMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
      allowScroll();
    } else {
      setOpenMenu(true);
      blockScroll();
    }
  };

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
              <div className={openMenu ? 'rules__buttons open-menu' : 'rules__buttons'}>
                <Link className='rules__btn' rel="stylesheet" to={'/start'}>
                <button className="start-menu__btn">Start</button>
                </Link>
                <Link className='rules__btn' rel="stylesheet" to={'/'}>
                <button className="start-menu__btn">Home</button>
                </Link>
                <input type="radio" className="test__input" name='colors' id='light' onClick={handleChange}/>
                <input type="radio" className="test__input" name='colors' id='dark' onClick={handleChange}/>
              </div>
              <div className="rules__burger" onClick={changeMenu} style={openMenu ? { zIndex: '11' } : { zIndex: '0' }}>
                <span className="rules__span rules__span_top"
                style={openMenu ? { transform: 'rotate(40deg) translateY(11px)', backgroundColor: 'red' }
                  : { transform: 'none' } }></span>
                <span className="rules__span rules__span_middle"
                style={openMenu ? { opacity: '0' }
                  : { opacity: '1' } }></span>
                <span className="rules__span rules__span_bottom"
                style={openMenu ? { transform: 'rotate(-40deg) translateY(-11px)', backgroundColor: 'red' }
                  : { transform: 'none' } }></span>
              </div>

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
