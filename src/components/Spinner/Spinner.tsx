import React, { useState } from 'react';
import './Spinner.scss';
import { useAppDispatch } from '../../app/hooks';
import { setSpinnerValue } from '../../reducers/spinnertReducer';

const Spinner = () => {
  const [isNearbyZombie, setIsNearbyZombie] = useState(true);
  const [resultImage, setResultImage] = useState('./images/spinner/push.png');
  const [arrowRotateStyle, setArrowRotateStyle] = useState(0);
  const [progressTransitionStyle, setProgressTransitionStyle] = useState(0);
  const [progressHightStyle, setProgressHightStyle] = useState(100);
  const [arrowTransitionStyle, setArrowTransitionStyle] = useState(0);
  let startTime = performance.now();
  const [startAngle, setStartAngle] = useState(0);
  let timeProgress = 0;
  const dispatch = useAppDispatch();

  const topLeftImage = isNearbyZombie ? './images/spinner/run.png' : './images/spinner/number-1.png';
  const topRightImage = isNearbyZombie ? './images/spinner/bite.png' : './images/spinner/number-2.png';
  const bottomLeftImage = isNearbyZombie ? './images/spinner/rifle.png' : './images/spinner/number-4.png';
  const bottomRightImage = isNearbyZombie ? './images/spinner/knife.png' : './images/spinner/number-3.png';

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
    }
    setTimeout(delay, time);
  }

  function spin() {
    const random = Math.random() * 1000;
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
    startTime = performance.now();
    setResultImage('./images/spinner/push.png');
    setArrowTransitionStyle(0);
    setArrowRotateStyle(startAngle);
    timeProgress = 0;
    setProgressTransitionStyle(3000);
    setProgressHightStyle(0);
  }

  function startSpin() {
    timeProgress = performance.now() - startTime;
    if (timeProgress > 3000) timeProgress = 3000;
    setProgressTransitionStyle(timeProgress);
    setProgressHightStyle(100);
    spin();
  }

  function stopSpin() {
    setProgressTransitionStyle(timeProgress);
    setProgressHightStyle(100);
    timeProgress = 0;
  }

  return (
    <div className="spinner" >
      <div className="spinner__field"
      onMouseDown={ () => renderProgress() }
      onMouseUp={ () => startSpin() }
      onMouseLeave={ () => stopSpin() }>
        <div className="spinner__field_top">
          <div className="spinner__field_top-left">
            <div className="spinner__image_top-left">
              <img src={ topLeftImage } alt="1" />
            </div>
          </div>
          <div className="spinner__field_top-right">
            <div className="spinner__image_top-right">
              <img src={ topRightImage } alt="2" />
            </div>
          </div>
        </div>
        <div className="spinner__field_bottom">
          <div className="spinner__field_bottom-left">
            <div className="spinner__image_bottom-left">
              <img src={ bottomLeftImage } alt="4" />
            </div>
          </div>
          <div className="spinner__field_bottom-right">
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
  );
};
export default Spinner;
