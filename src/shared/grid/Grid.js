import styled from 'styled-components';
import { createGrid } from '../../theme';

const Grid = styled.div(({ theme }) => ({
    ...createGrid(
        theme.gridSettings.columns,
        theme.gridSettings.width,
        theme.gridSettings.gutter
    )
}));

export default Grid;
