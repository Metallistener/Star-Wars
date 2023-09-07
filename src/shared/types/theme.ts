import { Theme } from '@mui/material/styles';
import { EThemeTypes } from 'shared/config/enums';
// import { DefaultTheme } from 'styled-components';

export interface ITheme {
  mode: EThemeTypes;
  theme: Theme;
}
