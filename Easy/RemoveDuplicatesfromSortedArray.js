
let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    let positions = new Map()
    let arr = []

    for(i in nums){
        let val = nums[i]
          
        if(!arr.includes(val)){     
            arr.push(val)
        }


        // if(!positions.has(val)){
        //     positions.set(val,val)
        //     arr.push(positions.get(val))
           
        // }
      
       
    }

    console.log(arr)
}

removeDuplicates(nums)