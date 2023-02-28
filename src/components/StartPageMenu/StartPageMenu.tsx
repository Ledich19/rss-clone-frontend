import { Link } from 'react-router-dom';
import './StartPageMenu.scss';

const StartPageMenu = () => (
    <div className="start-menu">
      <Link rel="stylesheet" to={'/start'}>
        <button className="start-menu__btn">Start</button>
      </Link>
      <Link rel="stylesheet" to={'/tutorial'}>
        <button className="start-menu__btn">Tutorial</button>
      </Link>
      <Link rel="stylesheet" to={'/options'}>
        <button className="start-menu__btn">Options</button>
      </Link>
    </div>
);
export default StartPageMenu;
