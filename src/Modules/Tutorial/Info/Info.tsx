import { useAppSelector } from '../../../app/hooks';
import Item from '../Item/Item';
import './Info.scss';

const Info = () => {
  const { info } = useAppSelector((state) => state.rules);
  const infoArr = Object.values(info);
  return (
    <div className="info-tutorial">
      {infoArr.map((item, index) => (
        <Item title={item.title} items={item.items} text={item.text} key={index}/>
      ))}
    </div>
  );
};

export default Info;
