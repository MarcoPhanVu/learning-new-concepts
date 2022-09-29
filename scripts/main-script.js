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

// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })

// template0 = (min, max) => Math.floor(Math.random()*(max-min)) + min;
// template1 = () => console.log("onsolec.gol");