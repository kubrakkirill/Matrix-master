let minute = 15;
let  second = '00';
let time;
document.getElementById("minute").innerHTML = minute;
document.getElementById("second").innerHTML = second;


function timer(){
    second--;
    if(second===-1){
        minute--;
        second=59;
        if(minute===-1){
            minute='00';
            second='00';
            clearInterval(time);
            alert('We made it');
        }

    }
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}

$('#btn-min').click(function (){
    minute--;
    if (minute<0){minute=60;
    }
    document.getElementById("minute").innerHTML = minute;
});
$('#btn-add').click(function (){
    minute++
    if (minute>60){
        minute=0;
    }
    document.getElementById("minute").innerHTML = minute;
});
$('#btnReset').click(function (){
    second = '00'
    minute = '00'
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
});
$('#btnStart').click(function (){
    time = setInterval(timer, 1000);
    if (time){
        document.getElementById("clock").disabled = true;
    }
});