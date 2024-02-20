let nums = [1,3,5,6], target = 5

var searchInsert = function(nums, target) {
    let index = 0

    for(let i = 0;i<nums.length;i++){

        if(nums[i] === target){
            index = i
        }

    }

    console.log(index)
};


searchInsert(nums,target)