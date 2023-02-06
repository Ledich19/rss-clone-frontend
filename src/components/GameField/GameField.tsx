import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { WeaponType } from '../../app/types';
import { moveCharacter, removeCardState, setNewGameField } from '../../reducers/gameBoardReducer';
import { decrementHealth, setCanPlayerMove } from '../../reducers/playersReducer';
import { setIsNearEnemy, setSpinnerValue } from '../../reducers/spinnertReducer';
import FieldCard from './FieldCard/FieldCard';
import FieldCardForPlayer from './FieldCardForPlayer/FieldCardForPlayer';
import './GameField.scss';

const GameField = () => {
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const gameCardsSet = useAppSelector((state) => state.gameSet.cards);
  const { characters, activePlayer, canPlayerMove } = useAppSelector((state) => state.characters);
  const { isNearbyEnemy, value, ranges } = useAppSelector((state) => state.spinner);
  const dispatch = useAppDispatch();
  const heightField = gameFieldMatrix.length;
  const useCharactersTypes = characters.map((character) => character.type);

  function shuffleArray<Type>(arr: Type[]): Type[] {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
  }

  useEffect(() => {
    //  add characters
    const emptyCeilIdsForPlayer = gameFieldMatrix
      .flat(1)
      .filter((ceil) => ceil.value === 'player')
      .map((ceil) => ceil.id);
    const shuffleEmptyCeilIdsForPlayer = shuffleArray(emptyCeilIdsForPlayer)
      .map((ceil, i) => ({
        id: ceil,
        state: characters[i] ? characters[i] : null,
      }));

    const newGameFieldWithPlayers = gameFieldMatrix.map((row) => row.map((ceil) => {
      const emptyCeilContent = shuffleEmptyCeilIdsForPlayer.find((item) => item.id === ceil.id);
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

      if (emptyCeilContent?.state
        && !useCharactersTypes.includes(emptyCeilContent.state.type)
        && ceil.state === null) {
        return { ...ceil, state: emptyCeilContent.state };
      }

      return ceil;
    }));
    dispatch(setNewGameField(newGameField));
  }, []);

  useEffect(() => {
    const gameFieldArr = gameFieldMatrix.flat(1);
    const player = characters.find((ceil) => ceil.type === activePlayer);
    const playerPosition = gameFieldArr.find((ceil) => ceil.state?.type === activePlayer);
    const playerWeapon = (player?.inventory?.filter((e) => e.category === 'weapon') as WeaponType[])
      .map((weapon) => weapon.use);
    // fight
    console.log(isNearbyEnemy, player, playerPosition);
    if (isNearbyEnemy && player && playerPosition) {
      switch (true) {
        case value === 1:
          dispatch(setCanPlayerMove(true));
          break;
        case value === 2:
          dispatch(decrementHealth(activePlayer));
          break;
        case value === 3 && playerWeapon?.includes('sword'):
          dispatch(removeCardState(isNearbyEnemy[0]));
          dispatch(setSpinnerValue(0));
          dispatch(moveCharacter({ from: playerPosition.id, to: isNearbyEnemy[0], body: player }));
          break;
        case value === 4 && playerWeapon?.includes('aim'):
          dispatch(removeCardState(isNearbyEnemy[0]));
          dispatch(setSpinnerValue(0));
          dispatch(moveCharacter({ from: playerPosition.id, to: isNearbyEnemy[0], body: player }));
          break;
        default:
          break;
      }
    }
  }, [isNearbyEnemy, value]);

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => (
          <div className="field__row" key={`rowId${i}`}>
            {row.map((item, j) => (
              item.state && useCharactersTypes.includes(item.state.type)
                ? <FieldCardForPlayer
                    position={{ row: i, col: j }}
                    key={item.id}
                    heightField={heightField}
                    item={item} />
                : <FieldCard
                    position={{ row: i, col: j }}
                    key={item.id}
                    heightField={heightField}
                    item={item} />
            ))}
          </div>
      ))}
    </div>
  );
};

export default GameField;
