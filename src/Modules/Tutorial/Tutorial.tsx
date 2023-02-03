import React from 'react'
import { useAppSelector } from '../../app/hooks';
import Item from './goal-component/item';
import InBox from './inBox-component/inBox';
import Cards from './cards/cards';

import "./Tutorial.scss";


const Tutorial = () => {
  const rules = useAppSelector(state => state.rules);
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
        <Item />
        <InBox />
        <Cards />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore esse magni ad tempore eius numquam. Cum inventore, quaerat eaque magnam impedit quos modi dolores exercitationem adipisci, aperiam, veritatis sapiente cumque nisi corrupti? Non, recusandae assumenda consequatur corrupti nam dolores debitis modi sed delectus enim vitae, sequi velit, vel temporibus totam dolore quod atque. Illo aliquam, laudantium doloribus fuga consequatur ipsa harum nemo assumenda, voluptatem autem tempore quaerat maxime, molestias eveniet? Optio, perspiciatis? Deserunt possimus saepe suscipit ratione consequuntur illo ipsa. Aut, nam voluptatum, sequi libero veniam, voluptate accusantium sint aperiam perspiciatis maiores quos nisi explicabo consectetur saepe aliquam exercitationem!
      </div>
    </div>
  );
};

export default Tutorial;
