import { useEffect } from 'react';
import { getNextPlayer, getActivePlayerCeil } from '../../app/healpers';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { WeaponType } from '../../app/types';
import {
  moveCharacter,
  removeCardState,
  setDiedBodyInventory,
} from '../../reducers/gameBoardReducer';
import {
  decrementHealth,
  setAlivePlayer,
  setCanPlayerMove,
  setNextActivePlayer,
} from '../../reducers/playersReducer';
import { setIsNearEnemy, setIsSpinnerActive, setSpinnerValue } from '../../reducers/spinnertReducer';
import FieldCard from './FieldCard/FieldCard';
import FieldCardDeadBody from './FieldCardDeadBody/FieldCardDeadBody';
import FieldCardForEnemy from './FieldCardForEnemy/FieldCardForEnemy';
import FieldCardForPlayer from './FieldCardForPlayer/FieldCardForPlayer';
import './GameField.scss';

const GameField = () => {
  const dispatch = useAppDispatch();
  const gameFieldMatrix = useAppSelector((state) => state.game);
  const { characters, activePlayer, canPlayerMove } = useAppSelector((state) => state.characters);
  const { isNearbyEnemy, value } = useAppSelector((state) => state.spinner);
  const heightField = gameFieldMatrix.length;
  const useCharactersTypes = characters.map((character) => character.type);

  // fight
  useEffect(() => {
    const gameFieldArr = gameFieldMatrix.flat(1);
    const player = characters.find((ceil) => ceil.type === activePlayer);
    const playerPosition = gameFieldArr.find((ceil) => ceil.state?.type === activePlayer);
    const playerWeaponObj = player?.inventory?.filter(
      (e) => e.category === 'weapon',
    ) as WeaponType[];
    // console.log('playerWeaponObj', playerWeaponObj);
    console.log('isNearbyEnemy F', isNearbyEnemy);
    // console.log('player', player);
    // console.log('playerPosition', playerPosition);
    if (isNearbyEnemy && player && playerPosition) {
      console.log('fight start');
      const playerWeapon = playerWeaponObj.map((weapon) => weapon.use);
      const health = characters.find((ch) => ch.type === activePlayer)?.health;
      switch (true) {
        case value.num === 1:
          dispatch(setCanPlayerMove(true));
          break;
        case value.num === 2 && !canPlayerMove:
          dispatch(decrementHealth(activePlayer));
          dispatch(setSpinnerValue({ num: 0 }));
          if (health && (health === 1)) {
            console.log('drop');
            const playerId = getActivePlayerCeil(gameFieldMatrix, activePlayer)?.id;
            const activePlayerNow = characters.find((ch) => ch.type === activePlayer);
            if (activePlayerNow && activePlayerNow.inventory && playerId) {
              dispatch(setDiedBodyInventory({ id: playerId, value: activePlayerNow.inventory }));
              dispatch(setAlivePlayer({ type: activePlayer, value: false }));
              dispatch(setCanPlayerMove(true));
              dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
            }
          } else {
            dispatch(setIsNearEnemy([...isNearbyEnemy]));
          }
          break;
        case value.num === 3 && playerWeapon?.includes('sword'):
        case value.num === 4 && playerWeapon?.includes('aim'):
          if (isNearbyEnemy[0].type === 'boss' || canPlayerMove) {
            break;
          }
          dispatch(removeCardState(isNearbyEnemy[0].id));
          dispatch(setSpinnerValue({ num: 0 }));
          dispatch(
            moveCharacter({ from: playerPosition.id, to: isNearbyEnemy[0].id, body: player }),
          );
          dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
          dispatch(setCanPlayerMove(true));
          break;
        default:
          break;
      }
      dispatch(setIsSpinnerActive(true));
    }
  }, [isNearbyEnemy, value]);
  // check next player
  useEffect(() => {
    const isEnemy = gameFieldMatrix
      .flat(1)
      .find(
        (ceil) => ceil.state && ceil.state.category === 'enemy' && ceil.state.isVisible,
      );
    const isPlayerDied = characters
      .find((character) => character.type === activePlayer && !character.isAlive);
    if (!isEnemy && isPlayerDied) {
      dispatch(setNextActivePlayer(getNextPlayer(characters, activePlayer)));
    }
  }, [activePlayer]);

  return (
    <div className="field">
      {gameFieldMatrix.map((row, i) => (
        <div className="field__row" key={`rowId${i}`}>
          {row.map((item, j) => {
            if (item.state && useCharactersTypes.includes(item.state.type)) {
              return (
                <FieldCardForPlayer
                  position={{ row: i, col: j }}
                  key={item.id}
                  heightField={heightField}
                  item={item}
                />
              );
            }
            if (item.state && item.state.category === 'enemy') {
              return (
                <FieldCardForEnemy
                  position={{ row: i, col: j }}
                  key={item.id}
                  heightField={heightField}
                  item={item}
                />
              );
            }
            if (item.state && item.state.category === 'deadBody') {
              return (
                <FieldCardDeadBody
                  position={{ row: i, col: j }}
                  key={item.id}
                  heightField={heightField}
                  item={item}
                />
              );
            }
            return (
              <FieldCard
                position={{ row: i, col: j }}
                key={item.id}
                heightField={heightField}
                item={item}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameField;
