import React, { useState } from 'react';
import './Spinner.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSpinnerValue } from '../../reducers/spinnertReducer';

const Spinner = () => {
  const { isNearbyEnemy, active } = useAppSelector((state) => state.spinner);
  const [resultImage, setResultImage] = useState('./images/spinner/push.png');
  const [arrowRotateStyle, setArrowRotateStyle] = useState(0);
  const [progressTransitionStyle, setProgressTransitionStyle] = useState(0);
  const [progressHightStyle, setProgressHightStyle] = useState(100);
  const [arrowTransitionStyle, setArrowTransitionStyle] = useState(0);
  const { theme, sound, spinnerVolume } = useAppSelector((state) => state.options);
  let startTime = performance.now();
  const [startAngle, setStartAngle] = useState(0);
  let timeProgress = 0;
  const dispatch = useAppDispatch();
  const audioSpinMax = new Audio('./sounds/spinner.mp3');
  const audioSpin = new Audio('./sounds/spinner-1.mp3');
  audioSpinMax.volume = spinnerVolume;
  audioSpin.volume = spinnerVolume;

  let topLeftImage = isNearbyEnemy ? './images/spinner/run.png' : './images/spinner/number-1.png';
  let topRightImage = isNearbyEnemy ? './images/spinner/bite.png' : './images/spinner/number-2.png';
  let bottomLeftImage = isNearbyEnemy ? './images/spinner/rifle.png' : './images/spinner/number-4.png';
  let bottomRightImage = isNearbyEnemy ? './images/spinner/knife.png' : './images/spinner/number-3.png';
  if (theme === 'dark') {
    topLeftImage = isNearbyEnemy ? './images/spinner/run.png' : './images/spinner/1-dark.png';
    topRightImage = isNearbyEnemy ? './images/spinner/bite.png' : './images/spinner/2-dark.png';
    bottomLeftImage = isNearbyEnemy ? './images/spinner/rifle.png' : './images/spinner/4-dark.png';
    bottomRightImage = isNearbyEnemy ? './images/spinner/knife.png' : './images/spinner/3-dark.png';
  }
  const background = theme === 'default' ? './images/info/wood.jpg' : './images/info/wood-dark.png';

  function checkResult(time: number) {
    const angle = time % 360;
    function delay() {
      let result = 0;
      if (angle >= 0 && angle < 120) {
        result = 2;
        setResultImage(topRightImage);
      }
      if (angle >= 120 && angle < 180) {
        result = 3;
        setResultImage(bottomRightImage);
      }
      if (angle >= 180 && angle < 240) {
        result = 4;
        setResultImage(bottomLeftImage);
      }
      if (angle >= 240 && angle < 360) {
        result = 1;
        setResultImage(topLeftImage);
      }
      dispatch(setSpinnerValue(result));
      audioSpin.pause();
      audioSpin.currentTime = 0;
      audioSpinMax.pause();
      audioSpinMax.currentTime = 0;
    }
    setTimeout(delay, time);
  }

  function spin() {
    if (timeProgress === 3000 && sound) {
      audioSpinMax.play();
    }
    if (timeProgress < 3000 && sound) {
      audioSpin.play();
    }
    const random = Math.random() * 1000 + 1000;
    if ((timeProgress + random) % 360 < 180) {
      setArrowTransitionStyle(180);
      setArrowRotateStyle(startAngle + 180);
    }
    setArrowTransitionStyle(timeProgress + random);
    setArrowRotateStyle(startAngle + timeProgress + random);
    const angle = (startAngle + timeProgress + random + 90);
    setStartAngle((startAngle + timeProgress + random) % 360);
    checkResult(angle);
  }

  function renderProgress() {
    if (active) {
      startTime = performance.now();
      setResultImage('./images/spinner/push.png');
      setArrowTransitionStyle(0);
      setArrowRotateStyle(startAngle);
      timeProgress = 0;
      setProgressTransitionStyle(3000);
      setProgressHightStyle(0);
    }
  }

  function startSpin() {
    if (active) {
      timeProgress = performance.now() - startTime;
      if (timeProgress > 3000) timeProgress = 3000;
      setProgressTransitionStyle(timeProgress);
      setProgressHightStyle(100);
      spin();
    }
  }

  function stopSpin() {
    setProgressTransitionStyle(timeProgress);
    setProgressHightStyle(100);
    timeProgress = 0;
  }

  return (
    <div className="spinner__wrapper">
      <img className="spinner__background" src={background} alt="background" />
      <div className="spinner" style={active ? { filter: 'none' } : { filter: 'grayscale(50%) blur(1px)' }}>
      <div className="spinner__field"
      onMouseDown={ () => renderProgress() }
      onMouseUp={ () => startSpin() }
      onMouseLeave={ () => stopSpin() }>
        <div className="spinner__field_top">
          <div className="spinner__field_top-left" style={theme === 'default' ? { background: 'linear-gradient(120deg, rgba(255,132,0,1) 0%, rgba(232,255,0,1) 100%)' } : { backgroundImage: 'url(./images/spinner/yellow.png)' }} >
            <div className="spinner__image_top-left">
              <img src={ topLeftImage } alt="1" />
            </div>
          </div>
          <div className="spinner__field_top-right" style={theme === 'default' ? { background: 'linear-gradient(60deg, rgba(112,255,0,1) 0%, rgba(0,255,239,1) 100%)' } : { backgroundImage: 'url(./images/spinner/green.jpg)' }}>
            <div className="spinner__image_top-right">
              <img src={ topRightImage } alt="2" />
            </div>
          </div>
        </div>
        <div className="spinner__field_bottom">
          <div className="spinner__field_bottom-left" style={theme === 'default' ? { background: 'linear-gradient(195deg, rgba(255,0,0,1) 0%, rgba(239,0,255,1) 100%)' } : { backgroundImage: 'url(./images/spinner/red.jpg)' }}>
            <div className="spinner__image_bottom-left">
              <img src={ bottomLeftImage } alt="4" />
            </div>
          </div>
          <div className="spinner__field_bottom-right" style={theme === 'default' ? { background: 'linear-gradient(150deg, rgba(0,65,255,1) 0%, rgba(149,0,255,1) 100%)' } : { backgroundImage: 'url(./images/spinner/blue.jpg)' }}>
            <div className="spinner__image_bottom-right">
              <img src={ bottomRightImage } alt="3" />
            </div>
          </div>
        </div>
        <div className="spinner__arrow" style={{ transform: `rotate(${arrowRotateStyle}deg)`, transition: `${arrowTransitionStyle}ms` }}>
          <img src={'./images/spinner/arrow.png'} alt="" />
        </div>
        <div className="spinner__result">
          <img src={ resultImage } alt="result" />
        </div>
      </div>
      <div className="spinner__progress" style={{ height: `${progressHightStyle}%`, transition: `${progressTransitionStyle}ms` }}></div>
      </div>
    </div>
  );
};
export default Spinner;
