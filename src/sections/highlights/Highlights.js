import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { articleShape } from 'models';

import Highlight from './Highlight';
import { HighlightCard } from './Styled';

const propTypes = {
    values: PropTypes.arrayOf(articleShape).isRequired,
    className: PropTypes.string,
    onHandleSelect: PropTypes.func
};

const defaultProps = {
    className: '',
    onHandleSelect: () => {}
};

const Highlights = ({ values, className, onHandleSelect }) => {
    const handleHighlightClick = ({ content: highlight, event }) => onHandleSelect({
        event, highlight
    });

    return (
        <div className={className}>
            {values.map((highlight, index) => (
                <Highlight
                    content={highlight}
                    key={highlight.id}
                    position={`0${index + 1}`}
                    onHighlightClick={handleHighlightClick}
                />
            ))}
        </div>
    );
};

Highlights.propTypes = propTypes;
Highlights.defaultProps = defaultProps;

const withStyles = styled(Highlights)(() => ({
    [`${HighlightCard} + ${HighlightCard}`]: {
        marginTop: 30
    }
}));

export default memo(withStyles);
