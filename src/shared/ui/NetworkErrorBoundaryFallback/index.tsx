import React, { FC } from 'react';
import { StyledContainer } from './style';
import { Text } from '../Text';
import { Button } from '@mui/material';
import { NetworkErrorBoundaryFallbackProps } from './types';
import { useUnit } from 'effector-react';
import { connectionModel } from 'shared/model/connection';

export const NetworkErrorBoundaryFallback: FC<
  NetworkErrorBoundaryFallbackProps
> = ({ children }) => {
  const isOnline = useUnit(connectionModel.stores.$isOnlineBrowser);

  if (!isOnline)
    return (
      <StyledContainer>
        <Text sx={{ fontSize: '32px' }}>
          Oops, the network connection has lost
        </Text>
        <Text sx={{ fontSize: '24px' }}>
          Check your network cennection and try to refresh the page
        </Text>
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

  return children;
};
