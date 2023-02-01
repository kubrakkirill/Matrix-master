let btnMin = document.getElementById('btn-min');
let btnAdd = document.getElementById('btn-add');
let clock = document.getElementById('clock')
let minute = 0;
let  second = 0;
let time;

function addMinute(){
    minute++
    if (minute>60){
        minute=0;
    }
    document.getElementById("minute").innerHTML = minute;
}
function minMinute(){
    minute--;
    if (minute<0){minute=60;
    }
    document.getElementById("minute").innerHTML = minute;}
function startTime(){
    time = setInterval(timer, 1000);
    if (time){
        document.getElementById("start").disabled = true;
    }
}
function timer(){
    second--;
    if(second===-1){
        minute--;
        second=59;
        if(minute===-1){
            minute='00';
            second='00';
            clearInterval(timex);
            alert('We made it');
        }

    }
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}
btnMin.addEventListener("click", minMinute)
btnAdd.addEventListener("click", addMinute)
clock.addEventListener("click", startTime)