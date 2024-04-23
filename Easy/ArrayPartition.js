
// Dada uma matriz de inteiros nums de 2n inteiros,
// agrupe esses inteiros em n pares (a1, b1), (a2, b2), ..., 
// (an, bn) de modo que a soma de min(ai, bi) para todos i é maximizado. 
/// Retorne a soma maximizada.

 

// Exemplo 1:

// Entrada: nums = [1,4,3,2]
// Saída: 4
// Explicação: Todos os pares possíveis (ignorando a ordem dos elementos) são:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// Portanto, a soma máxima possível é 4.
// Exemplo 2:

// Entrada: nums = [6,2,6,5,1,2]
// Saída: 9
// Explicação: O emparelhamento ideal é (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.



var arrayPairSum = function(nums) {
    
    let sum  = 0
    nums.sort((a,b)=>a-b)

    for(let i = 0;i<nums.length; i+=2 ){
        sum+= nums[i]
    }

    console.log(sum)
}

let nums =  [6,2,6,5,1,2]
arrayPairSum(nums)

