document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") {
        //If next letter is shifted
            //Highlight shift key as pressed
            //Change keyboard to be shifted
            //Prompt for capitol letter
        //Else
            //Change keyboard to be shifted
            //Prompt for shift key
    }
    if (event.key === "q") {
        keyPressed("q");
    }
    })

function keyPressed(key) {
    console.log(key);
    //Highlight key pressed
    //Update prompt string
}