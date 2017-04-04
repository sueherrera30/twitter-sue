
var i = 0;
var clicks = 0;
var boton = document.getElementById('boton');
boton.addEventListener("click",agregarTweet);
boton.addEventListener("click",borrar);

function agregarTweet(){
  var areaTexto = document.getElementById('areaTexto').value;
  var autor = document.getElementById('autor').value;
  var almacenTweet= document.getElementById('almacenTweet');
  var almacenGeneral = document.getElementById('almacenGeneral');
  almacenTweet.innerHTML += areaTexto +"<br>" + autor +"<br>"
  var linea =document.createElement("hr");
  almacenTweet.appendChild(linea);
  almacenGeneral.appendChild(almacenTweet);
}

   function contadorLetritas(){
    var contador= document.getElementById('contador');
    var texto = document.getElementById('areaTexto');

    i++;
    if( i >= 140){
      alert("exediste el numero de palabras disponibles");
    }
     contador.innerHTML = "has usado " + i + "  /140";


}
function borrar(){
  document.getElementById('areaTexto').value = "";
  document.getElementById('autor').value="";
  contadorLetritas();
}


document.addEventListener("click",contadorClicks);

function contadorClicks(){
var contadorAlmacen = document.getElementById('contadorClicks');
clicks++;
contadorAlmacen.innerHTML = "Van "+ clicks +" clicks dados";
}
//    var cajaTexto = document.getElementById('areaTexto');
//     cajaTexto.stopPropagation();
//     })
  //   function clickInput(){
  //  var input = document.getElementById('autor');
  //  event.stopPropagation();
  //  }
  //  function clickBoton(){
  // var boton = document.getElementById('boton');
  // event.stopPropagation();
  //  }
