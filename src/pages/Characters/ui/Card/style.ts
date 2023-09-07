import { Grid, SxProps, Theme, styled } from '@mui/material';
import { setAlpha } from 'shared/theme/lib/setAlpha';

const StyledCardGrid = styled(Grid)`
  &:hover > .cardLink > div {
    background: ${({ theme }) => setAlpha(theme.palette.primary.main, 0.1)};
    border-color: ${({ theme }) => setAlpha(theme.palette.primary.main, 0.01)};
  }

  &:hover img {
    object-fit: contain;
  }
`;

const CardImage = styled('img')`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
`;

const nameSx: SxProps<Theme> = {
  fontSize: '18px',
  marginTop: '7.5px',
  marginBottom: '5px',
};

export { CardImage, StyledCardGrid, nameSx };
