
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// No MATLAB, existe uma função útil chamada reshape, 
// que pode remodelar uma matriz m x n em uma nova com tamanho diferente r x c, 
// mantendo seus dados originais.

// Você recebe uma matriz m x n e dois inteiros r e c representando o número de linhas 
// e o número de colunas da matriz remodelada desejada.

// A matriz remodelada deve ser preenchida com todos os 
// elementos da matriz original na mesma ordem de passagem de linha em que estavam.

// Se a operação de remodelação com determinados parâmetros for possível e legal, 
// produza a nova matriz remodelada; Caso contrário, produza a matriz original.


var matrixReshape = function(mat,r,c) {
 
    let rows = mat.length
    let collumns = mat[0].length
    let output = new Array(r)


        if((rows * collumns) != (r * c))return mat

        for(let i =0;i<r;i++){
            output[i] = new Array(c)
        }
        let row_num = 0
        let collumn_num = 0

        for(let i=0;i<rows;i++){
       
            for(let j=0;j<collumns;j++){
                output[row_num][collumn_num] = mat[i][j]
                collumn_num++

                if(collumn_num == c){
                    collumn_num = 0
                    row_num++
                }
            }
        }

        console.log(output)
    
}



let mat = [[1,2],[3,4]]
let r = 1, c = 4

matrixReshape(mat,r,c)