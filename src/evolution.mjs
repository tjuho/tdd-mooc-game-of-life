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

export function shrink(matrix){
  let res = matrix;
  const owidth = matrix[0].length;
  const oheight = matrix.length;
  for (let d = 0; d < 4; d++){
    while (res.length > 0 && !(res[0].reduce((a,b) => (a || b), false))){
      res.shift();
    }
    res = rotateMatrix(res);
  }
  console.log(res);
  return res;
}
    
function rotateMatrix(matrix){
  return matrix.length === 0 ? [] : matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}