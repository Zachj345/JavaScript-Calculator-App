let numbers = document.querySelectorAll('.number');
let actions = document.querySelectorAll('.button');

let answerBar = document.getElementById('answer');


let clear = document.getElementById('clear')
let subtract = document.getElementById('subtract')
let adding = document.getElementById('add')
let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let equals = document.getElementById('equals')
let decimal = document.getElementById('decimal');

let currentEquation = ''

function isNumber(str){
    return ! isNaN(parseInt(str))
}



adding.addEventListener('click', () => {
    if (! answerBar.innerHTML.length == 0 ){
        if (! isNumber(answerBar.innerHTML)){
            currentEquation += ''
            answerBar.innerHTML = '+'
        }
        else{
            currentEquation += answerBar.innerHTML
            answerBar.innerHTML = '+';
    
        }
    };
});

subtract.addEventListener('click', () => {
    if (! answerBar.innerHTML.length == 0 ){
        if (! isNumber(answerBar.innerHTML)){
            currentEquation += ''
            answerBar.innerHTML = '-';
        }
        else{
            currentEquation += answerBar.innerHTML
            answerBar.innerHTML = '-';
         
        }
    };
});




multiply.addEventListener('click', () => {
    if (! answerBar.innerHTML.length == 0 ){
        if (! isNumber(answerBar.innerHTML)){
            currentEquation += ''
            answerBar.innerHTML = '*';
        }
        else{
            currentEquation += answerBar.innerHTML
            answerBar.innerHTML = '*';
           
        }
    };
});



divide.addEventListener('click', () => {
    if (! answerBar.innerHTML.length == 0 ){
        if (! isNumber(answerBar.innerHTML)){
            currentEquation += ''
            answerBar.innerHTML = '/';
        }
        else{
            currentEquation += answerBar.innerHTML
            answerBar.innerHTML = '/';
           
        }
    };
});


decimal.addEventListener('click', () => {
    if (answerBar.innerHTML === '+' || answerBar.innerHTML === '-' || 
    answerBar.innerHTML === '*' || answerBar.innerHTML === '/'){}
    else if (answerBar.innerHTML.length < 18){
        answerBar.innerHTML += '.';
    };
});

numbers.forEach((num) => num.addEventListener('click', () => {
    if (answerBar.innerHTML === '+' || answerBar.innerHTML === '-' || 
    answerBar.innerHTML === '*' || answerBar.innerHTML === '/'){
        currentEquation += answerBar.innerHTML 
        answerBar.innerHTML = num.innerHTML; 
        
        
    }
    else if (answerBar.innerHTML.length < 18){
        answerBar.innerHTML += num.innerHTML;
    };
}));


clear.addEventListener('click', () => {
    answerBar.innerHTML = '';
    currentEquation = '';
   
});

equals.addEventListener('click', () => {
    currentEquation += answerBar.innerHTML;
    let evaluated = Function('return ' + currentEquation)();
    currentEquation = ''
    answerBar.innerHTML = evaluated;

});

