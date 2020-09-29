import React, { FC } from 'react';

type Props = {
  imageUrl: string;
  altText: string;
  logoText: string;
};

export const Logo: FC<Props> = ({ imageUrl, altText, logoText }) => {
  return (
    <div className='logo'>
      <img className='logo__image' src={imageUrl} alt={altText} />
      <h1 className='logo__text'>{logoText}</h1>
    </div>
  );
};
