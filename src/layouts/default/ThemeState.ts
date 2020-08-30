import { atom } from 'recoil';

export enum ThemeEnum {
    LIGHT = 'light-theme',
    DARK = 'dark-theme',
    KEY = 'default-theme'
}

const ThemeState = atom({
    key: ThemeEnum.KEY,
    default: ThemeEnum.LIGHT
});

export default ThemeState;
