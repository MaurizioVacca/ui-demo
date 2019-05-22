import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from 'models';

import styled from 'styled-components';

import { Icon, Column, Grid } from 'shared';
import {
    ArticleActions,
    ArticleAuthor,
    ArticleAuthorAvatar,
    ArticleAuthorFullName
} from './Styled';

const propTypes = {
    user: userShape.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

const ACTIONS = ['flame', 'paper-towel', 'drop'];

const ArticleExtras = ({ user, className }) => (
    <Grid className={className}>
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
ArticleExtras.defaultProps = defaultProps;

export default styled(ArticleExtras)(() => ({
    '@media (max-width: 1169px)': {
        paddingTop: 0,
        [`${Column}:nth-child(3)`]: {
            float: 'right'
        }
    },
    '@media (max-width: 320px)': {
        paddingTop: 0,
        [`${Column}:nth-child(3)`]: {
            float: 'none'
        }
    }
}));
