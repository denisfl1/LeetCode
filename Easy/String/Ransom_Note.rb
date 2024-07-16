


def canConstruct (ransomNote, magazine)


    magazine.each_char do |char |

    ransomNote = ransomNote.gsub(char, '')

  end

  return puts true if(ransomNote.empty?)
  return  puts false


end



canConstruct("ab","ab")
