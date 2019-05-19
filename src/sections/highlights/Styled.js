import styled from 'styled-components';

import { getRelativeSize } from 'theme';
import { Card, Button, Icon } from 'shared';

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

export {
    HighlightButton,
    HighlightCaption,
    HighlightCard,
    HighlightIcon,
    HighlightTitle
};
