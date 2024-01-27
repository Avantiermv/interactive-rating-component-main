var tudo = document.getElementById('all');
var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var num3 = document.getElementById('number3');
var num4 = document.getElementById('number4');
var num5 = document.getElementById('number5');

var num1Value = 0;
var num2Value = 0;
var num3Value = 0;
var num4Value = 0;
var num5Value = 0;

function pressionar1(){
     num1Value = 1;
     num1.style.color = 'hsl(0, 0%, 100%)'
     num1.style.backgroundColor = 'hsl(25, 97%, 53%)';

     //pressionar2
     if (num2Value == 1){
        num2Value = 0;
        num2.style.color = '';
        num2.style.backgroundColor = '';
     }

     //Pressionar3
    if (num3Value == 1){
        num3Value = 0;
        num3.style.color = '';
        num3.style.backgroundColor = '';
    }

    //pressionar4
    if (num4Value == 1){
        num4Value = 0;
        num4.style.color = '';
        num4.style.backgroundColor = '';
    }

    //pressionar5
    if (num5Value == 1){
        num5Value = 0;
        num5.style.color = '';
        num5.style.backgroundColor = '';
    }
}

function pressionar2(){
    num2Value = 1;
    num2.style.color = 'hsl(0, 0%, 100%)';
    num2.style.backgroundColor = 'hsl(25, 97%, 53%)';

    //pressionar1
    if (num1Value == 1){
        num1Value = 0;
        num1.style.color = '';
        num1.style.backgroundColor = '';
    }

     //Pressionar3
     if (num3Value == 1){
        num3Value = 0;
        num3.style.color = '';
        num3.style.backgroundColor = '';
    }

    //pressionar4
    if (num4Value == 1){
        num4Value = 0;
        num4.style.color = '';
        num4.style.backgroundColor = '';
    }

    //pressionar5
    if (num5Value == 1){
        num5Value = 0;
        num5.style.color = '';
        num5.style.backgroundColor = '';
    }

}

function pressionar3(){
    num3Value = 1;
    num3.style.color = 'hsl(0, 0%, 100%)'
    num3.style.backgroundColor = 'hsl(25, 97%, 53%)';

    //pressionar1
    if (num1Value == 1){
        num1Value = 0;
        num1.style.color = '';
        num1.style.backgroundColor = '';
    }

     //Pressionar2
     if (num2Value == 1){
        num2Value = 0;
        num2.style.color = '';
        num2.style.backgroundColor = '';
    }

    //pressionar4
    if (num4Value == 1){
        num4Value = 0;
        num4.style.color = '';
        num4.style.backgroundColor = '';
    }

    //pressionar5
    if (num5Value == 1){
        num5Value = 0;
        num5.style.color = '';
        num5.style.backgroundColor = '';
    }
}

function pressionar4(){
    num4Value = 1;
    num4.style.color = 'hsl(0, 0%, 100%)'
    num4.style.backgroundColor = 'hsl(25, 97%, 53%)';

    //pressionar1
    if (num1Value == 1){
        num1Value = 0;
        num1.style.color = '';
        num1.style.backgroundColor = '';
    }

     //Pressionar3
     if (num3Value == 1){
        num3Value = 0;
        num3.style.color = '';
        num3.style.backgroundColor = '';
    }

    //pressionar2
    if (num2Value == 1){
        num2Value = 0;
        num2.style.color = '';
        num2.style.backgroundColor = '';
    }

    //pressionar5
    if (num5Value == 1){
        num5Value = 0;
        num5.style.color = '';
        num5.style.backgroundColor = '';
    }
}

function pressionar5(){
    num5Value = 1;
    num5.style.color = 'hsl(0, 0%, 100%)'
    num5.style.backgroundColor = 'hsl(25, 97%, 53%)';

    //pressionar1
    if (num1Value == 1){
        num1Value = 0;
        num1.style.color = '';
        num1.style.backgroundColor = '';
    }

     //Pressionar3
     if (num3Value == 1){
        num3Value = 0;
        num3.style.color = '';
        num3.style.backgroundColor = '';
    }

    //pressionar4
    if (num4Value == 1){
        num4Value = 0;
        num4.style.color = '';
        num4.style.backgroundColor = '';
    }

    //pressionar2
    if (num2Value == 1){
        num2Value = 0;
        num2.style.color = '';
        num2.style.backgroundColor = '';
    }
}


function pressionar(){
   
}
