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
  const { characters } = useAppSelector((state) => state.characters);
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
            && typeof ceil.state === 'object'
            && (ceil.state.type === 'boris' || ceil.state.type === 'sasha')
            && ceil.value === 'finish',
        ).map((ceil) => ceil.state);

      if (playersOnFinish.length > 0) {
        const charactersStuff = playersOnFinish
          .map((character) => character.inventory)
          .flat(1);
        const stuffList = charactersStuff.map((thing) => thing.type);
        if (stuffList.includes('canister') && stuffList.includes('key')) {
          console.log('playersOnFinish', playersOnFinish);
          console.log('check finish', stuffList);
        }
      }
    }
  });

  const handleOpen = () => {
    dispatch(toggleVisibleCard(item.id));
  };

  return (
    <div onClick={handleOpen} style={style} className="field-player">
      {item.state && item.state !== 'player' && item.state !== 'finish' ? (
              <img src={`./images/${item.state.img}`} alt="back card" />
      ) : (
        item.id
      )}
    </div>
  );
};

export default FieldCardForPlayer;
