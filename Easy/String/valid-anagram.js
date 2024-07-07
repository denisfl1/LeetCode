
// Dadas duas strings s e t, retorne verdadeiro se t for um anagrama de s, 
// e falso caso contrário.

// Um Anagrama é uma palavra ou frase formada pela reorganização das letras de uma palavra ou frase diferente, 
// normalmente usando todas as letras originais exatamente uma vez.



// Exemplo 1:

// Entrada: s = "anagrama", t = "nagaram"
// Saída: verdadeiro
// Exemplo 2:

// Entrada: s = "rato", t = "carro"
// Saída: falso


var isAnagram = function(s, t) {
    
    if(s.length !== t.length)return console.log(false)
  
    const char1 = s.split("").sort((a,b)=>a.localeCompare(b))
    const char2=  t.split("").sort((a,b)=>a.localeCompare(b))

        for(let i = 0;i<char1.length;i++){

            if(char1[i] !== char2[i])return console.log(false)

        }
       return  console.log(true)

};

let s = "aacc",t = "ccac"

isAnagram(s,t)
