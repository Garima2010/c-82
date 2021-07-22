canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 color = "blue";

 width_of_line = 7;

 canvas.addEventListener("mousedown", my_mousedown);

var mouse_event="empty";

 function my_mousedown(e)
{
 mouse_event="mousedown"

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouse_event="mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove);

var last_position_of_x,last_position_of_y;


function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y quardinates are ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y quardinates are ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;

}