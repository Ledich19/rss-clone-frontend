import React, { useState } from 'react';
import './Spinner.scss';
import { useAppDispatch } from '../../app/hooks';
import { setSpinnerValue } from '../../reducers/spinnertReducer';

const Spinner = () => {
  const [isNearbyZombie, setIsNearbyZombie] = useState(true);
  const [resultImage, setResultImage] = useState('./images/spinner/push.png');
  let animation: number;
  let timeProgress = 0;
  let isSpinning = false;
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
      isSpinning = false;
    }
    setTimeout(delay, time);
  }

  function spin() {
    const random = Math.random() * 1000;
    /*     let start = 0;
    const arrow: HTMLElement | null = document.querySelector('.spinner__arrow');
    function step(timestamp: number): void {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      if (arrow) {
        let angle = progress;
        if (angle > 360) angle = progress % 360;
        arrow.style.transform = `rotate(${angle}deg)`;
      }
      if (progress < timeProgress + random) {
        window.requestAnimationFrame(step);
      } else isSpinning = false;
    }
    window.requestAnimationFrame(step); */
    const arrow: HTMLElement | null = document.querySelector('.spinner__arrow');
    if (arrow) {
      arrow.style.transition = `${timeProgress + random}ms`;
      arrow.style.transform = `rotate(${timeProgress + random}deg)`;
    }
    const angle = (timeProgress + random + 90);
    checkResult(angle);
  }

  function renderProgress() {
    setResultImage('./images/spinner/push.png');
    const arrow: HTMLElement | null = document.querySelector('.spinner__arrow');
    if (arrow) {
      arrow.style.transition = '0ms';
      arrow.style.transform = 'rotate(0deg)';
    }

    let start = 0;
    const progressBar: HTMLElement | null = document.querySelector('.spinner__progress');
    function step(timestamp: number): void {
      if (!start) start = timestamp;
      timeProgress = timestamp - start;
      if (progressBar) {
        let height = 100 - timeProgress / 30;
        if (height < 0) height = 0;
        progressBar.style.height = `${height}%`;
      }
      if (timeProgress < 3000) {
        animation = window.requestAnimationFrame(step);
      }
    }
    if (!isSpinning) {
      isSpinning = true;
      timeProgress = 0;
      window.requestAnimationFrame(step);
    }
  }

  function startSpin() {
    window.cancelAnimationFrame(animation);
    const progressBar: HTMLElement | null = document.querySelector('.spinner__progress');
    if (progressBar) {
      progressBar.style.transition = `${timeProgress}ms`;
      progressBar.style.height = '100%';
    }
    spin();
  }

  function stopSpin() {
    window.cancelAnimationFrame(animation);
    const progressBar: HTMLElement | null = document.querySelector('.spinner__progress');
    if (progressBar) {
      progressBar.style.transition = `${timeProgress}ms`;
      progressBar.style.height = '100%';
    }
    timeProgress = 0;
    isSpinning = false;
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
        <div className="spinner__arrow">
          <img src={'./images/spinner/arrow.png'} alt="" />
        </div>
        <div className="spinner__result">
          <img src={ resultImage } alt="result" />
        </div>
      </div>
      <div className="spinner__progress"></div>
    </div>
  );
};
export default Spinner;
