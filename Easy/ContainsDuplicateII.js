
// Dado um array inteiro nums e um inteiro k,
//retorna verdadeiro se houver dois índices distintos i e j no
//matriz tal que nums[i] == nums[j] e abs(i - j) <= k.

 
// Exemplo 1:

// Entrada: nums = [1,2,3,1], k = 3
//Saída: verdadeiro
// Exemplo 2:

// Entrada: nums = [1,0,1,1], k = 1
//Saída: verdadeiro
// Exemplo 3:

// Entrada: nums = [1,2,3,1,2,3], k = 2
//Saída: falso
 

// Restrições:

// 1 <= nums.comprimento <= 105
// -109 <= num[i] <= 109
// 0 <= k <= 105

let nums  = [1,0,1,1]
let k = 1


var containsNearbyDuplicate = function(nums, k) {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] >= 0 && Math.abs(obj[nums[i]] - i) <= k) {
            return true
        }
        obj[nums[i]] = i
    }
    return false
        
}

containsNearbyDuplicate(nums,k)