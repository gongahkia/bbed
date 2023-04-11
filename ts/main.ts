const textArea = document.getElementById("TextArea")!;

textArea.addEventListener("keypress", checkInput);

function checkInput (event:any) {
    let keyCode:number = event.keyCode;
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

// figure out why escape key not being registered
