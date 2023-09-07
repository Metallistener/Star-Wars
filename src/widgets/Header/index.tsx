import React, { FC } from 'react';
import { Svg } from 'shared/ui/Svg';

import { Text } from 'shared/ui/Text';
import { useUnit } from 'effector-react';
import { theme } from 'shared/theme/model/theme';
import { EThemeTypes } from 'shared/config/enums';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { onClickTheme } from './lib/handlers';
import { Box, IconButton } from '@mui/material';
import { StyledContainer, titleSx } from './style';
import { Link } from 'react-router-dom';
import { endPoints } from 'shared/config/endPoints';

export const Header: FC = () => {
  const activeTheme = useUnit(theme.stores.$theme);
  const isDarkTheme = activeTheme.mode === EThemeTypes.dark;

  return (
    <StyledContainer>
      <Box display="flex" alignItems="center" flexDirection="row">
        <Link to={endPoints.DEFAULT_PAGE}>
          <Svg idIcon="icLogo" width={100} height={100} />
        </Link>
        <Text sx={titleSx}>Find your favorite character</Text>
      </Box>
      <IconButton onClick={onClickTheme}>
        {isDarkTheme ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </StyledContainer>
  );
};
