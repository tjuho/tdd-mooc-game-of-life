export function expand(matrix) {
  const owidth = matrix[0].length;
  const oheight = matrix.length;
  let res = [];
  for (let r = 0; r < oheight+2; r++){
    res[r] = Array(owidth+2).fill(false);
  }
  for (let r = 0; r < oheight; r++){
    for (let c = 0; c < owidth; c++){
      res[r+1][c+1] = matrix[r][c];
    }
  }
  return res;
}
