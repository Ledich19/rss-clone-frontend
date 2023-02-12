import { useRef } from 'react';
import { ContentRules } from '../../../app/types';
import './Item.scss';

const Item = (props:ContentRules) => {
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
    <div className="item">
      <div className="item__top" onClick={changeVisibility}>
        <h4 className="item__title" >{props.title}</h4>
        <button ref={buttonRef} className="item__btn" ></button>
        </div>
      <div ref={contentRef} className="item__text" >
        {props.text && <p className='item__subtitle'>{props.text}</p>}
        <ul className='item__list'>
          {props.items && props.items.map((item, index) => <li className='item__element' key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Item;
