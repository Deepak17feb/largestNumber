var array = [1,2,4,5,6,7,8,9];

function largestNum(val) {
  var num = 0;
  
  for(var i = 0; i <= val.length; i++) {
    if(val[i] > i) {
      num = val[i];
    }
  }
  console.log(num)
}
largestNum(array)
