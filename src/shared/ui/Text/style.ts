import { styled } from '@mui/material/styles';

export const StyledTextContainer = styled('div')`
  position: relative;
`;

export const StyledText = styled('p')`
  color: ${({ theme }) => theme.palette.text.primary};
  &::selection {
    color: #ffffff;
    background: #3498db;
  }
`;
