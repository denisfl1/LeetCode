
let nums = [1,3,1,-1,3]

//   [4,1,2,1,2] 

// [2,2,1]



var singleNumber = function(nums) {

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }


     console.log(result)


}

singleNumber(nums)