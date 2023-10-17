const btn = document.querySelector('button');
const btnReset = document.getElementById('reset');
const boxAlert = document.getElementById('answer');
const data = document.getElementById('data');
const btnPrint = document.getElementById('print');

btn.addEventListener('click', function(){
    let dataValue = data.value;
    console.log(dataValue);
    
    
    //CONSOLE.LOG   
    console.log(data);
});

btnReset.addEventListener('click', function(){
    boxAlert.innerHTML = '';
    data.value = '';
});
