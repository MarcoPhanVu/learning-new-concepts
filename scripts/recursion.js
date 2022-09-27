//LEFT PANEL START
    //1ST Pane START
    const textList = ["deified", "nothing", "absent", "civic", "radar", "amusing", "level", "rotor", "scorching", "dogeeseseegod", "racecar", "ngannga"];

    let chosenTextPalindrome = textList[randomRange(0, textList.length)];
    dataValues[0].innerHTML = `The chosen text is "${chosenTextPalindrome}"`;//Note for template literal: USE `
    
    let checkPalindrome = text => isPalindrome(text) ? `"${text}" is a Palindrome.` : `"${text}" is NOT a Palindrome.`;
    
    resultsContainer[0].innerHTML = checkPalindrome(chosenTextPalindrome);
    
    function isPalindrome(text) {
        if (text.length <= 1) return true;
    
        if (text[0] == text[text.length - 1]) return isPalindrome(text.substring(1, text.length - 1));
    
        return false;
    }
    //1ST Pane END
    
    
        //2ND Pane START
    numbList = [];
    
    let range = randomRange(4, 16);
    let pickedNum = 0;
    
    for (let i = 0; i < range; ++i) { //for better looking result
        pickedNum = randomRange(0, 50);
        numbList.push(pickedNum);
    
        if (i != range - 1) dataValues[1].innerHTML += pickedNum + ", ";
        
        else dataValues[1].innerHTML += pickedNum;
    }
    
    mergeSort(numbList, 0, numbList.length);
    
    for (let i = 0; i < numbList.length; ++i) { //for better looking result
        if (i != numbList.length - 1) resultsContainer[1].innerHTML += numbList[i] + ", ";
        else resultsContainer[1].innerHTML += numbList[i];
    }
    
    function mergeArray(arr, leftPointer, middlePoint, rightPointer) {
        let tempArray = [];
        for (let i = 0; i < arr.length; ++i) tempArray.push(0);
    
        let leftCount = leftPointer;
        let midCount = middlePoint + 1;
        let indexCount = leftPointer;
    
        while (leftCount <= middlePoint && midCount <= rightPointer) {
            if (arr[leftCount] > arr[midCount]) tempArray[indexCount++] = arr[midCount++];
    
            else tempArray[indexCount++] = arr[leftCount++];
        }
    
        while (leftCount <= middlePoint) tempArray[indexCount++] = arr[leftCount++];
    
        while (midCount <= rightPointer) tempArray[indexCount++] = arr[midCount++];
    
        if (indexCount > arr.length) indexCount = arr.length; //Prevent creating fake elements
    
        for (let i = leftPointer; i < indexCount; ++i) arr[i] = tempArray[i];
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