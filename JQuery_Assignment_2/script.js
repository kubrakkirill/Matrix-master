let img = false;
$('img').click(function (){
    let newSrc = $(this).attr('alt-pic')
    $(this).attr("alt-pic", $(this).attr("src"))
    $(this).attr('src', newSrc);
});