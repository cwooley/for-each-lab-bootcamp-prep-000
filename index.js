function iterativeLog(arr){
  var i = 0;
  arr.forEach(function(element){
    console.log(`${i}: ${element}`);
    i++
  })
}


function iterate(callback){
  var array = ['torben', 'misty', 'august'];
  array.forEach(callback);
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
