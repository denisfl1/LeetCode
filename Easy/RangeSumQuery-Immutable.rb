
  class NumArray

        def initialize(nums)
          @nums = nums
        end

        def sumRange(left, right)

            array = @nums
            sum = 0

          while left <= right
              sum+=array[left]
              left+=1
          end

              puts sum

        end

  end


NumArray.new([1, 2, 3, 4, 5]).sumRange(1, 3)
