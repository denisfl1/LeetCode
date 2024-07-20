



def detectCapitalUse (word)

    regex = /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z]([a-z]+)$)/

    puts word.match?(regex)


end

detectCapitalUse("FlaG")
