document.getElementById("submitButton").addEventListener("click", addTask);

function addTask(){
    
    const taskInput = document.getElementById("taskInput").value;

    if(taskInput){
        const newTask = document.createElement('li');
        newTask.innerText = taskInput;
        const list = document.getElementById("taskList")
        list.appendChild(newTask)

        const deleteButton = document.createElement("button");
        deleteButton.className="button";
        deleteButton.innerText="x";
        newTask.appendChild(deleteButton)

        deleteButton.addEventListener("click", () => list.removeChild(newTask))

        document.getElementById('taskInput').value=''
    }
}