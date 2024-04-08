
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

    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const res = [];
    
    for (const word of words) {
        if (canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3)) res.push(word)
    }
    
    return res
    
    function canBeTyped(word, row) {
       for (const char of word) {
           if (!row.has(char.toLowerCase())) return false;
       }
       return true;
    }
const x = [1,2,3,4]
}





