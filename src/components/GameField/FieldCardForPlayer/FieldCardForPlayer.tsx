import './FieldCardForPlayer.scss';
import { useEffect } from 'react';
import { BoardItemType } from '../../../app/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleVisibleCard } from '../../../reducers/gameBoardReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCardForPlayer = ({ heightField, item }: PropsType) => {
  const gameField = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

  useEffect(() => {
    // finish check
    if (item.value && item.value === 'finish') {
      const playersOnFinish = gameField
        .flat(1)
        .filter(
          (ceil) => ceil.state
            && (ceil.state.type === 'boris' || ceil.state.type === 'sasha')
            && ceil.state.inventory
            && ceil.value === 'finish',
        ).map((ceil) => ceil.state);

      if (playersOnFinish.length > 0) {
        const charactersStuff = playersOnFinish
          .map((player) => player?.inventory)
          .flat(1);
        const stuffList = charactersStuff.map((thing) => thing?.type);
        if (stuffList.includes('canister') && stuffList.includes('key')) {
          // console.log('playersOnFinish', playersOnFinish);
          // console.log('check finish', stuffList);
        }
      }
    }
  });

  const handleOpen = () => {
    dispatch(toggleVisibleCard(item.id));
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
