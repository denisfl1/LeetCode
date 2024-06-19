


def isPalindrome(s)

word = s.gsub(/[^a-zA-Z0-9 ]/, "").gsub(/\s+/, '')

def verify(str)

  return str == str.reverse

end
return verify(word.downcase)

end

s = "race a car"

puts isPalindrome(s)
