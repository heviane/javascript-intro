let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    if (count >= 10){
        alert('You have reached the maximum number of 10');
    } else {
        count++;
        CURRENT_NUMBER.innerHTML = count;
        checkColor(count);
    }
}

function decrement() {
    if (count <= -10){
        alert('You have reached the minimum number of -10');
    } else {
        count--;
        CURRENT_NUMBER.innerHTML = count;
        checkColor(count);
    }
}

function checkColor(count){
    if (count > 0){
        document.querySelector('#currentNumber').classList.remove('numberBrownColor');
        document.querySelector('#currentNumber').classList.remove('numberRedColor');    
        document.querySelector('#currentNumber').classList.add('numberGreenColor');
    } else {
        document.querySelector('#currentNumber').classList.remove('numberBrownColor');
        document.querySelector('#currentNumber').classList.remove('numberGreenColor');    
        document.querySelector('#currentNumber').classList.add('numberRedColor');
    }
}