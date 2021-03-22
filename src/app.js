const validate = new Validate;
const ui = new UI;
let workWeek;


//DOM Load Event
document.addEventListener("DOMContentLoaded", displayWorkTimes);
validate.addListeners();
document.getElementById('submit').addEventListener('click', addToTable);
document.getElementById('send').addEventListener('click', sendInfo)


function displayWorkTimes() {
  workWeek = new WorkWeek(Store.getWorkTimes());
  workWeek.workTimes.forEach(function (workTime){
    ui.addWorkToList(workTime);
  })
}


function addToTable() {
  const date = document.getElementById('date'+' 00:00');
  const start = document.getElementById('start-time');
  const end = document.getElementById('end-time');

  const msg = validate.validateAll()
  if (msg !=  '') {
    ui.showAlert(msg, 'alert alert-danger');
  } else {
    const workTime = new WorkTime(date.value,start.value,end.value);
    workWeek.pushWorkTime(workTime);
    ui.addWorkToList(workTime);
    // ui.showTotals()
    Store.addWorkTime(workTime);
    date.value = ''
    start.value = ''
    end.value = ''
  }
}

document.getElementById("work-list").addEventListener("click", deleteFromTable);

function deleteFromTable(e) {
  const ui = new UI();
  Store.removeWorkTime(e.target.id)
  workWeek.removeByKey(e.target.id);
  ui.deleteWorkFromList(e.target);
  ui.showTotals()
  ui.showAlert('Horario quitado', 'alert alert-warning');

  e.preventDefault();
};

function sendInfo(e) {
  const tel = new Telegram()
  let msg = ''
  workWeek.workTimes.forEach(function(workTime){
    console.log(workTime)
    msg += workTime.displayLine()+'\n';
  })
  msg += 'TODO '+workWeek.displayTotal();
  // console.log("/"+msg+"/")
  tel.sendMessage(msg)
}
