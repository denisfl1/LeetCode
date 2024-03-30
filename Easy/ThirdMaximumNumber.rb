


nums  = [1,2]

def thirdMax (nums)

    output = 0
    set = nums.to_set
    arr = set.to_a
    arr.sort! { |a, b| b - a }

    if(arr.size < 3)
        output = arr[0]
    else
        output = arr[2]
    end

    puts output.inspect

  end

thirdMax(nums)
