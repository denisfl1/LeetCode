

// Suponha que você seja um pai incrível e queira dar alguns biscoitos aos seus filhos.
//  Mas você deve dar a cada criança no máximo um biscoito.
// Cada criança i possui um fator de ganância g[i], 
// que é o tamanho mínimo de um biscoito com o qual a criança se contentará; e cada cookie j tem um tamanho s[j]. 
// Se s[j] >= g[i], podemos atribuir o cookie j ao filho i, e o filho i ficará satisfeito.  Seu objetivo é maximizar o número de seus filhos de conteúdo e gerar o número máximo.
 

// Exemplo 1:

// Entrada: g = [1,2,3], s = [1,1]
// Saída: 1
// Explicação: Você tem 3 filhos e 2 biscoitos. 
// Os fatores de ganância de 3 crianças são 1, 2, 3.
// E mesmo que você tenha 2 biscoitos, já que ambos têm tamanho 1, 
// você só poderia fazer conteúdo para a criança cujo fator de ganância é 1.
// Você precisa gerar 1.
// Exemplo 2:

// Entrada: g = [1,2], s = [1,2,3]
// Saída: 2
// Explicação: Você tem 2 filhos e 3 biscoitos. Os fatores de ganância de 2 crianças são 1, 2.
// Você tem 3 biscoitos e seus tamanhos são grandes o suficiente para agradar todas as crianças,
// Você precisa produzir 2.
 

// Restrições:

// 1 <= g.comprimento <= 3 * 104
// 0 <= s.comprimento <= 3 * 104
// 1 <= g[i], s[j] <= 231 - 1

let g  = [1,2]
let s  = [1,2,3]

var findContentChildren = function(g,s) {
    
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)

    let i = 0
    let j = 0
    let result = 0

    while(i<g.length && j<s.length){

            if(g[i]<=s[j]){
                i++
                result++
            }
            j++
                   
    }
    console.log(result)
    const x  = [1,2,3]
}

findContentChildren(g,s)




