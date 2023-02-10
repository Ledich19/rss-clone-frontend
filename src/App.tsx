import { Routes, Route } from 'react-router-dom';
import Header from './Modules/Header/Header';
import Error404 from './components/Error404/Error404';
import Tutorial from './Modules/Tutorial/Tutorial';
import StartPage from './Modules/StartPage/StartPage';
import GameBoard from './Modules/GameBoard/GameBoard';
import './App.scss';
import StartGameOption from './Modules/StartGameOption/StartGameOption';
import NotifyComponent from './components/NotifyComponent/NotifyComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <NotifyComponent className={''} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/start" element={<StartGameOption />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
