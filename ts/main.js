"use strict";
const textArea = document.getElementById("TextArea");
textArea.addEventListener("keypress", checkInput);
function checkInput(event) {
    let keyCode = event.keyCode;
    switch (keyCode) {
        case 27: {
            alert("oh shit");
            break;
        }
        default: {
            alert("l");
            break;
        }
    }
}
