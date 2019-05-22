import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { articleShape } from 'models';

import { Column, Grid } from 'shared';
import { ArticleBody, ArticleCaption, ArticleHeading } from './Styled';

const propTypes = {
    article: articleShape.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const ArticleDetails = ({ article: { caption, title, description }, className }) => (
    <Grid className={className}>
        <Column from={1} to={2} />
        <Column from={2} to={8}>
            <ArticleCaption>{caption}</ArticleCaption>
            <ArticleHeading>{title}</ArticleHeading>
            <ArticleBody>{description}</ArticleBody>
        </Column>
    </Grid>
);
ArticleDetails.propTypes = propTypes;
ArticleDetails.defaultProps = defaultProps;

export default styled(ArticleDetails)(() => ({
    '@media (max-width: 1169px)': {
        paddingBottom: 0
    }
}));
