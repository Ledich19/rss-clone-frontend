import s from './StartPage.module.scss';
import StartPageMenu from '../../components/StartPageMenu/StartPageMenu';
import StartPageFooter from '../../components/StartPageFooter/StartPageFooter';

const StartPage = () => (
  <div className={s.start}>
    <StartPageMenu />
    <StartPageFooter/>
  </div>
);

export default StartPage;
