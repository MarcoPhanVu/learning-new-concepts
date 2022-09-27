
numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function changeEleTo(arr, pos, to) {
    arr[pos] = to;
}

changeEleTo(numberList, 2, 22);
changeEleTo(numberList, 9, 99);
changeEleTo(numberList, 4, 44);
changeEleTo(numberList, 6, 66);

console.log(numberList);