const MONTSERRAT = 'Montserrat';
const OPEN_SANS = 'Open Sans';

const fonts = {
    family: {
        MONTSERRAT,
        OPEN_SANS
    },
    defaultSize: 16
};

export const getRelativeFontSize = refSize => refSize / fonts.defaultSize;

export default fonts;
