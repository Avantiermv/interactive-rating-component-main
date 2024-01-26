var tudo = document.getElementById('all');
var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var num3 = document.getElementById('number3');
var num4 = document.getElementById('number4');
var num5 = document.getElementById('number5');

var num1Value = 0;

function pressionar1(){
     num1Value = 1;
     num1.style.backgroundColor = 'white';
}

function pressionar(){
    if (num1Value == 1){
        window.alert('Número pressionado.')
    } else{
        window.alert('Nada pressionado.')
    }
}
