import React from 'react';
import SwitcherTheme from './SwitcherTheme/SwitcherTheme';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import './OptionsPage.scss';

const OptionsPage = () => (
    <div className='options-page'>
      <div className="options-page__board">
        <h3 className="options-page__title">Options</h3>
        <div className="options-page__item">
          <SwitcherTheme/>
        </div>
      </div>
      <BurgerMenu options='none'/>
    </div>
);
export default OptionsPage;
