// THIS SCRIPT CLEANS UP THE WHOLE SCRIPT FOLDER

// Some functions require the whole Script Folder to finish loading to work
// Example: Max Height off a subContainer after Palindrome subContainer loaded.



let allPanel = document.querySelectorAll('.panel');
let allSubContainer = document.querySelectorAll('.sub-container');
let compSubContStyle = [];

compSubContStyle[0] = window.getComputedStyle(allSubContainer[0]);


allSubContainer.forEach( (panel, index) => {
    let tempObj = window.getComputedStyle(panel);
    // console.log(tempObj);
    // console.log("Position: ", index);

    let comptedHei = Number(tempObj.getPropertyValue("height").split("px")[0]);

    compSubContStyle[index] = Object.assign(tempObj, {"comptedHei": comptedHei});
    //JS doesn't support appending properties into Object so we use Object.assign into a tempObj and reassign it to the original Object instead

    //Just for clarity
    // allSubContainer[index].style.height = compSubContStyle[index]["comptedHei"] + "px";
    // console.log(`${index}: ${allSubContainer[index]["comptedHei"]}`);
    // console.log(`${index}: ${allSubContainer[index]}`);
    // console.log(`subContainerHei at ${index}: ${compSubContStyle[index]["comptedHei"]}`);

});

function keepEqual() {
    for (let i = 0; i < allSubContainer.length / 2; i++) {
        if(compSubContStyle[i]["comptedHei"] > compSubContStyle[i + 2]["comptedHei"]) {

            allSubContainer[i + 2].style.height = compSubContStyle[i]["comptedHei"] + "px";

            // console.log("subCont at: ", i, " ", typeof(allSubContainer[i]));
            // console.log("subCont at: ", i + 2, " ", allSubContainer[i + 2]);

        } else {
            // console.log("reacheryarcy");
            console.log(`${i} feels like she wanted to change`);
            console.log(`${i} was ${compSubContStyle[i]["comptedHei"]}`);
            console.log(`And ${i + 2} was ${compSubContStyle[i + 2]["comptedHei"]}`);
            allSubContainer[i].style.height = compSubContStyle[i + 2]["comptedHei"] + "px";
        }
    }
}

keepEqual();

// u stay here

// console.log("first: ", compSubContStyle[0].getPropertyValue("height").split("px")[0]);
// console.log("second: ",compSubContStyle[0].getPropertyValue("height").split("px")[0]);

// console.log(allPanel);
// console.log(allSubContainer);