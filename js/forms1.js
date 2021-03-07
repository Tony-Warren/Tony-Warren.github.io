function check() {
    s=minutes(start.value)
    e=minutes(end.value)
    w=e-s

    if ((s == false) || (e = false)) { 
        phrase = "Hora  tiene que ser en hh:mm am/pm formato"
    } else if (w < 0) {
        phrase = "El hora de terminar tiene que ser despues de empiezar"
    } else {
        phrase = "Ha trabajado "+w+" minutos. Esos es "+Math.trunc(w/60)+" horas y "+ (w%60) + "minutos."
    }
    
    document.getElementById("worked").innerHTML = phrase
}

function minutes(t) {
    // this function receives a time in hh:mm am/pm format
    // and returns the number of minutes since midnight.
    pm = t.slice(-2) // is it am or pm
    pm = pm.toLowerCase() // make it lowercase
    if ((pm != 'am') && (pm != 'pm')) {  // if not return false
        return false
    }
    p=t.indexOf(":") //find the index of :
    if (p == -1) {  // if not there return false
        return false
    }
    h = Number(t.slice(0,p)) // get the hour (hh)
    if (typeof(h) != 'number') { // if not a number return false
        return false
    }
    m = Number(t.slice(p+1,p+3)) //get the minutes (mm)
    if (typeof(m) != 'number') {  //if not a number return false
        return false
    }
    if ((pm == "pm") && (h != 12)) { // make hour military
        h+=12
    }
    if ((pm == "am") && (h == 12)) { //make hour military
        h-=12
    }
    return (h*60)+m  //return the number of minutes since midnight
    

}