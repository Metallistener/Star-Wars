import { SxProps, Theme } from '@mui/material';

const imageContainerSx: SxProps<Theme> = {
  position: 'relative',
};

const imageSkeletonSx: SxProps<Theme> = {
  borderRadius: '8px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
};

export { imageContainerSx, imageSkeletonSx };
