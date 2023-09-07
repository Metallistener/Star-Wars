import { theme } from 'shared/theme/model/theme';

export const onClickTheme = () => {
  theme.events.toggleTheme();
};
