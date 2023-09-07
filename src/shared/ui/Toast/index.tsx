import React, { FC } from 'react';
import { Box, Snackbar, useTheme } from '@mui/material';
import { useUnit } from 'effector-react';
import { toastModel } from './model';
import { toastHandlers } from './lib/handlers';
import { Text } from '../Text';
import { CheckRounded, CloseRounded } from '@mui/icons-material';

export const Toast: FC = () => {
  const theme = useTheme();
  const [data, isOpen] = useUnit([
    toastModel.stores.$data,
    toastModel.stores.$isOpen,
  ]);
  return (
    <Snackbar
      autoHideDuration={5000}
      open={isOpen}
      onClick={toastHandlers.onCloseHandler}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={toastHandlers.onCloseHandler}>
      <Box
        bgcolor={theme.custom.card.backgroundColor}
        boxShadow={theme.custom.card.boxShadow}
        padding="20px"
        display="flex"
        alignItems="center"
        borderRadius="8px">
        {data?.isError && <CloseRounded color="error" />}
        {data?.isSuccess && <CheckRounded color="success" />}
        <Text sx={{ marginLeft: '10px' }}>{data?.message}</Text>
      </Box>
    </Snackbar>
  );
};
