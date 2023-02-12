import { CharacterType } from '../../../app/types';

interface Props {
  character: CharacterType
}

const PlayerCard = (props: Props) => (
    <div className="player-card" >
        <img src={`./images/${props.character.img}`} alt="playerImage" />
    </div>
);
export default PlayerCard;
