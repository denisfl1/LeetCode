

// Dado um array inteiro nums, retorne o terceiro número máximo distinto neste array. 
// Se o terceiro máximo não existir, retorne o número máximo.

 
// Exemplo 1:

// Entrada: nums = [3,2,1]
// Saída: 1
// Explicação:
// O primeiro máximo distinto é 3.
// O segundo máximo distinto é 2.
// O terceiro máximo distinto é 1.
// Exemplo 2:

// Entrada: números = [1,2]
// Saída: 2
// Explicação:
// O primeiro máximo distinto é 2.
// O segundo máximo distinto é 1.
// O terceiro máximo distinto não existe, então o máximo (2) é retornado.
// Exemplo 3:

// Entrada: nums = [2,2,3,1]
// Saída: 1
// Explicação:
// O primeiro máximo distinto é 3.
// O segundo máximo distinto é 2 (ambos os 2 são contados juntos, pois têm o mesmo valor).
// O terceiro máximo distinto é 1.
 

// Restrições:

// 1 <= nums.comprimento <= 104
// -231 <= num[i] <= 231 - 1

let nums  = [1,2]

var thirdMax = function(nums) {

    let output = 0
    let set = new Set(nums)
    nums = Array.from(set)
    nums.sort((a,b)=> b-a)

    if(nums.length < 3){
        output = nums[0]
    }else{
        output = nums[2]
    }

    console.log(output)
}

thirdMax(nums)