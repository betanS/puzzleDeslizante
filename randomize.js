assingRandomImgs()  ;  //Usar para randomizar las imagenes /(puede tener output no completable)/ /(asigna variables que no corresponden a las id de imagen)/
//localStorage.clear();  //Usar para limpiar el local storage en cada carga de pagina (testeo)
//assingTestValues(); //Usar para testear con valores fijos 

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



function assingRandomImgs() {  //Usar para randomizar las imagenes, [!!puede tener output no completable!!]
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