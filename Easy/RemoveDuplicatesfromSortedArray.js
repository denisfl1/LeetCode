
let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {

    let index = 1

    for(let i= 0;i<nums.length - 1;i++){

        if(nums[i]!==nums[i+1]){
            nums[index] = nums[i+1]
            index++
        }
        
    
    }

    return index
}

removeDuplicates(nums)