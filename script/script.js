// Theme changing code here
const theme = document.getElementById("theme-change").addEventListener("click", function (event) {
event.preventDefault();
const hexaValue = Math.floor(Math.random() * 0xffffff).toString(16);
document.body.style.background = `#${hexaValue}`
})
// =======================================================
// current date, month and year code here

const currentDate = new Date().toDateString();
const dayName = currentDate.split(' ')[0]
const monthYear = currentDate.split(' ').slice(1).join(' ')
document.getElementById('day-name').innerText = dayName + ' ,';
document.getElementById('year-month').innerText = monthYear;
// ========================================================

const taskAdded = document.getElementById("added-task");
let addedNewTask = parseInt(taskAdded.innerText);
const totalTask = document.getElementById("task-available");
let taskCount = parseInt(totalTask.innerText);
const allButtons = document.getElementsByClassName("btn-primary");
for (let i = 0; i < allButtons.length; i++) {
allButtons[i].addEventListener("click", function () {
if (taskCount > 0) {
        taskCount--;
            totalTask.innerText = taskCount;
              if (addedNewTask > 0) {
                addedNewTask++;
                taskAdded.innerText = addedNewTask;
            }
            alert("Board Updated Successfully");
const taskTitle = this.closest(".card").querySelector(".title").innerText;
const completionTime = new Date().toLocaleTimeString();
const div = document.getElementById("history");
const titleHead = document.createElement("h2");
titleHead.innerHTML = `You have completed the task: <b>${taskTitle}</b> at ${completionTime}`;
titleHead.classList.add('p-[10px]', 'bg-secondary', 'text-[#494a4d]', 'text-base', 'mb-7');
div.appendChild(titleHead);
this.disabled = true;
this.style.backgroundColor = "#cfd7ff";
            if (taskCount === 0) {
                alert("Congratulations! You have completed all the tasks!");
            }
        }
    });
}
// =================================================================
// clear transaction history
document.getElementById("clear_history").addEventListener("click", function () {
    const div = document.getElementById("history");
    if (div) {
        div.innerHTML = "";

    }
});
// ====================================================================
// navigation to blogpage
document.getElementById("discover-btn").addEventListener("click", function () {
    window.location.href = 'blog.html';
})
// 