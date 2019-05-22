import styled from 'styled-components';

const Card = styled.div(({ theme }) => ({
    alignItems: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: '12px',
    color: theme.colors.secondary,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.fontFamilies.primary,
    justifyContent: 'center',
    padding: '28px'
}));

export default Card;
