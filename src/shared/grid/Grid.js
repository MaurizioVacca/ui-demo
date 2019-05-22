import styled from 'styled-components';
import { createGrid, getRelativeSize } from 'theme';

const Grid = styled.div(({ theme }) => ({
    padding: getRelativeSize(61),
    '@media (min-width: 1170px)': {
        ...createGrid(
            theme.gridSettings.columns,
            theme.gridSettings.width,
            theme.gridSettings.gutter
        ),
        padding: 0
    }
}));

export default Grid;
