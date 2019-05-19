import styled from 'styled-components';

import Cover from 'sections/cover';

import { getRelativeSize } from '../../theme';

const NavItem = styled.li(() => ({
    display: 'inline-block',
    letterSpacing: 1,
    [`& + ${NavItem}`]: {
        marginLeft: '2rem'
    }
}));

const NavMenu = styled.ul(({ theme }) => ({
    color: theme.colors.grey,
    fontFamily: theme.fontFamilies.secondary,
    fontSize: getRelativeSize(14),
    lineHeight: getRelativeSize(18),
    padding: 0,
    margin: 0,
    listStyle: 'none',
    textTransform: 'uppercase'
}));

const NavBarContent = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: '20px 60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
}));

const NavBarFixedWrapper = styled.div(() => ({
    position: 'fixed',
    zIndex: 20,
    top: 0,
    width: '100%',
    maxHeight: 61,
    [`& + ${Cover}`]: {
        marginTop: 61
    }
}));

export {
    NavMenu,
    NavItem,
    NavBarContent,
    NavBarFixedWrapper
};
