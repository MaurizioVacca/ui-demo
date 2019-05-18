import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import { NavBar } from 'sections';

const App = () => (
    <ThemeProvider theme={theme}>
        <NavBar />
    </ThemeProvider>
);

export default App;
