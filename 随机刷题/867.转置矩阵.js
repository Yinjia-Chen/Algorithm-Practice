/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// 1.0 由结果的数据结构反推数据push逻辑：时空复杂度 O(n^2)
var transpose = function (matrix) {
  // 处理空矩阵的边界情况
  if (matrix.length === 0) return [];

  // 原矩阵的行数和列数
  const originalRowCount = matrix.length;       // 原矩阵有多少行
  const originalColCount = matrix[0].length;    // 原矩阵有多少列

  const transposedMatrix = [];

  // 转置矩阵的行数 = 原矩阵的列数
  for (let col = 0; col < originalColCount; col++) {
    const newRow = [];
    // 转置矩阵的列数 = 原矩阵的行数
    for (let row = 0; row < originalRowCount; row++) {
      // 原矩阵的 [row][col] 对应转置矩阵的 [col][row]
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
};

// 2.0 先搭建矩阵，再根据转置逻辑交换行列：时间复杂度 O(m * n)  空间复杂度 O(1)
var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 先创建列，填充0，再用新数组覆盖每个0，创建每一行
  const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));

  // 转置矩阵，行列交换
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed;
};