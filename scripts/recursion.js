// const recursionDataValues = document.querySelectorAll("[recursion-data-value]")

//LEFT PANEL START
    //1ST Pane START
    const textList = ["deified", "nothing", "absent", "civic", "radar", "amusing", "level", "rotor", "scorching", "do geese see god", "race car", "ngan nga", "UwU", "OwO", "refer", "titan nation"];

    let chosenTextPalindrome = textList[randomRange(0, textList.length)];
    // let chosenTextPalindrome = textList[textList.length - 1];

    dataValues[0].innerHTML = `The chosen text is "${chosenTextPalindrome}"`;//Note for template literal: USE `

    chosenTextPalindrome = chosenTextPalindrome.split(" ").join(""); //Remove all whitespace

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
    //1ST Pane END
    
    
    //2ND Pane START
    numbList = [];
    
    let range = randomRange(4, 12);
    let pickedNum = 0;
    
    for (let i = 0; i < range; ++i) { //for better looking result
        pickedNum = randomRange(0, 30);
        numbList.push(pickedNum);
    
        if (i != range - 1) {
            dataValues[1].innerHTML += pickedNum + ", ";
        } else {
            dataValues[1].innerHTML += pickedNum;
        }
    }
    
    mergeSort(numbList, 0, numbList.length);
    
    for (let i = 0; i < numbList.length; ++i) { //for better looking result
        if (i != numbList.length - 1) {
            resultsContainer[1].innerHTML += numbList[i] + ", ";
        } else {
            resultsContainer[1].innerHTML += numbList[i];
        }
    }
    
    function mergeArray(arr, leftPointer, middlePoint, rightPointer) {
        let tempArray = [];
        for (let i = 0; i < arr.length; ++i) {
            tempArray.push(0);
        }
    
        let leftCount = leftPointer;
        let midCount = middlePoint + 1;
        let indexCount = leftPointer;
    
        while (leftCount <= middlePoint && midCount <= rightPointer) {
            if (arr[leftCount] > arr[midCount]) {
                tempArray[indexCount++] = arr[midCount++];
            } else {
                tempArray[indexCount++] = arr[leftCount++];
            }
        }
    
        while (leftCount <= middlePoint) {
            tempArray[indexCount++] = arr[leftCount++];
        }
    
        while (midCount <= rightPointer) {
            tempArray[indexCount++] = arr[midCount++];
        }
    
        if (indexCount > arr.length) {
            indexCount = arr.length; //Prevent creating fake elements
        }
    
        for (let i = leftPointer; i < indexCount; ++i) {
            arr[i] = tempArray[i];
        }
    }
    
    function mergeSort(arr, leftPointer, rightPointer) {
        if (leftPointer < rightPointer) {
            let middlePoint = Math.floor((leftPointer + rightPointer)/2);
            //gotta be "floor" because "round" will end up raising the value up
            
            mergeSort(arr, leftPointer, middlePoint);
            mergeSort(arr, middlePoint + 1, rightPointer);
    
            mergeArray(arr, leftPointer, middlePoint, rightPointer);
        }
    
        return;
    }
    
    //2ND Pane END
//LEFT PANEL END


//RIGHT PANEL START
    //1ST Pane START
    // The Ha Noi Tower Problem
    const moveList = document.querySelector(".the-Ha-Noi-tower-problem");
    // Normal version
        function HaNoiTower(amount, from, to) {

            if (amount == 1) {
                printMove(from, to);
                return;
            }

            let theOtherCollumn = 6 - from - to; //The collumns are labeled from 1-3 -> the sum'll be 6. Therefor, to find the last column, get the remainder of 6 - the other 2

            //This is to find the available column

            HaNoiTower(amount - 1, from, theOtherCollumn); //Move the smaller disc to the desire pole

            let moveDescription = document.createElement("li");
            // moveDescription.className = "the-Ha-Noi-tower-move";
            // moveDescription.innerHTML = `Disc go from collumn ${from} to collumn ${to}`;
            // moveList.appendChild(moveDescription);

            printMove(from, to);

            HaNoiTower(amount - 1, theOtherCollumn, to); // move larger disc to the other pole

        }

        function printMove(from, to) {
            console.log(`Disc go from collumn ${from} to collumn ${to}`);
        }

        // HaNoiTower(3, 1, 3);