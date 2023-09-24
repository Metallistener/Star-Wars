import { Container, SxProps, Theme, styled } from '@mui/material';
import { setAlpha } from 'shared/theme/lib/setAlpha';

const StyledContainer = styled(Container)`
  position: sticky;
  top: 0;
  z-index: 2;
  max-width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.custom.header.backgroundColor};
  box-shadow: ${`0 5px 20px ${setAlpha('#000000', 0.05)}`};
`;

const titleSx: SxProps<Theme> = { fontSize: '28px', marginLeft: '15px' };

export { StyledContainer, titleSx };
