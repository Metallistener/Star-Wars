import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector';
import { EThemeTypes } from '../../config/enums';
import { darkTheme, lightTheme } from '../../theme';
import { ITheme } from '../../types/theme';
import { THEME_LOCAL_STORAGE_KEY } from '../config';
import { TSetThemeFx } from '../types';

const cachedTheme = localStorage.getItem(
  THEME_LOCAL_STORAGE_KEY,
) as EThemeTypes;

const $theme = createStore<ITheme>({
  mode: cachedTheme || EThemeTypes.dark,
  theme:
    Boolean(cachedTheme) && cachedTheme === EThemeTypes.light
      ? lightTheme
      : darkTheme,
});

const toggleTheme = createEvent();

const setThemeFx = createEffect<TSetThemeFx>((mode) => {
  const newMode =
    mode === EThemeTypes.dark ? EThemeTypes.light : EThemeTypes.dark;
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newMode);

  return {
    mode: newMode,
    theme: newMode === EThemeTypes.light ? lightTheme : darkTheme,
  };
});

sample({
  clock: toggleTheme,
  source: $theme,
  fn: (theme) => theme.mode,
  target: setThemeFx,
});

forward({
  from: setThemeFx.doneData,
  to: $theme,
});

export const theme = { events: { toggleTheme }, stores: { $theme } };
