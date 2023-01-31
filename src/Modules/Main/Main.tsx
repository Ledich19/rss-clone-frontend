import React from 'react'
import "./Main.scss";
import { Routes, Route } from "react-router-dom";
import Error404 from '../../components/Error404/Error404';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/home" element={<div></div>} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </div>
  );
};

export default Main;
