import styled from 'styled-components';
import { getRelativeSize } from 'theme';

import NavItem from './NavItem';

const NavMenu = styled.ul(({ theme }) => ({
    color: theme.colors.grey,
    fontFamily: theme.fontFamilies.secondary,
    fontSize: getRelativeSize(14),
    lineHeight: getRelativeSize(18),
    padding: 0,
    margin: 0,
    listStyle: 'none',
    textTransform: 'uppercase',
    [`${NavItem} + ${NavItem}`]: {
        marginLeft: '2rem'
    }
}));

export default NavMenu;
