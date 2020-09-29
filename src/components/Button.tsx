import React, { FC } from 'react';

type Props = {
  buttonId?: string;
  buttonClass?: string;
  buttonData?: string;
};

export const Button: FC<Props> = ({
  buttonId,
  buttonClass,
  buttonData,
  children,
}) => {
  return (
    <button id={buttonId} className={buttonClass} data-setting={buttonData}>
      {children}
    </button>
  );
};
