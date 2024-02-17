// Entrada: 
let nums = [2,7,11,15], alvo = 9

function twoSum(nums, alvo) {
let arr = nums.length
let target = alvo
let sums = 0 
let positions = []


    for(let i = 0;i<arr;i++){
       sums = target - nums[i] 
        positions.push(sums)
    //    if(sums.includes() == sums)
    //     positions.push(nums)
    } 

    console.log(positions)
}

twoSum(nums,alvo)