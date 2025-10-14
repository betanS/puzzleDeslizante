getbuttons();



function getbuttons(){
    imagenNUla = document.getElementById("nulo").parentNode.id;
    console.log(imagenNUla);
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

console.log(opcion1 + " " + opcion2 + " " + opcion3 + " " + opcion4);  

    boton1 = document.getElementById(opcion1);
    boton2 = document.getElementById(opcion2);
    boton3 = document.getElementById(opcion3);
    boton4 = document.getElementById(opcion4);


boton1.addEventListener("click", function() {
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton1.id+".jpg'></img>"
    document.getElementById(boton1.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
getbuttons();
});
boton2.addEventListener("click", function() {
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton2.id+".jpg'></img>"
    document.getElementById(boton2.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
getbuttons();
});
if(opcion3 != 0){
boton3.addEventListener("click", function() {
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton3.id+".jpg'></img>"
    document.getElementById(boton3.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
getbuttons();
});
} 
if(opcion4 != 0){
    boton4.addEventListener("click", function() {
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton4.id+".jpg'></img>"
    document.getElementById(boton4.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
getbuttons();
});
}
}
  

