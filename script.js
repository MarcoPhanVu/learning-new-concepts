const dataValues = document.querySelectorAll(".value")
const resultsContainer = document.querySelectorAll(".result")


// COMMON
const randomRange = (min, max) => Math.floor(Math.random()*(max-min)) + min;


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
// randomRange
//2ND SECTION END



// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })

