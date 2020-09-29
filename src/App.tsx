import React from 'react';
import './main.scss';
import { Timer } from './components/Timer';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import logoImageUrl from './images/tomato-logo.png';
import { Log } from './components/Log';
import { Usage } from './components/Usage';

const pause = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47.607 47.607'>
    <path d='M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z' />
  </svg>
);

const play = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 494.148 494.148'>
    <path d='M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z' />
  </svg>
);

const replay = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 305 305'>
    <path d='M152.924 300.748c84.319 0 152.912-68.6 152.912-152.918 0-39.476-15.312-77.231-42.346-105.564 0 0 3.938-8.857 8.814-19.783 4.864-10.926-2.138-18.636-15.648-17.228l-79.125 8.289c-13.511 1.411-17.999 11.467-10.021 22.461l46.741 64.393c7.986 10.992 17.834 12.31 22.008 2.937l7.56-16.964c12.172 18.012 18.976 39.329 18.976 61.459 0 60.594-49.288 109.875-109.87 109.875-60.591 0-109.882-49.287-109.882-109.875 0-19.086 4.96-37.878 14.357-54.337 5.891-10.325 2.3-23.467-8.025-29.357-10.328-5.896-23.464-2.3-29.36 8.031C6.923 95.107 0 121.27 0 147.829c0 84.319 68.602 152.919 152.924 152.919z' />
  </svg>
);

const usage = (
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

function App() {
  return (
    <div className='container'>
      <span className='mode' id='mode'>
        Dark mode
      </span>
      <Logo
        imageUrl={logoImageUrl}
        altText={'tomato logo'}
        logoText={'Leila Tomato Timer'}
      />
      <Timer remainingTime={1200} />
      <div id='done' className='message'></div>
      <div className='controls'>
        <Button buttonId={'pause'} buttonClass={'controls__button'}>
          {pause}
        </Button>
        <Button buttonId={'play'} buttonClass={'controls__button'}>
          {play}
        </Button>
        <Button buttonId={'replay'} buttonClass={'controls__button'}>
          {replay}
        </Button>
      </div>
      <div className='durations'>
        <Button
          buttonId={'focus'}
          buttonClass={'durations__button'}
          buttonData={'focus'}
        >
          Focus
        </Button>
        <div className='durations__breaks'>
          <Button
            buttonId={'short'}
            buttonClass={'durations__button'}
            buttonData={'shortBreak'}
          >
            Short break
          </Button>
          <Button
            buttonId={'long'}
            buttonClass={'durations__button'}
            buttonData={'longBreak'}
          >
            Long break
          </Button>
        </div>
      </div>
      <Log logTitle={'My tomato log'} logClear={'Clear log'} />
      <Usage usageTitle={'How to use the tomato timer'} usageContent={usage} />
    </div>
  );
}

export default App;
