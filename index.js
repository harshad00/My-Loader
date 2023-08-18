console.log("hello this is harshad.");

let btn = document.getElementById("send");

btn.addEventListener("click",myfunc);

function myfunc(){

document.getElementById("img1").style.animation=" img 2s 1s linear";
setTimeout(() => {
    document.getElementById("send").style.display="none";

    document.getElementById("send_click").style.animation="send_click 2s linear"; 
    document.getElementById("animation_new").style.display="block";
    document.getElementById("send_click").style.display="block"; 
}, 3050);
}