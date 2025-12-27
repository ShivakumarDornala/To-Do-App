const inputBox = document.getElementById("input-Box");
const listTasks = document.getElementById("list-tasks");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something....");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listTasks.appendChild(li);

    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "Delete";
    deleteSpan.classList.add("delete");
    li.appendChild(deleteSpan);

    let editSpan = document.createElement("span");
    editSpan.innerHTML = "Edit";
    editSpan.classList.add("edit");
    li.appendChild(editSpan);
  }
  inputBox.value = "";
  saveData();
}

listTasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains("edit")) {
      let li = e.target.parentElement; // Get the parent <li> element
      let currentText = li.firstChild.textContent; // Get the current task text
      let newValue = prompt("Edit your task:", currentText); // Prompt for new text
      if (newValue !== null && newValue.trim() !== "") {
        li.firstChild.textContent = newValue; // Update the text
      }
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listTasks.innerHTML);
}

function showTask() {
  listTasks.innerHTML = localStorage.getItem("data");
}
showTask();
