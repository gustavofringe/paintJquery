/**
 *
 * variable
 *
 * */
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
var click;

canvas.width = $('#draw').width();
canvas.height= $('#draw').height();
/**
 *
 * active action mouse on press click
 *
 * */
$('#draw').mousedown(function (event) {
    click = true;
    ctx.moveTo(event.pageX, event.pageY);
    //ctx.closePath();
});
/**
 *
 * move action
 *
 * */
$('#draw').mousemove(function (event) {
    if (click) {
        ctx.beginPath();
        ctx.fillStyle = $('input[type=color]').val();
        ctx.arc(event.offsetX, event.offsetY, $('input[type=range]').val(), 0, 360);
        ctx.fill();
        ctx.closePath();
    }
});
/**
 *
 *delete action mouse
 *
 * */
$('#draw').mouseup(function () {
    click = false;
    //ctx.closePath();
});
/**
 *
 * reset draw
 *
 *
 * */
$('#reset').click(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});