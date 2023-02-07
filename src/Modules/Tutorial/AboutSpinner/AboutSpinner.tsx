import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import './AboutSpinner.scss';

const AboutSpinner = () => {
  const [visible, setVisibility] = useState('item__text');
  const [activity, setActivity] = useState('rotate(0deg)');
  const { aboutSpinner } = useAppSelector((state) => state.rules);
  const changeVisibility = (e: React.MouseEvent) => {
    if (visible === 'item__text') {
      setVisibility('item__text visible');
      setActivity('rotate(180deg)');
    } else {
      setVisibility('item__text');
      setActivity('rotate(0deg)');
    }
  };
  return (
    <div className="item">
      <div className="item__top">
        <h4 className="item__title" onClick={changeVisibility}>Специальная вертушка</h4>
        <button style={{ transform: activity }} className="item__btn" onClick={changeVisibility}></button>
        </div>
      <div className={visible} >
        <h4 className="about-spinner__title">{aboutSpinner.title}</h4>
        <img src="images/tutorial_page/spinner1.png" alt="спиннер" className='about-spinner__img' />
        <ul className="about-spinner__list">
          {aboutSpinner.text.map((rule, index) => (
            <li key={index} className='about-spinner__rule'>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSpinner;
