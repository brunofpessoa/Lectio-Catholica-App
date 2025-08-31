import { Main } from './main';
import { ThemeType } from './theme_type';

export const themes: ThemeType[] = [Main];

export const getTheme = (themeName: string) => {
    return themes.find(t => t.name === themeName) || themes[0];
};
