import React from 'react';
import PropTypes from 'prop-types';

import {
    HighlightButton,
    HighlightCard,
    HighlightCaption,
    HighlightIcon,
    HighlightTitle
} from './Styled';
import highlightProps from './highlightProps';

const propTypes = {
    content: highlightProps.isRequired,
    position: PropTypes.string.isRequired
};

const Highlight = ({ content, position }) => (
    <HighlightCard id={position}>
        {content.icon && <HighlightIcon>{content.icon}</HighlightIcon>}
        {content.caption && <HighlightCaption>{content.caption}</HighlightCaption>}
        <HighlightTitle>{content.title}</HighlightTitle>
        {content.hasDetails && <HighlightButton>clicca qui</HighlightButton>}
    </HighlightCard>
);

Highlight.propTypes = propTypes;

export default Highlight;
export { propTypes };
