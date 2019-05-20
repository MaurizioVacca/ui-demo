import PropTypes from 'prop-types';

const articleShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    caption: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    hasDetails: PropTypes.bool,
    author: PropTypes.number.isRequired
});

export default articleShape;
