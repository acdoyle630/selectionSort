/*jshint esversion: 6*/
const testing = () => {
  var current = 1;
  function sort( arr ){
    if(current === arr.length){
      return;
    }
    for(var i = current; i >=0; i-- ){
      if (arr[current] > arr[ i - 1] || i - 1 === 0){
        arr.splice(i-1, 0, arr[current]);
        arr.splice(current + 1, 1);
        }
      }
      current ++;
      sort(arr);
      return arr;
    }
  return {
    sort,
  };
};


var test = testing();
console.log(test.sort([9,6,4,3,2,1]));