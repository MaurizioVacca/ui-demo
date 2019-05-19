import PropTypes from 'prop-types';

const highlightProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    caption: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    hasDetails: PropTypes.bool
});

export default highlightProps;
