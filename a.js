let seconds = 0
let minutes = 0
let hours = 13
let evnt = []
let flag = true

function settime(){
    let a = parseInt(document.getElementById("hh").value)
    let b = parseInt(document.getElementById("mm").value)
    let c = parseInt(document.getElementById("ss").value)
    let d = document.getElementById("msg").value
    evnt.push([a,b,c,d])
    evnt = evnt.sort()
    let s = ""

    for (var i = 0; i < evnt.length; i++) {
        s += evnt[i][0]
        s += " : "
        s += evnt[i][1]
        s += " : "
        s += evnt[i][2]
        s += "&nbsp&nbsp&nbsp&nbsp&nbsp"
        s += evnt[i][3]
        s += "<br>"
    }
    evnts.innerHTML = s
    hh.value = ""
    mm.value = ""
    ss.value = ""
    msg.value = ""
}

function clock() {
	if (seconds < 10){
		sseconds.innerHTML = "0" + seconds
	} else {
		sseconds.innerHTML = seconds
	}
	if (minutes < 10){
		sminutes.innerHTML = "0" + minutes
	} else {
		sminutes.innerHTML = minutes
	}
	if (hours < 13){
		if (hours < 10){
			shours.innerHTML = "0" + hours
		} else {
			shours.innerHTML = hours
		}
		spd.innerHTML = '&nbsp AM'
	} else {
		if (hours - 12 < 10){
			shours.innerHTML = "0" + hours - 12
		} else {
			shours.innerHTML = hours - 12
		}
		spd.innerHTML = '&nbsp PM'
	}

    for (var i = 0; i < evnt.length; i++) {
        if (evnt[i][0] == hours & evnt[i][1] == minutes & evnt[i][2] == seconds){
            alert(String(evnt[i][3]))
            evnt.splice(i, 1);
            let s = ""
            for (var i = 0; i < evnt.length; i++) {
                s += evnt[i][0]
                s += " : "
                s += evnt[i][1]
                s += " : "
                s += evnt[i][2]
                s += "&nbsp&nbsp&nbsp&nbsp&nbsp"
                s += evnt[i][3]
                s += "<br>"
            }
            evnts.innerHTML = s
        }
    }

    seconds += 1
    if (seconds >= 60) {
        seconds = 0
        minutes += 1
    }
    if (minutes >= 60) {
        minutes = 0
        hours += 1
    }
    if (hours >= 24) {
        hours = 0
    }
}

function point() {
	if (flag){
		spoints1.innerHTML = '<span style="color: black;">:</span>'
		spoints2.innerHTML = '<span style="color: black;">:</span>'
	} else {
		spoints1.innerHTML = '<span style="color: white;">:</span>'
		spoints2.innerHTML = '<span style="color: white;">:</span>'
	}
	flag = !flag
}

window.onload = function() {
    setInterval(clock, 1000);
    setInterval(point, 500);
}
