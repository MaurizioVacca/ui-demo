import React from 'react';

import {
    HighlightButton,
    HighlightCard,
    HighlightCaption,
    HighlightTitle
} from './Styled';
import highlightProps from './highlightProps';

const propTypes = {
    content: highlightProps.isRequired
};

const Highlight = ({ content }) => (
    <HighlightCard>
        <div>{content.icon}</div>
        <HighlightCaption>{content.caption}</HighlightCaption>
        <HighlightTitle>{content.title}</HighlightTitle>
        {content.hasDetails && <HighlightButton>clicca qui</HighlightButton>}
    </HighlightCard>
);

Highlight.propTypes = propTypes;

export default Highlight;
export { propTypes };
