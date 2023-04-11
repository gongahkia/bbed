// --- universal state checkers

const modeChecker:number = 0; // --- normal mode: 0, insert mode:1, visual mode:2

// --- updating textarea
const textArea = document.getElementById("TextArea")!;

function checkForEscapeKey(event:any) {
    let localKeyCode = event.keyCode;
    switch (localKeyCode) {
        case 27:
            alert("Escape pressed. Normal mode.");
            break;
    }
}

// check to see whether other keys are registered when in different modes
