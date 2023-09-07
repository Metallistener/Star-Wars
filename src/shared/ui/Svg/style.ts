import { styled } from '@mui/material/styles';

export const WrapperSvg = styled('svg')`
  display: flex;
  transition: color 0.2s ease-in-out;
  color: ${({ theme }) => theme.palette.text.primary};
`;
