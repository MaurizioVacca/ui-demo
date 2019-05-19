import styled from 'styled-components';

import { Card, Button } from 'shared';

const HighlightCard = styled(Card)(() => ({
    width: 310,
    height: 414
}));

const HighlightCaption = styled.div(({ theme }) => ({
    ...theme.text.caption,
    marginTop: 20
}));

const HighlightTitle = styled.h2(({ theme }) => ({
    ...theme.text.h2,
    margin: '22px auto 25px'
}));

const HighlightButton = styled(Button)(() => ({
    width: '100%'
}));

export {
    HighlightButton,
    HighlightCaption,
    HighlightCard,
    HighlightTitle
};
