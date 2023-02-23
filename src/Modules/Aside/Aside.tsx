import './Aside.scss';
import Spinner from '../../components/Spinner/Spinner';
import InfoBar from '../../components/InfoBar/InfoBar';
import { useAppSelector } from '../../app/hooks';

const Aside = () => {
  const theme = useAppSelector((state) => state.options.theme);
  return (
    <div className="aside">
      <InfoBar />
      <Spinner />
    </div>
  );
};
export default Aside;
