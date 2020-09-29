import React, { FC } from 'react';

type Props = {
  usageTitle: string;
  usageContent: any;
};

export const Usage: FC<Props> = ({ usageTitle, usageContent }) => {
  return (
    <div className='usage'>
      <h4 className='usage__title'>{usageTitle}</h4>
      <div className='usage__content'>{usageContent}</div>
    </div>
  );
};
