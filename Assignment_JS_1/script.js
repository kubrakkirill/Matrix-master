let btnSubmit = document.getElementById('btnSubmit');
let textarea = document.getElementById('textarea1');
let result = document.getElementById('result');
let userText = {
    textarea: [],
}
function fillArea(){
    result.innerHTML = '';
    for (let i=0;i<userText.textarea.length;i++){
        result.innerHTML += userText.textarea[i];
    }
}
btnSubmit.addEventListener("click", function (){
    let userTextResult = textarea.value;
    if(userTextResult !== ''){
        userText.textarea.push(userTextResult);
        fillArea()
    }
})