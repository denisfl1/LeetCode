
// Dado um array inteiro nums, retorne verdadeiro se algum valor aparecer pelo menos 
// duas vezes no array e retorne falso se cada elemento for distinto.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

let nums =[1,2,3,4]

var containsDuplicate = function(nums) {
    
    let result = false
    let obj = {}
    let arr = []

    for(let i = 0;i<nums.length;i++){
         
        if(!obj[nums[i]]) {
            obj[nums[i]] = []
        }
        
        obj[nums[i]].push(i)

        arr.push(obj[nums[i]].length)
      
        if(arr[0] != arr[i]){
            result = true
        }
    
    }
    
    console.log(result)

    const x  = [1,2,3,4,5,6,7]
}

containsDuplicate(nums)