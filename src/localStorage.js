//Local storage class
class Store {
  static getWorkTimes() {
    let workTimesArr;
    let workTimes = [];
    if (localStorage.getItem("workTimes") === null) {
      workTimes = [];
    } else {
      workTimesArr = JSON.parse(localStorage.getItem("workTimes"));
      workTimesArr.forEach(function (workTime) {
        workTimes.push(new WorkTime(new Date(workTime.date),workTime.start,workTime.end,workTime.key))
      })
    }
    return workTimes;
  }

  static addWorkTime(workTime) {
    const workTimes = Store.getWorkTimes();
    workTimes.push(workTime);
    localStorage.setItem("workTimes", JSON.stringify(workTimes));
  }
 
  static removeWorkTime(key) {
    const workTimes = Store.getWorkTimes();
    workTimes.forEach(function (workTime, index) {
      if (workTime.key == key) {
        workTimes.splice(index, 1);
      }
    });
    localStorage.setItem("workTimes", JSON.stringify(workTimes));
  }
}