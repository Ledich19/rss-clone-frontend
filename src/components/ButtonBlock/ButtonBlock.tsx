import './ButtonBlock.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const ButtonBlock = () => {
  const navigate = useNavigate();
  const { characters } = useAppSelector((state) => state.characters);
  const handleStart = () => {
    if (!characters.some((ch) => ch.type === 'empty')) {
      navigate('/game');
    }
  };

  return (
    <div className="btn-bloc">
      <Link className="btn-bloc__link" rel="stylesheet" to={'/'}>
        <button className="btn-bloc__back">back</button>
      </Link>
      <a className="btn-bloc__link">
        <button onClick={handleStart} className="btn-bloc__start">
          start
        </button>
      </a>
    </div>
  );
};
export default ButtonBlock;
