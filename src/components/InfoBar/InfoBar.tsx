import { Link } from 'react-router-dom';
import './InfoBar.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Inventory from './Inventory/Inventory';
import { ThingType, WeaponType } from '../../app/types';
import PlayersCards from './Players/PlayersCards';
import { setNextActivePlayer } from '../../reducers/playersReducer';
import { getNextPlayer } from '../../app/healpers';

const InfoBar = () => {
  const dispatch = useAppDispatch();
  const { characters, activePlayer } = useAppSelector((state) => state.characters);
  const Arr = characters.filter((el) => el.type === activePlayer);
  const currentPlayer = Arr[0];
  if (!currentPlayer) {
    return null;
  }
  let currentPlayerWeapons: Array<ThingType | WeaponType> = [];
  let currentPlayerThings: Array<ThingType | WeaponType> = [];
  if (currentPlayer && currentPlayer.inventory) {
    currentPlayerWeapons = currentPlayer.inventory.filter((el) => el.category === 'weapon');
    currentPlayerThings = currentPlayer.inventory.filter((el) => el.category === 'things');
  }
  return (
    <div className="info" >
      <img className="info__background" src={'./images/metal3.jpg'} alt="background" />
      <div className="info__active-player_name">
        <span>Player turn: {currentPlayer.type}</span>
      </div>
      <div className="info__players">
        <PlayersCards characters={characters} activePlayer={activePlayer} />
      </div>
      <div className="info__active-inventory">
        <Inventory inv={currentPlayer.inventory} activePlayer={activePlayer} />
      </div>
      {/* ! need delete */}
       <div onClick={() => dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)))} className="info__endOfStroke">конец хода</div>
      <div className="info__buttons">
        <Link rel="stylesheet" to={'/'}>
          <div className="info__button">HOME</div>
        </Link>
        <Link rel="stylesheet" to={'/tutorial'}>
          <div className="info__button">TUTORIAL</div>
        </Link>
        <Link rel="stylesheet" to={'/options'}>
          <div className="info__button">OPTIONS</div>
        </Link>
      </div>
    </div>
  );
};
export default InfoBar;
