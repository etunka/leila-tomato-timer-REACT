import React, { FC } from 'react';

export const Log: FC = () => {
  return (
    <div className='log' id='log'>
      <h4 className='log__title'>My tomato log</h4>
      <div className='log__wrapper' id='logWrapper'></div>
      <div className='log__clear' id='clear'>
        Clear Log
      </div>
    </div>
  );
};
