import './App.scss';
import React from 'react';
import Header from './Modules/Header/Header';
import Footer from './Modules/Footer/Footer';
import Main from './Modules/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
