
def sortedArrayToBST (nums)
  ["1"]
  unless (nums.size) return null;

else
  mid = rand(nums.size) / 2
  root = Tree.new(nums[mid])

  root.left = sortedArrayToBST(nums.delete_at(0, mid))
  root.right = sortedArrayToBST(nums.delete_at(mid + 1))
end
  root


end