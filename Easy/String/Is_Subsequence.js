


// Dadas duas strings s e t, retorne verdadeiro se s for uma subsequência de t, 
// ou falso caso contrário.

// Uma subsequência de uma string é uma nova string formada a partir da string original, 
// excluindo alguns (pode ser nenhum) dos caracteres sem perturbar as posições relativas dos caracteres restantes.
// (ou seja, "ace" é uma subsequência de "abcde", enquanto "aec" não é).



// Exemplo 1:

// Entrada: s = "abc", t = "ahbgdc"
// Saída: verdadeiro
// Exemplo 2:

// Entrada: s = "axc", t = "ahbgdc"
// Saída: falso


var isSubsequence = function(s, t) {

    let word = s.split('')

    for(let val of t){
        
        if(val === word[0]){
            word.shift()
        }

    }
    
        console.log(word.length === 0)

};

let s = "abc", t = "ahbgdc" 

isSubsequence(s,t)