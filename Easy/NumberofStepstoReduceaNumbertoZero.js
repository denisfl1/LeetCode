
// Dado um número inteiro, retorne o número de etapas para reduzi-lo a zero.

// Em uma etapa, se o número atual for par, você deverá dividi-lo por 2, 
// caso contrário, deverá subtrair 1 dele.

// Exemplo 1:

// Entrada: num = 14
// Saída: 6
// Explicação:
// Passo 1) 14 é par; divida por 2 e obtenha 7.
// Passo 2) 7 é ímpar; subtraia 1 e obtenha 6.
// Etapa 3) 6 é par; divida por 2 e obtenha 3.
// Etapa 4) 3 é ímpar; subtraia 1 e obtenha 2.
// Etapa 5) 2 é par; divida por 2 e obtenha 1.
// Etapa 6) 1 é ímpar; subtraia 1 e obtenha 0.
// Exemplo 2:

// Entrada: num = 8
// Saída: 4
// Explicação:
// Etapa 1) 8 é par; divida por 2 e obtenha 4.
// Etapa 2) 4 é par; divida por 2 e obtenha 2.
// Etapa 3) 2 é par; divida por 2 e obtenha 1.
// Etapa 4) 1 é ímpar; subtraia 1 e obtenha 0.
// Exemplo 3:

// Entrada: num = 123
// Saída: 12


let num = 14

var numberOfSteps = function(num) {
    let val = 0

    while(num > 0){
        num % 2 === 0 ? num /= 2 : num -=1

        val++
    }
    
    console.log(val)

}

numberOfSteps(num)