import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Logo, Spacer } from 'shared';

import NavItem from './NavItem';
import NavMenu from './NavMenu';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: null
};

const NavBar = ({ className }) => (
    <div className={className}>
        <Logo />
        <Spacer />
        <NavMenu>
            <NavItem>lorem</NavItem>
            <NavItem>ipsum</NavItem>
            <NavItem>dolor</NavItem>
        </NavMenu>
        <Spacer />
    </div>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default styled(NavBar)(({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: '20px 60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
}));
