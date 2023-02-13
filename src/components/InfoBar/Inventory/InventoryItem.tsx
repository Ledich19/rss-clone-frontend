import { useState } from 'react';
import PopupInventory from './PopupInventory';

interface Props {
  img: string
  type: string
  descr: string
}

const InventoryItem = (props: Props) => {
  const [isPopup, setIsPopup] = useState(false);

  function useItem() {
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
