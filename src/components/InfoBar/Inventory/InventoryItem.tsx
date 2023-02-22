import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import PopupInventory from './PopupInventory';
import { incrementHealth, deleteFromPlayerInventory, setCanPlayerMove } from '../../../reducers/playersReducer';
import { setIsNearEnemy } from '../../../reducers/spinnertReducer';
import { removeCardState, addPlankState } from '../../../reducers/gameBoardReducer';
import { BoardItemType } from '../../../app/types';
import { getActivePlayerCeil } from '../../../app/healpers';

interface Props {
  img: string
  type: string
  descr: string
  activePlayer: string
}

const InventoryItem = (props: Props) => {
  const [isPopup, setIsPopup] = useState(false);
  const { isNearbyEnemy } = useAppSelector((state) => state.spinner);
  const gameField = useAppSelector((state) => state.game);
  const { canPlayerMove } = useAppSelector((state) => state.characters);
  const { sound, gameVolume } = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();
  const audioFirstAidKit = new Audio('fak.mp3');
  const audioPlank = new Audio('plank.mp3');
  const audioGrenade = new Audio('grenade.mp3');
  const audioGrenadeGun = new Audio('grenadeGun.mp3');
  audioFirstAidKit.volume = gameVolume;
  audioPlank.volume = gameVolume;
  audioGrenade.volume = gameVolume;
  audioGrenadeGun.volume = gameVolume;

  function useFirstAidKit() {
    if (sound) audioFirstAidKit.play();
    dispatch(incrementHealth(props.activePlayer));
    if (props.activePlayer === 'nastya') dispatch(incrementHealth(props.activePlayer));
    dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'firstAidKit' }));
  }

  function usePlank() {
    let isChangeCanPlayerMove = false;
    function applyPlank(e:Event) {
      const target = (e.target as HTMLInputElement);
      const player = getActivePlayerCeil(gameField, props.activePlayer);

      if (target && player) {
        const cell = target.getAttribute('data-tag');
        const canPut:string[] = [];
        const playerCell = player.id.split('-');
        if (player?.bottom) canPut.push(`${Number(playerCell[0]) + 1}-${playerCell[1]}`);
        if (player?.left) canPut.push(`${playerCell[0]}-${Number(playerCell[1]) - 1}`);
        if (player?.top) canPut.push(`${Number(playerCell[0]) - 1}-${playerCell[1]}`);
        if (player?.right) canPut.push(`${playerCell[0]}-${Number(playerCell[1]) + 1}`);
        if (cell && canPut.includes(cell)) {
          if (sound) audioPlank.play();
          dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'plank' }));
          dispatch(addPlankState(cell));
        }
      }
      if (isChangeCanPlayerMove) {
        isChangeCanPlayerMove = false;
        dispatch(setCanPlayerMove(true));
      }
    }
    const root = document.querySelector('#root');
    if (root) {
      if (canPlayerMove) {
        isChangeCanPlayerMove = true;
        dispatch(setCanPlayerMove(false));
      }
      root.addEventListener('click', (e) => applyPlank(e), { once: true });
    }
  }

  function useGrenade() {
    if (isNearbyEnemy) {
      const enemy = gameField.flat(1).find(
        (ceil) => isNearbyEnemy.includes(ceil.id) && ceil.state?.type !== 'boss',
      );
      if (enemy) {
        if (sound) audioGrenade.play();
        dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'grenade' }));
        dispatch(removeCardState(enemy.id));
        const newIsNearbyEnemy: string[] | null = isNearbyEnemy.filter((el) => el !== enemy.id);
        if (newIsNearbyEnemy.length) {
          dispatch(setIsNearEnemy(newIsNearbyEnemy));
        } else dispatch(setIsNearEnemy(null));
      }
    }
  }

  function useGrenadeGun() {
    function checkIsNextToSomeone(player: BoardItemType | undefined, someone: string[])
      : BoardItemType | undefined {
      let cell: BoardItemType | undefined;
      const playerCell = player?.id.split('-');
      if (playerCell) {
        if (player?.bottom) {
          cell = gameField.flat(1).find(
            (ceil) => ceil.id === `${Number(playerCell[0]) + 1}-${playerCell[1]}` && ceil.state?.type && someone.includes(ceil.state.type),
          );
        }
        if (player?.left && !cell) {
          cell = gameField.flat(1).find(
            (ceil) => ceil.id === `${playerCell[0]}-${Number(playerCell[1]) - 1}` && ceil.state?.type && someone.includes(ceil.state.type),
          );
        }
        if ((player?.top && !cell)) {
          cell = gameField.flat(1).find(
            (ceil) => ceil.id === `${Number(playerCell[0]) - 1}-${playerCell[1]}` && ceil.state?.type && someone.includes(ceil.state.type),
          );
        }
        if ((player?.right && !cell)) {
          cell = gameField.flat(1).find(
            (ceil) => ceil.id === `${playerCell[0]}-${Number(playerCell[1]) + 1}` && ceil.state?.type && someone.includes(ceil.state.type),
          );
        }
      }
      return cell;
    }
    const player = gameField.flat(1).find(
      (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === props.activePlayer,
    );
    let cell = checkIsNextToSomeone(player, ['boss']);
    if (!cell) cell = checkIsNextToSomeone(player, ['zombie', 'hellHound', 'spiderMutant']);
    if (cell) {
      if (sound) audioGrenadeGun.play();
      dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'grenadeGun' }));
      dispatch(removeCardState(cell.id));
      if (isNearbyEnemy) {
        const newIsNearbyEnemy: string[] | null = isNearbyEnemy.filter(
          (el, idx) => el !== cell?.id,
        );
        if (newIsNearbyEnemy.length) {
          dispatch(setIsNearEnemy(newIsNearbyEnemy));
        } else dispatch(setIsNearEnemy(null));
      }
    }
  }

  function useItem() {
    switch (props.type) {
      case 'firstAidKit':
        useFirstAidKit();
        break;
      case 'plank':
        usePlank();
        break;
      case 'grenade':
        useGrenade();
        break;
      case 'grenadeGun':
        useGrenadeGun();
        break;
      default:
        break;
    }
  }

  function showPopup() {
    setIsPopup(true);
  }

  function hidePopup() {
    setIsPopup(false);
  }

  return (
    <div className="inventory__image" onClick={() => useItem()} onMouseEnter={() => showPopup()} onMouseLeave={() => hidePopup()} >
      <img src={`./images/${props.img}`} alt="cardImage" />
      {isPopup && <PopupInventory descr={props.descr} />}
    </div>
  );
};
export default InventoryItem;
