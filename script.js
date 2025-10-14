
function getbuttons(){
    var maximo = 9;
    var minimo = 1;
    imagenNUla = document.getElementById("nulo").parentNode.id;
    console.log(imagenNUla);
if(imagenNUla -3 < minimo){
    opcion1 = imagenNUla+3;
}else{
    opcion1 = imagenNUla-3;
}
opcion2 = imagenNUla -1;
console.log(opcion1 + " " + opcion2);  
    boton1 = document.getElementById(opcion1);
    boton2 = document.getElementById(opcion2);
}

getbuttons();
boton1.onclick = function(){  
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton1.id+".jpg'></img>"
    document.getElementById(boton1.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
    getbuttons();
};
boton2.onclick = function(){
    document.getElementById(document.getElementById("nulo").parentNode.id).innerHTML = "<img src='imgs/0"+boton2.id+".jpg'></img>"
    document.getElementById(boton2.id).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
    getbuttons();
};   

