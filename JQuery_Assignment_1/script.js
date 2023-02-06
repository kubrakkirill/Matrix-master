$('#btnHide').click(function (){
    $('#paraHide').toggle()
});
$('#btnAppend').click(function (){
    $('#paraAppend').append(' Some new text.')
});
$('#btnColor').click(function (){
    $('#paraColor').css('color', 'red')
});
$('#btnSlide').click(function (){
    $('#paraSlide').slideToggle()
});
