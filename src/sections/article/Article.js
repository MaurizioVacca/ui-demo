import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import PropTypes from 'prop-types';

import { articleShape } from 'models';

import { Grid, Column } from 'shared';

import Cover from '../cover';
import {
    ArticleAnimatedBackground,
    ArticleBody,
    ArticleCaption,
    ArticleHeading,
    ArticleWrapper,
    ArticleCoverWrapper,
    ArticleContent
} from './Styled';

const propTypes = {
    cover: PropTypes.string.isRequired,
    article: articleShape.isRequired
};

const Article = React.forwardRef(({ cover, article }, ref) => {
    const [backgroundScale, setBackgroundScale] = useState(1);

    const animatedBgRef = useRef(null);

    useEffect(() => {
        const checkArticlePosition = () => {
            const offsetTop = animatedBgRef.current.getBoundingClientRect().top;

            if (offsetTop <= 0 && backgroundScale === 1) {
                setBackgroundScale(1.9);
            }

            if (offsetTop > 0 && backgroundScale > 1) {
                setBackgroundScale(1);
            }
        };

        window.addEventListener('scroll', checkArticlePosition);

        return () => window.removeEventListener('scroll', checkArticlePosition);
    }, [animatedBgRef, backgroundScale]);

    return (
        <ArticleWrapper>
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
            </ArticleContent>
        </ArticleWrapper>
    );
});

Article.propTypes = propTypes;

export default Article;
