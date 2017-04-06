/*jshint esversion: 6*/

module.exports = () => {
  var min = 0;
  function selectionSort( arr ){
  if( min === arr.length - 1 ){
    console.log( arr);
    return arr;
  }
  var smallest = arr[min];
  for (var i = min; i < arr.length; i ++){
    var current;
    var prev;
      if ( arr[i] < smallest ) {
      smallest = arr[i];
      prev = arr[min];
      arr[i] = prev;
      arr[min] = smallest;
    }
  }
  min ++;
  selectionSort(arr);
  }
  return{
    selectionSort,
  };
};

var test = module.exports();
test.selectionSort([3,2,5,7,99,-9]);