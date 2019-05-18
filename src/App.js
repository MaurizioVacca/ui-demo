import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Home from 'pages';

const App = () => (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
);

export default App;
