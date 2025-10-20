assingRandomImgs()
function assingRandomImgs() {
var contador = 1;
while (contador != 10) {
    numerorandom = getRandomInt(1, 10);
    if (document.getElementById(numerorandom).innerHTML == ""){
        if (contador == 9){
        document.getElementById(numerorandom).innerHTML = "<img id = 'nulo' src='imgs/09.jpg'></img>";
        }else{
            document.getElementById(numerorandom).innerHTML = "<img src='imgs/0"+contador+".jpg'></img>";
        }
        contador++;
    };
}
    
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}