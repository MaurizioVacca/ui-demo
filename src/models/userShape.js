import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    avatar: PropTypes.string
});

export default userShape;
