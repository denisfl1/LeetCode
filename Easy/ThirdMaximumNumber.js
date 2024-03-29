

// Dado um array inteiro nums, retorne o terceiro número máximo distinto neste array. Se o terceiro máximo não existir, retorne o número máximo.

 
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

let nums  = [3,2,1]

var thirdMax = function(nums) {

    const position = nums.length - 1
    let arr  = [...nums]
    let max  = [nums[position]]

    arr.sort((a,b)=>a-b)

    if(max != arr[Math.floor(nums.length - 1/ 2)]){
        console.log(arr[Math.floor(nums.length - 1/ 2)])
    }
   
    const x = [1,2,3]
      
};

thirdMax(nums)