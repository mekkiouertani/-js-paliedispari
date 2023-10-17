//PALINDROMI
    //creiamo caselle input su HTML, le dichiariamo su js
    //


const btn = document.querySelector('button');
const btnReset = document.getElementById('reset');
const boxAlert = document.getElementById('answer');
const data = document.getElementById('data');
const btnPrint = document.getElementById('print');

const arr = [];
const arrInverse = [];

btn.addEventListener('click', function(){
    let dataValue = data.value;
    data.value = '';
    
    //ciclo for per scomporre le lettere della parola
    //le pushiamo dentro ARR
    for(let i = 0; i < dataValue.length ; i++){
        console.log(dataValue[i]);
        arr.push(dataValue[i]);
    }

    //ciclo for per scomporre le lettere della parola ma in ordine inverso, 
    //le pushiamo dentro ArrINVERSE
    for(let x = dataValue.length -1; x >= 0 ; x--){
        console.log(dataValue[x]);
        arrInverse.push(dataValue[x]);
    }
    
    
    //CONSOLE.LOG 
    //console.log(dataValue);  
    //console.log(data);
    console.log(arr);
    console.log(arrInverse);
});

btnReset.addEventListener('click', function(){
    boxAlert.innerHTML = '';
    data.value = '';
});
