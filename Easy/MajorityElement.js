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

let nums = [5,5,5,5,2,2,2]
              

// let nums = [2,2,1,1,1,2,2]
// let nums = [3,2,3]

var majorityElement = function(nums) {
    
    let required_number = 0
    let arr = {}

    for(let i = 0;i<nums.length;i++){
        
        if(!arr[nums[i]]) {
            arr[nums[i]] = []
        }
            arr[nums[i]].push(i)

        if(arr[nums[i]].length > nums.length/2){
            required_number = nums[i]
        }
    
    }
    console.log(required_number)
}   

majorityElement(nums)