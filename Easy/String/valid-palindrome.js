
// Uma frase é um palíndromo se,
//depois de converter todas as letras maiúsculas em minúsculas e remover todas
// caracteres não alfanuméricos, ele lê o mesmo para frente e para trás.
// Caracteres alfanuméricos incluem letras e números.

// Dada uma string s, retorne verdadeiro se for um palíndromo, ou falso caso contrário.


// Exemplo 1:

// Entrada: s = "Um homem, um plano, um canal: Panamá"
//Saída: verdadeiro
// Explicação: "amanaplanacanalpanama" é um palíndromo.
// Exemplo 2:

// Entrada: s = "correr um carro"
//Saída: falso
// Explicação: "raceacar" não é um palíndromo.
// Exemplo 3:

// Entrada: s = " "
//Saída: verdadeiro
// Explicação: s é uma string vazia "" após a remoção de caracteres não alfanuméricos.
// Como uma string vazia lê a mesma coisa para frente e para trás, ela é um palíndromo.


var isPalindrome = function(s) {

let word = s.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '')

const verify=(string)=>{
    return string == string.split('').reverse().join('')
}
return verify(word.toLowerCase())
    
}

const s = "race a car"

console.log(isPalindrome(s))

