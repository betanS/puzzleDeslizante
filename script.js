let tiempo = 0;
let intervaloTiempo = null;


function iniciarContador(inicio = 0) {
  // asigna el valor inicial (por si se pasa desde cargarPartida)
  tiempo = inicio;

  // si ya hay un intervalo corriendo, lo detenemos
  if (intervaloTiempo) clearInterval(intervaloTiempo);

  // iniciamos un nuevo intervalo
  intervaloTiempo = setInterval(() => {
    tiempo++;
    document.getElementById("tiempo").innerHTML =
      "Tiempo transcurrido: " + tiempo + " segundos";
  }, 1000);
}
iniciarContador(); // inicia el contador al cargar la página





const modal = document.getElementById('modal');


    arrayposiciones2 = JSON.parse(localStorage.getItem("Data"))[0];
    console.log("Array de posiciones cargado desde localStorage: " + arrayposiciones2);
    
    cargarLeaderboard();
    
    const botones = document.querySelectorAll('.botones');   //selecciona todos los clickables
    botones.forEach(function(boton) {                        //Logica por boton   
        boton.addEventListener('click', function(event) {   //añade un click a cada boton
            var id = event.currentTarget.id;
           
            posicionNula = document.getElementsByClassName("nulo")[0].parentNode.id; //Obtiene la posición del cuadro nulo
            
            const posibilidades = getbuttons(posicionNula);                         //Obtiene las posiciones que se pueden clicar
            if (id == posibilidades[0] || id == posibilidades[1] || id == posibilidades[2] || id == posibilidades[3]) { 
                    console.log("SI SE PUEDE REEMPLAZAR!");
                
                    //Obtener los valores en el array de posiciones
                    valornulo = parseInt(posicionNula) - 1;
                    valorclicado = parseInt(id) - 1;
                    document.getElementById(posicionNula).innerHTML = document.getElementById(id).innerHTML;     //NO ME PUEDO CREER QUE EN VEZ DE REEMPLAZAR TODO EL CONTENIDO SOLO REMPLAZABA LA ID DE LA IMAGEN POR ID DE POSICION XD
                    document.getElementById(id).innerHTML = "<img class = 'nulo' src='imgs/09.jpg'></img>";

                    //Actualizar el array de posiciones
                    arrayposiciones2[valornulo] = arrayposiciones2[valorclicado]; 
                    arrayposiciones2[valorclicado] = 9;


/*Pensé que mejor que acceder al html y sacar ids o class, 
seria que estuvieran preasignados y fueran cambiando "a ciegas" 
de lo que pasa realmente (en los on click que cambiara X  Y 
porque al generar la tabla ya se asignaron sus valores) */



            }else{
                console.log("No se puede reemplazar la posición " + id + "  :(");
            }


            if (comprobarPosiciones()){
            console.log("FELICIDADES!!! COMPLETASTE EL PUZZLE, YIPPIE!!!");
            modal.classList.remove('hidden');                               //Muestra el modal
            clearInterval(intervaloTiempo);                                 //Detiene el contador
            document.getElementById("finalTime").innerText = tiempo + " segundos!";       //Muestra el tiempo final en el modal
        }
        });
    });

function getbuttons(imagenNUla){                                                //Obtiene las posiciones que se pueden clicar
switch(parseInt(imagenNUla)) {
  case 1:
    opcion1 = 2;
    opcion2 = 4;
    opcion3 = 0;
    opcion4 = 0;
    break;
case 2:
    opcion1 = 1;
    opcion2 = 3;
    opcion3 = 5;
    opcion4 = 0;
    break;
case 3:
    opcion1 = 2;
    opcion2 = 6;
    opcion3 = 0;
    opcion4 = 0;
    break;
case 4:
    opcion1 = 1;
    opcion2 = 5;
    opcion3 = 7;
    opcion4 = 0;
    break;
case 5:
    opcion1 = 2;
    opcion2 = 4;
    opcion3 = 6;
    opcion4 = 8;
    break;
case 6:
    opcion1 = 3;
    opcion2 = 5;
    opcion3 = 9;
    opcion4 = 0;
    break;
case 7:
    opcion1 = 4;
    opcion2 = 8;
    opcion3 = 0;
    opcion4 = 0;
    break;
  case 8:
    opcion1 = 5;
    opcion2 = 7;
    opcion3 = 9;
    opcion4 = 0;
    break;
  case 9:
    opcion1 = 6;
    opcion2 = 8;
    opcion3 = 0;
    opcion4 = 0;
    break;
    default:
    opcion1 = 0;
    opcion2 = 0;
    opcion3 = 0;
    opcion4 = 0;  
    break;
    
}
        const opciones = [opcion1, opcion2, opcion3, opcion4];
        console.log("Posibles Posiciones Clickables: " + opcion1 + " " + opcion2 + " " + opcion3 + " " + opcion4);  
    return opciones;
}

//################### LOGICA BOTONES MODAL Y GUARDAR/CARGAR PARTIDA #############
botonGuardarLeaderboard = document.getElementById("guardarNombreJugador");      
botonGuardarLeaderboard.addEventListener('click', function() {
    var nombreJugador = document.getElementById("nombreJugador").value;
    if (nombreJugador == ""){
        alert("Por favor, ingresa un nombre de jugador.");
        return;
    }else if (localStorage.getItem(nombreJugador)) {
        alert("El nombre de jugador ya existe.");
        return;
    }
    localStorage.setItem(nombreJugador, tiempo);
    
    

    var leaderboardArray = JSON.parse(localStorage.getItem("Leaderboard"));
    if (leaderboardArray == null){
        leaderboardArray = [];
    }
    leaderboardArray.push({nombre: nombreJugador, tiempo: tiempo});
    localStorage.setItem("Leaderboard", JSON.stringify(leaderboardArray));
    console.log("Jugador guardado en el leaderboard: " + nombreJugador);
    tiempo = 0; // Reiniciar el tiempo para una nueva partida
    cargarLeaderboard();
    modal.classList.add('hidden');
});

botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener('click', function() {
    guardarPartida();
});
botonCargar = document.getElementById("cargar");
botonCargar.addEventListener('click', function() {
    cargarPartida();
});




//################### FUNCIONES AUXILIARES #############

function comprobarPosiciones() {                               //Comprueba si las posiciones son correctas 
   console.log(arrayposiciones2);
    for (let i = 1; i < 10; i++) {
        if(arrayposiciones2[i - 1] != i){
            return false;
        }
    }
    console.log("posiciones correctas");
    return true;
}


function findPositionInArray(valor, array) {                  //Encuentra la posicion de un valor en un array
    var found = 0;
    console.log(array.length);
    for(var i = 0; i < array.length; i++) {
        if(valor == array[i]) found = i;
    }
    console.log("Valor " + valor + " encontrado en la posicion " + found);
    return found;
}





function guardarPartida(){                                                  //Guarda la partida en el localStorage
    var arrayPartida = [arrayposiciones2, tiempo];
    localStorage.setItem("PartidaGuardada", JSON.stringify(arrayPartida));
    
    console.log("Partida guardada correctamente");
}

function cargarPartida(){                                             //Carga la partida desde el localStorage
    datos = JSON.parse(localStorage.getItem("PartidaGuardada"));
    arrayposiciones2 = datos[0];
    tiempo = datos[1];
    if (arrayposiciones2 == null){
        alert("No hay partida guardada");
        return;
    }
    for (let i = 1; i < 10; i++) {                                  //Actualiza el HTML con las posiciones guardadas
        if (arrayposiciones2[i - 1] == 9){
            document.getElementById(i).innerHTML = "<img class = 'nulo' src='imgs/09.jpg'></img>";
        }else{
            document.getElementById(i).innerHTML = "<img class= '"+arrayposiciones2[i - 1]+"' src='imgs/0"+arrayposiciones2[i - 1]+".jpg'></img>";
        }
    }
    console.log("Partida cargada correctamente: " + arrayposiciones2);
}


function cargarLeaderboard(){                                               //Carga el leaderboard desde el localStorage
    var leaderboardArray = JSON.parse(localStorage.getItem("Leaderboard"));
    if (leaderboardArray == null){                                            //Si no existe, crea un array vacio
        leaderboardArray = [];
    }

    leaderboardArray.sort((a, b) => a.tiempo - b.tiempo);               //Ordena el array por tiempo ascendente

    document.getElementById("leaderboard").innerHTML = "<b>Leaderboard:</b>";              //Limpia el HTML del leaderboard para evitar duplicados (ej al cargar tras guardar)

    for (let i = 0; i < leaderboardArray.length; i++) {             //Muestra el leaderboard en el HTML
        document.getElementById("leaderboard").innerHTML += "<li>" + leaderboardArray[i].nombre + ": " + leaderboardArray[i].tiempo + " segundos</li>";
    }
    console.log("Leaderboard cargado correctamente");
}
