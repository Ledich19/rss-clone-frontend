import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import PopupInventory from './PopupInventory';
import { incrementHealth, deleteFromPlayerInventory } from '../../../reducers/playersReducer';
import { setIsNearEnemy } from '../../../reducers/spinnertReducer';
import { removeCardState, addPlankState } from '../../../reducers/gameBoardReducer';

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
  const dispatch = useAppDispatch();

  function useFirstAidKit() {
    dispatch(incrementHealth(props.activePlayer));
    if (props.activePlayer === 'nastya') dispatch(incrementHealth(props.activePlayer));
    dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'firstAidKit' }));
  }

  function usePlank() {
    function applyPlank(e:Event) {
      const target = (e.target as HTMLInputElement);
      const player = gameField.flat(1).find(
        (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === props.activePlayer,
      );
      if (target && player) {
        const cell = target.getAttribute('data-tag');
        const canPut:string[] = [];
        const playerCell = player.id.split('-');
        if (player?.bottom) canPut.push(`${Number(playerCell[0]) + 1}-${playerCell[1]}`);
        if (player?.left) canPut.push(`${playerCell[0]}-${Number(playerCell[1]) - 1}`);
        if (player?.top) canPut.push(`${Number(playerCell[0]) - 1}-${playerCell[1]}`);
        if (player?.right) canPut.push(`${playerCell[0]}-${Number(playerCell[1]) + 1}`);
        if (cell && canPut.includes(cell)) {
          dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'plank' }));
          dispatch(addPlankState(cell));
        }
      }
    }
    const root = document.querySelector('#root');
    if (root) {
      root.addEventListener('click', (e) => applyPlank(e), { once: true });
      console.log('plank');
    }
  }

  function useGrenade() {
    if (isNearbyEnemy) {
      dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'grenade' }));
      dispatch(removeCardState(isNearbyEnemy[0]));
      dispatch(setIsNearEnemy(isNearbyEnemy.filter((el, idx) => idx !== 0)));
    }
  }

  function useGrenadeGun() {
    console.log('grenadeGun');
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
