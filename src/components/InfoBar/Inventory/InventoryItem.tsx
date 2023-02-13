import { useState } from 'react';
import PopupInventory from './PopupInventory';

interface Props {
  img: string
  type: string
  descr: string
}

const InventoryItem = (props: Props) => {
  const [isPopup, setIsPopup] = useState(false);

  function useFirstAidKit() {
    console.log('fak');
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
