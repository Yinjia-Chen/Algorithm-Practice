let arr = [10,1,2,10,11,15]

var peakIndexInMountainArray = function (arr) {
  let top = arr[0];
  let index = 0;
  for (index; index < arr.length; index++){
    if (arr[index] >= top) {
      top = arr[index];
    } else {
      break;
    }
  }
  return index-1
};

console.log(peakIndexInMountainArray(arr))