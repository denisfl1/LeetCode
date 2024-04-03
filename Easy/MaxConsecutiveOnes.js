

// Dado um array binário nums, retorne o número máximo de 1s consecutivos no array.

 

// Exemplo 1:

// Entrada: nums = [1,1,0,1,1,1]
// Saída: 3
// Explicação: Os primeiros dois dígitos ou os últimos três dígitos são 1s consecutivos. 
// O número máximo de 1s consecutivos é 3.

// Exemplo 2:

// Entrada: nums = [1,0,1,1,0,1]
// Saída: 2

let nums =  [1,0,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCount = 0
    for(let i=0;i<nums.length;i++){

        if(nums[i]== 1){
            count++
            maxCount = Math.max(maxCount, count)

        }else{
            count = 0
        }
       
    }

    console.log(maxCount)
}


findMaxConsecutiveOnes(nums)
