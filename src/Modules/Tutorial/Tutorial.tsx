/* eslint-disable max-len */
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Item from './goal-component/item';
import InBox from './inBox-component/inBox';
import Cards from './cards/cards';
import Info from './info-component/info';

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
        <div className='rules__body'>
          <div className='rules__items'>
            <Item title={rules.goal.title} items={rules.goal.text}/>
            <InBox />
            <Cards />
            <Info />
          </div>
          <div className="rules__answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi eaque eos
             asperiores veniam? Impedit cum reprehenderit alias eaque explicabo. In minus
             eaque, inventore magni ex vel doloremque quam ut maxime. Unde asperiores commodi
              labore inventore laboriosam ipsam nisi molestias sit. Officia, et voluptates
              obcaecati repellat modi veritatis eum velit blanditiis libero aliquam laboriosam est provident magni fugit, aut, ea ullam labore ratione. Laborum impedit odio inventore veritatis pariatur labore! Veniam fuga esse voluptas, suscipit consectetur commodi optio dolorum necessitatibus in, rem sed voluptatem nihil non id dicta laudantium at? Deserunt nihil, quos tempora molestias iure temporibus architecto, ea praesentium facilis voluptate iusto. Ullam libero tenetur amet saepe sapiente nihil, odio nam, veniam, consequatur deserunt possimus laboriosam ipsam nobis impedit error. Quia repellat atque iure sit consequatur voluptatum. Neque recusandae ab facilis alias amet temporibus earum quis laudantium, minus, maxime nihil, et illum obcaecati a quisquam? Non tenetur ratione sint necessitatibus ducimus, velit, libero repellat, iste reprehenderit eaque ad autem quas. Distinctio, officiis a delectus fugit iste sunt magnam illo molestiae quia quisquam earum doloremque aliquam asperiores eius nesciunt, ipsa nostrum. Quam autem tenetur tempora vero obcaecati, eum similique, alias consectetur ullam aut animi blanditiis, tempore laboriosam nemo pariatur eligendi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
