import React from 'react';
import PropTypes from 'prop-types';

import { articleShape } from 'models';

import {
    HighlightButton,
    HighlightCard,
    HighlightCaption,
    HighlightIcon,
    HighlightTitle
} from './Styled';


const propTypes = {
    content: articleShape.isRequired,
    position: PropTypes.string.isRequired
};

const Highlight = ({ content, position }) => (
    <HighlightCard id={position}>
        {content.icon && <HighlightIcon name={content.icon} />}
        {content.caption && <HighlightCaption>{content.caption}</HighlightCaption>}
        <HighlightTitle>{content.title}</HighlightTitle>
        {content.hasDetails && <HighlightButton>clicca qui</HighlightButton>}
    </HighlightCard>
);

Highlight.propTypes = propTypes;

export default Highlight;
export { propTypes };
