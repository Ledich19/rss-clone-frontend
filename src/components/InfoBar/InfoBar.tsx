import { Link } from 'react-router-dom';
import './InfoBar.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Inventory from './Inventory/Inventory';
import { ThingType, WeaponType } from '../../app/types';
import PlayersCards from './Players/PlayersCards';
import { setNextActivePlayer } from '../../reducers/playersReducer';
import { getNextPlayer } from '../../app/healpers';

const InfoBar = () => {
  const dispatch = useAppDispatch();
  const { characters, activePlayer } = useAppSelector((state) => state.characters);
  const { value } = useAppSelector((state) => state.spinner);
  const theme = useAppSelector((state) => state.options.theme);
  const currentPlayer = characters.find((el) => el.type === activePlayer);
  if (!currentPlayer) {
    return null;
  }
  let currentPlayerWeapons: Array<ThingType | WeaponType> = [];
  let currentPlayerThings: Array<ThingType | WeaponType> = [];
  if (currentPlayer?.inventory) {
    currentPlayerWeapons = currentPlayer.inventory.filter((el) => el.category === 'weapon');
    currentPlayerThings = currentPlayer.inventory.filter((el) => el.category === 'things');
  }
  const background = theme === 'default' ? './images/metal3.jpg' : './images/metal1.jpeg';
  return (
    <div className="info" >
      <img className="info__background" src={background} alt="background" />
      <div className="info__active-player_name" style={theme === 'default' ? { backgroundImage: 'url(./images/planck2.png)' } : { backgroundImage: 'url(./images/planck2darck.png)' } }>
        <span>Player turn: {currentPlayer?.type}</span>
      </div>
      <div className="info__players">
        <PlayersCards characters={characters} activePlayer={activePlayer} theme={theme}/>
      </div>
      <div className="info__active-player_steps" style={theme === 'default' ? { backgroundImage: 'url(./images/planck2.png)' } : { backgroundImage: 'url(./images/planck2darck.png)' } }>
        <span>Steps left: {value}</span>
      </div>
      <div className="info__active-inventory">
        <Inventory inv={currentPlayer?.inventory} activePlayer={activePlayer} theme={theme}/>
      </div>
      {/* ! need delete */}
       <div onClick={() => dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)))} className="info__endOfStroke">конец хода</div>
      <div className="info__buttons">
        <Link rel="stylesheet" to={'/'}>
          <div className="info__button" style={theme === 'default'
            ? { backgroundImage: 'url(./images/planck.png)', color: '#41514a' }
            : { backgroundImage: 'url(./images/planck-dark.png)', color: '#0d353d' } }>HOME</div>
        </Link>
        <Link rel="stylesheet" to={'/tutorial'}>
          <div className="info__button" style={theme === 'default'
            ? { backgroundImage: 'url(./images/planck.png)', color: '#41514a' }
            : { backgroundImage: 'url(./images/planck-dark.png)', color: '#0d353d' } }>TUTORIAL</div>
        </Link>
        <Link rel="stylesheet" to={'/options'}>
          <div className="info__button" style={theme === 'default'
            ? { backgroundImage: 'url(./images/planck.png)', color: '#41514a' }
            : { backgroundImage: 'url(./images/planck-dark.png)', color: '#0d353d' } }>OPTIONS</div>
        </Link>
      </div>
    </div>
  );
};
export default InfoBar;
