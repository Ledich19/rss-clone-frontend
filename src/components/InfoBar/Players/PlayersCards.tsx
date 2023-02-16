import { CharacterType } from '../../../app/types';
import PlayerCard from './PlayerCard';
import './Players.scss';

interface Props {
  characters: CharacterType[]
  activePlayer: string;
}

const PlayersCards = (props: Props) => (
    <div className="players-cards" >
      {props.characters.map((el, idx) => (
          <PlayerCard character={el} active={props.activePlayer} key={idx}/>
      ))}
    </div>
);
export default PlayersCards;
