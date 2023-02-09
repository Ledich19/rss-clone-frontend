import './ButtonBlock.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setActivePlayer } from '../../reducers/playersReducer';

const ButtonBlock = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { characters } = useAppSelector((state) => state.characters);
  const handleStart = () => {
    dispatch(setActivePlayer(characters[0].type));
    navigate('/game');
  };

  return (
    <div className="btn-bloc">
      <Link className="btn-bloc__link" rel="stylesheet" to={'/'}>
        <button className="btn-bloc__back">back</button>
      </Link>
      <a className="btn-bloc__link">
        <button
          disabled={characters.some((ch) => ch.type === 'empty')}
          onClick={handleStart}
          className="btn-bloc__start"
        >
          start
        </button>
      </a>
    </div>
  );
};
export default ButtonBlock;
