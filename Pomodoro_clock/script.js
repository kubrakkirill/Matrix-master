let btnMin = document.getElementById('btn-min');
let field = document.getElementById('field');
let btnAdd = document.getElementById('btn-add');
let clock = document.getElementById('clock')
let result = field.innerHTML = 0;


function addNumber(){
    result += 1;
    field.innerHTML = result;
}

function minNumber(){
    result -= 1;
    result < 0 ? alert(`Cant be less then 0`) : field.innerHTML = result;
}

function checkTime(){
    for (let i = result; i>0;i--){
        if (result>0){
            clockCount()
        }
    }
}

function clockCount(){
    clock.innerHTML = result;
    setTimeout(() => {
        result -= 1;
        clock.innerHTML = result;
    }, 1000)
}

btnAdd.addEventListener("click", addNumber)
btnMin.addEventListener("click", minNumber)
clock.addEventListener("click", checkTime)