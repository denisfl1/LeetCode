// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

  // Input: nums = [2,2,1,1,1,2,2]
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
let x  = [1]

//let nums = [2,2,1,1,1,2,2]
//let nums = [3,2,3]

var majorityElement = function(nums) {
    
    let count = 0
    let required_number = 0
    for(let i of nums){
        if(count === 0){
            required_number = i
        }
        if(i !== required_number){
            count = count - 1
        }else{
            count = count + 1
        }
    }

    console.log(required_number)
       
}


majorityElement(nums)