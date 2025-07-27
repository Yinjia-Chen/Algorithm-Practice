// 错误解法:一遇到0就将所在行列都置零,导致原数组不为0的地方也为0,置零结果出现错误
function setZeroes(matrix: number[][]): void {
  const m = matrix.length; // 行数
  const n = matrix[0].length; // 列数

  // 遍历矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        for (let x = 0; x < m; x++) {
          matrix[x][j] = 0;
        }
        for (let y = 0; y < n; y++) {
          matrix[m][y] = 0;
        }
      }
    }
  }
};

// 1.0:用数组标记需要置零的行和列
function setZeroes(matrix: number[][]): void {
  const m: number = matrix.length; // 行数
  const n: number = matrix[0].length; // 列数

  const row: Array<boolean> = new Array(m).fill(false); // 创建一个和原矩阵行数等长的新数组
  const column: Array<boolean> = new Array(n).fill(false); // 创建一个和原矩阵组列数等长的新数组

  // 遍历原矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true; // 标记需要置零对应的某行
        column[j] = true; // 标记需要置零对应的某列
      }
    }
  }

  // 置零操作
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || column[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};