import { SxProps, Theme } from '@mui/material';

const characterInfoContainerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '40px',
  '@media (max-width: 650px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const characterInfoImageBoxSx: SxProps<Theme> = {
  aspectRatio: 0.7,
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&:hover': {
    backgroundSize: 'contain',
  },
  '&:hover img': {
    objectFit: 'contain !important',
  },
};

const characterInfoDescSx: SxProps<Theme> = {
  '@media (max-width: 650px)': {
    paddingTop: '180px',
    marginLeft: 0,
    marginTop: '-160px',
    width: '90%',
    textAlign: 'center',
  },
};

const characterInfoDescPendingSx: SxProps<Theme> = {
  marginLeft: 0,
  marginTop: '-160px',
  width: '90%',
};

const characterInfoNameBoxSx: SxProps<Theme> = {
  '@media (max-width: 650px)': {
    justifyContent: 'center',
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

const characterInfoImageContainerStyle: React.CSSProperties = {
  height: '100%',
};

const characterInfoImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export {
  characterInfoContainerSx,
  characterInfoDescSx,
  characterInfoDescPendingSx,
  characterInfoImageBoxSx,
  characterInfoNameBoxSx,
  characterInfoNameSx,
  characterInfoParamSx,
  characterInfoImageContainerStyle,
  characterInfoImageStyle,
};
