import { useState } from 'react';
import { CharacterType } from '../../../app/types';
import Health from '../Health/Health';
import PopupPlayer from './PopupPlayer';

interface Props {
  character: CharacterType
  active: string
}

const PlayerCard = (props: Props) => {
  const [isPopup, setIsPopup] = useState(false);
  let active = '';
  if (props.active === props.character.type) active = 'player-card-active';

  function showPopup() {
    setIsPopup(true);
  }

  function hidePopup() {
    setIsPopup(false);
  }

  return (
    <div className={ `player-card ${active}` } onMouseEnter={() => showPopup()} onMouseLeave={() => hidePopup()}>
        <img src={`./images/${props.character.img}`} alt="playerImage" />
        <Health health={props.character.health}/>
        {isPopup && <PopupPlayer inv={props.character.inventory} />}
    </div>
  );
};

export default PlayerCard;
