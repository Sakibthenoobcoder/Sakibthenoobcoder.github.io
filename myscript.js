var i = 0;
var images = [];
var time = 3000;

images[0] = 'image/downlad.jpg'
images[1] = 'image/Paper Tape.jpg'
images[2] = 'image/P.E Poly.jpg'
images[3] = 'image/Twill  mamamama.jpg'
images[4] = 'image/unnamed.jpg'
images[5] = 'image/silica.jpg'
images[6] = 'image/colorful-plastic-packing-strap-500x500.jpg'

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }


setTimeout("changeImg()", time)
}

window.onload = changeImg;



x = 1;
function abc(){
    if(x==1) {
        document.getElementById("awesome").innerHTML="Clear Gumtape";
    }
    if(x==2) {
        document.getElementById("awesome").innerHTML="Paper Gumtape";
    }
    if(x==3) {
        document.getElementById("awesome").innerHTML="P.P Poly";
    }
    if(x==4) {
        document.getElementById("awesome").innerHTML="Twill Tape";
    }
    if(x==5) {
        document.getElementById("awesome").innerHTML="Marker paper";
    }
    if(x==6) {
        document.getElementById("awesome").innerHTML="Silica Gel";
    }
    if(x==7) {
        document.getElementById("awesome").innerHTML="P.P Belt";
    }
x++;
if(x>=8) {
    x=1; 
}
setTimeout("abc()", 3000)
}
abc();
