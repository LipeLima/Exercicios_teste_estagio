var numeroAleatorio = 14;
var v1 = 0;

var num1 = 1;
var num2 = 0;

console.log(num2);
console.log(num1);

for (var i = 0; i <= 10; i++) {

    if (num1 === numeroAleatorio) {
        v1 = num1;   
    }
   
    num1 = num1 + num2; 
    num2 = num1 - num2;
    console.log(num1);       
}

if (v1 === numeroAleatorio) {
    console.log(`O número: ${numeroAleatorio} - Pertence a sequencia fibonacci.`)
} else {
    console.log(`O número: ${numeroAleatorio} - NÃO pertence a sequencia fibonacci.`)
}







 
    


