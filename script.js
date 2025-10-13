var maximo = 9;
var minimo = 1;
var select = 0;

imagenNUla = document.getElementById("nulo");
select = imagenNUla.parentNode.id;             // ENCUENTRA EL HUECO Y ELIGE EL ID DE LA TABLA

console.log(select);
if(select -3 < minimo){
    opcion1 = select+3;
}else{
    opcion1 = select-3;
}
opcion2 = select -1;
console.log(opcion1 + " " + opcion2);           //CALCULA LOS CLICKABLES BASADOS EN DONDE ESTA EL HUECO

boton1 = document.getElementById(opcion1);
boton2 = document.getElementById(opcion2);
boton1.addEventListener('click', function() {  
    contentTable = document.getElementById(boton1.id).innerHTML;
    document.getElementById(boton1.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
    document.getElementById(imagenNUla.parentNode.id).innerHTML = "<img src='imgs/0"+boton1.id+".jpg'></img>"
});
boton2.addEventListener('click', function() {  
    contentTable = document.getElementById(boton2.id).innerHTML;
    document.getElementById(boton2.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
    document.getElementById(imagenNUla.parentNode.id).innerHTML = "<img src='imgs/0"+boton2.id+".jpg'></img>"
});                             //ASIGNA BOTON A LAS OPCIONES CLICKABLES :)

//imageswap

