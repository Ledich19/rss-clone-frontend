import React, { useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import './InBox.scss';

const InBox = () => {
  const rules = useAppSelector((state) => state.rules);
  const { inBox } = rules;
  const cardsKeys = Object.keys(inBox.cards);

  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeVisibility = () => {
    const content = contentRef.current as HTMLElement;
    const button = buttonRef.current as HTMLElement;
    if (!content.classList.contains('visible')) {
      content.classList.add('visible');
      button.style.transform = 'rotate(180deg)';
    } else {
      content.classList.remove('visible');
      button.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <div className="inbox item">
      <div className="item__top" onClick={changeVisibility}>
        <h4 className="item__title">{inBox.title}</h4>
        <button className="item__btn" ref={buttonRef}></button>
      </div >
      <div className="inbox__content" ref={contentRef}>
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
