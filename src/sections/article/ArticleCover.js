import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Cover from '../cover';
import { ArticleCoverWrapper } from './Styled';

const propTypes = {
    cover: PropTypes.string.isRequired
};

const ArticleCover = ({ cover }) => (
    <ArticleCoverWrapper>
        <Cover imgPath={cover} />
    </ArticleCoverWrapper>
);

ArticleCover.propTypes = propTypes;

export default memo(ArticleCover);
