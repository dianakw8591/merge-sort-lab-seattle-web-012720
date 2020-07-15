function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1[0]);
      arr1.shift();
    } else {
      sorted.push(arr2[0]);
      arr2.shift();
    }
  }
  return sorted.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let midIndex = arr.length/2;
    let firstHalf = arr.slice(0, midIndex);
    let secondHalf = arr.slice(midIndex);
    console.log(firstHalf, secondHalf)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
