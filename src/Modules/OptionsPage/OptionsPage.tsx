import React from 'react';
import SwitcherTheme from './SwitcherTheme/SwitcherTheme';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import './OptionsPage.scss';
import SwitcherSoundOn from './SwitcherSoundOn/SwitcherSoundOn';
import SelectGameSoundVolume from './SelectGameSoundVolume/SelectGameSoundVolume';
import SelectSpinnerVolume from './SelectSpinnerVolume/SelectSpinnerVolume';

const OptionsPage = () => (
    <div className='options-page'>
      <div className="options-page__board">
        <h3 className="options-page__title">Options</h3>
        <div className="options-page__item">
          <SwitcherTheme />
          <SwitcherSoundOn />
          <SelectGameSoundVolume />
          <SelectSpinnerVolume />
        </div>
      </div>
      <BurgerMenu options='none'/>
    </div>
);
export default OptionsPage;
