import React, { useContext, useEffect, useState } from 'react';
import './main.scss';
import { Timer } from './components/Timer';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import logoImageUrl from './images/tomato-logo.png';
import { Log } from './components/Log';
import { Usage } from './components/Usage';
import * as Icons from './icons';

// dark mode/light mode
const savedMode = localStorage.getItem('mode');
const defaultMode = savedMode ? savedMode : 'light';

function App() {
  const [mode, setMode] = useState(defaultMode);

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
      <Timer remainingTime={1200} />
      <div id='done' className='message'></div>
      <div className='controls'>
        <Button buttonId={'pause'} buttonClass={'controls__button'}>
          {Icons.pause}
        </Button>
        <Button buttonId={'play'} buttonClass={'controls__button'}>
          {Icons.play}
        </Button>
        <Button buttonId={'replay'} buttonClass={'controls__button'}>
          {Icons.replay}
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
      <Log />
      <Usage />
    </div>
  );
}

export default App;
