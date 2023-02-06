// $('h1').hide();
// $('h1#heading1').hide();
// $('h1.heading2').hide();

// $('p span').css('color', 'green');
// $('ul#list li:first').css('color', 'red');
// $('ul#list li:last').css('color', 'green');
// $('ul#list li:even').css('background-color', 'yellow');
// $(':text').hide();
// $('[href]').css('color', 'red')
// $('#btn1').click(function (){
//     alert('Button Clicked!')
// });
// $('#btn1').on('click', function (){
// $('.para1').hide()
//     $('.para1').toggle()
// });
// $('#btn2').on('click', function (){
//     $('.para1').show()
// });
// $('#btn1').hover(function (){
//     $('.para1').toggle()
// });
// $('#btn1').on('mousemove',function (){
//     $('.para1').toggle()
// });
// $('#btn1').on('mousedown',function (){
//     $('.para1').toggle()
// });
// $('#btn1').on('mouseup',function (){
//     $('.para1').toggle()
// });
// $('#btn1').click(function (e){
// alert(e.currentTarget.id)
// });
// $('#btn1').on('mousemove',function (e){
// console.log ('Coords: Y:'+ e.clientY +'X: '+ e.clientX)});
// $(document).on('mousemove',function (e){
// $('#coords').html('Coords: Y:'+ e.clientY +'X: '+ e.clientX)
// });
//
// $('input').focus(function (){
//     // alert('Focus')
//     $(this).css('background', 'pink')
// });
// $('input').blur(function (){
//     $(this).css('background', 'white')
// });
//
// $('input').keyup(function (){
//     console.log('keyup')
// });
// $('select#gender').change(function (e){
//     alert(e.target.value)
// })
// $('#form').submit(function (){
//     console.log('Submitted')
// })
$('p.para1').css({color:'red',background:'grey'});
// $('p.para2').addClass('myClass');
// $('p.para2').removeClass('myClass');
$('#btn1').click(function (){
    $('p.para2').toggleClass('myClass');
});

// $('#myDiv').text('Hello world');
// $('#myDiv').html('Hello world');
// alert($('#myDiv').text())
$('ul').append('<li>Append list item</li>')
$('ul').prepend('<li>Prepend list item</li>')
// $('.para1').appendTo('ul')
$('ul').before('<h4>Hello</h4>')

