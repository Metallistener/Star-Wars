import React, { FC } from 'react';
import { ICardProps } from './types';
import { Box, useTheme } from '@mui/material';
import { Text } from 'shared/ui/Text';
import NoImage from 'shared/config/assets/images/noImage.png';
import { StyledCardGrid, nameSx } from './style';
import { Link } from 'react-router-dom';
import { endPoints } from 'shared/config/endPoints';
import { Image } from 'shared/ui/Image';

export const Card: FC<ICardProps> = ({ data }) => {
  const theme = useTheme();
  const id = data.url.match(/[0-9]+/)[0];
  return (
    <StyledCardGrid item xs={6} md={3} lg={2}>
      <Link
        className="cardLink"
        to={{
          pathname: endPoints.CHARACTER_INFO.replace(':id', id),
        }}
        style={{ textDecoration: 'none' }}>
        <Box
          borderRadius="12px"
          margin="10px"
          padding="12px"
          boxShadow={theme.custom.card.boxShadow}
          bgcolor={theme.custom.card.backgroundColor}>
          <Image
            alt={`${data.name}_photo`}
            src={data?.image ? data.image : NoImage}
            style={{
              width: '100%',
              aspectRatio: 1,
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Text sx={nameSx}>{data.name}</Text>
        </Box>
      </Link>
    </StyledCardGrid>
  );
};
