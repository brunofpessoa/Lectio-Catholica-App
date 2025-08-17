import { create } from 'zustand';
import { Main } from '../ui/themes/Main';
import { getTheme, themes } from '../ui/themes/Themes';
import { ThemeType } from '../ui/themes/ThemeType';

type UseStateType = {
  currentTheme: ThemeType;
  allThemes: ThemeType[];
  setCurrentTheme: (themeName: string) => void;
};

export const useTheme = create<UseStateType>(set => ({
  currentTheme: Main,
  allThemes: themes,
  setCurrentTheme: (themeName: string) =>
    set({
      currentTheme: getTheme(themeName),
    }),
}));
