import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import PropTypes from 'prop-types';

import { articleShape } from 'models';

import { Grid, Column } from 'shared';

import {
    ModalWrapper,
    ModalCenteredContent,
    ModalContentBackground,
    ModalContentHeading,
    ModalContentImages,
    ModalImagesGrid
} from './Styled';

const propTypes = {
    highlight: articleShape.isRequired,
    origin: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }),
    onClick: PropTypes.func
};

const defaultProps = {
    origin: {
        width: 0,
        height: 0
    },
    onClick: () => {}
};

const HighlightModalContent = ({ highlight, origin, onClick }) => {
    const contentBgRef = useRef(null);
    const imagesRef = useRef(null);
    const imgGridRef = useRef(null);
    const headingRef = useRef(null);
    const [isRendered, setIsRendered] = useState(false);

    const onEnterAnimation = () => {
        const { current: headingDOMNode } = headingRef;
        const { current: imageGridDOMNode } = imgGridRef;
        const { current: imagesWrapperDOMNode } = imagesRef;
        const { current: backgroundDOMNode } = contentBgRef;
        const slideAndFadeIn = 'opacity: 1; transform: translateY(0);';

        if (backgroundDOMNode && !isRendered) {
            const computedSizes = backgroundDOMNode.getBoundingClientRect();

            const scaled = {
                x: origin.width / computedSizes.width,
                y: origin.height / computedSizes.height
            };

            const translated = {
                x: origin.left - (computedSizes.left) - ((computedSizes.width + origin.width) / 2),
                y: origin.top - (computedSizes.top)
            };

            const startingTransform = `transform: translate(${translated.x}px, ${translated.y}px) scale(${scaled.x}, ${scaled.y})`;

            backgroundDOMNode.setAttribute('style', `${startingTransform}`);
            backgroundDOMNode.style.opacity = 1;

            setTimeout(() => {
                backgroundDOMNode.style.transition = 'transform 400ms, width 350ms, height 350ms ease-out';

                backgroundDOMNode.style.transform = 'translate(0, 0) scale(1, 1)';

                if (headingDOMNode) {
                    setTimeout(() => {
                        headingDOMNode.setAttribute('style', slideAndFadeIn);
                    }, 350);
                }

                if (imageGridDOMNode) {
                    setTimeout(() => {
                        imageGridDOMNode.setAttribute('style', slideAndFadeIn);
                    }, 300);
                }

                if (imagesWrapperDOMNode) {
                    setTimeout(() => {
                        imagesWrapperDOMNode.setAttribute('style', 'transform: scale(1, 1)');
                    }, 200);
                }

                setIsRendered(true);
            }, 20);
        }
    };

    useEffect(onEnterAnimation);

    return (
        <ModalWrapper onClick={onClick}>
            <Grid>
                <Column from={1} to={2} />
                <Column from={2} to={12}>
                    <ModalCenteredContent>
                        <ModalContentBackground ref={contentBgRef} origin={origin}>
                            <ModalContentHeading ref={headingRef}>
                                <Grid>
                                    <Column from={1} to={2} />
                                    <Column from={2} to={7}>
                                        {highlight.title}
                                    </Column>
                                </Grid>
                            </ModalContentHeading>
                            <ModalContentImages ref={imagesRef}>
                                <ModalImagesGrid ref={imgGridRef}>
                                    <Column from={1} to={2} />
                                    {highlight.images.map((image, index) => (
                                        <Column
                                            from={index + index + 2}
                                            to={index * 2 + 2}
                                            key={Math.random()}
                                        >
                                            <img src={image} alt="highlight" />
                                        </Column>
                                    ))}
                                </ModalImagesGrid>
                            </ModalContentImages>
                        </ModalContentBackground>
                    </ModalCenteredContent>
                </Column>
                <Column from={12} to={13} />
            </Grid>
        </ModalWrapper>
    );
};

HighlightModalContent.propTypes = propTypes;
HighlightModalContent.defaultProps = defaultProps;

export default HighlightModalContent;
