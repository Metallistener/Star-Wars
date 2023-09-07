import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#bc9f00',
    },
    background: {
      default: '#242424',
    },
    text: {
      primary: '#ffffff',
      secondary: '#efefef',
    },
  },
  custom: {
    header: {
      backgroundColor: '#191919',
    },
    card: {
      backgroundColor: '#191919',
      boxShadow: '0 5px 20px rgba(255,255,255,0.02);',
    },
    input: {
      placeholderColor: '#837e7e',
    },
  },
});

export const lightTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color',
          },
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#bc9f00',
    },
    background: {
      default: '#fdfdfd',
    },
    text: {
      primary: '#000000',
      secondary: '#efefef',
    },
  },
  custom: {
    header: {
      backgroundColor: '#ffffff',
    },
    card: {
      backgroundColor: '#f5f5f5',
      boxShadow: '0 5px 20px rgba(0,0,0,0.15);',
    },
    input: {
      placeholderColor: '#a19d9d',
    },
  },
});

export const colors = {
  light: lightTheme,
  dark: darkTheme,
};
