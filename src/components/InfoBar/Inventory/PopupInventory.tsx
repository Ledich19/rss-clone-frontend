import { ThingType, WeaponType } from '../../../app/types';

interface Props {
  descr: string
}

const PopupInventory = (props: Props) => (
    <div className="inventory__popup" >{props.descr}</div>
);

export default PopupInventory;
