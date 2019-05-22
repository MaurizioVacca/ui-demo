import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    columnFrom: PropTypes.number.isRequired,
    columnTo: PropTypes.number.isRequired,
    rowFrom: PropTypes.number.isRequired,
    rowTo: PropTypes.number.isRequired
};

const Cell = styled.div(({
    columnFrom,
    columnTo,
    rowFrom,
    rowTo
}) => ({
    gridRow: `${rowFrom} / ${rowTo}`,
    gridColumn: `${columnFrom} / ${columnTo}`
}));

Cell.propTypes = propTypes;

export default Cell;
