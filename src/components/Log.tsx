import React, { FC } from 'react';

type Props = {
  logTitle?: string;
  logClear?: string;
};

export const Log: FC<Props> = ({ logTitle, logClear }) => {
  return (
    <div className='log' id='log'>
      <h4 className='log__title'>{logTitle}</h4>
      <div className='log__wrapper' id='logWrapper'></div>
      <div className='log__clear' id='clear'>
        {logClear}
      </div>
    </div>
  );
};
