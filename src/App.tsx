import React, { useEffect, useRef, useState } from 'react';
import './main.scss';
import { TimerDisplay } from './components/TimerDisplay';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import logoImageUrl from './images/tomato-logo.png';
import { Log } from './components/Log';
import { Usage } from './components/Usage';
import { timerSettings, bell, tick, messages } from './constant';
import * as Icons from './icons';

// dark mode/light mode
const savedMode = localStorage.getItem('mode');
const defaultMode = savedMode ? savedMode : 'light';

function App() {
  const [mode, setMode] = useState(defaultMode);

  const [activeSetting, setActiveSetting] = useState<
    'focus' | 'longBreak' | 'shortBreak'
  >('focus');

  const [time, setTime] = useState(timerSettings[activeSetting]);

  // timer instance ref
  const appTimer = useRef<NodeJS.Timeout | null>(null);

  // set timer display
  useEffect(() => {
    setTime(timerSettings[activeSetting]);
  }, [activeSetting]);

  // when time is over, clear the timer
  useEffect(() => {
    if (time === 0 && appTimer.current) {
      clearInterval(appTimer.current);
      bell.play();
    }
  }, [time]);

  // set dark/light mode
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className='container'>
      <span
        className='mode'
        id='mode'
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        {mode === 'dark' ? 'Light mode' : 'Dark mode'}
      </span>
      <Logo
        imageUrl={logoImageUrl}
        altText={'tomato logo'}
        logoText={'Leila Tomato Timer'}
      />
      <TimerDisplay time={time} />
      {time === 0 && (
        <div id='done' className='message'>
          {messages[activeSetting]}
        </div>
      )}
      <div className='controls'>
        <Button
          buttonClass={'controls__button'}
          onClick={() => {
            if (appTimer.current) {
              clearInterval(appTimer.current);
            }
            tick.play();
          }}
        >
          {Icons.pause}
        </Button>
        <Button
          buttonClass={'controls__button'}
          onClick={() => {
            appTimer.current = setInterval(() => {
              setTime((currentTime) => currentTime - 1);
            }, 1);
            tick.play();
          }}
        >
          {Icons.play}
        </Button>
        <Button
          buttonClass={'controls__button'}
          onClick={() => {
            if (appTimer.current) {
              clearInterval(appTimer.current);
            }
            setTime(timerSettings[activeSetting]);
            tick.play();
          }}
        >
          {Icons.replay}
        </Button>
      </div>
      <div className='durations'>
        <Button
          buttonClass={'durations__button'}
          onClick={() => setActiveSetting('focus')}
        >
          Focus
        </Button>
        <div className='durations__breaks'>
          <Button
            buttonClass={'durations__button'}
            onClick={() => setActiveSetting('shortBreak')}
          >
            Short break
          </Button>
          <Button
            buttonClass={'durations__button'}
            onClick={() => setActiveSetting('longBreak')}
          >
            Long break
          </Button>
        </div>
      </div>
      <Log />
      <Usage />
    </div>
  );
}

export default App;
