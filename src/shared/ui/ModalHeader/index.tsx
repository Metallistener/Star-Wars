import React, { FC } from 'react';
import { IModalHeaderProps } from './types';
import { Box, IconButton } from '@mui/material';
import { Text } from '../Text';
import { modalHeaderTitleSx } from './style';
import { Close } from '@mui/icons-material';

export const ModalHeader: FC<IModalHeaderProps> = ({
  title = '',
  showClose = true,
  onClose = () => null,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="30px 0">
      <Text sx={modalHeaderTitleSx}>{title}</Text>
      {showClose && (
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      )}
    </Box>
  );
};
