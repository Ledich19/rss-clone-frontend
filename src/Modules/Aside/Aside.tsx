import './Aside.scss';
import Spinner from '../../components/Spinner/Spinner';
import InfoBar from '../../components/InfoBar/InfoBar';

const Aside = () => (
    <div className="aside">
      <img className="aside__background" src={'./images/info/steel.jpg'} alt="background" />
      <InfoBar />
      <Spinner />
    </div>
);
export default Aside;
