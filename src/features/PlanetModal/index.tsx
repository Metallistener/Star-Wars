import React, { FC } from 'react';
import { Box, Modal, useTheme } from '@mui/material';
import { useUnit } from 'effector-react';
import { planetModalModel } from './model';
import { planetModalHandlers } from './lib/handlers';
import { modalBoxCenterSx } from 'shared/css/modal';
import { planetModel } from 'entities/Planet/model';

export const PlanetModal: FC = () => {
  const theme = useTheme();
  const [modal, planet] = useUnit([
    planetModalModel.modal.$store,
    planetModel.stores.$planet,
  ]);
  console.log(planet, 'planet');
  return (
    <Modal open={modal.isOpen} onClose={planetModalHandlers.onClose}>
      <Box
        borderRadius="8px"
        padding="40px"
        bgcolor={theme.palette.background.default}
        sx={modalBoxCenterSx}>
          
        </Box>
    </Modal>
  );
};
