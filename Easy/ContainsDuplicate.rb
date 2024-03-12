

nums =[1,2,3,4]

def containsDuplicate (nums)

     result = false
     obj = {}
     arr = []

    for i in 0...(nums.size)

        if(!obj[nums[i]])

          obj[nums[i]] = []

        else

          obj[nums[i]].push(i)

        end

        arr.push(obj[nums[i]].size)

        if(arr[0] != arr[i])

            result = true

        end

    end

    puts result


end

containsDuplicate(nums)
