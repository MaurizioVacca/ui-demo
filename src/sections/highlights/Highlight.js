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
    position: PropTypes.string.isRequired,
    onHighlightClick: PropTypes.func
};

const defaultProps = {
    onHighlightClick: () => {}
};

const Highlight = ({ content, position, onHighlightClick }) => (
    <HighlightCard id={position}>
        {content.icon && <HighlightIcon name={content.icon} />}
        {content.caption && <HighlightCaption>{content.caption}</HighlightCaption>}
        <HighlightTitle>{content.title}</HighlightTitle>
        {content.hasDetails && (
            <HighlightButton onClick={event => onHighlightClick({ event, content })}>
                clicca qui
            </HighlightButton>
        )}
    </HighlightCard>
);

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
export { propTypes };
