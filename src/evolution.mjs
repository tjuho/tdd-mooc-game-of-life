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
  return res;
}
    
function rotateMatrix(matrix){
  return matrix.length === 0 ? [] : matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}

export function step(matrix){
  let ematrix = expand(matrix);
  const ewidth = ematrix[0].length;
  const eheight = ematrix.length;
  let res = [];
  for (let r = 0; r < eheight; r++){
    res[r] = Array(ewidth).fill(false);
  }
  for (let y = 0; y < eheight; y++){
    for (let x = 0; x < ewidth; x++){
      let aliveCount = 0;
      for (let r = y-1; r <= y+1; r++){
        for (let c = x-1; c <= x+1; c++){
          let isalive = (!(r === y && c === x) && r > -1 && r < eheight && c > -1 && c < ewidth && ematrix[r][c])
          if (isalive) {
            aliveCount++;
          }
        }
      }
      if (!ematrix[y][x] && aliveCount === 3){
        res[y][x] = true;
      } else if (ematrix[y][x] && (aliveCount === 3 || aliveCount === 2)){
        res[y][x] = true;
      }
    }
  }
  return shrink(res);
}
        