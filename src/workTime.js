const daysOfWeek = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab']
const monthsOfYear = ['ene', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec']
const startOfWeek = 6



class WorkTime {

  constructor(date,start,end,key=Math.random()) {
    console.log('date: ', date)
    this.key = key;
    this.date = new Date(date);  // without the added space it returns the day before
    console.log('this.date: ', this.date)
    this.start = start;
    this.end = end;
  }

  minsWorked(start = this.start,end = this.end) {

    return minsFromMidnight(end) - minsFromMidnight(start)

    /// subfunction that returns the minutes since midnight of a time in HH:MMam/pm format.
    function minsFromMidnight(time){
      const amPm = time.slice(-2)
      const pos = time.indexOf(':')
      let hours = Number(time.slice(0,pos))
      let mins = Number(time.substr(pos+1,2))
      if(amPm.toLowerCase() === 'pm'  && hours != 12) {
        hours = hours+12
      }
      return (hours*60)+mins
    }
  }

  //return the date as day, ddst, ex: sat, 13th
  displayDate() {
      return `${daysOfWeek[this.date.getDay()]}, ${this.date.getDate()}${nth(this.date.getDate())}`
  }

  //return total time worked as MMMmin (HHhrs:MMmins) ex: 130mins (2hrs:10mins)
  displayTotal() {
    return `${this.minsWorked()}min (${Math.trunc(this.minsWorked()/60)}hrs:${this.minsWorked()%60}mins)`
  }

  displayLine() {
    return `${this.displayDate()} ${this.start}-${this.end} ${this.displayTotal()}`
  }
}

  //add ordinal suffixes (st, nd, rd)
  function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}
