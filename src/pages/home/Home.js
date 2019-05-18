import React, { Fragment } from 'react';

import { Cover, NavBar } from 'sections';

import HomeCover from 'images/cover.png';

const Home = () => (
    <Fragment>
        <NavBar />
        <Cover imgPath={HomeCover} />
    </Fragment>
);

export default Home;
