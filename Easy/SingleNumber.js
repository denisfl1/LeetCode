
let nums =  [2,2,1]
//   [4,1,2,1,2] 
//   [4,1,2,1,2]
//   [4,1,2,1,2] 

// [2,2,1]
// [1,2,2]

//   [4,1,2,1,2] 
//   [2,1,2,1,4]


let a = ["1","2","3","4","5"]


var singleNumber = function(nums) {
    let arr = []
    let arr2 = []
    let num = nums.length - 1


        for(let i=0;i<nums.length;i++){
            arr[num] = nums[i]
            num --

            if(arr[i] == nums[i]){
                arr2.push(nums[i])
                            
            }            
    

        }

        if(nums.length == 1){
            arr = nums[0]
        }

        console.log(arr2)

}

singleNumber(nums)