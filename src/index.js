
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix) || matrix.length == 0){
    return [];
  }
  var arr = [];
  var newArr = [];
  for(var t = 0; t < matrix.length; t++){
    if(t%2==0){
      matrix[t].sort(function(a, b) {
        return a - b;
      })}
      else{
        matrix[t].sort(function(a, b) {
          return b - a;
        })
      }
      newArr.push(matrix[t]);
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      arr.push(newArr[i][j]);     
    }
  }
  return arr;
};
