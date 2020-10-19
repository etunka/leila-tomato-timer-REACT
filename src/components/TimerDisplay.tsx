import React, { FC } from 'react';
import { calculateMinutes, calculateSeconds, padDuration } from '../helper';

type Props = {
  time: number;
};

export const TimerDisplay: FC<Props> = ({ time }) => {
  const minutes = padDuration(calculateMinutes(time));
  const seconds = padDuration(calculateSeconds(time));

  return (
    <div id='timer' className='timer'>
      {minutes}:{seconds}
    </div>
  );
};
