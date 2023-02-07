import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import './inBox.scss';

const InBox = () => {
  const rules = useAppSelector((state) => state.rules);
  const { inBox } = rules;
  const cardsKeys = Object.keys(inBox.cards);
  const [visible, setVisibility] = useState('inbox__content');
  const [activity, setActivity] = useState('rotate(0deg)');

  const changeVisibility = () => {
    if (visible === 'inbox__content') {
      setVisibility('inbox__content visible-box');
      setActivity('rotate(180deg)');
    } else {
      setVisibility('inbox__content');
      setActivity('rotate(0deg)');
    }
  };
  return (
    <div className="inbox item">
      <div className="item__top">
        <h4 className="item__title" onClick={changeVisibility}>{inBox.title}</h4>
        <button style={{ transform: activity }} className="item__btn" onClick={changeVisibility}></button>
      </div >
      <div className={visible}>
        {Object.values(inBox.cards).map((category, index) => (
              <div key={index} className="inbox__element element">
                <h5 className="element__title">{category.title}</h5>
                <ul className="element__list">
                  {Object.values(category).slice(1).map((item, key) => (
                    <li key={key} className={`element__item-list element__item-list_${cardsKeys[index]}`}>{item}</li>
                  ))}
                </ul>
              </div>
        ))}
      </div>
    </div>
  );
};
export default InBox;
