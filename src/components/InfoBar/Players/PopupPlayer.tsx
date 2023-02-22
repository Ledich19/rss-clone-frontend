import { ThingType, WeaponType } from '../../../app/types';

interface Props {
  inv?: Array<ThingType | WeaponType>
  theme: 'default' | 'dark'
}

const PopupPlayer = (props: Props) => (
    <div className="popup" style={props.theme === 'default' ? { backgroundImage: 'url(./images/metal1.jpeg)' } : { backgroundImage: 'url(./images/metal3.jpg)' } }>
      {props.inv && props.inv.map((item, index) => (
        <div className="popup__image" key={index} >
          <img src={`./images/${item.img}`} alt="cardImage" />
        </div>
      ))}
    </div>
);

export default PopupPlayer;
