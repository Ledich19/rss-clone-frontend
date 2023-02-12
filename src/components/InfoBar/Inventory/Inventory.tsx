import { ThingType, WeaponType } from '../../../app/types';
import './Inventory.scss';

interface Props {
  inv?: Array<ThingType | WeaponType>
  title: string;
}

const Inventory = (props: Props) => (
    <div className="inventory" >
      <img className="inventory__background" src={'./images/info/fabric.jpg'} alt="background" />
      <div className='inventory__title'>{props.title}</div>
      <div className='inventory__items'>
        {props.inv && props.inv.map((item, index) => (
          <div className="inventory__image" key={index} >
            <img src={`./images/${item.img}`} alt="cardImage" />
          </div>
        ))}
      </div>
    </div>
);
export default Inventory;
