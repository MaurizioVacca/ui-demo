import React from 'react';
import PropTypes from 'prop-types';

import {
    rPig,
    rPaperTower,
    rFlame,
    rDrop
} from './regular';

const mapNameToIcon = {
    pig: rPig,
    'paper-towel': rPaperTower,
    flame: rFlame,
    drop: rDrop
};

const propTypes = {
    name: PropTypes.oneOf([
        'pig',
        'paper-towel',
        'flame',
        'drop'
    ]).isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const Icon = ({ name, className }) => (
    <div className={className}>
        <img src={mapNameToIcon[name]} alt={`${name}-icon`} />
    </div>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
