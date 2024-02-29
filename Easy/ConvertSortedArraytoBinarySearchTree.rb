
def sorted_array_to_bst(nums)

  unless (nums.size > 0)

  return nil

  else
      mid = nums.size / 2
      TreeNode.new(
      nums[mid],
      sorted_array_to_bst(nums[0...mid]),
      sorted_array_to_bst(nums[(mid + 1)..-1])
    )
  end


  end
