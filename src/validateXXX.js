//Form validation
//Add event listeners
document.getElementById('date').addEventListener('blur', validateDate);
document.getElementById('start-time').addEventListener('blur', validateStart);
document.getElementById('end-time').addEventListener('blur', validateEnd);

//Regex for checking if time is in hh:mm am/pm format.  
const timeCheck = /(^([1][0-2])|^([1-9])):[0-5][0-9]\s?[ap][m]?$/i;



function validateDate() {
  const date = document.getElementById('date')
  if(isNaN(new Date(date.value))){
    date.classList.add('is-invalid')
    return false;
  } else {
    date.classList.remove('is-invalid')
    return true;
  }
}

function validateStart() {
  const start = document.getElementById('start-time')
  if(!timeCheck.test(start.value)){
    start.classList.add('is-invalid');
    return false;
  } else {
    start.classList.remove('is-invalid');
    return true;
  } 
}

function validateEnd() {
  const end = document.getElementById('end-time')
  if(!timeCheck.test(end.value)){
    end.classList.add('is-invalid');
    return false;
  } else {
    end.classList.remove('is-invalid');
    return true;
  } 
}

function validateAll() {
  let validated = true;
  if (!validateDate()){
    validated = false
  };
  if (!validateStart()){
    validated = false
  };
  if (!validateEnd()){
    validated = false
  };
  return validated;
}