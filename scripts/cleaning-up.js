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
    allSubContainer[index].style.height = compSubContStyle[index]["comptedHei"] + "px";
    
    // console.log(`${index}: ${allSubContainer[index]["comptedHei"]}`);
    // console.log(`${index}: ${allSubContainer[index]}`);
    // console.log(`subContainerHei at ${index}: ${compSubContStyle[index]["comptedHei"]}`);

});

function keepEqual() {
    for (let j = 0; j < allPanel.length / 2; j++) {
        let extraIncrement = j * 4;
        
        for (let i = 0; i < allPanel.length / 2; i++) {
            if (compSubContStyle[i + extraIncrement]["comptedHei"] > compSubContStyle[i + 2 + extraIncrement]["comptedHei"]) {

                console.log(`[${i + extraIncrement}] left larger`);
                console.log(`[${i + extraIncrement}] was ${compSubContStyle[i + extraIncrement]["comptedHei"]}`);

                allSubContainer[i + 2 + extraIncrement].style.height = compSubContStyle[i + extraIncrement]["comptedHei"] + "px";

                console.log(`And [${i + 2 + extraIncrement}] was ${compSubContStyle[i + 2 + extraIncrement]["comptedHei"]}`);
                console.log(`Now [${i + 2 + extraIncrement}] is ${allSubContainer[i + 2 + extraIncrement].style.height}`);
                
                console.log("");
                console.log("");
            }
            
            else {
                // console.log("reacheryarcy");
                console.log(`[${i + extraIncrement}] left Smaller`);
                console.log(`[${i + extraIncrement}] was ${compSubContStyle[i + extraIncrement]["comptedHei"]}`);
                
                console.log(`And [${i + 2 + extraIncrement}] was ${compSubContStyle[i + 2 + extraIncrement]["comptedHei"]}`);

                allSubContainer[i + extraIncrement].style.height = compSubContStyle[i + 2 + extraIncrement]["comptedHei"] + "px";
                console.log(`Now [${i + extraIncrement}] is ${allSubContainer[i + extraIncrement].style.height}`);

                console.log("");
                console.log("");
            }
        }
    }

}

keepEqual();

// u stay here

// console.log("first: ", compSubContStyle[0].getPropertyValue("height").split("px")[0]);
// console.log("second: ",compSubContStyle[0].getPropertyValue("height").split("px")[0]);

// console.log(allPanel);
// console.log(allSubContainer);