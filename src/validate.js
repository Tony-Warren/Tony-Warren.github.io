class Validate {
  constructor() {
  }
  //Add event listeners
  addListeners() {
    document.getElementById('date').addEventListener('blur', this.validateDate);
    document.getElementById('start-time').addEventListener('blur', this.validateStart);
    document.getElementById('end-time').addEventListener('blur', this.validateEnd);
  }
  validateDate() {
    const date = document.getElementById('date')
    if(isNaN(new Date(date.value))){
      date.classList.add('is-invalid')
      return false;
    } else {
      date.classList.remove('is-invalid')
      return true;
    }
  }
  
  validateStart() {
    const start = document.getElementById('start-time')
    const timeCheck = /(^([1][0-2])|^([1-9])):[0-5][0-9]\s?[ap][m]?$/i;

    if(!timeCheck.test(start.value)){
      start.classList.add('is-invalid');
      return false;
    } else {
      start.classList.remove('is-invalid');
      return true;
    } 
  }
  
  validateEnd() {
    const end = document.getElementById('end-time')
    const timeCheck = /(^([1][0-2])|^([1-9])):[0-5][0-9]\s?[ap][m]?$/i;

    if(!timeCheck.test(end.value)){
      end.classList.add('is-invalid');
      return false;
    } else {
      end.classList.remove('is-invalid');
      return true;
    } 
  }
  
  validateAll() {
    let msg = ''

    if (!this.validateDate()){
      msg  += 'La Fecha ';
    };
    if (!this.validateStart()){
      msg += 'La Empieza '
    };
    if (!this.validateEnd()){
      msg += 'La Termina '
    };
    if (msg != '') {
      msg = 'Hay problemas con ' + msg
    }
    return msg;
  }
}