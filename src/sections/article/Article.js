import React, {
    useRef,
    useEffect,
    useState,
    memo,
    Fragment
} from 'react';
import PropTypes from 'prop-types';

import { articleShape } from 'models';
import getUserById from 'api/users';

import { Modal } from 'shared';
import { useModal } from 'shared/modal';

import Highlights from '../highlights';
import HighlightModalContent from '../highlights/HighlightModalContent';

import {
    ArticleAnimatedBackground,
    ArticleWrapper,
    ArticleContent,
    RelatedArticles
} from './Styled';
import ArticleDetails from './ArticleDetails';
import ArticleExtras from './ArticleExtras';
import ArticleGallery from './ArticleGallery';
import ArticleCover from './ArticleCover';

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
    const [modalOrigin, setModalOrigin] = useState(null);
    const [offsetY, setOffsetY] = useState(-122);
    const [selectedHighlight, setSelectedHighlight] = useState(null);
    const [lastScroll, setLastScroll] = useState(0);
    const [modalStatus, toggleModal] = useModal();
    const [nearbyHighlightNode, setNearbyHighlightNode] = useState(null);

    const animatedBgRef = useRef(null);
    const parallaxRef = useRef(null);

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

        setUser(data);
    }, [article]);

    const closeModal = () => {
        nearbyHighlightNode.removeAttribute('style');

        toggleModal();
    };

    const handleHighlightSelect = ({ event, highlight }) => {
        const highlightDOMNode = event.currentTarget.parentNode;
        const animatedNextSibiling = highlightDOMNode.nextSibling;

        const {
            x,
            y,
            width,
            height,
            top,
            left
        } = highlightDOMNode.getBoundingClientRect();

        setSelectedHighlight(highlight);
        setModalOrigin({
            x,
            y,
            width,
            height,
            top,
            left
        });

        // show modal
        toggleModal();

        animatedNextSibiling.setAttribute('style', 'transform: translateY(100%);');
        setNearbyHighlightNode(animatedNextSibiling);
    };

    return (
        <Fragment>
            <ArticleWrapper>
                <RelatedArticles ref={parallaxRef} offsetY={offsetY}>
                    <Highlights
                        values={highlights}
                        onHandleSelect={handleHighlightSelect}
                    />
                </RelatedArticles>
                <ArticleCover cover={cover} />
                <ArticleContent ref={ref}>
                    <ArticleAnimatedBackground ref={animatedBgRef} xScale={backgroundScale} />
                    <ArticleDetails article={article} />
                    {user && <ArticleExtras user={user} /> }
                    <ArticleGallery images={article.images} />
                </ArticleContent>
            </ArticleWrapper>
            <Modal status={modalStatus} onClickOutside={closeModal}>
                {selectedHighlight && (
                    <HighlightModalContent
                        highlight={selectedHighlight}
                        origin={modalOrigin}
                        onClick={closeModal}
                        status={modalStatus}
                    />
                )}
            </Modal>
        </Fragment>
    );
});

Article.propTypes = propTypes;
Article.defaultProps = defaultProp;

export default memo(Article);
