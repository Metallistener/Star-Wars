import { SxProps, Theme } from '@mui/material';

const characterInfoContainerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '40px',
};

const characterInfoImageBoxSx: SxProps<Theme> = {
  aspectRatio: 0.7,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&:hover': {
    backgroundSize: 'contain',
  },
};

const characterInfoNameSx: SxProps<Theme> = {
  fontSize: '28px',
  width: 'fit-content',
  paddingBottom: '5px',
  marginBottom: '20px',
  borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
};

const characterInfoParamSx: SxProps<Theme> = {
  fontSize: '20px',
  '& span': {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 'bold',
  },
};

export {
  characterInfoContainerSx,
  characterInfoImageBoxSx,
  characterInfoNameSx,
  characterInfoParamSx,
};
