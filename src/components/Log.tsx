import React, { FC, useState, useEffect } from 'react';
import logoImageUrl from '../images/tomato-logo.png';

type Log = boolean[][];

export const defaultLog: Log = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

function getInitialLog(): Log {
  const savedLog = localStorage.getItem('log');
  return savedLog ? JSON.parse(savedLog) : defaultLog;
}

export const Log: FC = () => {
  const [log, setLog] = useState(getInitialLog());

  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(log));
  }, [log]);

  return (
    <div className='log'>
      <h4 className='log__title'>My tomato log</h4>
      <div className='log__wrapper'>
        {log.map((logColumn, colIndex) => (
          <div className='log__column'>
            {logColumn.map((logIcon, iconIndex) => (
              <img
                className={'log__icon ' + (logIcon ? 'checked' : '')}
                src={logoImageUrl}
                alt='tomato logo'
                onClick={() => {
                  let newLog = [...log];
                  newLog[colIndex][iconIndex] = !newLog[colIndex][iconIndex];
                  setLog(newLog);
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='log__clear' onClick={() => setLog(defaultLog)}>
        Clear Log
      </div>
    </div>
  );
};
