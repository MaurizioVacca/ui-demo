import React from 'react';
import PropTypes from 'prop-types';

import { Logo, Spacer } from 'shared';

import {
    NavBarFixedWrapper,
    NavBarContent,
    NavBarContentWrapper,
    NavItem,
    NavMenu
} from './Styled';

const propTypes = {
    show: PropTypes.bool
};

const defaultProps = {
    show: true
};

const NavBar = React.forwardRef(({ show }, ref) => (
    <NavBarFixedWrapper ref={ref}>
        <NavBarContentWrapper>
            <NavBarContent show={show}>
                <Logo />
                <Spacer />
                <NavMenu>
                    <NavItem>lorem</NavItem>
                    <NavItem>ipsum</NavItem>
                    <NavItem>dolor</NavItem>
                </NavMenu>
                <Spacer />
            </NavBarContent>
        </NavBarContentWrapper>
    </NavBarFixedWrapper>
));

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
