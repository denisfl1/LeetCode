
let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    
   const novo = nums.filter((item,index)=>{return nums.indexOf(item) == index})

    console.log(novo)
}

removeDuplicates(nums)