const tasklist = document.getElementById("tasklist");
const taskname = document.getElementById("taskname");

function addnewTask() {
  if (taskname.value === "") alert("Please write your task...");
  let li = document.createElement("LI");
  li.innerHTML = taskname.value;
  tasklist.appendChild(li);
  taskname.value = " ";
  let span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span);
  saveData();
}
tasklist.addEventListener("click", function (f) {
  if (f.target.tagName === "SPAN") {
    f.target.parentElement.remove();
  } else if (f.target.tagName === "LI") {
    f.target.classList.toggle("check");
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", tasklist.innerHTML);
}

function showData() {
  tasklist.innerHTML = localStorage.getItem("data");
}

showData();