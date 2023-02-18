import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPageFooter.scss';

const StartPageFooter = () => (
  <div className="start-footer">
    <div className="start-footer__item start-footer__item_first">
      <a className="start-footer__rs-link" href="https://rs.school/">
        {/* <img className="start-footer__rs-img" src="./images/rss.svg" alt="RS School" /> */}
      </a>
      <div className="start-footer__year" >2023</div>
    </div>
    <div className="start-footer__item start-footer__item_second">
    </div>
    <div className="start-footer__item start-footer__item_third">
      <a href="https://github.com/Ledich19" className="start-footer__developer" title="Git Oleksandr Chumachenko"
      target='_blank' rel="noreferrer">
        {/* <img
          className="start-footer__developer"
          src="./images/zombieIconForGit.png"
          alt="Oleksandr Chumachenko"
          title="Git Oleksandr Chumachenko"
        /> */}
      </a>
      <a href="https://github.com/NRG-Spirit" className="start-footer__developer" title="Git Valerii Letiuk"
      target='_blank' rel="noreferrer">
        {/* <img
          className="start-footer__developer"
          src="./images/zombieIconForGit.png"
          alt="Valerii Letiuk"
          title="Git Valerii Letiuk"
        /> */}
      </a>
      <a href="https://github.com/pedanmax" className="start-footer__developer" title="Git Maksym Pedan"
      target='_blank' rel="noreferrer">
        {/* <img
          className="start-footer__developer"
          src="./images/zombieIconForGit.png"
          alt="Maksym Pedan"
          title="Git Maksym Pedan"
        /> */}
      </a>
    </div>
  </div>
);
export default StartPageFooter;
