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
    let comptedWid = Number(tempObj.getPropertyValue("width").split("px")[0]);

    compSubContStyle[index] = Object.assign(tempObj, {"comptedHei": comptedHei}, {"comptedWid": comptedWid});

    // console.log(`Original Height of [${index}]: ${compSubContStyle[index]["comptedHei"]}`);
    // console.log(`Original Width of [${index}]: ${compSubContStyle[index]["comptedWid"]}`);

    //JS doesn't support appending properties into Object so we use Object.assign into a tempObj and reassign it to the original Object instead

    // Just for clarity
    allSubContainer[index].style.height = compSubContStyle[index]["comptedHei"] + "px";
    // allSubContainer[index].style.width = compSubContStyle[index]["comptedWid"] + "px";
});

console.log(allPanel);

function keepEqual() {
    for (let j = 0; j < allPanel.length / 2; j++) {
        let extraIncrement = j * 4;
        
        // THIS IS FOR THE HEIGHT OF THE SUB-CONTAINERS ON THE SAME ROW
        for (let i = 0; i < allPanel.length / 2; i++) {
            if (compSubContStyle[i + extraIncrement]["comptedHei"] > compSubContStyle[i + 2 + extraIncrement]["comptedHei"]) {
                allSubContainer[i + 2 + extraIncrement].style.height = compSubContStyle[i + extraIncrement]["comptedHei"] + "px";
            }
            
            else {
                allSubContainer[i + extraIncrement].style.height = compSubContStyle[i + 2 + extraIncrement]["comptedHei"] + "px";
            }
        }



        // THIS IS FOR THE WIDTH OF THE SUB-CONTAINERS ON THE SAME COLUMN
        for (let i = 0; i < allPanel.length; i += 2) {
            if (compSubContStyle[i + extraIncrement]["comptedWid"] > compSubContStyle[i + 1 + extraIncrement]["comptedWid"]) {
                console.log("upper larger");
                console.log(`Original Width of [${i + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);
                console.log(`Original Width of [${i + 1 + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);

                allSubContainer[i + 1 + extraIncrement].style.width = compSubContStyle[i + extraIncrement]["comptedWid"] + "px";
                console.log(`New Width of [${i + 1 + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);

            }
            
            else {
                console.log("lower larger");

                console.log(`Original Width of [${i + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);
                console.log(`Original Width of [${i + 1 + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);
                allSubContainer[i + extraIncrement].style.width = compSubContStyle[i + 1 + extraIncrement]["comptedWid"] + "px";
                console.log(`New Width of [${i + extraIncrement}]: ${compSubContStyle[i + extraIncrement]["comptedWid"]}`);

            }
            console.log("");
            console.log("");
            console.log("");
        }
    }
}

keepEqual();