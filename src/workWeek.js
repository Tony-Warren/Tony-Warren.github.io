class WorkWeek {
  // It takes an a date for the start of the work week, and optionally the rate and an array of work times.
  constructor(workTimes=[]) {
    this.workTimes = workTimes;
  }
  //adds a new worktime to the array
  pushWorkTime(workTime){
    this.workTimes.push(workTime);
  }
  //finds a worktime by the key and delete it
  removeByKey(key){
    this.workTimes.forEach(function(workTime, idx, arr){
      if (workTime.key == key){
        arr.splice(arr.idx,1)
      }
    })
  }
  //removes a worktime.
  removeWorkTime(workTime){
    this.workTimes.splice(this.workTimes.indexOf(workTime),1)
  }
  //returns a the total number of minutes worked from all workTimes in the array.
  total(){
    if (this.workTimes.length === 0) {
      return 0
    } else {
      // **Change and use reduce()
      let totalMins = 0;
      for (let i = 0; i < this.workTimes.length; i++){
        totalMins += this.workTimes[i].minsWorked()
      }
      return totalMins
    }
  }
  //calculates the pay.
  // pay(){
  //   return this.total() * (this.rate/60)
  // }
  //returns a formated field showing the total number of minutes worked in MMmins (HHhr:MMmins)
  displayTotal() {
    const tmins = this.total()
    return `${tmins}min (${Math.trunc(tmins/60)}hrs:${tmins%60}mins)`
  }
  //creates the table
  // createSheet(){
  //   this.workTimes.forEach(function(row){
  //     // console.log('row:',row.row());
  //     timeList.appendChild(row.row())
  //   })
  // }
}
