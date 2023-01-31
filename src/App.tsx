import './App.scss';
import Header from './Modules/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Tutorial from './Modules/Tutorial/Tutorial';
import StartPage from './Modules/StartPage/StartPage';
import Game from './Modules/Game/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
