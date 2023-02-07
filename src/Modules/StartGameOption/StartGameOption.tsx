import ChooseAmount from '../../components/ChooseAmount/ChooseAmount';
import PlayerOption from '../../components/PlayerOption/PlayerOption';
import './StartGameOption.scss';

const StartGameOption = () => (
  <div className="options">
    <div className="options__board">
      <div className="options__players">
        <ChooseAmount />
        <PlayerOption />
        <PlayerOption />
      </div>
      <div className="options__game-board"></div>
    </div>
  </div>
);

export default StartGameOption;
