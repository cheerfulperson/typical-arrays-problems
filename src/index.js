
exports.min = function min (array) {
  if( array == null || array[0] == undefined ){
    return 0;
  }
  let arr = array.sort((a, b) => a - b);
  return arr[0];
}

exports.max = function max (array) {
  if( array == null || array[0] == undefined ){
    return 0;
  }
  let arr = array.sort((a, b) => a - b).reverse();
  return arr[0];
}

exports.avg = function avg (array) {
  if( array == null || array[0] == undefined ){
    return 0;
  }
  let num = 0;
  for(n in array){
    num += array[n];
  }
  num = num / array.length
  return num;
}
