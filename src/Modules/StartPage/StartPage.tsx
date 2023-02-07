import s from './StartPage.module.scss';
import StartPageMenu from '../../components/StartPageMenu/StartPageMenu';

const StartPage = () => (
  <div className={s.start}>
    <StartPageMenu />
  </div>
);

export default StartPage;
