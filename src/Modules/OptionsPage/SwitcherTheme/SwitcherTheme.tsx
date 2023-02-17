import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { set } from '../../../reducers/themeReducer';
import './SwitcherTheme.scss';

const SwitcherTheme = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'default' : 'dark';
    dispatch(set(next));
  };
  return (
  <div className="switcher">
    <h4 className="switcher__title">1. Change theme</h4>
    <h5 className="switcher__title">Current theme: {theme}</h5>
    <div className="switcher__box" onClick={handleChange}>
      <div className="switcher__ball"
      onClick={handleChange}
      style={theme === 'default'
        ? { transform: 'translateX(0px)', backgroundColor: 'rgb(255, 157, 0)' }
        : { transform: 'translateX(50px)', backgroundColor: 'rgb(22, 1, 58)' }
      }></div>
    </div>
  </div>
  );
};
export default SwitcherTheme;
