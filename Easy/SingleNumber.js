
let nums = [2,2,1]
// [4,1,2,1,2] 
// [2,1,2,1,4]
// [2,2,1]
// [1,2,2]


var singleNumber = function(nums) {
    let arr = []
    let num = 0

        for(let i=0;i<nums.length;i++){
            arr.push(nums[i])
            
            if(nums.length == 1){

                arr = nums[i]

            }else{
                arr.reverse()
                console.log(nums[i] % arr[i] > 0 && i)
                // if(nums[i] % arr[i] != 0){
                //     num = nums[i]
                // }
            }

           

        }
       
        // console.log(num)
}

singleNumber(nums)