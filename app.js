

const $play = document.querySelector('#playMiusic');
const $pausa = document.querySelector('#pause');
const $music = document.querySelector('#music');

const $progress = document.querySelector("#progress");
const $range = document.querySelector("#myRange");

let estado = false;
let duration = 0;
$music.addEventListener ('loadedmetadata' ,handleLoaded);
$music.addEventListener ('timeupdate' ,handleUpdate);

$play.addEventListener('click', handlePlay);
$pausa.addEventListener('click', handlePausa);

$range.addEventListener('mousemove', mouseMove);
$range.addEventListener('mouseenter', mouseMove);
$range.addEventListener('mouseover', mouseMove);

$range.addEventListener('input', handleInput);
$range.max =  $music.duration;
console.log($range.max);
function handlePlay(){
    $music.play();
    $play.hidden = true;
    $pausa.hidden = false;

}

function mouseMove(){
 estado = true;

}
function handlePausa() {
    $music.pause();
    $play.hidden = false;
    $pausa.hidden = true;
}

function handleLoaded (){

}

function handleUpdate(){
  $range.value = $music.currentTime;
  var porcentaje = ($music.currentTime * 100) / $music.duration;
  var color = 'linear-gradient(90deg, rgb(255,255,255)'+ porcentaje  +'%, rgba(255, 255, 255, .2)'+ porcentaje +'%)'
  var color1 = 'linear-gradient(90deg, rgb(117,252,117)'+ porcentaje +'%, rgba(255, 255, 255, .2)'+porcentaje+'%)'
  $range.style.background = estado?color1:color;
  estado=false;
}

function handleInput (){
    $music.currentTime = $range.value;
}

