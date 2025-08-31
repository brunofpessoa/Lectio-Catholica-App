import { create } from 'zustand';
import { Main } from '../ui/themes/main';
import { getTheme, themes } from '../ui/themes/themes';
import { ThemeType } from '../ui/themes/theme_type';

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
