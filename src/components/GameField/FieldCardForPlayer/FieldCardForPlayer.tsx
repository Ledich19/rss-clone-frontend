import './FieldCardForPlayer.scss';
import { useEffect } from 'react';
import { BoardItemType, CharacterType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setVisibleCard } from '../../../reducers/gameBoardReducer';
import { setIsNearEnemy, setSpinnerValue } from '../../../reducers/spinnertReducer';
import useSetNotify from '../../../hooks/useSetNotify';
import { setCanPlayerMove } from '../../../reducers/playersReducer';
import { checkItemsId, getActivePlayerCeil } from '../../../app/healpers';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number, col: number }
};

const FieldCardForPlayer = ({ heightField, item }: PropsType) => {
  const dispatch = useAppDispatch();
  const notify = useSetNotify();
  const gameField = useAppSelector((state) => state.game);
  const { activePlayer, characters } = useAppSelector((state) => state.characters);
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const checkIsNearEnemy = () => {
    const playerId = getActivePlayerCeil(gameField, activePlayer)?.id;

    if (playerId) {
      console.log('checkIsNearEnemy is1');
      const [i, j] = playerId.split('-');
      const gameFieldArray = gameField.flat(1);
      const checkItemsEnemy = gameFieldArray
        .filter((ceil) => checkItemsId(parseInt(i, 10), parseInt(j, 10))
          .includes(ceil.id) && ceil.state?.category === 'enemy' && ceil.state.isVisible)
        .map((e) => ({ id: e.id, type: e.state?.type as string }));
      if (checkItemsEnemy.length > 0) {
        console.log('checkIsNearEnemy is ', checkItemsEnemy);

        dispatch(setIsNearEnemy(checkItemsEnemy));
        dispatch(setSpinnerValue({ num: 0 }));
        dispatch(setCanPlayerMove(false));
      } else {
        dispatch(setIsNearEnemy(null));
      }
    }
  };
  const checkIsFinish = () => {
    if (item.value && item.value === 'finish') {
      const playersOnFinish = gameField
        .flat(1)
        .filter(
          (ceil) => ceil.state
            && ceil.state.category === 'character'
            && ceil.value === 'finish',
        ).map((ceil) => ceil.state);

      if (playersOnFinish.length > 0) {
        const charactersStuff = playersOnFinish
          .map((player) => (player as CharacterType).inventory)
          .flat(1);
        const stuffList = charactersStuff.map((thing) => thing?.type);
        if (stuffList.includes('canister') && stuffList.includes('key')) {
          notify({
            type: 'success',
            text: 'Победа ',
          });
        }
      }
    }
  };
  const checkIsAlivePlayers = () => {
    const chack = characters.map((character) => character.health).every((health) => health <= 0);
    if (chack) {
      notify({
        type: 'info',
        text: 'Ви проиграли все игроки погибли',
      });
    }
  };
  useEffect(() => {
    checkIsNearEnemy();
    checkIsFinish();
    checkIsAlivePlayers();
  }, [activePlayer]);

  const handleOpen = () => {
    dispatch(setVisibleCard(item.id));
  };

  return (
    <div onClick={handleOpen} style={style} className={`field-player ${item.state?.type === activePlayer ? '_active' : ''}`}>
      {item.state ? (
              <img src={`./images/${item.state.img}`} alt="back card" />
      ) : (
        item.id
      )}
    </div>
  );
};

export default FieldCardForPlayer;
