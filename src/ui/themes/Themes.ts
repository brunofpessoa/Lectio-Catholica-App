import { Main } from './Main';
import { ThemeType } from './ThemeType';

export const themes: ThemeType[] = [Main];

export const getTheme = (themeName: string) => {
  return themes.find(t => t.name === themeName) || themes[0];
};
