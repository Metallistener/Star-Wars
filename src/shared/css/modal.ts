import { SxProps, Theme } from '@mui/material';

export const modalBoxCenterSx: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none'
};
