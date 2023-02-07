import { useAppSelector } from '../../app/hooks';
import Item from './Item/Item';
import InBox from './InBox/InBox';
import Cards from './Cards/Cards';
import Info from './Info/Info';
import Questions from './Questions/Questions';
import AboutSpinner from './AboutSpinner/AboutSpinner';

import './Tutorial.scss';

const Tutorial = () => {
  const rules = useAppSelector((state) => state.rules);
  return (
    <div className="rules">
      <div className="rules__container">
        <div className="rules__header">
          <img src="images/tutorial_page/logo.png" alt="logo" className="rules__logo" />
          <div className='rules__info'>
            <div className='rules__block'>
              <img src="images/tutorial_page/zombie.png" alt="zombie" className="rules__img" />
              <div className="rules__table table">
                <ul className="table__list">
                  {rules.table.text.map((rule, index) => <li key={index} className="table__item">{rule}</li>)}
                </ul>
              </div>
            </div >
            <p className="rules__about-game">{rules.aboutGame}</p>
          </div>
        </div>
        <div className='rules__body'>
          <div className='rules__items'>
            <Item title={rules.goal.title} text={rules.goal.text}/>
            <InBox />
            <Cards />
            <AboutSpinner />
            <Info />
          </div>
          <div className="rules__answer qa">
            <Questions/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
