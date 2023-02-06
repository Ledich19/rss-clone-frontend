import './FieldCardForPlayer.scss';
import { useEffect } from 'react';
import { BoardItemType, CharacterType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setVisibleCard } from '../../../reducers/gameBoardReducer';
import { setIsNearEnemy } from '../../../reducers/spinnertReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
  position: { row: number, col: number }
};

const FieldCardForPlayer = ({ heightField, item }: PropsType) => {
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  const checkIsNearEnemy = (id: string) => {
    const [i, j] = id.split('-');
    const gameFieldArray = gameField.flat(1);
    const checkItemsId = [
      `${parseInt(i, 10) - 1}-${j}`,
      `${parseInt(i, 10) + 1}-${j}`,
      `${i}-${parseInt(j, 10) + 1}`,
      `${i}-${parseInt(j, 10) - 1}`,
    ];
    const checkItemsEnemy = gameFieldArray.filter((ceil) => checkItemsId
      .includes(ceil.id) && ceil.state?.category === 'enemy' && ceil.state.isVisible)
      .map((e) => e.id);

    if (checkItemsEnemy.length > 0) {
      dispatch(setIsNearEnemy(checkItemsEnemy));
      console.log('danger near is enemy');
    } else {
      dispatch(setIsNearEnemy(null));
    }
  };
  const checkIsFinish = () => {
    if (item.value && item.value === 'finish') {
      const playersOnFinish = gameField
        .flat(1)
        .filter(
          (ceil) => ceil.state
            && (ceil.state.type === 'boris' || ceil.state.type === 'sasha')
            && (ceil.state as CharacterType).inventory
            && ceil.value === 'finish',
        ).map((ceil) => ceil.state);

      if (playersOnFinish.length > 0) {
        const charactersStuff = playersOnFinish
          .map((player) => (player as CharacterType).inventory)
          .flat(1);
        const stuffList = charactersStuff.map((thing) => thing?.type);
        if (stuffList.includes('canister') && stuffList.includes('key')) {
          // console.log('playersOnFinish', playersOnFinish);
          // console.log('check finish', stuffList);
        }
      }
    }
  };
  useEffect(() => {
    checkIsNearEnemy(item.id);
    checkIsFinish();
  }, []);

  const handleOpen = () => {
    dispatch(setVisibleCard(item.id));
  };

  return (
    <div onClick={handleOpen} style={style} className="field-player">
      {item.state ? (
              <img src={`./images/${item.state.img}`} alt="back card" />
      ) : (
        item.id
      )}
    </div>
  );
};

export default FieldCardForPlayer;
