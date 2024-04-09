
word  = ["adsdf","sfd"]

def findWords(words)
  line1 = Set.new("qwertyuiop")
  line2 = Set.new("asdfghjkl")
  line3 = Set.new("zxcvbnm")

  res = []

  words.each do |word|

      if compare(word, line1) || compare(word, line2) || compare(word, line3)
        res.push(word)
      end

  end

  return res
end

def compare(word, row)

  word.downcase.each_char do |char|
    return false unless row.include?(char)
  end

  return true
end



findWords(word)
