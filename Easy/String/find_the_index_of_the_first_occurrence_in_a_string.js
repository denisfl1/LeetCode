
// Dadas duas strings agulha e palheiro, 
// retorne o índice da primeira ocorrência de agulha no palheiro, ou -1 se a agulha não fizer parte do palheiro.



// Exemplo 1:

// Entrada: palheiro = "sadbutsad", agulha = "sad"
// Saída: 0
// Explicação: “sad” ocorre nos índices 0 e 6.
// A primeira ocorrência está no índice 0, então retornamos 0.
// Exemplo 2:

// Entrada: palheiro = "leetcode", agulha = "leeto"
// Saída: -1
// Explicação: “leeto” não ocorreu em “leetcode”, então retornamos -1.


var strStr = function(haystack, needle) {

    const index = haystack.indexOf(needle);
    console.log(index)


}

let haystack = "sadbutsad", needle = "sad"

strStr(haystack,needle)

