import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div(({ from, to }) => ({
    gridColumn: `${from} / ${to}`
}));

Column.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

export default Column;
