import { ThingType, WeaponType } from '../../../app/types';
import './Inventory.scss';
import InventoryItem from './InventoryItem';

interface Props {
  inv?: Array<ThingType | WeaponType>
  activePlayer: string
}

const Inventory = (props: Props) => {
  let emptyCells = [];
  if (props.inv && props.inv.length < 15) {
    emptyCells = new Array(15 - props.inv.length).fill(1);
  }

  return (
    <div className="inventory" >
      <img className="inventory__background" src={'./images/info/fabric.jpg'} alt="background" />
      <div className='inventory__title'>INVENTORY</div>
      <div className='inventory__items'>
        {props.inv && props.inv.map((item, index) => (
          <InventoryItem
          key={index}
          img={item.img}
          type={item.type} descr={item.description} activePlayer={props.activePlayer} />
        ))}
        {emptyCells && emptyCells.map((item, index) => (
          <div className="inventory__empy-cell" key={index} ></div>
        ))}
      </div>
    </div>
  );
};
export default Inventory;
