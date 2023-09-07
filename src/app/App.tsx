import React from 'react';
import { useUnit } from 'effector-react';
import { theme } from 'shared/theme/model/theme';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'processes/routes';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AppErrorBoundary } from 'shared/ui/ErrorBoundaryFallback';
import { Toast } from 'shared/ui/Toast';

const App = () => {
  const activeTheme = useUnit(theme.stores.$theme);
  return (
    <ThemeProvider theme={activeTheme.theme}>
      <GlobalStyles
        styles={{
          body: {
            background: activeTheme.theme.palette.background.default,
          },
        }}
      />
      <AppErrorBoundary>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </AppErrorBoundary>
      <Toast />
    </ThemeProvider>
  );
};

export default App;
