const result = [],
    spMatrix = (n, m) => {
    const matrix = [];

    for (let i = 0, count = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < m; j++) {
            matrix[i][j] = ++count;
        }
    }
    console.log('spMatrix:initial:output:', JSON.stringify(matrix));
    return matrix;
}

function provideSpiral(matrix, i, j) {
    if (!matrix[i] || !matrix[i][j]) {
        return;
    }
    // console.log('spMatrix:spiral:output:', matrix[i][j]);
    result.push(matrix[i][j]);
    matrix[i][j] = null;
    provideSpiral(matrix, i, j + 1);
    provideSpiral(matrix, i + 1, j);
    provideSpiral(matrix, i, j - 1);
    provideSpiral(matrix, i - 1, j);

};

const spiralOutPut = (n, m) => (provideSpiral(spMatrix(n, m), 0, 0), result);


console.log('spMatrix:spiral:output:', spiralOutPut(3, 3));