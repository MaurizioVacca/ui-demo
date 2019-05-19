import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    imgPath: PropTypes.string.isRequired,
};

const Cover = styled.div(({ imgPath }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url('${imgPath}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}));

Cover.propTypes = propTypes;

export default Cover;
