let nums = [1,3,5,6], target = 7


var searchInsert = function(nums, target) {
    let n = 0

    for(let i = 0;i<nums.length;i++){

        if(nums[i] == target){
   
            n = i
        }

        if(!nums.includes(target)){
            i + 1
            nums.push(target)
            nums.sort((a,b)=>a-b)

            if(nums[i] == target){
                n = i
            }

        }

    }
  
    console.log(n)
 
};


searchInsert(nums,target)