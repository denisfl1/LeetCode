// Dado um array nums de tamanho n, retorna o elemento majoritário.

// O elemento majoritário é o elemento que aparece mais de ⌊n/2⌋ vezes.
// Você pode assumir que o elemento majoritário sempre existe no array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

  // Input: nums = [2,2,1,1,1,2,2]
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [5,5,5,5,2,2,2]
              

// let nums = [2,2,1,1,1,2,2]
// let nums = [3,2,3]

var majorityElement = function(nums) {

    let required_number = 0
    // let obj = {}
    
    //Método 1

    nums.sort((a,b)=>a-b)
    required_number = nums[Math.floor(nums.length / 2)]


   // --------------------

    //Método 2

    // for(let i = 0;i<nums.length;i++){
        
    //     if(!obj[nums[i]]) {
    //         obj[nums[i]] = []
    //     }
    //         obj[nums[i]].push(i)

    //     if(obj[nums[i]].length > nums.length/2){
    //         required_number = nums[i]
    //     }
    
    // }
    console.log(required_number)
}   

majorityElement(nums)