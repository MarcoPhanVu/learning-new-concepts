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
numbList = [];
for (let i = 0; i < randomRange(0, 50); ++i) {
    numbList.push(randomRange(0, 360))
}

dataValues[1].innerHTML = numbList;
resultsContainer[1].innerHTML = mergeSort(numbList, 0, numbList.length - 1);

function mergeSort(arr, leftPointer, rightPointer, direction = "asc") {
    if (leftPointer < rightPointer) {
        let midPoint = Math.round((rightPointer - leftPointer)/2);
        mergeSort(arr, leftPointer, midPoint);
        mergeSort(arr, midPoint + 1, rightPointer);

        mergeArray(arr, leftPointer, midPoint, rightPointer, direction);
    }
    return;
}

function mergeArray(arr, leftPointer, midPoint, rightPointer, direction = "asc") {
    let tempArray = []
    let leftCount = leftPointer;
    let midCount = midPoint + 1;
    let totalCount = 0;

    while (leftCount <= midPoint && midCount < rightPointer) {

        if (direction = "asc") {
            if (arr[leftCount] > arr[midCount]) {
                tempArray.push(arr[midCount]);
                ++midCount;
                ++totalCount;
            } else {
                tempArray.push(arr[leftCount]);
                ++leftCount;
                ++totalCount;
            }
        } else if (direction = "des") {
            if (arr[leftCount] < arr[midCount]) {
                tempArray.push(arr[midCount]);
                ++midCount;
                ++totalCount;
            } else {
                tempArray.push(arr[leftCount]);
                ++leftCount;
                ++totalCount;
            }
        }
    }

    while (leftCount <= midPoint) {
        tempArray.push(arr[leftCount]);
        ++leftCount;
        ++totalCount;
    }

    while (midCount <= rightPointer) {
        tempArray.push(arr[midCount]);
        ++midCount;
        ++totalCount;
    }

    for (let i = 0; i < totalCount; ++i) {
        arr[i] = tempArray[i];
    }
}
//2ND SECTION END




// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })

