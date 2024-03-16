

// Dado um array nums contendo n números distintos no intervalo [0, n], retorne o único número no intervalo que está faltando no array.


// Exemplo 1:

// Entrada: nums = [3,0,1]
// Saída: 2
// Explicação: n = 3, pois existem 3 números, então todos os números estão no intervalo [0,3]. 2 é o número que falta no intervalo, pois não aparece em nums.
// Exemplo 2:

// Entrada: números = [0,1]
// Saída: 2
// Explicação: n = 2, pois existem 2 números, então todos os números estão no intervalo [0,2]. 2 é o número que falta no intervalo, pois não aparece em nums.
// Exemplo 3:

// Entrada: nums = [9,6,4,2,3,5,7,0,1]
// Saída: 8
// Explicação: n = 9, pois existem 9 números, então todos os números estão no intervalo [0,9]. 8 é o número que falta no intervalo, pois não aparece em nums.
 

// Restrições:

// n == nums.comprimento
// 1 <= n <= 104
// 0 <= num[i] <= n
// Todos os números de nums são únicos.

let nums = [0,1]
var missingNumber = function(nums) {
    
    let size = nums.length
    let sum = size*(size+1)/2
    let sum2 = nums.reduce((a,b)=> a+b)

    console.log(sum-sum2)
    const x  = [1,2,3,4]
}

missingNumber(nums)
