import React, { FC, useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { IImageProps } from './types';
import { imageContainerSx, imageSkeletonSx } from './style';

export const Image: FC<IImageProps> = ({ src, containerStyle, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Box sx={imageContainerSx} style={containerStyle}>
      {!isLoaded && (
        <Skeleton variant="rectangular" style={style} sx={imageSkeletonSx} />
      )}
      <img
        src={src}
        style={{ visibility: isLoaded ? 'visible' : 'hidden', ...style }}
        onLoad={onLoad}
      />
    </Box>
  );
};
