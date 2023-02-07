import './Aside.scss';
import Spinner from '../../components/Spinner/Spinner';
import InfoBar from '../../components/InfoBar/InfoBar';

const Aside = () => (
    <div className="aside">
      <InfoBar />
      <Spinner />
    </div>
);
export default Aside;
