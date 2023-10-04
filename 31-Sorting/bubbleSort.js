const bubblesort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const arr = [2, 4, 23, 1, 45, 8, 56, 4, 3, 1];

console.log(bubblesort(arr));
