import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRelativeSize } from 'theme';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: null
};

const Logo = ({ className }) => <span className={className}>Asdrubale</span>;

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default styled(Logo)(({ theme }) => ({
    color: theme.colors.secondary,
    fontFamily: theme.fontFamilies.primary,
    fontSize: getRelativeSize(20),
    lineHeight: getRelativeSize(18),
    fontWeight: 700
}));
