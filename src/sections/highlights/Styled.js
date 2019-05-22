import styled from 'styled-components';

import { getRelativeSize } from 'theme';
import { Card, Button, Icon, Grid } from 'shared';

const HighlightButton = styled(Button)(() => ({
    width: '100%'
}));

const HighlightTitle = styled.h2(({ theme }) => ({
    ...theme.text.h2,
    position: 'relative',
    zIndex: 10,
    margin: 0,
    [`& + ${HighlightButton}`]: {
        marginTop: 25
    }
}));

const HighlightCaption = styled.div(({ theme }) => ({
    ...theme.text.caption,
    position: 'relative',
    zIndex: 10,
    [`& + ${HighlightTitle}`]: {
        marginTop: '22px'
    }
}));

const HighlightIcon = styled(Icon)(() => ({
    position: 'relative',
    zIndex: 10,
    [`& + ${HighlightCaption}`]: {
        marginTop: '20px'
    }
}));

const HighlightCard = styled(Card)(({ theme, id }) => ({
    width: 257,
    height: 358,
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 400ms ease-out',
    '&::before': {
        display: 'block',
        position: 'absolute',
        content: `"${id}"`,
        top: -60,
        left: -28,
        fontSize: getRelativeSize(216),
        zIndex: 1,
        color: theme.colors.rapeYellow,
        fontWeight: 700
    }
}));

const ModalWrapper = styled.div(() => ({
    maxWidth: 1170,
    margin: '0 auto',
    height: '100%'
}));

const ModalCenteredContent = styled.div(() => ({
    display: 'flex',
    flexDirection: 'flex-column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}));

const ModalContentBackground = styled.div(({ theme, origin }) => ({
    width: '100%',
    backgroundColor: theme.colors.yellow,
    borderRadius: '12px',
    overflow: 'hidden',
    opacity: 0,
    transformOrigin: 'top right',
    transition: 'opacity 100ms ease-out'
}));

const ModalContentHeading = styled.div(({ theme }) => ({
    ...theme.text.h2,
    padding: '4.75rem 0',
    opacity: 0,
    transform: 'translateY(15%)',
    transition: 'transform 150ms, opacity 100ms ease-out'
}));

const ModalContentImages = styled.div(({ theme }) => ({
    background: theme.colors.white,
    borderRadius: 12,
    padding: '4.75rem 0',
    transform: 'scale(1, 0)',
    transformOrigin: 'bottom',
    transition: 'transform 100ms ease-out',
    transformStyle: 'preserve-3d',
    img: {
        width: 178,
        height: 'auto',
        borderRadius: 8
    }
}));

const ModalImagesGrid = styled(Grid)(() => ({
    opacity: 0,
    transform: 'translateY(15%)',
    transition: 'transform 250ms, opacity 100ms ease-out'
}));


export {
    HighlightButton,
    HighlightCaption,
    HighlightCard,
    HighlightIcon,
    HighlightTitle,
    ModalWrapper,
    ModalCenteredContent,
    ModalContentBackground,
    ModalContentHeading,
    ModalContentImages,
    ModalImagesGrid
};
