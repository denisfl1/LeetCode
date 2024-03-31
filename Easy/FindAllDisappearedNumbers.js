
// 448. Encontre todos os números desaparecidos em uma matriz
// Fácil
// Tópicos
// Empresas
// Dica
// Dado um array nums de n inteiros onde nums[i] está no intervalo [1, n], 
//retorne um array de todos os inteiros no intervalo [1, n] que não aparecem em nums.

 

// Exemplo 1:

// Entrada: nums = [4,3,2,7,8,2,3,1]
// Saída: [5,6]
// Exemplo 2:

// Entrada: números = [1,1]
// Resultado: [2]
 

// Restrições:

// n == nums.comprimento
// 1 <= n <= 105
// 1 <= números[i] <= n
 

// Acompanhamento: Você poderia fazer isso sem espaço extra e em tempo de execução O(n)? 
// Você pode assumir que a lista retornada não conta como espaço extra.

let nums  =  [1,1]

var findDisappearedNumbers = function(nums) {
    
    let set = new Set(nums) , result = []
    for (let i = 1; i < nums.length+1; i++) { 
        if (!set.has(i)){
            result.push(i)
        }
    }
    console.log(set)
}


findDisappearedNumbers(nums)