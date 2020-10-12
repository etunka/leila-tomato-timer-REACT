import React, { FC } from 'react';

type Props = {
  buttonClass?: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ buttonClass, onClick, children }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
