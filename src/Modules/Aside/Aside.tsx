import './Aside.scss';
import Spinner from '../../components/Spinner/Spinner';
import InfoBar from '../../components/InfoBar/InfoBar';
import { useAppSelector } from '../../app/hooks';

const Aside = () => {
  const theme = useAppSelector((state) => state.options.theme);
  const background = theme === 'default' ? './images/info/wood.jpg' : './images/info/wood-dark.png';
  return (
    <div className="aside">
      <img className="aside__background" src={background} alt="background" />
      <InfoBar />
      <Spinner />
    </div>
  );
};
export default Aside;
