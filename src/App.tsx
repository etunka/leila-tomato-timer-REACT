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
import { showNotification, calculateMinutes, calculateSeconds, padDuration } from './helper';

// dark/light mode
function getDefaultMode() {
  const savedMode = localStorage.getItem('mode');
  return savedMode ? savedMode : 'light';
}

function App() {
  const [mode, setMode] = useState(getDefaultMode());

  // default duration is focus
  const [activeSetting, setActiveSetting] = useState<
    'focus' | 'longBreak' | 'shortBreak'
  >('focus');

  const [time, setTime] = useState(timerSettings[activeSetting]);

  // timer instance reference
  const appTimer = useRef<NodeJS.Timeout | null>(null);

  // set timer display
  useEffect(() => {
    setTime(timerSettings[activeSetting]);
  }, [activeSetting]);

  // when time is up, clear the timer
  useEffect(() => {
    // we make typescript happy with appTimer.current
    if (appTimer.current && time === 0) {
      clearInterval(appTimer.current);
      bell.play();
      // desktop notification
      if (Notification.permission === "granted") {
        showNotification();
      }
    }
  }, [time]);

  // update app title
  useEffect(() => {
    if (appTimer.current) {

      const minutes = padDuration(calculateMinutes(time)).toString();
      const seconds = padDuration(calculateSeconds(time)).toString();
      document.title = `${minutes}:${seconds}`
    }
  }, [time])

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
      {time === 0 && <div className='message'>{messages[activeSetting]}</div>}
      <div className='controls'>
        <Button
          buttonClass={'controls__button'}
          onClick={() => {
            if (appTimer.current) {
              clearInterval(appTimer.current);
            }
          }}
        >
          {Icons.pause}
        </Button>
        <Button
          buttonClass={'controls__button'}
          onClick={() => {
            if (time > 0) {
              appTimer.current = setInterval(() => {
                setTime((currentTime) =>  currentTime - 1);
              }, 1000);
              tick.play();

              Notification.requestPermission();
            }
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
          }}
        >
          {Icons.replay}
        </Button>
      </div>
      <div className='durations'>
        <Button
          buttonClass={'durations__button'}
          onClick={() => {
            setActiveSetting('focus');
            if (appTimer.current) {
              clearInterval(appTimer.current);
            }
        }}
        >
          Focus
        </Button>
        <div className='durations__breaks'>
          <Button
            buttonClass={'durations__button'}
            onClick={() => {
              setActiveSetting('shortBreak');
              if (appTimer.current) {
                clearInterval(appTimer.current);
              }
          }}
          >
            Short break
          </Button>
          <Button
            buttonClass={'durations__button'}
            onClick={() => {
              setActiveSetting('longBreak');
              if (appTimer.current) {
                clearInterval(appTimer.current);
              }
            }}
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
