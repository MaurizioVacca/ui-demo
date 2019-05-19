import React from 'react';
import PropTypes from 'prop-types';

import Cover from '../cover';
import { ArticleWrapper, ArticleCoverWrapper } from './Styled';

const propTypes = {
    cover: PropTypes.string.isRequired
};

const Article = ({ cover }) => (
    <ArticleWrapper>
        <ArticleCoverWrapper>
            <Cover imgPath={cover} />
        </ArticleCoverWrapper>
    </ArticleWrapper>
);

Article.propTypes = propTypes;

export default Article;
