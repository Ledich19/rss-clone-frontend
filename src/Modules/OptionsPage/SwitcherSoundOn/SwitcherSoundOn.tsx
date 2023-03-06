import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setSound } from '../../../reducers/optionsReducer';

const SwitcherSoundOn = () => {
  const options = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const data = JSON.stringify(options);
    localStorage.setItem('options', data);
  }, [options]);

  const handleChange = () => {
    dispatch(setSound(!options.sound));
  };

  const switcherStyle = {
    transform: 'translateX(0px)',
    backgroundColor: '#2caac6',
  };
  switcherStyle.transform = options.sound === true ? 'translateX(50px)' : 'translateX(0px)';
  switcherStyle.backgroundColor = options.theme === 'default' ? 'rgb(255, 157, 0)' : '#2caac6';

  return (
  <div className="switcher">
    <h5 className="switcher__title">2. Sound: {options.sound === false ? 'off' : 'on'}</h5>
    <div className="switcher__box" onClick={handleChange}>
      <div className="switcher__ball"
      onClick={handleChange}
      style={ switcherStyle }></div>
    </div>
  </div>
  );
};
export default SwitcherSoundOn;
