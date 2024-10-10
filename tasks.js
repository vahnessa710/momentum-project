//getting input field
const newTaskInput = document.querySelector(".newTaskInput");

//getting input value from user
const newTaskText = newTaskInput.value;

// get the taskList parent
const containerTaskList = document.querySelector(".container-taskList");

//input default value
newTaskInput.value = "";

// Tasks Button
const taskButton = document.querySelector(".task-label");

// New Task Button (green icon)
const newTaskButton = document.querySelector(".newTaskIcon")

//Hidden input Div
const newTaskInputDiv= document.querySelector(".container-newTaskInput");

// When Tasks is clicked starts here
taskButton.onclick = function () {
    document.querySelector(".container-tasks").style.display = "block";
} 
// When Tasks is clicked ends here

// When "New Task Icon" is clicked starts here
    newTaskButton.onclick = function displayContainerTasks(){
    newTaskInputDiv.style.display = "block";
    newTaskButton.style.display = "none";
}
// When "New Task Icon" is clicked ends here

function addTask() {
    //create variable = input.value
    const taskValue = newTaskInput.value.trim();
    if(taskValue === "") return; // does not accept empty

    // create div for checkbox and label container
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";

    //create checkboxes
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.verticalAlign = "middle";
    
    // create label element
    const label = document.createElement("label");
    label.innerText = newTaskInput.value;
    label.style.marginLeft = "10px";
    console.log(label);

    // create span as container of delete button
    const deleteTask = document.createElement("span");
    deleteTask.className = "deleteTask material-symbols-outlined";
    deleteTask.innerText = "close";
    deleteTask.id = "deleteBtn";

    
    // delete on click
    deleteTask.onclick = function() {
        containerTaskList.removeChild(taskItem); // deletes the newly created div from the parent 
    }

    // append checkbox, label and delete to new divs each time
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteTask);

    // append new divs to created div
    containerTaskList.appendChild(taskItem);

    // default value of input
    newTaskInput.value = "";

    // css upon checking
    checkbox.onclick = function() {
    label.classList.toggle("done");
}
    // exit task
    // const body = document.querySelector("body");
    // body.onclick= function() {
        
    // };
};

newTaskInput.addEventListener("keypress", function(enter){
    if(enter.key === "Enter"){
            document.querySelector(".get-started").textContent = "";
            addTask();
        }
    }
)