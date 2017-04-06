/*jshint esversion: 6*/

module.exports = () => {
  var min = 0;
  function selectionSort( arr ){
    if(Array.isArray(arr) !== true){
      return false;
    }
  if( min === arr.length - 1 ){
    return arr;
  }
  var smallest = arr[min];
  for (var i = min; i < arr.length; i ++){
    if(typeof arr[i] !== 'number'){
      return false;
    }
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
  return selectionSort(arr);
  }
  return{
    selectionSort,
  };
};

