
// Dadas duas strings ransomNote e magazine, 
// retorne true se ransomNote puder ser construído usando as letras de magazine e false caso contrário.

// Cada carta da revista só pode ser usada uma vez no resgateNote.

// Exemplo 1:

// Entrada: ransomNote = "a", revista = "b"
// Saída: falso
// Exemplo 2:

// Entrada: ransomNote = "aa", revista = "ab"
// Saída: falso
// Exemplo 3:

// Entrada: ransomNote = "aa", revista = "aab"
// Saída: verdadeiro


var canConstruct = function(ransomNote, magazine) {

for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "") // remove cada caractere passado no replace se todos forem retirados retorna true
   
  }
    
    
  if (!ransomNote) return console.log(true)
  else return console.log(false)


};

canConstruct("aac","aab")