import './FieldCardDeadBody.scss';
import { BoardItemType, CeilInventoriType, ThingType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, removeCardState } from '../../../reducers/gameBoardReducer';
import { setIsSpinnerActive, setSpinnerValue } from '../../../reducers/spinnertReducer';
import { addToPlayerInventory, setNextActivePlayer } from '../../../reducers/playersReducer';
import { canIOpen, getActivePlayerCeil, getNextPlayer } from '../../../app/healpers';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number; col: number };
};

const FieldCardDeadBody = ({ heightField, item }: PropsType) => {
  const {
    characters, activePlayer,
  } = useAppSelector(
    (state) => state.characters,
  );
  const spinnerValue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const state = item.state as CeilInventoriType;
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const handleGetInventory = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    const player = getActivePlayerCeil(gameField, activePlayer);
    const thingCeil = gameField.flat(1).find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(gameField, player.id, thingCeil.id) : null;

    if (player && spinnerValue > 0 && canOpen && thingCeil && thingCeil.state?.category === 'deadBody' && id) {
      dispatch(setSpinnerValue(0));
      state.value.forEach((el) => {
        dispatch(
          addToPlayerInventory({
            player: activePlayer,
            value: el as ThingType,
          }),
        );
      });
      setTimeout(() => {
        const body = characters.find((character) => character.type === activePlayer) || null;
        dispatch(removeCardState(id));
        dispatch(moveCharacter({ from: player.id, to: id, body }));
        dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
        dispatch(setIsSpinnerActive(true));
      }, 1000);
    }
  };

  return (
    <div
      onClick={handleGetInventory}
      style={style}
      className='dead-body'
      data-ceil-id={item.id}
      >
      { state.value.map((e, i) => <div key={i} className='dead-body__item'> <img className='dead-body__item' src={`./images/${e.img}`} alt="back card" /></div>) }
    </div>
  );
};

export default FieldCardDeadBody;
