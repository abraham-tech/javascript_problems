let arr = [2, 3, 5, 6, 4, 23, 1, 45, 8, 56];
let selectionSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};
selectionSort();
console.log(arr);
