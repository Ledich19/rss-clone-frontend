import React, { useState } from 'react';
import './Spinner.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Spinner = () => {
  const [isNearbyZombie, setIsNearbyZombie] = useState(false);
  let animation: number;
  let timeProgress = 0;
  let isSpinning = false;

  function spin() {
    const random = Math.random() * 1000;
    let start = 0;
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
    window.requestAnimationFrame(step);
  }

  function renderProgress() {
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
          <div className="spinner__field_top-left"></div>
          <div className="spinner__field_top-right"></div>
        </div>
        <div className="spinner__field_bottom">
          <div className="spinner__field_bottom-left"></div>
          <div className="spinner__field_bottom-right"></div>
        </div>
        <div className="spinner__arrow">
          <img src={'./images/spinner/arrow.png'} alt="" />
        </div>
        <div className="spinner__result"></div>
      </div>
      <div className="spinner__progress"></div>
    </div>
  );
};
export default Spinner;
