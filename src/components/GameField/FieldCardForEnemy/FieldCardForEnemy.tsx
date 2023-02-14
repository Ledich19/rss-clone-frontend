import './FieldCardForEnemy.scss';
import { BoardItemType, EnemyType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, removeCardState, setVisibleCard } from '../../../reducers/gameBoardReducer';
import { setIsNearEnemy, setSpinnerValue } from '../../../reducers/spinnertReducer';
import {
  addToPlayerInventory,
  setActiveEnemy,
  setCanPlayerMove,
  setNextActivePlayer,
} from '../../../reducers/playersReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number; col: number };
};

const FieldCardForEnemy = ({ heightField, item }: PropsType) => {
  const dispatch = useAppDispatch();
  const { characters, activePlayer, enemyChoose } = useAppSelector((state) => state.characters);
  const spinnerValue = useAppSelector((state) => state.spinner.value);
  const gameField = useAppSelector((state) => state.game);
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const createNearCeil = (element: BoardItemType | undefined, i: number, j: number) => [
    element && element.top ? `${i - 1}-${j}` : 'none',
    element && element.bottom ? `${i + 1}-${j}` : 'none',
    element && element.right ? `${i}-${j + 1}` : 'none',
    element && element.left ? `${i}-${j - 1}` : 'none',
  ];

  const canIOpen = (player: string, id: string) => {
    const [i, j] = player.split('-');
    const gameFieldArray = gameField.flat(1);
    const ceilElement = gameFieldArray.find((ceil) => ceil.id === player);
    const checkItemsId = createNearCeil(ceilElement, +i, +j);
    const checkItemsObj = gameFieldArray
      .filter((ceil) => checkItemsId.includes(ceil.id) && ceil.state)
      .map((e) => e.id);
    return checkItemsObj.includes(id);
  };

  const handleOpenCard = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');

    const gameFieldArr = gameField.flat(1);
    const player = gameFieldArr.find((ceil) => ceil.state?.type === activePlayer);
    const thingCeil = gameFieldArr.find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(player.id, thingCeil.id) : null;
    if (player && spinnerValue > 0 && canOpen && thingCeil && thingCeil.state && id) {
      dispatch(setVisibleCard(id));
      dispatch(setSpinnerValue(0));
      if (thingCeil.state.category === 'weapon' || thingCeil.state.category === 'thing') {
        setTimeout(() => {
          dispatch(removeCardState(id));
          const body = characters.find((character) => character.type === activePlayer) || null;
          dispatch(moveCharacter({ from: player.id, to: id, body }));
          dispatch(setNextActivePlayer());
        }, 3000);
        dispatch(
          addToPlayerInventory({
            player: activePlayer,
            value: thingCeil.state,
          }),
        );
      }
      if (thingCeil.state.category === 'enemy') {
        dispatch(setIsNearEnemy([thingCeil.id]));
        dispatch(setCanPlayerMove(false));
      }
    }
  };

  const handleChoose = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    if (id && item.state && item.state.category === 'enemy') {
      dispatch(setActiveEnemy({ id, value: item.state as EnemyType }));
    }
  };

  const handler = item.state && !item.state.isVisible ? handleOpenCard : handleChoose;

  // <div style={style} className={'field-player _active'}>
  return (
    <div
      data-ceil-id={item.id}
      onClick={handler}
      style={style}
      className={`field-enemy ${enemyChoose?.id === item.id ? '_active' : ''}`}
    >
      {item.state && typeof item.state === 'object' ? (
        <div className={'flip-container'}>
          <div className={`flipper ${item.state.isVisible ? '_front' : ''}`}>
            <div className="front">
              <img src={'./images/backCard.png'} alt="back card" />
            </div>
            <div className="back">
              <img src={`./images/${item.state.img}`} alt="back card" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <div className='_movie-text'>{item.id}</div> */}
          {/* <div className='_small-text'>{item.id}</div> */}
        </div>
      )}
    </div>
  );
};

export default FieldCardForEnemy;
