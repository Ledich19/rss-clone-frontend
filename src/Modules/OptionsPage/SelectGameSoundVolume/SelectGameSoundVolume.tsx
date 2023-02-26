import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setGameVolume } from '../../../reducers/optionsReducer';

const SelectGameSoundVolume = () => {
  const options = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const data = JSON.stringify(options);
    localStorage.setItem('options', data);
  }, [options]);

  function handleChange(value: string) {
    dispatch(setGameVolume(Number(value)));
  }

  return (
  <div className="switcher">
    <h5 className="switcher__title">3. Game sound volume: {`${Math.floor(options.gameVolume * 100)}%`}</h5>
    <input
      className={ options.theme === 'default' ? 'switcher__range' : 'switcher__range-dark' }
      type="range"
      min="0" max="1"
      value={options.gameVolume}
      onChange={(e) => handleChange(e.target.value)}
      step="0.01"
      />
  </div>
  );
};
export default SelectGameSoundVolume;
