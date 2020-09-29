import React, { FC } from 'react';
import { calculateMinutes, calculateSeconds, padDuration } from '../helper';

type Props = {
  remainingTime: number;
};

export const Timer: FC<Props> = ({ remainingTime }) => {
  const minutes = padDuration(calculateMinutes(remainingTime));
  const seconds = padDuration(calculateSeconds(remainingTime));
  return (
    <div id='timer' className='timer'>
      {minutes}:{seconds}
    </div>
  );
};
