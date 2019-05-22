const getRelativeSize = (refSize, baseSize = 16) => `${refSize / baseSize}rem`;

/**
 * Create a new grid layout.
 * @param {number} columns - the number of columns
 * @param {number} columnsWidth - the single column width
 * @param {number} columnsGutter - the gutter between each column
 * @return {{gridGap: string, gridTemplateColumns: string, display: string}}
 */
const createGrid = (columns, columnsWidth, columnsGutter) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${columnsWidth}px)`,
    gridGap: `${columnsGutter}px`
});

export { getRelativeSize, createGrid };
