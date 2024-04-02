

//Você recebe uma grade de linha x coluna representando um mapa onde grid[i][j] = 1 
//representa terra e grid[i][j] = 0 representa água.

//As células da grade são conectadas horizontalmente/verticalmente (não diagonalmente). 
//A rede é completamente cercada por água e há exatamente uma ilha 
//(ou seja, uma ou mais células terrestres conectadas).

// A ilha não possui “lagos”, o que significa que a água de seu interior não está ligada à água ao redor da ilha. 
// Uma célula é um quadrado com comprimento lateral 1. 
//A grade é retangular, a largura e a altura não excedem 100. Determine o perímetro da ilha.

// Entrada: grade = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Saída: 16
// Explicação: O perímetro são as 16 listras amarelas da imagem acima.
// Exemplo 2:

// Entrada: grade = [[1]]
// Saída: 4
// Exemplo 3:

// Entrada: grade = [[1,0]]
// Saída: 4

// [[1,1]]
let grid  =  [[1,1]]


var islandPerimeter = function(grid) {

    let per = 0
    
    for(let i= 0;i<grid.length;i++){

        for(let j = 0;j<grid[i].length;j++){
    
            if(grid[i][j] == 1){
                per+= 4
          

            if(i>0 && grid[i-1][j] == 1){
                per-= 2
            }


            if(j >0 && grid[i][j - 1] == 1){
                per-= 2
            }

        }
              
        }
       
    }
    console.log(per)
}

islandPerimeter(grid)



