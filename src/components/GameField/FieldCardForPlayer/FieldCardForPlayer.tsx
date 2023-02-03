import './FieldCardForPlayer.scss';
import { BoardItemType } from '../../../app/types';
import { useAppDispatch } from '../../../app/hooks';
import { toggleVisibleCard } from '../../../reducers/gameBoardReducer';

type PropsType = {
  heightField: number;
  item: BoardItemType;
};

const FieldCardForPlayer = ({ heightField, item }: PropsType) => {
  const dispatch = useAppDispatch();
  const style = {
    height: `calc(100vh / ${heightField})`,
    width: `calc(100vh / ${heightField})`,
  };

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
