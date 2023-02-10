import { useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import './AboutSpinner.scss';

const AboutSpinner = () => {
  const { aboutSpinner } = useAppSelector((state) => state.rules);

  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  const changeVisibility = () => {
    const content = contentRef.current as unknown as HTMLElement;
    const button = buttonRef.current as unknown as HTMLElement;
    if (!content.classList.contains('visible')) {
      content.classList.add('visible');
      button.style.transform = 'rotate(180deg)';
    } else {
      content.classList.remove('visible');
      button.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <div className="item">
      <div className="item__top" onClick={changeVisibility}>
        <h4 className="item__title">Специальная вертушка</h4>
        <button ref={buttonRef} className="item__btn"></button>
        </div>
      <div className="item__text" ref={contentRef} >
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
