import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div(({ from, to }) => ({
    display: 'inline-block',
    verticalAlign: 'bottom',
    '@media (min-width: 1170px)': {
        gridColumn: `${from} / ${to}`
    },
}));

Column.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

export default Column;
