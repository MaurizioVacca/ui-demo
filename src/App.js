import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from 'theme';
import Home from 'pages';

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <Home />
        </Fragment>
    </ThemeProvider>
);

export default App;
