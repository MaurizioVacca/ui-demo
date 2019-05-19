import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Highlight from './Highlight';
import { HighlightCard } from './Styled';
import highlightProps from './highlightProps';

const propTypes = {
    values: PropTypes.arrayOf(highlightProps).isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const Highlights = ({ values, className }) => (
    <div className={className}>
        {values.map((highlight, index) => <Highlight content={highlight} key={highlight.id} position={`0${index + 1}`} />)}
    </div>
);

Highlights.propTypes = propTypes;
Highlights.defaultProps = defaultProps;

export default styled(Highlights)(() => ({
    [`${HighlightCard} + ${HighlightCard}`]: {
        marginTop: 30
    }
}));
