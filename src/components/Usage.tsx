import React, { FC } from 'react';

const usageContent = (
  <div>
    <p>
      Tomato timer uses the{' '}
      <a href='https://francescocirillo.com/pages/pomodoro-technique'>
        <span>
          {' '}
          <strong>Pomodoro Technique,</strong>{' '}
        </span>
      </a>{' '}
      which consists of 6 steps:
    </p>
    <ul>
      <li>1. Choose your task</li>
      <li>
        2. Set the timer to <span className='stressed'>focus</span>
      </li>
      <li>3. Work without interruption until the timer rings</li>
      <li>
        4. When the timer rings, put a check on your{' '}
        <span className='stressed'>tomato log</span>
      </li>
      <li>5. Take a short break</li>
      <li>
        6. When you complete <span className='stressed'>4</span> focus sessions,
        take a long break
      </li>
    </ul>
  </div>
);

export const Usage: FC = () => {
  return (
    <div className='usage'>
      <h4 className='usage__title'>How to use the tomato timer</h4>
      <div className='usage__content'>{usageContent}</div>
    </div>
  );
};
