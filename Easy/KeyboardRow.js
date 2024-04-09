
// Dado um array de strings de palavras, retorne as palavras que podem ser digitadas usando letras do alfabeto em apenas uma linha do teclado americano como na imagem abaixo.

// No teclado americano:

// a primeira linha consiste nos caracteres "qwertyuiop",
// a segunda linha consiste nos caracteres "asdfghjkl" e
// a terceira linha consiste nos caracteres "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

var findWords = function(words) {

    const line1 = new Set("qwertyuiop")
    const line2 = new Set("asdfghjkl")
    const line3 = new Set("zxcvbnm")

    const res = []
    
    for (const word of words) {
        if (compare(word, line1) || compare(word, line2) || compare(word, line3)) res.push(word)
    }
    
    return res
    
    function compare(word, row) {
       for (const char of word) {
           if (!row.has(char.toLowerCase())) return false
       }
       return true
    }

}

let words = ["Hello","Alaska","Dad","Peace"]

findWords(words)




