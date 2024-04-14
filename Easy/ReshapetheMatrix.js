

// No MATLAB, existe uma função útil chamada reshape, 
// que pode remodelar uma matriz m x n em uma nova com tamanho diferente r x c, 
// mantendo seus dados originais.

// Você recebe uma matriz m x n e dois inteiros r e c representando o número de linhas 
// e o número de colunas da matriz remodelada desejada.

// A matriz remodelada deve ser preenchida com todos os 
// elementos da matriz original na mesma ordem de passagem de linha em que estavam.

// Se a operação de remodelação com determinados parâmetros for possível e legal, 
// produza a nova matriz remodelada; Caso contrário, produza a matriz original.


var matrixReshape = function(mat, r, c) {
 
    let rows = mat.length
    let collumns = nums[0].length
    let output = new Array()

        if(rows * collumns != r * c)return rows

        let row_num = 0
        let collumn_num = 0

        // for(let i = 0;i<rows;i++){
        //     for(let j =0;j<collumns;j++){
        //         collumn_num[row_num][collumn_num] = 
        //     }
        // }

    const x = [1,2,3,4,5,6,7]
}