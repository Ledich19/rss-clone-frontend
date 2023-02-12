import { ThingType, WeaponType } from '../../../app/types';
import './Inventory.scss';

interface Props {
  inv?: Array<ThingType | WeaponType>
}

const Inventory = (props: Props) => {
  let emptyCells = [];
  if (props.inv && props.inv.length < 10) {
    emptyCells = new Array(10 - props.inv.length).fill(1);
  }
  console.log(emptyCells);
  return (
    <div className="inventory" >
      <img className="inventory__background" src={'./images/info/fabric.jpg'} alt="background" />
      <div className='inventory__title'>ИНВЕНТАРЬ</div>
      <div className='inventory__items'>
        {props.inv && props.inv.map((item, index) => (
          <div className="inventory__image" key={index} >
            <img src={`./images/${item.img}`} alt="cardImage" />
          </div>
        ))}
        {emptyCells && emptyCells.map((item, index) => (
          <div className="inventory__empy-cell" key={index} ></div>
        ))}
      </div>
    </div>
  );
};
export default Inventory;
