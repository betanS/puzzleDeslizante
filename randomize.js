//assingRandomImgs()
assingTestValues();

function assingTestValues(){
for (i = 1; i< 10; i++) {
    if (document.getElementById(i).innerHTML == ""){
        if (i == 8){
        document.getElementById(i).innerHTML = "<img class = 'nulo' src='imgs/09.jpg'></img>";
        }else if (i == 9){
            document.getElementById(i).innerHTML = "<img class= '8' src='imgs/08.jpg'></img>";
        }else{
            document.getElementById(i).innerHTML = "<img class= '"+i+"' src='imgs/0"+i+".jpg'></img>";
        }
    };
}
}



function assingRandomImgs() {
var contador = 1;
while (contador != 10) {
    numerorandom = getRandomInt(1, 10);
    if (document.getElementById(numerorandom).innerHTML == ""){
        if (contador == 9){
        document.getElementById(numerorandom).innerHTML = "<img class= 'nulo' src='imgs/09.jpg'></img>";
        }else{
            document.getElementById(numerorandom).innerHTML = "<img class= '"+contador+"' src='imgs/0"+contador+".jpg'></img>";
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