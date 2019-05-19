import styled from 'styled-components';
import Cover from '../cover';

const ArticleWrapper = styled.div(() => ({
    position: 'relative',
    width: '100%'
}));

const ArticleContent = styled.div(() => ({ }));

const ArticleCoverWrapper = styled.div(() => ({
    position: 'relative',
    height: 610,
    width: '100%',

    [`${Cover}`]: {
        position: 'absolute',
        width: '100%'
    }
}));

export {
    ArticleContent,
    ArticleCoverWrapper,
    ArticleWrapper
};
