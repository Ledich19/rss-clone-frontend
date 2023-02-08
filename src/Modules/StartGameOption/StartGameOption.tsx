import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ButtonBlock from '../../components/ButtonBlock/ButtonBlock';
import ChooseAmount from '../../components/ChooseAmount/ChooseAmount';
import PlayerOption from '../../components/PlayerOption/PlayerOption';
import { addPlayer, removeLastPlayer, setAmount } from '../../reducers/playersReducer';
import './StartGameOption.scss';

const StartGameOption = () => {
  const dispatch = useAppDispatch();
  const { amount, characters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    const count = parseInt(amount, 10) - characters.length;
    if (count >= 1) {
      for (let i = 0; i < count; i += 1) {
        dispatch(
          addPlayer({
            id: `playrrId${characters.length + 1 + i}`,
            category: 'character',
            isVisible: true,
            active: true,
            type: 'empty',
            name: 'Player',
            img: 'things/plank.png',
            playerName: `Playrr ${characters.length + 1 + i}`,
            description: '',
            count: 0,
            health: 0,
            inventory: [],
          }),
        );
      }
    }
    if (count < 0) {
      for (let i = 0; i < Math.abs(count); i += 1) {
        dispatch(removeLastPlayer());
      }
    }
  }, [amount]);
  useEffect(() => {
    dispatch(setAmount('1'));
  }, []);

  return (
    <div className="options">
      <div className="options__board">
        <div className="options__players">
          <ChooseAmount />
          {characters.map((player, i) => (
            <PlayerOption key={`${player.type}${i}`} player={player} />
          ))}
        </div>
        <div className="options__wrapper">
          <div className="options__game-board"></div>

          <ButtonBlock/>
        </div>
      </div>
    </div>
  );
};

export default StartGameOption;
