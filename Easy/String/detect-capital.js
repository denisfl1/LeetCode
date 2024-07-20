
// Definimos o uso de letras maiúsculas em uma palavra como correto quando um dos seguintes 
 // casos é válido:

// Todas as letras desta palavra são maiúsculas, como "EUA".
// Todas as letras nesta palavra não são maiúsculas, como "leetcode".
// Apenas a primeira letra desta palavra é maiúscula, como “Google”.
// Dada uma palavra de string, retorne verdadeiro se o uso de letras maiúsculas estiver correto.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

var detectCapitalUse = function(word){

    return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z]([a-z]+)$)/.test(word)

}

detectCapitalUse("FlaG")