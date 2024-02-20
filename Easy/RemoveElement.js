let nums = [3,2,2,3]
let val = 3

var removeElement = function(nums, val) {
        let n = 0
 
        for(let i=0;i<nums.length ;i++){

            if(nums[i] != val){    
                     
                nums[n] = nums[i]
                n ++             
            }
           
        }   

    console.log(nums)
}


removeElement(nums,val)