let nums = [1,3,5,6], target = 2


var searchInsert = function(nums, target) {
    let search = 0

    for(let i = 0;i<nums.length;i++){

        if(nums[i] == target){
   
            search = i
        }

        if(!nums.includes(target)){
      
            nums.push(target)
            nums.sort((a,b)=>a-b)

            if(nums[i] == target){
                search = i
            }

        }

    }
  
    console.log(search)
 
};


searchInsert(nums,target)