import React from 'react';
import style from './ScrollIndicator.module.css';

function ScrollIndicator() {
  return (
    <div className={style.arrow}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default ScrollIndicator;
