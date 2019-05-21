import React from 'react';
import PropTypes from 'prop-types';

import { Column } from 'shared';
import { ArticleGalleryGrid, ArticleGalleryImageWrapper } from './Styled';

const propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
    images: []
};

const START_COL_INDEX = 2;

const ArticleGallery = ({ images }) => {
    let nextColIndex = START_COL_INDEX;

    const evaluateColumn = (index, content) => {
        let colFrom = 0;
        let colTo = 0;
        let rowFrom = 0;
        let rowTo = 0;

        if ((index + 1) % 3 === 1) {
            colFrom = nextColIndex;
            colTo = 2 + nextColIndex;
            rowFrom = 1;
            rowTo = 3;

            nextColIndex = colTo;
        } else {
            colFrom = nextColIndex;
            colTo = 1 + nextColIndex;

            if ((index + 1) % 3 === 0) {
                nextColIndex = colTo;

                rowFrom = 2;
                rowTo = 3;
            } else {
                rowFrom = 1;
                rowTo = 2;
            }
        }

        return (
            <ArticleGalleryImageWrapper
                columnFrom={colFrom}
                columnTo={colTo}
                rowFrom={rowFrom}
                rowTo={rowTo}
                key={index}
            >
                <img src={content} alt={`article-img-${index}`} />
            </ArticleGalleryImageWrapper>
        );
    };

    return (
        <ArticleGalleryGrid>
            <Column from={1} to={2} />
            {images.map((image, index) => evaluateColumn(index, image))}
        </ArticleGalleryGrid>
    );
};

ArticleGallery.propTypes = propTypes;
ArticleGallery.defaultProps = defaultProps;

export default ArticleGallery;
