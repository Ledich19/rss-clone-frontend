import { CharacterType } from '../../../app/types';
import PlayerCard from './PlayerCard';
import './Players.scss';

interface Props {
  characters: CharacterType[]
  active: string;
}

const PlayersCards = (props: Props) => (
    <div className="players-cards" >
      {props.characters.map((el, idx) => (
          <PlayerCard character={el} active={props.active} key={idx}/>
      ))}
    </div>
);
export default PlayersCards;
