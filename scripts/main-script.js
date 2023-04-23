// const body = document.querySelector("body");

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

function RandomFromMinToMax(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}