function mergeArray(arr, leftPointer, middlePoint, rightPointer) {
	let tempArray = [];
	let leftCount = leftPointer;
	let midCount = middlePoint + 1;
	let indexCount = leftPointer;

	while (leftCount <= middlePoint && midCount <= rightPointer) {
		if (arr[leftCount] > arr[midCount]) {
			tempArray[indexCount] = arr[midCount];
			++midCount;
			++indexCount;
		} else {
			tempArray[indexCount] = arr[leftCount];
			++leftCount;
			++indexCount;
		}
	}

	while (leftCount <= middlePoint) {
		tempArray[indexCount] = arr[leftCount];
        ++leftCount;
        ++indexCount;
	}

	while (midCount <= rightPointer) { 
		tempArray[indexCount] = arr[midCount];
        ++midCount;
        ++indexCount;
	}

	for (let i = leftPointer; i < indexCount; i++) {
		arr[i] = tempArray[i];
	}
}

function mergeSort(arr, leftPointer, rightPointer) {
    if (leftPointer < rightPointer) {
        let middlePoint = Math.round((leftPointer + rightPointer)/2);

        mergeSort(arr, leftPointer, middlePoint);
        mergeSort(arr, middlePoint + 1, rightPointer);

        mergeArray(arr, leftPointer, middlePoint, rightPointer);
    }

    return;
}