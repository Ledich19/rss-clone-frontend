import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import './Cards.scss';

const Cards = () => {
  const [visible, setVisibility] = useState(false);
  const changeVisibility = () => (visible ? setVisibility(false) : setVisibility(true));

  const { cards } = useAppSelector((state) => state.gameSet);

  return (
    <div className="item cards">
      <div className="item__top">
        <h4 className="item__title" onClick={changeVisibility}>Карточки</h4>
        <button style={{ transform: visible ? 'rotate(180deg)' : 'rotate(0deg)' }} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <div className={visible ? 'cards__content visible-cards' : 'cards__content'}>
        <div className="cards__items">
          <h5 className="cards__label">Персонажи</h5>
          <ul className="cards__list">
            {cards.characters.map((item, index) => (
                <li key={index} className="cards__item">
                  <img src={`images/${item.img}`} alt={item.name} className="cards__img" />
                  <div className="cards__info-item">
                    <h6 className="cards__name-item">Имя: {item.name}</h6>
                    <span className="cards__health-item">Жизни: {item.health}</span>
                  </div >
                  <p className="cards__desc">{item.description}</p>
                </li>
            ))}
          </ul>
        </div>
        <div className="cards__items">
          <h5 className="cards__label">Монстры</h5>
          <ul className="cards__list">
            {cards.enemies.map((item, index) => (
                <li key={index} className="cards__item">
                  <img src={`images/${item.img}`} alt={item.name} className="cards__img" />
                  <div className="cards__info-item">
                    <h6 className="cards__name-item">{item.name}</h6>
                    <span className="cards__health-item">Количество: {item.count}</span>
                  </div >
                  <p className="cards__desc">{item.description}</p>
                </li>
            ))}
          </ul>
        </div>
        <div className="cards__items">
          <h5 className="cards__label">Оружия</h5>
          <ul className="cards__list">
            {cards.weapon.map((item, index) => (
                <li key={index} className="cards__item">
                  <img src={`images/${item.img}`} alt={item.name} className="cards__img" />
                  <div className="cards__info-item">
                    <h6 className="cards__name-item">Имя: {item.name}</h6>
                  </div >
                  <p className="cards__desc">{item.description}</p>
                </li>
            ))}
          </ul>
        </div>
        <div className="cards__items">
          <h5 className="cards__label">Вещи</h5>
          <ul className="cards__list">
            {cards.things.map((item, index) => (
                <li key={index} className="cards__item">
                  <img src={`images/${item.img}`} alt={item.name} className="cards__img" />
                  <div className="cards__info-item">
                    <h6 className="cards__name-item">Имя: {item.name}</h6>
                    <span className="cards__health-item">Количество: {item.count}</span>
                  </div >
                  <p className="cards__desc">{item.description}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
