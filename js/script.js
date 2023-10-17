//PALINDROMI
palindromi();
function palindromi(){
const btn = document.querySelector('button');
const btnReset = document.getElementById('reset');

const data = document.getElementById('data');
const boxAlert = document.getElementById('answer');

let arr = '';
let arrInverse ='';

btn.addEventListener('click', function(){
    let dataValue = data.value;
    data.value = '';
    
    //ciclo for per scomporre le lettere della parola
    //le pushiamo dentro ARR
    for(let i = 0; i < dataValue.length ; i++){
        arr += dataValue[i];
    }

    //ciclo for per scomporre le lettere della parola ma in ordine inverso, 
    //le pushiamo dentro ArrINVERSE
    for(let x = dataValue.length -1; x >= 0 ; x--){
        arrInverse += dataValue[x];
    } 

    if(arr === arrInverse){
        msgTrue();
    } else{
        msgFalse();
    }
});

btnReset.addEventListener('click', function(){
    console.log(btnReset);
    boxAlert.classList.add('d-none');
    boxAlert.innerHTML = '';
    data.value = '';
});

function msgTrue(){
    boxAlert.innerHTML = `la parola è palindroma`
    boxAlert.classList.remove('d-none', 'alert-danger');
    boxAlert.classList.add('alert-primary');
};

function msgFalse(){
    boxAlert.innerHTML = `la parola non è palindroma`
    boxAlert.classList.remove('d-none','alert-primary');
    boxAlert.classList.add('alert-danger');
};

};





//NUMERI
//numeri();

function numeri(){
const btn2 = document.getElementById('btn2')
const btnReset2 = document.getElementById('reset2');
const boxAlert2 = document.getElementById('answer2');
const data2 = document.getElementById('data2');

btn2.addEventListener('click', function(){
    let dataValue2 = data2.value;
    data2.value = '';
    console.log(dataValue2);



//CONSOLELOG
console.log(btnReset2);
console.log(boxAlert2);
});
};