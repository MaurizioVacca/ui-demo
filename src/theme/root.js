import palette from './palette';
import fonts, { getRelativeFontSize } from './fonts';

const fontFamilies = {
    primary: fonts.family.MONTSERRAT,
    secondary: fonts.family.OPEN_SANS,
    openSans: fonts.family.OPEN_SANS,
    montserrat: fonts.family.MONTSERRAT
};

const colors = {
    primary: palette.YELLOW,
    secondary: palette.BLACK,
    yellow: palette.YELLOW,
    black: palette.BLACK,
    white: palette.WHITE,
    grey: palette.GREY,
    darkGrey: palette.DARK_GREY,
    rapeYellow: palette.RAPE_YELLOW
};

const buttons = {
    primary: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        fontSize: getRelativeFontSize(14),
        fontFamily: fontFamilies.primary,
        fontWeight: 700
    }
};

const text = {
    h1: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeFontSize(36),
        fontWeight: 700
    },
    h2: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeFontSize(26),
        fontWeight: 700
    },
    paragraph: {
        color: colors.darkGrey,
        fontFamily: fontFamilies.secondary,
        fontSize: getRelativeFontSize(16),
        fontWeight: 400
    },
    caption: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeFontSize(14),
        fontWeight: 400
    }
};

export default {
    fontFamilies,
    colors,
    buttons,
    text
};
