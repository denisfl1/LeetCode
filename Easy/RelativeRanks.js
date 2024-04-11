


// Você recebe uma pontuação de matriz inteira de tamanho n, 
// onde pontuação[i] é a pontuação do i-ésimo atleta em uma competição. 
// Todas as pontuações são garantidamente únicas.

// Os atletas são colocados com base em suas pontuações, 
/// onde o atleta do 1º colocado tem a maior pontuação, 
// o atleta do 2º colocado tem a 2ª maior pontuação e assim sucessivamente.
// A colocação de cada atleta determina sua classificação:

// A classificação do atleta em 1º lugar é “Medalha de Ouro”.
// A classificação do atleta 2º colocado é “Medalha de Prata”.
// A classificação do atleta 3º colocado é “Medalha de Bronze”.
// Para o atleta do 4º ao enésimo colocado, sua classificação é o seu número de colocação (ou seja, a classificação do atleta do xº colocado é "x").
// Retorne uma resposta de array de tamanho n onde resposta[i] é a classificação do i-ésimo atleta.

 
// Exemplo 1:

// Entrada:     
// Resultado: ["Medalha de Ouro","Medalha de Prata","Medalha de Bronze","4","5"]
// Explicação: As colocações são [1ª, 2ª, 3ª, 4ª, 5ª].
// Exemplo 2:

// Entrada: pontuação = [10,3,8,9,4]
// Resultado: ["Medalha de Ouro","5","Medalha de Bronze","Medalha de Prata","4"]
// Explicação: As colocações são [1ª, 5ª, 3ª, 2ª, 4ª].


var find_relative_ranks = function(score){

    let order = [...score].sort((a,b)=> b-a)

    let positions  = order.map((e)=>{

        let index  = positions.indexOf(e)
        if(index == 0)return "Gold medal"
        if(index == 1)return "Silver medal"
        if(index == 2)return "Bronze medal"
        return index+1+""
    })
    
    return positions
}
    
