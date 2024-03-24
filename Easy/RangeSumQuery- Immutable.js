

// Dado um array inteiro nums, lide com múltiplas consultas do seguinte tipo:

// Calcule a soma dos elementos de nums entre os índices esquerdo e direito, inclusive onde esquerda <= direita.
// Implemente a classe NumArray:

// NumArray(int[] nums) Inicializa o objeto com a matriz de inteiros nums.
// int sumRange(int left, int right) Retorna a soma dos elementos de 
// nums entre os índices esquerdo e direito inclusive (ou seja, nums[esquerda] + nums[esquerda + 1] + ... + nums[direita]).


// Exemplo 1:

// Entrada
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Saída
// [nulo, 1, -1, -3]

// Explicação
// NumArray numArray = novo NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); //retorna (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // retorna 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); //retorna (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

// Restrições:

// 1 <= nums.comprimento <= 104
// -105 <= num[i] <= 105
// 0 <= esquerda <= direita < nums.length
// Serão feitas no máximo 104 chamadas para sumRange.



var NumArray = function(nums) {
    


}