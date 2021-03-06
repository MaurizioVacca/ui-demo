import palette from './palette';
import fonts from './fonts';
import { getRelativeSize } from './mixins';

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
    rapeYellow: palette.RAPE_YELLOW,
    navy: palette.NAVY,
    dewDrop: palette.DEWDROP
};

const buttons = {
    primary: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        fontSize: getRelativeSize(14),
        fontFamily: fontFamilies.primary,
        fontWeight: 700,
        borderRadius: 8,
        padding: '18px 22px',
        border: `1px solid ${colors.navy}`,
        textTransform: 'uppercase',
        letterSpacing: 2,
        cursor: 'pointer',
        lineHeight: getRelativeSize(14)
    }
};

const text = {
    h1: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeSize(36),
        fontWeight: 700,
        '@media (max-width: 1169px)': {
            fontSize: getRelativeSize(22)
        }
    },
    h2: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeSize(26),
        fontWeight: 700,
        '@media (max-width: 1169px)': {
            fontSize: getRelativeSize(20)
        }
    },
    paragraph: {
        color: colors.darkGrey,
        fontFamily: fontFamilies.secondary,
        fontSize: getRelativeSize(16),
        fontWeight: 400
    },
    caption: {
        color: colors.secondary,
        fontFamily: fontFamilies.primary,
        fontSize: getRelativeSize(14),
        fontWeight: 400
    }
};

const gridSettings = {
    columns: 12,
    width: 80,
    gutter: 18
};

const viewport = {
    maxWidth: 1280,
    position: 'relative',
    background: colors.white,
    fontSize: fonts.defaultSize
};

export default {
    fontFamilies,
    colors,
    buttons,
    text,
    viewport,
    gridSettings
};
