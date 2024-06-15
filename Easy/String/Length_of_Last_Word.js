

// Dada uma string s que consiste em palavras e espaços, retorne o comprimento da última palavra da string.

// Uma palavra é um máximo
// substring
//  consistindo apenas em caracteres sem espaço.



// Exemplo 1:

// Entrada: s = "Olá mundo"
// Saída: 5
// Explicação: A última palavra é “World” com comprimento 5.
// Exemplo 2:

// Entrada: s = "voe-me para a lua"
// Saída: 4
// Explicação: A última palavra é “lua” com comprimento 4.
// Exemplo 3:

// Entrada: s = "luffy ainda é joyboy"
// Saída: 6
// Explicação: A última palavra é “joyboy” com comprimento 6.


var lengthOfLastWord = function(s) {

  const word = s
  const last_string = word.split(' ')
  
  console.log(last_string[last_string.length -1].length)

    
}

const s = "Olá mundo"

lengthOfLastWord(s)