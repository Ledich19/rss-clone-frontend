import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Modules/Header/Header';
import Error404 from './components/Error404/Error404';
import Tutorial from './Modules/Tutorial/Tutorial';
import StartPage from './Modules/StartPage/StartPage';
import GameBoard from './Modules/GameBoard/GameBoard';
import OptionsPage from './Modules/OptionsPage/OptionsPage';
import StartGameOption from './Modules/StartGameOption/StartGameOption';
import NotifyComponent from './components/NotifyComponent/NotifyComponent';
import { useAppSelector } from './app/hooks';
import './App.scss';

function App() {
  const theme = useAppSelector((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <NotifyComponent className={''} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/start" element={<StartGameOption />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
