import React from 'react';

import { Logo, Spacer } from 'shared';

import {
    NavBarFixedWrapper,
    NavBarContent,
    NavItem,
    NavMenu
} from './Styled';

const NavBar = () => (
    <NavBarFixedWrapper>
        <NavBarContent>
            <Logo />
            <Spacer />
            <NavMenu>
                <NavItem>lorem</NavItem>
                <NavItem>ipsum</NavItem>
                <NavItem>dolor</NavItem>
            </NavMenu>
            <Spacer />
        </NavBarContent>
    </NavBarFixedWrapper>
);

export default NavBar;
