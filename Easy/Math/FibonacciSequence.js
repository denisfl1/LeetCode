
// Os números de Fibonacci, comumente denotados como F(n), formam uma sequência, chamada sequência de Fibonacci, tal que cada número é a soma dos dois anteriores, começando em 0 e 1. Ou seja,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), para n > 1.
// Dado n, calcule F(n).

 

// Exemplo 1:

// Entrada: n = 2
// Saída: 1
// Explicação: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Exemplo 2:

// Entrada: n = 3
// Saída: 2
// Explicação: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Exemplo 3:

// Entrada: n = 4
// Saída: 3
// Explicação: F(4) = F(3) + F(2) = 2 + 1 = 3.


var fib = function(n) {
    
    let arr  = [0,1]

    for(let i = 2;i<n;i++){

    arr[i] = arr[i - 1] + arr[i - 2]

    }

    console.log(arr)

}

fib(8)

