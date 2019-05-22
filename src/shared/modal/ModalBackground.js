import styled from 'styled-components';

const ModalBackground = styled.div(({ theme }) => ({
    transition: 'transform 100ms, opacity 200ms linear',
    transform: 'scale(1, 0.75)',
    opacity: 0,
    transformOrigin: 'bottom',
    backgroundColor: theme.colors.darkGrey,
    width: '100%',
    height: '100%',
    cursor: 'default',
    position: 'absolute'
}));

export default ModalBackground;
