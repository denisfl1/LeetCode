// Você recebe um número inteiro grande representado como dígitos de uma matriz de inteiros, onde cada dígito [i] é o i-ésimo dígito do número inteiro. Os dígitos são ordenados do mais significativo para o menos significativo, da esquerda para a direita. O número inteiro grande não contém nenhum 0 à esquerda.

// Aumente o número inteiro grande em um e retorne a matriz de dígitos resultante.

 

// Exemplo 1:

// Entrada: dígitos = [1,2,3]
// Saída: [1,2,4]
// Explicação: A matriz representa o número inteiro 123.
// Aumentar em um dá 123 + 1 = 124.
// Assim, o resultado deve ser [1,2,4].
// Exemplo 2:

// Entrada: dígitos = [4,3,2,1]
// Saída: [4,3,2,2]
// Explicação: A matriz representa o inteiro 4321.
// Aumentar em um dá 4321 + 1 = 4322.
// Assim, o resultado deve ser [4,3,2,2].
// Exemplo 3:

// Entrada: dígitos = [9]
// Saída: [1,0]
// Explicação: A matriz representa o inteiro 9.
// Aumentando em um dá 9 + 1 = 10.
// Assim, o resultado deve ser [1,0].
 

// Restrições:

// 1 <= dígitos.comprimento <= 100
// 0 <= dígitos[i] <= 9
// dígitos não contém nenhum 0 à esquerda.


let digits = [1,2,9]

var plusOne = function(digits) {

    for(let i = digits.length - 1;i>=0;i--){
        if(digits[i] === 9){
            digits[i] = 0
        }else{
            digits[i]++
            console.log(digits)
        }
    }
    digits.unshift(1)
    console.log(digits)

}

plusOne(digits)