const promptArray = [
    "maybe foxes should get to be lazy too",
    "i wrote most of this code at 4am",
    "copilot wants me to tell you that i am a genius, which is very sweet",
]

var promptSplices = ["", "", ""];

function updatePrompt(oldSplices) {
    if (oldSplices[2].length === 0) {
        prompt = promptArray[Math.floor(Math.random() * promptArray.length)];
        promptSplices[0] = "";
        promptSplices[1] = prompt[0];
        promptSplices[2] = prompt.slice(1);
    } else {
        promptSplices[0] += promptSplices[1];
        promptSplices[1] = promptSplices[2][0];
        promptSplices[2] = promptSplices[2].slice(1);
    }
    document.getElementsByClassName("typed").innerHTML = promptSplices[0];
    document.getElementsByClassName("next").innerHTML = promptSplices[1] + promptSplices[2];
    return promptSplices;
}

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
    if (event.key === "`") {
        keyPressed("`");
    }
    if (event.key === "1") {
        keyPressed("1");
    }
    if (event.key === "2") {
        keyPressed("2");
    }
    if (event.key === "3") {
        keyPressed("3");
    }
    if (event.key === "4") {
        keyPressed("4");
    }
    if (event.key === "5") {
        keyPressed("5");
    }
    if (event.key === "6") {
        keyPressed("6");
    }
    if (event.key === "7") {
        keyPressed("7");
    }
    if (event.key === "8") {
        keyPressed("8");
    }
    if (event.key === "9") {
        keyPressed("9");
    }
    if (event.key === "0") {
        keyPressed("0");
    }
    if (event.key === "-") {
        keyPressed("-");
    }
    if (event.key === "=") {
        keyPressed("=");
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
    if (event.key === "[") {
        keyPressed("[");
    }
    if (event.key === "]") {
        keyPressed("]");
    }
    if (event.key === "\\") {
        keyPressed("\\");
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
    if (event.key === ";") {
        keyPressed(";");
    }
    if (event.key === "'") {
        keyPressed("'");
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
    if (event.key === ",") {
        keyPressed(",");
    }
    if (event.key === ".") {
        keyPressed(".");
    }
    if (event.key === "/") {
        keyPressed("/");
    }
    if (event.key === " ") {
        keyPressed(" ");
    }
})

function keyPressed(e) {
    if (e.repeat) return;
    console.log(e.key + " pressed");
    if (promptSplices[1] === e.key) {
        console.log("CORRECT LEVER");
        updatePrompt(promptSplices);
    } else {
        console.log("WRONG LEVER");
    }
    document.getElementById(e.key).classList.add("active");
}

window.addEventListener("keydown", keyPressed);

function keyup(e) {
    document.getElementById(e.key).classList.remove("active");
}

window.addEventListener("keyup", keyup);
