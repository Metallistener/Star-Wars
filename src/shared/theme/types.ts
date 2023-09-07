import { CSSProp } from 'styled-components';
import { EThemeTypes } from '../config/enums';
import { ITheme } from 'shared/types/theme';
import { Theme } from '@mui/material';

export type TSetThemeFx = (mode: EThemeTypes) => ITheme;

export type TAlphaPercentage =
  | '0'
  | '.05'
  | '.1'
  | '.15'
  | '.2'
  | '.25'
  | '.3'
  | '.35'
  | '.4'
  | '.45'
  | '.5'
  | '.55'
  | '.6'
  | '.65'
  | '.7'
  | '.75'
  | '.8'
  | '.85'
  | '.9'
  | '.95'
  | '1';

declare module '@mui/material/styles' {
  // fix the type error when referencing the Theme object in your styled component
  interface Theme {
    custom?: {
      header?: {
        backgroundColor: string;
      };
      card?: {
        backgroundColor: string;
        boxShadow: string;
      };
      input?: {
        placeholderColor: string;
      };
    };
  }
  // fix the type error when calling `createTheme()` with a custom theme option
  interface ThemeOptions {
    custom?: {
      header?: {
        backgroundColor: string;
      };
      card?: {
        backgroundColor: string;
        boxShadow: string;
      };
      input?: {
        placeholderColor: string;
      };
    };
  }
}
