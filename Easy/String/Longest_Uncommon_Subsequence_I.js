

// Dadas duas strings a e b,
// retorne o comprimento da maior subsequência incomum entre a e b. 
// Se nenhuma subsequência incomum existir, retorne -1.

// Uma subsequência incomum entre duas strings é uma string que é uma
// subsequência
// de exatamente uma delas.

// Exemplo 1:

// Entrada: a = "aba", b = "cdc"
// Saída: 3
// Explicação: Uma maior subsequência incomum é "aba" porque "aba" é uma subsequência de "aba", mas não de "cdc".
// Observe que "cdc" também é uma maior subsequência incomum.
// Exemplo 2:

// Entrada: a = "aaa", b = "bbb"
// Saída: 3
// Explicação: As maiores subsequências incomuns são "aaa" e "bbb".
// Exemplo 3:

// Entrada: a = "aaa", b = "aaa"
// Saída: -1
// Explicação: Toda subsequência da string a também é uma subsequência da string b. 
// Similarmente, toda subsequência da string b também é uma subsequência da string a. Então a resposta seria -1.


var findLUSlength = function(a, b) {
    if(a === b)return console.log(-1)
        return console.log( Math.max(a.length,b.length))

};

findLUSlength("aaa","aaa")


