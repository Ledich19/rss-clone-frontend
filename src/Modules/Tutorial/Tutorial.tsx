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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque est voluptas possimus delectus consectetur expedita sit velit. Itaque nesciunt pariatur neque optio quis, veritatis ea iure saepe velit commodi necessitatibus adipisci atque deserunt enim tempore dolorum natus, obcaecati numquam placeat officia aut accusantium! Omnis tempore a, veniam cum, tenetur sunt culpa sapiente temporibus officia excepturi maxime rerum quos necessitatibus, totam beatae doloremque delectus cupiditate rem hic est optio iste eveniet? Rem, dolores maiores? In minima quo quod animi rem provident veritatis eius ullam, id pariatur delectus vitae ipsa quibusdam, soluta qui temporibus? Laudantium illum dolores sequi adipisci cumque. Harum accusamus quo officiis ratione tempore aperiam voluptatem recusandae exercitationem enim deleniti, impedit, quasi voluptatibus? Explicabo quibusdam deserunt, inventore labore quidem modi hic non corrupti natus soluta nostrum asperiores consequatur odio dignissimos dolorem molestiae cum! Eos ut cupiditate temporibus vel officia voluptates quae expedita iusto recusandae aperiam repellendus provident velit delectus, ipsam nesciunt sunt mollitia laboriosam odit quod dolores similique at maiores minima cum! Debitis eligendi, molestiae fugiat, possimus dignissimos veritatis dolorem magnam non ducimus, fuga doloremque voluptas culpa veniam nihil. Accusamus voluptas est voluptatem, mollitia in corrupti delectus, deleniti eum placeat magni exercitationem dolorum id architecto. Fugiat quaerat temporibus ipsum.
      </div>
    </div>
  );
};

export default Tutorial;
