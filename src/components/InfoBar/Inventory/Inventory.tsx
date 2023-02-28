import { ThingType, WeaponType } from '../../../app/types';
import './Inventory.scss';
import InventoryItem from './InventoryItem';

interface Props {
  inv?: Array<ThingType | WeaponType>
  activePlayer: string
  theme: 'default' | 'dark'
}

const Inventory = (props: Props) => {
  let emptyCells = [];
  if (props.inv && props.inv.length < 15) {
    emptyCells = new Array(15 - props.inv.length).fill(1);
  }
  return (
    <div className="inventory" >
      <div className="inventory__title" style={props.theme === 'default' ? { backgroundImage: 'url(./images/planck2.png)' } : { backgroundImage: 'url(./images/planck2darck.png)' } }>INVENTORY</div>
      <div className="inventory__items">
        {props.inv && props.inv.map((item, index) => (
          <InventoryItem
          key={index}
          img={item.img}
          type={item.type} descr={item.description} activePlayer={props.activePlayer} />
        ))}
        {emptyCells && emptyCells.map((item, index) => (
          <div className="inventory__empy-cell" key={index} >
            <img src={'./images/info/empty.png'} alt='empty' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Inventory;
