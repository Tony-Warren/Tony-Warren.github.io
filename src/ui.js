class UI {
  constructor() {
    this.totalWork = document.getElementById('total-work')
  }
  addWorkToList(workTime) {
    const list = document.getElementById("work-list");
    //create tr element
    const row = document.createElement("tr");
    //insert cols
    row.innerHTML = `
      <td>${workTime.displayDate()}</td>
      <td>${workTime.start}</td>
      <td>${workTime.end}</td>
      <td>${workTime.displayTotal()}</td>
      <td><a href= "#" class="delete" id=${workTime.key}>X</a></td>`;
    list.appendChild(row);
    this.showTotals()
  }
  deleteWorkFromList(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }

  }
  //show totals
  showTotals() {
    this.totalWork.textContent = workWeek.displayTotal()
  }


    //show alert message for 3 seconds right below the heading.
    showAlert(message, className){
      //Clear any remaining alerts
      this.clearAlert()
      const div = document.createElement('div')
      div.className = className
      div.appendChild(document.createTextNode(message))
      const container = document.querySelector('.container');
      const form = document.querySelector('#work-form')
      container.insertBefore(div, form)
  
      //timeout after 3 secs
      setTimeout(() =>{
        this.clearAlert()
      }, 3000)
    }
  
    //clear alert message
    clearAlert() {
      const currentAlert = document.querySelector('.alert')
      if (currentAlert){
        currentAlert.remove();
      }
    }
  
}