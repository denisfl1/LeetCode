// Dada uma matriz não vazia de números inteiros, cada elemento aparece duas vezes, exceto um. Encontre aquele único.

// Você deve implementar uma solução com complexidade de tempo de execução linear e usar apenas espaço extra constante.

 

// Exemplo 1:

// Entrada: nums = [2,2,1]
// Saída: 1
// Exemplo 2:

// Entrada: nums = [4,1,2,1,2]
// Saída: 4
// Exemplo 3:

// Entrada: nums = [1]
// Saída: 1
 

// Restrições:

// 1 <= nums.comprimento <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Cada elemento da matriz aparece duas vezes, exceto um elemento que aparece apenas uma vez.



let nums = [1,3,1,-1,3]

//   [4,1,2,1,2] 

// [2,2,1]

const x = [1,2,3,4,5]

var singleNumber = function(nums) {

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }


     console.log(result)


}

singleNumber(nums)