
let nums = [1,3,1,-1,3]
//         [1,3,1,-1,3]
//         [3,-1,1,3,1]
//         [3,-1,1,3,1]

//   [4,1,2,1,2] 
//   [4,1,2,1,2]
//   [2,1,2,1,4]

//  11224
//  11224
//  42211

// [2,2,1]
// [2,2,1]
// [1,2,2]
//   [2]



var singleNumber = function(nums) {

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }


     console.log(result)



}

singleNumber(nums)