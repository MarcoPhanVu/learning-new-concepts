const dataValues = document.querySelectorAll(".value")
const resultsContainer = document.querySelectorAll(".result")


// COMMON
const randomRange = (min, max) => Math.floor(Math.random()*(max-min)) + min;

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return;
}

//1ST SECTION START
const textList = ["deified", "nothing", "absent", "civic", "radar", "amusing", "level", "rotor", "scorching", "dogeeseseegod", "racecar", "ngannga"];

let chosenTextPalindrome = textList[randomRange(0, textList.length)];
dataValues[0].innerHTML = `The chosen text is "${chosenTextPalindrome}"`;//Note for template literal: USE `

let checkPalindrome = text => isPalindrome(text) ? `"${text}" is a Palindrome.` : `"${text}" is NOT a Palindrome.`;

resultsContainer[0].innerHTML = checkPalindrome(chosenTextPalindrome);

function isPalindrome(text) {
    if (text.length <= 1) {
        return true;
    }

    if (text[0] == text[text.length - 1]) {
        return isPalindrome(text.substring(1, text.length - 1));
    }

    return false;
}
//1ST SECTION END


//2ND SECTION START
// numbList = [7, 1, 0, 6, 4, 0, 3, 2, 4];
var numbList = [7, 1, 0, 6, 4];
// for (let i = 0; i < randomRange(0, 50); ++i) {
//     numbList.push(randomRange(0, 360))
// }

// for (let i = 0; i < 10; ++i) {
//     numbList.push(randomRange(0, 10))
// }

// console.log(numbList);

dataValues[1].innerHTML = numbList;
resultsContainer[1].innerHTML = mergeSort(numbList, 0, numbList.length);

function mergeArray(arr, leftPointer, middlePoint, rightPointer) {
    let tempArray = [];
    for (let i = 0; i < arr.length; ++i) {
        tempArray.push(0);
    }
    console.log("length: " + arr.length)
    console.log("tempArr = " + tempArray)

    let leftCount = leftPointer;
    let midCount = middlePoint + 1;
    let indexCount = leftPointer;

    // console.log("leftCount = " + leftCount);
    // console.log("middlePointer= " + middlePoint);
    // console.log("midCount= " + midCount);
    // console.log("right= " + rightPointer);


    while (leftCount <= middlePoint && midCount <= rightPointer) {
        console.log("Shit went here")
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

    if(indexCount > arr.length) { //Prevent creating fake elements
        indexCount = arr.length;
    }

    console.log("This is 1st tempArr generated: " + tempArray);
    while (leftCount <= middlePoint) {
        tempArray[indexCount] = arr[leftCount];
        ++leftCount;
        ++indexCount;
    }

    console.log("MidCount before loop: " + midCount);
    console.log("indexCount before loop: " + indexCount);

    while (midCount <= rightPointer) {
        tempArray[indexCount] = arr[midCount];
        ++midCount;
        ++indexCount;
    }

    console.log("MidCount after loop: " + midCount);
    console.log("indexCount after loop: " + indexCount);

    console.log("This is 2nd tempArr generated: " + tempArray);
    console.log();
    for (let i = leftPointer; i < indexCount; ++i) {
        arr[i] = tempArray[i];
    }
}

function mergeSort(arr, leftPointer, rightPointer) {
    if (leftPointer < rightPointer) {
        let middlePoint = Math.floor((leftPointer + rightPointer)/2);

        mergeSort(arr, leftPointer, middlePoint);
        mergeSort(arr, middlePoint + 1, rightPointer);

        mergeArray(arr, leftPointer, middlePoint, rightPointer);
    }

    return;
}
//2ND SECTION END




// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })

