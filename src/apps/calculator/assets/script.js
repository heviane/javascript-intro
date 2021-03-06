function calculator(){
    // prompt user for input (Works in browser only)
    const operation = prompt('Enter the operation! \n 1 - Sum \n 2 - Subtraction \n 3 - Multiplication \n 4 - Division');
    console.log('operation: ', operation);
    
    if(operation <= 0 || operation > 4 || isNaN(operation)){
        alert('Invalid operation!');
        newOperation();
    }else{
        // Validação caracteres não numéricos = OK = isNaN()
        // Validação vazio                    = OK = length()
        // Validação espaços em branco        = OK = !num1.trim()
        
        const num1 = prompt('Enter the first number');
        console.log('num1: ', num1);
        if(isNaN(num1) || num1.length == 0 || !num1.trim()){ 
            alert('Invalid first number!');
        }else{
            const num2 = prompt('Enter the second number');
            console.log('num2: ', num2);
            if(isNaN(num2) || num2.length == 0 || !num2.trim()){
                alert('Invalid second number!');
            }else{
                let result;

                if(operation == 1){
                    result = `${num1} + ${num2} = ` + sum(num1, num2);
                }else if(operation == 2){
                    result = `${num1} - ${num2} = ` + subtraction(num1, num2);
                }else if(operation == 3){
                    result = `${num1} * ${num2} = ` + multiplication(num1, num2);
                }else if(operation == 4){
                    result = `${num1} / ${num2} = ` + division(num1, num2);
                }else{
                    result = 'Invalid operation!';
                }
                //...opção com switch...case

                alert(result);
            }
        }
        newOperation();
    }
}
function sum(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
function subtraction(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
function multiplication(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
function division(num1, num2){
    return  parseInt(num1) / parseInt(num2);
}
function newOperation(){
    const option = prompt('Do you want to continue? \n 1 - Yes \n 2 - No');
    if(option == 1){
        calculator();
    }else if(option == 2){
        alert('Thank you for using our calculator!');
    }else{
        alert('Invalid option!');
    }
}
calculator();
