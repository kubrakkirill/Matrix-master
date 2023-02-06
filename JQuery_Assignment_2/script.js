let img1a = false;
$('#img1a').click(function (){
    if (img1a === false){
        $(this).attr("src", "img/1b.jpg");
        img1a = true;
    } else {
        $(this).attr("src", "img/1a.jpg");
        img1a = false;
    }
})
let img2a = false;
$('#img2a').click(function (){
    if (img2a === false){
        $(this).attr("src", "img/2b.jpg");
        img2a = true;
    } else {
        $(this).attr("src", "img/2a.jpg");
        img2a = false;
    }
})
let img3a = false;
$('#img3a').click(function (){
    if (img3a === false){
        $(this).attr("src", "img/3b.jpg");
        img3a = true;
    } else {
        $(this).attr("src", "img/3a.jpg");
        img3a = false;
    }
})
