

let input = document.getElementById("taskInput");
let button = document.getElementById("taskButton");
let list = document.getElementById("taskList");

input.value

// event listners
button.addEventListener("click", function (){
    console.log(input.value);

  let newTask = document.createElement("li")

  newTask.textContent = input.value
  list.appendChild(newTask)

   input.value = "";

});








/// select each element and store in variable input, button and list