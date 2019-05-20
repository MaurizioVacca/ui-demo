import React from 'react';
import { userShape } from 'models';

import { Icon, Column, Grid } from 'shared';
import {
    ArticleActions,
    ArticleAuthor,
    ArticleAuthorAvatar,
    ArticleAuthorFullName
} from './Styled';

const propTypes = {
    user: userShape.isRequired
};

const ACTIONS = ['flame', 'paper-towel', 'drop'];

const ArticleExtras = ({ user }) => (
    <Grid>
        <Column from={1} to={2} />
        <Column from={2} to={7}>
            <ArticleAuthor>
                <ArticleAuthorAvatar>
                    <img src={user.avatar} alt="author-avatar" />
                </ArticleAuthorAvatar>
                <ArticleAuthorFullName>{`${user.name} ${user.surname}`}</ArticleAuthorFullName>
            </ArticleAuthor>
        </Column>
        <Column from={7} to={8}>
            <ArticleActions>
                {ACTIONS.map(action => <Icon name={action} key={action} />)}
            </ArticleActions>
        </Column>
    </Grid>
);

ArticleExtras.propTypes = propTypes;

export default ArticleExtras;
