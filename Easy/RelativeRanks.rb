

def find_relative_ranks(score)

  order = score.sort.reverse
  positions = order.map do |e|
    index = order.index(e)
    if index == 0
      "Gold medal"
    elsif index == 1
      "Silver medal"
    elsif index == 2
      "Bronze medal"
    else
      (index + 1).to_s
    end
  end
  positions
end



scores = [10, 20, 15, 5, 30]
puts find_relative_ranks(scores).inspect
