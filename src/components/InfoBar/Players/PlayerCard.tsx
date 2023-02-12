import { CharacterType } from '../../../app/types';
import Health from '../Health/Health';

interface Props {
  character: CharacterType
}

const PlayerCard = (props: Props) => {
  let active = '';
  if (props.character.active) active = 'player-card-active';
  return (
    <div className={ `player-card ${active}` } >
        <img src={`./images/${props.character.img}`} alt="playerImage" />
        <Health health={props.character.health}/>
    </div>
  );
};

export default PlayerCard;
