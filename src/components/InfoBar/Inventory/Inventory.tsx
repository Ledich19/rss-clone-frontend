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
  const background = props.theme === 'default' ? './images/info/fabric.jpg' : './images/info/fabric-dark.png';
  return (
    <div className="inventory" >
      <img className="inventory__background" src={ background } alt="background" />
      <div className="inventory__title" style={props.theme === 'default' ? { backgroundImage: 'url(./images/planck2.png)' } : { backgroundImage: 'url(./images/planck2darck.png)' } }>INVENTORY</div>
      <div className="inventory__items">
        {props.inv && props.inv.map((item, index) => (
          <InventoryItem
          key={index}
          img={item.img}
          type={item.type} descr={item.description} activePlayer={props.activePlayer} />
        ))}
        {emptyCells && emptyCells.map((item, index) => (
          <div className="inventory__empy-cell" key={index} style={props.theme === 'default' ? { background: 'rgba(140, 206, 40, 0.5)' } : { background: 'rgba(140, 106, 40, 0.5)' } }></div>
        ))}
      </div>
    </div>
  );
};
export default Inventory;
