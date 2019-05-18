import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const propTypes = {
    imgPath: PropTypes.string.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: null
};

const Cover = ({
    imgPath,
    className
}) => (
    <div className={className}>
        <img src={imgPath} alt="cover" />
    </div>
);

Cover.propTypes = propTypes;
Cover.defaultProps = defaultProps;

export default styled(Cover)(() => ({
    img: {
        width: '100%',
        height: 'auto'
    }
}));
