import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRelativeSize } from 'theme';

import Cover from '../cover';

const ArticleWrapper = styled.div(() => ({
    position: 'relative',
    width: '100%'
}));

const ArticleHeading = styled.h1(({ theme }) => ({
    ...theme.text.h1,
    zIndex: 10,
    position: 'relative',
    lineHeight: getRelativeSize(44)
}));

const ArticleBody = styled.div(({ theme }) => ({
    ...theme.text.paragraph,
    zIndex: 10,
    position: 'relative',
    letterSpacing: 0.5,
    lineHeight: getRelativeSize(26),
    paddingBottom: 24,
    borderBottom: `1px solid ${theme.colors.dewDrop}`,
    color: theme.colors.darkGrey
}));

const ArticleAuthor = styled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'flex-row',
    alignItems: 'center',
    zIndex: 10,
    paddingTop: 22,
    color: theme.colors.grey,
    fontSize: getRelativeSize(12),
    fontFamily: theme.fontFamilies.secondary
}));

const ArticleAuthorFullName = styled.div``;

const ArticleAuthorAvatar = styled.div(() => ({
    position: 'relative',
    zIndex: 10,
    borderRadius: '100%',
    overflow: 'hidden',
    height: 24,
    width: 24,
    [`& + ${ArticleAuthorFullName}`]: {
        marginLeft: 10
    }
}));

const ArticleActions = styled.div(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
    paddingTop: 22
}));

const ArticleCaption = styled.div(({ theme }) => ({
    ...theme.text.caption,
    zIndex: 10,
    position: 'relative'
}));

const ArticleContent = styled.div(() => ({
    position: 'relative',
    top: -188,
    width: 1170,
    margin: '0 auto',
    paddingTop: 42
}));

const ArticleAnimatedBackground = styled.div(({ theme, xScale = 1 }) => ({
    backgroundColor: theme.colors.white,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    top: 0,
    left: 0,
    transition: 'transform 0.4s ease-out',
    borderRadius: '12px 12px 0 0',
    transform: `scale(${xScale}, 1)`
}));

ArticleAnimatedBackground.propTypes = {
    xScale: PropTypes.number
};

const ArticleCoverWrapper = styled.div(() => ({
    position: 'relative',
    height: 610,
    width: '100%',

    [`${Cover}`]: {
        position: 'absolute',
        width: '100%'
    }
}));

const RelatedArticles = styled.div(({ offsetY = 0 }) => ({
    position: 'relative',
    zIndex: 10,
    top: 464,
    right: 161,
    float: 'right',
    transform: `translateY(${offsetY}px)`,
    transformStyle: 'preserve-3d',
    transition: 'transform 200ms linear',
    paddingBottom: 26
}));

RelatedArticles.propTypes = {
    offsetY: PropTypes.number
};

export {
    ArticleActions,
    ArticleAuthor,
    ArticleAuthorAvatar,
    ArticleAuthorFullName,
    ArticleBody,
    ArticleCaption,
    ArticleContent,
    ArticleAnimatedBackground,
    ArticleCoverWrapper,
    ArticleHeading,
    ArticleWrapper,
    RelatedArticles
};
