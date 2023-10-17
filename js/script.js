//PALINDROMI
palindromi();
function palindromi(){
const btn = document.querySelector('button');
const btnReset = document.getElementById('reset');
const boxAlert = document.getElementById('answer');
const data = document.getElementById('data');

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
        boxAlert.innerHTML += `la parola è palindroma`
        boxAlert.classList.remove('d-none');
    } else{
        boxAlert.innerHTML += `la parola non è palindroma`
        boxAlert.classList.remove('d-none');
    }
});

btnReset.addEventListener('click', function(){
    boxAlert.classList.add('d-none');
    boxAlert.innerHTML = '';
    data.value = '';
});
};

//NUMERI
numeri();
function numeri(){
const btn2 = document.getElementById('btn2')
const btnReset2 = document.getElementById('reset2');
const boxAlert2 = document.getElementById('answer2');
const data2 = document.getElementById('data2');

btn2.addEventListener('click', function(){
    let dataValue2 = data2.value;
    data2.value = '';
    console.log(dataValue2);
})




};