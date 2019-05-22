import styled from 'styled-components';

const ModalOverlay = styled.div(() => ({
    width: '100vw',
    height: '100vh',
    zIndex: 30,
    position: 'fixed',
    top: 0,
    left: 0,
    overflow: 'hidden'
}));

export default ModalOverlay;
