let nums = [1,3,5,6], target = 3


var searchInsert = function(nums, target) {
    let n = 0

    for(let i = 0;i<nums.length;i++){

        if(!nums.includes(target)){
        nums.push(target)
        nums.sort((a,b)=>{return a-b})
        
        }
        console.log(nums[i])

    }
  
    
 
};


searchInsert(nums,target)