function focus() {
    //input field
    const focusInput = document.querySelector(".focusInput");

    // input field value
    const focusText = focusInput.value;
    console.log(focusText);
    // will not accept empty
    if(focusText.value === "") return;

    // new div created each time; checkbox container
    const focusItem = document.createElement("div");
    focusItem.className = "focusItem";

    // parent div to append children
    const newFocusDiv = document.querySelector(".newFocusDiv");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.verticalAlign = "middle";

    // label
    const label = document.createElement("label");
    label.textContent = focusInput.value;
    label.style.marginLeft = "10px";
    label.style.fontSize = "28.8px";
    label.style.verticalAlign = "middle";
    console.log(focusInput.value);

    // delete
    const deleteFocus = document.createElement("span");
    deleteFocus.className = "deleteFocus material-symbols-outlined";
    deleteFocus.innerText = "backspace";
    deleteFocus.id = "deleteFocus";
    deleteFocus.style.verticalAlign = "middle";
    deleteFocus.style.marginLeft = "5px";

    // delete on click
    deleteFocus.onclick = function() {
        newFocusDiv.removeChild(focusItem); 
        focusInput.style.display = "block";
        document.querySelector(".today").style.display = "none";
        document.querySelector(".focus-question").style.display = "flex";
    }

    focusItem.appendChild(checkbox);
    focusItem.appendChild(label);
    focusItem.appendChild(deleteFocus);

    newFocusDiv.appendChild(focusItem);

    focusInput.value = "";

    checkbox.onclick = function() {
        label.classList.toggle("done");
    }

};

document.querySelector(".focusInput").addEventListener("keypress", function(enter){
    if(enter.key === "Enter"){
            document.querySelector(".focusInput").style.display = "none";
            focus();
            document.querySelector(".today").style.display = "block";
            document.querySelector(".focus-question").style.display = "none";
        }
    }
)

