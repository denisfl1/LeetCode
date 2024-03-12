

nums =[1,2,3,4]

def containsDuplicate (nums)

     result = false
     obj = {}
     arr = []

    nums.sort

    for i in 0...nums.size

        if(!obj[nums[i]])
          obj[nums[i]] = []
        end

        obj[nums[i]].push(i)

        arr.push(obj[nums[i]].size)

        if(arr[0] != arr[i])
            result = true
        end

    end

    puts result


end

containsDuplicate(nums)
