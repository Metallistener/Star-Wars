import React, { Component } from 'react';
import { StyledContainer } from './style';
import { Text } from '../Text';
import { Button } from '@mui/material';

export class AppErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError)
      return (
        <StyledContainer>
          <Text sx={{ fontSize: '32px' }}>Oops, something went wrong</Text>
          <Text sx={{ fontSize: '24px' }}>Try refreshing the page</Text>
          <Button
            size="large"
            color="primary"
            sx={{ marginTop: '30px' }}
            onClick={() => {
              window.location.reload();
            }}>
            Refresh
          </Button>
        </StyledContainer>
      );

    return this.props.children;
  }
}
