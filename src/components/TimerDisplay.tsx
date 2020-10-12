import React, { FC } from 'react';
import { calculateMinutes, calculateSeconds, padDuration } from '../helper';
import { timerSettings, tick, bell } from '../constant';

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

// function createTimer(setting) {
//   const duration = timerSettings[setting];
//   // update time based on selected duration
//   time = Number(duration);
//   // we're setting current active setting of app when
//   // new timer is created
//   activeSetting = setting;
//   // needs to stop any timer before creating a new one
//   clearInterval(timerInterval);
//   updateTimer();
// }

// function updateTimer() {
//   document.getElementById("timer").innerHTML = `${padDuration(
//     minutes()
//   )}:${padDuration(seconds())}`;
//   document.getElementById("title").innerHTML = `${padDuration(
//     minutes()
//   )}:${padDuration(seconds())}`;
//   document.getElementById("done").classList.add("hidden");
// }
