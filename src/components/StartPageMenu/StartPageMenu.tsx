import { Link } from 'react-router-dom';
import './StartPageMenu.scss';

const StartPageMenu = () => {
  console.log('');
  return (
    <div className="start-menu">
      <Link rel="stylesheet" to={'/start'}>
        <button className="start-menu__btn">Start</button>
      </Link>
      <button className="start-menu__btn">Load</button>
      <Link rel="stylesheet" to={'/tutorial'}>
        <button className="start-menu__btn">Tutorial</button>
      </Link>
    </div>
  );
};
export default StartPageMenu;
