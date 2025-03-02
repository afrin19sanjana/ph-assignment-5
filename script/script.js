// Theme changing code here
const theme = document.getElementById("theme-change").addEventListener("click", function(event){
  event.preventDefault();
  const hexaValue = Math.floor(Math.random()  * 0xffffff).toString(16);
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


const totalTask = document.getElementById("task-available");
let taskCount = parseInt(totalTask.innerText); 
const allButtons = document.getElementsByClassName("btn-primary");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        if (taskCount > 0) {
            taskCount--;
            totalTask.innerText = taskCount; 

            alert("Board Updated Successfully");

            this.disabled = true; 
            this.style.backgroundColor = "#cfd7ff";

            if (taskCount === 0) {
                alert("Congratulations! You have completed all the tasks!");
            }
        }
    });
}