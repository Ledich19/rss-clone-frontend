import { ThingType, WeaponType } from '../../../app/types';

interface Props {
  inv?: Array<ThingType | WeaponType>
}

const PopupPlayer = (props: Props) => (
    <div className="popup" >
      {props.inv && props.inv.map((item, index) => (
        <div className="popup__image" key={index} >
          <img src={`./images/${item.img}`} alt="cardImage" />
        </div>
      ))}
    </div>
);

export default PopupPlayer;
