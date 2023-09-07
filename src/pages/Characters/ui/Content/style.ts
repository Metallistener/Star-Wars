import { SxProps, Theme } from '@mui/material';

const isLoadingContainerSx: SxProps<Theme> = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const isLoadingSx: SxProps<Theme> = { fontSize: '18px', marginLeft: '15px' };

const emptyResultContainerSx: SxProps<Theme> = {
  flex: 1,
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const emptyResultTitleSx: SxProps<Theme> = {
  fontSize: '32px',
};

const contentContainerSx: SxProps<Theme> = { flex: 1, padding: '10px' };

export {
  isLoadingContainerSx,
  isLoadingSx,
  emptyResultContainerSx,
  emptyResultTitleSx,
  contentContainerSx,
};
