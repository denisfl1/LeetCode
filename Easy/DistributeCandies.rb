

def distributeCandies(candyType)

  set = Set.new(candyType)

  calc = [set.size,candyType.size / 2].min

  puts calc

end

candyType = [1,1,2,3]

distributeCandies(candyType)
