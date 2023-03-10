export function matrixToRLE(matrix) {
  let res = "";
  const width = matrix[0].length;
  const height = matrix.length;
  for (let y = 0; y < height; y++){
    let prevch = '';
    let ch = '';
    let repeat = 1;
    for (let x = 0; x < width; x++){
      if (matrix[y][x]){
        ch = 'o';
      } else { 
        ch = 'b';
      }
      if (prevch === ch){
        repeat += 1;
      } else {
        res += (repeat > 1) ? repeat.toString()+prevch : prevch;
        repeat = 1;
        prevch = ch;
      }
      if (x === width-1 && y === height-1){
        res += (repeat > 1) ? repeat.toString()+ch : ch;
        res += "!";
      } else if (x === width-1){
        res += (repeat > 1) ? repeat.toString()+ch : ch;
        res += "$";
      }
    }
  }   
  return res;
}
