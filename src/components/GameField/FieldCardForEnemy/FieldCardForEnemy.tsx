import './FieldCardForEnemy.scss';
import { useEffect } from 'react';
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
import {
  checkItemsId, createNearCeil, getActivePlayerCeil, getNextPlayer,
} from '../../../app/healpers';

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

  const checkIsNearbyPlayer = (id: string) => {
    const [i, j] = id.split('-');
    const gameFieldArray = gameField.flat(1);

    const checkItemsPlayer = gameFieldArray
      .filter((ceil) => checkItemsId(parseInt(i, 10), parseInt(j, 10))
        .includes(ceil.id) && ceil.state?.category === 'character')
      .map((e) => e.id);

    if (checkItemsPlayer.length > 0) {
      dispatch(setIsNearEnemy(checkItemsPlayer));
      if (spinnerValue > 0) {
        dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
      }
      dispatch(setSpinnerValue(0));
    } else {
      dispatch(setIsNearEnemy(null));
    }
  };

  useEffect(() => {
    checkIsNearbyPlayer(item.id);
  }, []);

  const canIOpen = (player: string, id: string) => {
    const [i, j] = player.split('-');
    const gameFieldArray = gameField.flat(1);
    const ceilElement = gameFieldArray.find((ceil) => ceil.id === player);
    const checkItemId = createNearCeil(ceilElement, +i, +j);
    const checkItemsObj = gameFieldArray
      .filter((ceil) => checkItemId.includes(ceil.id) && ceil.state)
      .map((e) => e.id);
    return checkItemsObj.includes(id);
  };

  const handleOpenCard = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    const player = getActivePlayerCeil(gameField, activePlayer);
    const thingCeil = gameField.flat(1).find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(player.id, thingCeil.id) : null;
    if (player && spinnerValue > 0 && canOpen && thingCeil && thingCeil.state && id) {
      dispatch(setVisibleCard(id));
      dispatch(setSpinnerValue(0));
      if (thingCeil.state.category === 'weapon' || thingCeil.state.category === 'thing') {
        setTimeout(() => {
          dispatch(removeCardState(id));
          const body = characters.find((character) => character.type === activePlayer) || null;
          dispatch(moveCharacter({ from: player.id, to: id, body }));
          dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
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
