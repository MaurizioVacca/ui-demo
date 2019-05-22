import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArticleWrapper } from '../article/Styled';

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
    textTransform: 'uppercase',
    '@media (max-width: 520px)': {
        display: 'none'
    }
}));

const NavBarContentWrapper = styled.div(() => ({
    position: 'relative'
}));

const NavBarContent = styled.div(({ theme, show = true }) => ({
    backgroundColor: theme.colors.white,
    padding: '20px 60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 21,
    transition: 'transform 0.2s ease-out',
    transform: `translateY(${!show ? '-100%' : '0'})`
}));

NavBarContent.propTypes = {
    show: PropTypes.bool
};

const NavBarFixedWrapper = styled.div(({ theme }) => ({
    position: 'fixed',
    zIndex: 20,
    top: 0,
    width: '100%',
    maxWidth: theme.viewport.maxWidth,
    maxHeight: 61,
    [`& + ${ArticleWrapper}`]: {
        marginTop: 61
    }
}));

export {
    NavMenu,
    NavItem,
    NavBarContent,
    NavBarContentWrapper,
    NavBarFixedWrapper
};
