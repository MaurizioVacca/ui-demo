import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
    body: {
        background: theme.viewport.background,
        height: '100%',
        fontSize: theme.viewport.fontSize
    },
    '#uiDemo': {
        ...theme.viewport,
        margin: '0 auto',
        width: '100%'
    }
}));

export default GlobalStyle;
