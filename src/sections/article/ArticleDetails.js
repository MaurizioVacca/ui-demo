import React from 'react';

import { articleShape } from 'models';

import { Column, Grid } from 'shared';
import { ArticleBody, ArticleCaption, ArticleHeading } from './Styled';

const propTypes = {
    article: articleShape.isRequired
};

const ArticleDetails = ({ article: { caption, title, description } }) => (
    <Grid>
        <Column from={1} to={2} />
        <Column from={2} to={8}>
            <ArticleCaption>{caption}</ArticleCaption>
            <ArticleHeading>{title}</ArticleHeading>
            <ArticleBody>{description}</ArticleBody>
        </Column>
    </Grid>
);
ArticleDetails.propTypes = propTypes;

export default ArticleDetails;
