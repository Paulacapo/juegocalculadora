var numaacertar = Math.floor((Math.random() * 100));
 


function comprueba()

{

   var miopcion = document.getElementById("miopcion").value;

   if(miopcion == numaacertar)
     {
       document.getElementById("mensajes").innerHTML="¡CORRECTO!";
     }
   else
       {  
        if(miopcion < numaacertar)
           { 
               document.getElementById("mensajes").innerHTML="Número demasiado bajo, vuelve a intentar";
           } 
        else
           {
               document.getElementById("mensajes").innerHTML="Número demasiado alto, vuelve a intentar";
           } 
         
        }
       
    /* Cunado acierte */

function Correcto() {
  var audio = document.getElementById('myAudio');
  audio.play();
}
if (miopcion == numaacertar) {
document.getElementById("mensajes").innerHTML = "¡CORRECTO!";
Correcto();
}
}


/* Para la cuenta atras */

var countdownElement = document.getElementById('countdown');
var now = new Date().getTime();
var deadline = new Date(now + 2 * 60 * 1000); // 2 minutos = 2 * 60 segundos * 1000 milisegundos

function updateCountdown() {
  var now = new Date().getTime();
  var distance = deadline - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  countdownElement.textContent = minutes + 'm ' + seconds + 's';

  
  if (distance < 0) {
    clearInterval(countdown); 
    countdownElement.textContent = '¡Tiempo terminado!';
  }
}

var countdown = setInterval(updateCountdown, 1000);


