//assingRandomImgs()  ;  //Usar para randomizar las imagenes /(puede tener output no completable)/ /(asigna variables que no corresponden a las id de imagen)/
//localStorage.clear();  //Usar para limpiar el local storage en cada carga de pagina (testeo)
//assingTestValues(); //Usar para testear con valores fijos 
assingRandomImgsSolubleIndependiente(); //Usar para randomizar las imagenes (siempre output completable)

function assingTestValues(){
    const arrayposiciones = [];
for (i = 1; i< 10; i++) {
    if (document.getElementById(i).innerHTML == ""){
        if (i == 8){
            arrayposiciones.push(9);
        document.getElementById(i).innerHTML = "<img class = 'nulo' src='imgs/09.jpg'></img>";
        }else if (i == 9){
            arrayposiciones.push(8);
            document.getElementById(i).innerHTML = "<img class= '8' src='imgs/08.jpg'></img>";
        }else{
            arrayposiciones.push(""+i+"");
            document.getElementById(i).innerHTML = "<img class= '"+i+"' src='imgs/0"+i+".jpg'></img>";
        }
    };
}
saveData(arrayposiciones);

}



function assingRandomImgs() {  //Usar para randomizar las imagenes, [!!puede tener output no completable!!] (hecho a mano, no IA)
const arrayposiciones = [];
    var posTabla = 1;
    document.getElementById(9).innerHTML = "<img class= 'nulo' src='imgs/09.jpg'></img>"; //Asegura que siempre haya un espacio vacio 
while (posTabla != 9) {
    numeroImagen = getRandomInt(1, 10); //Genera un numero aleatorio entre 1 y 9
    if (document.getElementById(posTabla).innerHTML == "" && !arrayposiciones.includes(numeroImagen)){ { //Evita repetir numeros y sobreescribir posiciones 
        if (numeroImagen == 9){
            continue; //Evita asignar el espacio vacio
        }else{
            arrayposiciones[posTabla-1] = numeroImagen; //Guarda la posicion en el array
            document.getElementById(posTabla).innerHTML = "<img class= '"+numeroImagen+"' src='imgs/0"+numeroImagen+".jpg'></img>"; //Asigna la imagen al HTML
            posTabla++; //Solo avanza si se ha asignado una posicion correctamente
        }
    }
}  
}
arrayposiciones[8] = 9; //Añade el espacio vacio al final
        console.log(arrayposiciones);
    saveData(arrayposiciones);
 }


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function saveData(elarray){                 //Guarda el array en el localStorage
  const datos = [elarray] 
  localStorage.setItem("Data", JSON.stringify(datos))
}






function assingRandomImgsSolubleIndependiente() {   //Solucion chatgpt para generar un array aleatorio solucionable sin depender de otras funciones
    let arrayposiciones;

    do {
        arrayposiciones = [];
        let posTabla = 1;

        // Vaciar todas las celdas excepto la última
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).innerHTML = "";
        }
        // Colocar el nulo en la última posición
        document.getElementById(9).innerHTML = "<img class='nulo' src='imgs/09.jpg'></img>";

        while (posTabla !== 9) {
            let numeroImagen = getRandomInt(1, 9); // 1..8
            if (document.getElementById(posTabla).innerHTML === "" && !arrayposiciones.includes(numeroImagen)) {
                arrayposiciones[posTabla - 1] = numeroImagen;
                document.getElementById(posTabla).innerHTML =
                    "<img class='" + numeroImagen + "' src='imgs/0" + numeroImagen + ".jpg'></img>";
                posTabla++;
            }
        }

        arrayposiciones[8] = 9; // espacio vacío al final

    } while (!esSoluble(arrayposiciones)); // repetir hasta que sea solucionable

    console.log("Tablero aleatorio solucionable:", arrayposiciones);
    saveData(arrayposiciones);
}

// Función de control de solvencia (paridad de inversiones)
function esSoluble(array) {
    let inversiones = 0;
    const arrSinNulo = array.filter(x => x !== 9);
    for (let i = 0; i < arrSinNulo.length; i++) {
        for (let j = i + 1; j < arrSinNulo.length; j++) {
            if (arrSinNulo[i] > arrSinNulo[j]) inversiones++;
        }
    }
    return inversiones % 2 === 0; // par de inversiones → solucionable
}

// Función aleatoria que ya tenías
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Guardar array en localStorage
function saveData(elarray){
    const datos = [elarray];
    localStorage.setItem("Data", JSON.stringify(datos));
}
