import './ButtonBlock.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setActivePlayer } from '../../reducers/playersReducer';
import useSetNotify from '../../hooks/useSetNotify';
import { shuffleArray } from '../../app/healpers';
import { setNewGameField } from '../../reducers/gameBoardReducer';

const ButtonBlock = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const gameFieldNewMatrix = useAppSelector((state) => state.gameSet.board);
  const gameCardsSet = useAppSelector((state) => state.gameSet.cards);
  const { characters } = useAppSelector((state) => state.characters);
  const useCharactersTypes = characters.map((character) => character.type);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notify = useSetNotify();

  function hasDuplicates<T>(arr: T[]): boolean {
    return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  const handleStart = () => {
    if (hasDuplicates(characters.map((ch) => ch.type))) {
      notify({
        type: 'error',
        text: 'Нельзя использовать одинаковых персонажей',
      });
      return;
    }
    dispatch(setActivePlayer(characters[0].type));
    navigate('/game');

    const emptyCeilIdsForPlayer = gameFieldMatrix
      .flatMap((row) => row.filter((ceil) => ceil.value === 'player'))
      .map((ceil) => ceil.id);

    const shuffleEmptyCeilIdsForPlayer = shuffleArray(emptyCeilIdsForPlayer).map((ceil, i) => ({
      id: ceil,
      state: characters[i] ? characters[i] : null,
    }));

    const newGameFieldWithPlayers = gameFieldNewMatrix.map((row) => row.map((ceil) => {
      const emptyCeilContent = shuffleEmptyCeilIdsForPlayer.find((item) => item.id === ceil.id);
      if (emptyCeilContent && emptyCeilContent.state && emptyCeilContent.state.isAlive) {
        return { ...ceil, state: emptyCeilContent.state };
      }
      return ceil;
    }));

    //  add another items
    const gameCards = Object.values(gameCardsSet)
      .flat(1)
      .map((card) => Array(card.count).fill(card))
      .flat(1);

    const emptyCellIds = gameFieldMatrix
      .flat(1)
      .filter((ceil) => !ceil.state)
      .map((ceil) => ceil.id);

    const shuffleEmptyCells = shuffleArray(emptyCellIds).map((ceil, i) => ({
      id: ceil,
      state: gameCards[i] ? gameCards[i] : null,
    }));
    const newGameField = newGameFieldWithPlayers.map((row) => row.map((ceil) => {
      const emptyCeilContent = shuffleEmptyCells.find((item) => item.id === ceil.id);
      if (
        emptyCeilContent?.state
          && !useCharactersTypes.includes(emptyCeilContent.state.type)
          && ceil.state === null
      ) {
        return { ...ceil, state: emptyCeilContent.state };
      }
      return ceil;
    }));
    dispatch(setNewGameField(newGameField));
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
