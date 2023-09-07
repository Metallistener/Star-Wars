import React, { FC } from 'react';
import { ICardProps } from './types';
import { Box, useTheme } from '@mui/material';
import { Text } from 'shared/ui/Text';
import NoImage from 'shared/config/assets/images/noImage.png';
import { CardImage, StyledCardGrid, nameSx } from './style';
import { Link } from 'react-router-dom';
import { endPoints } from 'shared/config/endPoints';

export const Card: FC<ICardProps> = ({ data, index }) => {
  const theme = useTheme();
  return (
    <StyledCardGrid item xs={6} md={3} lg={2}>
      <Link
        className="cardLink"
        to={{
          pathname: endPoints.CHARACTER_INFO.replace(':id', index.toString()),
        }}
        style={{ textDecoration: 'none' }}>
        <Box
          borderRadius='12px'
          margin="10px"
          padding='12px'
          boxShadow={theme.custom.card.boxShadow}
          bgcolor={theme.custom.card.backgroundColor}>
          <CardImage
            alt={`${data.name}_photo`}
            src={data?.image ? data.image : NoImage}
          />
          <Text sx={nameSx}>{data.name}</Text>
        </Box>
      </Link>
    </StyledCardGrid>
  );
};
