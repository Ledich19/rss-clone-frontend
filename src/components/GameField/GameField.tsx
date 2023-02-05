import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setNewGameField } from '../../reducers/gameBoardReducer';
import FieldCard from './FieldCard/FieldCard';
import FieldCardForPlayer from './FieldCardForPlayer/FieldCardForPlayer';
import './GameField.scss';

const GameField = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const gameCardsSet = useAppSelector((state) => state.gameSet.cards);
  const { characters } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const heightField = gameFieldMatrix.length;
  const useCharactersTypes = characters.map((character) => character.type);

  function shuffleArray<Type>(arr: Type[]): Type[] {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
  }

  useEffect(() => {
    //  add characters

    const emptyCellIdsForPlayer = gameFieldMatrix
      .flat(1)
      .filter((ceil) => ceil.value === 'player')
      .map((ceil) => ceil.id);
    const shuffleEmptyCellIdsForPlayer = shuffleArray(emptyCellIdsForPlayer).map((ceil, i) => ({
      id: ceil,
      state: characters[i] ? characters[i] : null,
    }));

    const newGameFieldWithPlayers = gameFieldMatrix.map((row) => row.map((ceil) => {
      const emptyCeilContent = shuffleEmptyCellIdsForPlayer.find((item) => item.id === ceil.id);
      if (emptyCeilContent && emptyCeilContent.state) {
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
      if (emptyCeilContent?.state && !useCharactersTypes.includes(emptyCeilContent.state.type)) {
        return { ...ceil, state: emptyCeilContent.state };
      }
      return ceil;
    }));
    dispatch(setNewGameField(newGameField));
  }, []);

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => (
          <div className="field__row" key={`rowId${i}`}>
            {row.map((item) => (
              item.state && useCharactersTypes.includes(item.state.type)
                ? <FieldCardForPlayer key={item.id} heightField={heightField} item={item} />
                : <FieldCard key={item.id} heightField={heightField} item={item} />
            ))}
          </div>
      ))}
    </div>
  );
};

export default GameField;
