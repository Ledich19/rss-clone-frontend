import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import PopupInventory from './PopupInventory';
import { incrementHealth, deleteFromPlayerInventory } from '../../../reducers/playersReducer';

interface Props {
  img: string
  type: string
  descr: string
  activePlayer: string
}

const InventoryItem = (props: Props) => {
  const [isPopup, setIsPopup] = useState(false);
  const dispatch = useAppDispatch();

  function useFirstAidKit() {
    dispatch(incrementHealth(props.activePlayer));
    dispatch(deleteFromPlayerInventory({ player: props.activePlayer, type: 'firstAidKit' }));
  }

  function usePlank() {
    console.log('plank');
  }

  function useGrenade() {
    console.log('grenade');
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
