import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollBlock from '../../hooks/useScrollBlock';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const changeMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
      allowScroll();
    } else {
      setOpenMenu(true);
      blockScroll();
    }
  };

  return (
    <div className="burger-menu">
      <div className={openMenu ? 'rules__buttons open-menu' : 'rules__buttons'}>
        <Link onClick={changeMenu} className='rules__btn' rel="stylesheet" to={'/start'}>
          <button className="start-menu__btn">Start</button>
        </Link>
        <Link onClick={changeMenu} className='rules__btn' rel="stylesheet" to={'/'}>
          <button className="start-menu__btn">Home</button>
        </Link>
        <Link onClick={changeMenu} className='rules__btn' rel="stylesheet" to={'/tutorial'}>
          <button className="start-menu__btn">Tutorial</button>
        </Link>
        <Link onClick={changeMenu} className='rules__btn' rel="stylesheet" to={'/options'}>
          <button className="start-menu__btn">Options</button>
        </Link>
      </div>
      <div className="rules__burger" onClick={changeMenu} style={openMenu ? { zIndex: '11' } : { zIndex: '0' }}>
        <span className="rules__span rules__span_top"
          style={openMenu ? { transform: 'rotate(40deg) translateY(11px)', backgroundColor: 'red' }
            : { transform: 'none' } }>
        </span>
        <span className="rules__span rules__span_middle"
          style={openMenu ? { opacity: '0' }
            : { opacity: '1' } }>
        </span>
        <span className="rules__span rules__span_bottom"
          style={openMenu ? { transform: 'rotate(-40deg) translateY(-11px)', backgroundColor: 'red' }
            : { transform: 'none' } }></span>
        </div>
    </div>
  );
};

export default BurgerMenu;
