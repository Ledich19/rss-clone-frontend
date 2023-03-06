import React from 'react';
import './Error404.scss';

const Error404 = () => (
  <div className="error__wrapper">
    <div className="error__error">404</div>
    <br />
    <br />
    <span className="error__info">File not found</span>
    <img
      src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
      className="error__static"
    />
  </div>
);
export default Error404;
