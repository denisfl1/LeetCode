

// Dada uma string s, inverta apenas todas as vogais da string e retorne-a.

// As vogais são 'a', 'e', ​​'i', 'o' e 'u' e podem aparecer em letras maiúsculas e minúsculas, 
// mais de uma vez.


// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


var reverseVowels = function(s) {

    const word1 = s.match(/[aeiou]/gi) // Match Deixa apenas as vogais
    const word2 = s.replace(/[aeiou]/gi,()=>word1.pop()) // 'pop()' Substitui as vogais de trás pra frente removendo a última vogal 

    console.log(word2)

};

let s =  "leetcode"

reverseVowels(s)
