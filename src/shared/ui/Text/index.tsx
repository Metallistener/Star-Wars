import React from 'react';
import { StyledText, StyledTextContainer } from './style';
import { SxProps, Theme } from '@mui/material/styles';

export interface ITextProps {
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  children?: React.ReactNode;
}

export const Text: React.FC<ITextProps> = React.memo(
  ({ sx, containerSx, children }) => {
    return (
      <StyledTextContainer sx={containerSx}>
        <StyledText sx={sx}>{children}</StyledText>
      </StyledTextContainer>
    );
  },
);
