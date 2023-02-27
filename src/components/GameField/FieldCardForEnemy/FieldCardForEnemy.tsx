import './FieldCardForEnemy.scss';
import { useEffect } from 'react';
import { BoardItemType, EnemyType, ThingType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { moveCharacter, removeCardState, setVisibleCard } from '../../../reducers/gameBoardReducer';
import { setIsNearEnemy, setIsSpinnerActive, setSpinnerValue } from '../../../reducers/spinnertReducer';
import {
  addToPlayerInventory,
  setActiveEnemy,
  setCanPlayerMove,
  setNextActivePlayer,
} from '../../../reducers/playersReducer';
import {
  canIOpen,
  checkItemsId, getActivePlayerCeil, getNextPlayer,
} from '../../../app/healpers';
import { setSpinnerVolume } from '../../../reducers/optionsReducer';

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
  if (!item || !item.state) {
    return null;
  }
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const checkIsNearbyPlayer = (id: string) => {
    const [i, j] = id.split('-');
    const nearCeils = checkItemsId(parseInt(i, 10), parseInt(j, 10));
    const gameFieldArray = gameField.flat(1);

    const checkItemsPlayer = gameFieldArray
      .filter((ceil) => nearCeils.includes(ceil.id) && ceil.state?.category === 'character')
      .map((e) => ({ id: e.id, type: e.state?.type as string }));
    if (checkItemsPlayer.length > 0) {
      dispatch(setIsNearEnemy(checkItemsPlayer));
      if (spinnerValue.num > 0) {
        const nextPlayer = getNextPlayer(characters, activePlayer);
        dispatch(setNextActivePlayer(nextPlayer));
        dispatch(setIsSpinnerActive(true));
      }
      dispatch(setSpinnerValue({ num: 0 }));
    } else {
      dispatch(setIsNearEnemy(null));
    }
  };

  const handleOpenCard = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute('data-ceil-id');
    const player = getActivePlayerCeil(gameField, activePlayer);
    const thingCeil = gameField.flat(1).find((ceil) => ceil.id === id);
    const canOpen = player && thingCeil ? canIOpen(gameField, player.id, thingCeil.id) : null;
    if (!player || spinnerValue.num <= 0 || !canOpen || !thingCeil || !thingCeil.state || !id) {
      return;
    }

    dispatch(setVisibleCard(id));
    dispatch(setSpinnerValue({ num: 0 }));

    if (thingCeil.state.category === 'enemy') {
      dispatch(setCanPlayerMove(false));
      dispatch(setIsNearEnemy([{ id: thingCeil.id, type: thingCeil.state.type }]));
    }
  };

  const handleChoose = (e: React.MouseEvent<HTMLElement>) => {
    const player = characters.find((ch) => ch.type === activePlayer);
    if ((player && player.isAlive) || ((spinnerValue.num > 0) && enemyChoose)) {
      return;
    }
    const id = e.currentTarget.getAttribute('data-ceil-id');
    if (id && item.state?.category === 'enemy') {
      dispatch(setActiveEnemy({ id, value: item.state as EnemyType }));
    }
    if (spinnerValue.num > 0 && item.state?.type === 'zombie') {
      const value = spinnerValue.num > 1 ? spinnerValue.num - 1 : 1;
      dispatch(setSpinnerValue({ num: value }));
    }
    if (spinnerValue.num > 0 && item.state?.type === 'hellHound') {
      dispatch(setSpinnerValue({ num: spinnerValue.num + 1 }));
    }
  };

  useEffect(() => {
    checkIsNearbyPlayer(item.id);
  }, []);

  const handler = item.state && !item.state.isVisible ? handleOpenCard : handleChoose;

  return (
    <div
      data-ceil-id={item.id}
      onClick={handler}
      style={style}
      className={`field-enemy ${enemyChoose?.id === item.id ? '_active' : ''}`}
    >
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
    </div>
  );
};

export default FieldCardForEnemy;
