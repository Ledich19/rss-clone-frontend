import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setTheme } from '../../../reducers/optionsReducer';

const SwitcherTheme = () => {
  const options = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = options.theme;
    const data = JSON.stringify(options);
    localStorage.setItem('options', data);
  }, [options]);

  const handleChange = () => {
    dispatch(setTheme(options.theme === 'dark' ? 'default' : 'dark'));
  };
  return (
  <div className="switcher">
    <h4 className="switcher__title">1. Change theme: {options.theme}</h4>
    <div className="switcher__box" onClick={handleChange}>
      <div className="switcher__ball"
      onClick={handleChange}
      style={options.theme === 'default'
        ? { transform: 'translateX(0px)', backgroundColor: 'rgb(255, 157, 0)' }
        : { transform: 'translateX(50px)', backgroundColor: '#2caac6' }
      }></div>
    </div>
  </div>
  );
};
export default SwitcherTheme;
