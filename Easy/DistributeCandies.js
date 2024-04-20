

// Alice tem n doces, onde o i-ésimo doce é do tipo candyType[i]. 
// Alice percebeu que começou a ganhar peso e foi ao médico.

// O médico aconselhou Alice a comer apenas n/2 dos doces que ela tem (n é sempre par). 
// Alice gosta muito de seus doces e quer comer o máximo de tipos diferentes de doces, seguindo os conselhos do médico.

// Dada a matriz inteira candyType de comprimento n, 
// retorne o número máximo de diferentes tipos de doces que ela pode comer se ela comer apenas n/2 deles.

 

// Exemplo 1:

// Entrada: candyType = [1,1,2,2,3,3]
// Saída: 3
// Explicação: Alice só pode comer 6/2 = 3 doces. 
// Como existem apenas 3 tipos, ela pode comer um de cada tipo.
// Exemplo 2:

// Entrada: candyType = [1,1,2,3]
// Saída: 2
// Explicação: Alice só pode comer 4/2 = 2 doces. 
// Quer ela coma os tipos [1,2], [1,3] ou [2,3], ela ainda só pode comer 2 tipos diferentes.
// Exemplo 3:

// Entrada: candyType = [6,6,6,6]
// Saída: 1
// Explicação: Alice só pode comer 4/2 = 2 doces. 
// Mesmo que ela possa comer 2 doces, ela só tem 1 tipo.


var distributeCandies = function(candyType) {
    
    let set = new Set(candyType)
    let calc = Math.min(Array.from(set).length,candyType.length / 2)
    console.log(calc)
}

let candyType = [1,1,2,3]
distributeCandies(candyType)
