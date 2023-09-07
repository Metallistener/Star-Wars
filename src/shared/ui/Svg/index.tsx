import React, { FC } from 'react';
import { WrapperSvg } from './style';
import { ISvg } from './types';
import defaultSprite from '../../config/assets/icons/sprite.svg?url';

export const Svg: FC<ISvg> = ({
  idIcon,
  className = '',
  onClick,
  width,
  height,
  id,
}) => {
  return (
    <WrapperSvg
      id={id}
      onClick={onClick}
      className={`svg-icon ${className}`}
      width={width}
      height={height}>
      <use xlinkHref={`${defaultSprite}#${idIcon}`} />
    </WrapperSvg>
  );
};
