import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import "./Tutorial.scss";


const Tutorial = () => {
  const rules = useAppSelector(state => state.rules);
  console.log(rules);
  
  return (
    <div className="rules">
      <div className="rules__container">
        <div className="rules__header">
          <img src="images/logo.png" alt="logo" className="rules__logo" />
          <div className='rules__info'>
            <div className="rules__table table">
              <div className='table__wrapper'>
                <ul className="table__list">
                  {rules.table.text.map((rule, index) => <li key={index} className="table__item">{rule}</li>)}
                </ul>
              </div >
            </div>
            <p className="rules__about-game">{rules.aboutGame}</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Tutorial;
