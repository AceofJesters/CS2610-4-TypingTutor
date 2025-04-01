//define prompt string

document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") {
        //If letter in current is shifted
            //Mark shift key as pressed
            //Change keyboard to be shifted
            //Highlight capital letter
        //Else
            //Change keyboard to be shifted
            //Prompt for shift key
    }
    if (event.key === "q") {
        keyPressed("q");
    }
    if (event.key === "w") {
        keyPressed("w");
    }
    if (event.key === "e") {
        keyPressed("e");
    }
    if (event.key === "r") {
        keyPressed("r");
    }
    if (event.key === "t") {
        keyPressed("t");
    }
    if (event.key === "y") {
        keyPressed("y");
    }
    if (event.key === "u") {
        keyPressed("u");
    }
    if (event.key === "i") {
        keyPressed("i");
    }
    if (event.key === "o") {
        keyPressed("o");
    }
    if (event.key === "p") {
        keyPressed("p");
    }
    if (event.key === "a") {
        keyPressed("a");
    }
    if (event.key === "s") {
        keyPressed("s");
    }
    if (event.key === "d") {
        keyPressed("d");
    }
    if (event.key === "f") {
        keyPressed("f");
    }
    if (event.key === "g") {
        keyPressed("g");
    }
    if (event.key === "h") {
        keyPressed("h");
    }
    if (event.key === "j") {
        keyPressed("j");
    }
    if (event.key === "k") {
        keyPressed("k");
    }
    if (event.key === "l") {
        keyPressed("l");
    }
    if (event.key === "z") {
        keyPressed("z");
    }
    if (event.key === "x") {
        keyPressed("x");
    }
    if (event.key === "c") {
        keyPressed("c");
    }
    if (event.key === "v") {
        keyPressed("v");
    }
    if (event.key === "b") {
        keyPressed("b");
    }
    if (event.key === "n") {
        keyPressed("n");
    }
    if (event.key === "m") {
        keyPressed("m");
    }
    })

    function keyPressed(e) {
        if (e.repeat) return;
        console.log(e.key + " pressed");
        document.getElementById(e.key).classList.add("active");
      }
      
      window.addEventListener("keydown", keyPressed);
      
      function keyup(e) {
        document.getElementById(e.key).classList.remove("active");
      }
      
      window.addEventListener("keyup", keyup);


function updatePrompt(prev, curr, next){
    //If curr === key
        //If next is empty
            //Get new prompt
        //Add curr to prev
        //Add first of next to curr
        //Update display
}
