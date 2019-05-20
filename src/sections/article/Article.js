import React, {
    useRef,
    useEffect,
    useState,
    memo
} from 'react';
import PropTypes from 'prop-types';

import { articleShape } from 'models';
import getUserById from 'api/users';

import {
    Grid,
    Column,
    Icon
} from 'shared';

import Cover from '../cover';
import Highlights from '../highlights';
import {
    ArticleActions,
    ArticleAuthor,
    ArticleAuthorAvatar,
    ArticleAuthorFullName,
    ArticleAnimatedBackground,
    ArticleBody,
    ArticleCaption,
    ArticleHeading,
    ArticleWrapper,
    ArticleCoverWrapper,
    ArticleContent,
    RelatedArticles
} from './Styled';

const propTypes = {
    cover: PropTypes.string.isRequired,
    article: articleShape.isRequired,
    highlights: PropTypes.arrayOf(articleShape)
};

const defaultProp = {
    highlights: []
};

const Article = React.forwardRef(({ cover, article, highlights }, ref) => {
    const [backgroundScale, setBackgroundScale] = useState(1);
    const [user, setUser] = useState(null);
    const [offsetY, setOffsetY] = useState(-122);
    const [lastScroll, setLastScroll] = useState(0);
    const animatedBgRef = useRef(null);
    const parallaxRef = useRef(null);
    const actions = ['flame', 'paper-towel', 'drop'];

    const getScrollDirection = () => {
        const st = (document.body.getBoundingClientRect()).top;
        let direction = '';

        if (st < lastScroll) {
            direction = 'bottom';
        } else {
            direction = 'up';
        }

        setLastScroll(st);

        return direction;
    };

    const runArticleBgAnimation = () => {
        const checkArticlePosition = () => {
            const { current: domNode } = animatedBgRef;
            const offsetTop = domNode.getBoundingClientRect().top;

            if (offsetTop <= 0 && backgroundScale === 1) {
                setBackgroundScale(1.1);
            }

            if (offsetTop > 0 && backgroundScale > 1) {
                setBackgroundScale(1);
            }
        };

        window.addEventListener('scroll', checkArticlePosition);

        return () => window.removeEventListener('scroll', checkArticlePosition);
    };

    const runParallaxAnimation = () => {
        const moveParallax = () => {
            const { current: animateBgDomNode } = animatedBgRef;
            const direction = getScrollDirection();
            const offsetTop = animateBgDomNode.getBoundingClientRect().top;

            if (offsetY < 0 && direction === 'bottom') {
                const testValue = offsetY + Math.abs(lastScroll * 0.10);

                setOffsetY(testValue > 0 ? 0 : testValue);
            }

            if (offsetY > -122 && direction === 'up' && offsetTop >= 0) {
                const testValue = offsetY - Math.abs(lastScroll * 0.10);

                setOffsetY(testValue < -122 ? -122 : testValue);
            }
        };

        window.addEventListener('scroll', moveParallax);

        return () => window.removeEventListener('scroll', moveParallax);
    };

    // Bind the article bg animation
    useEffect(runArticleBgAnimation);

    // bind the parallax
    useEffect(runParallaxAnimation);

    // retrieve the user data
    useEffect(() => {
        const data = getUserById(article.author);

        console.log(data);

        setUser(data);
    }, [article]);

    return (
        <ArticleWrapper>
            <RelatedArticles ref={parallaxRef} offsetY={offsetY}>
                <Highlights values={highlights} />
            </RelatedArticles>
            <ArticleCoverWrapper>
                <Cover imgPath={cover} />
            </ArticleCoverWrapper>
            <ArticleContent ref={ref}>
                <ArticleAnimatedBackground ref={animatedBgRef} xScale={backgroundScale} />
                <Grid>
                    <Column from={1} to={2} />
                    <Column from={2} to={8}>
                        <ArticleCaption>{article.caption}</ArticleCaption>
                        <ArticleHeading>{article.title}</ArticleHeading>
                        <ArticleBody>{article.description}</ArticleBody>
                    </Column>
                </Grid>
                {user && (
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
                                {actions.map(action => <Icon name={action} key={action} />)}
                            </ArticleActions>
                        </Column>
                    </Grid>
                )}
            </ArticleContent>
        </ArticleWrapper>
    );
});

Article.propTypes = propTypes;
Article.defaultProps = defaultProp;

export default memo(Article);
