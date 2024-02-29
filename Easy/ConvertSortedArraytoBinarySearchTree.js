// Dado um array inteiro nums onde os elementos são classificados em ordem crescente, converta-o em um
// com equilíbrio de altura
//   árvore de pesquisa binária.

// Exemplo 1:


// Entrada: nums = [-10,-3,0,5,9]
// Saída: [0,-3,9,-10,nulo,5]
// Explicação: [0,-10,5,null,-3,null,9] também é aceito:

// Exemplo 2:


// Entrada: números = [1,3]
// Saída: [3,1]
// Explicação: [1,null,3] e [3,1] são ambos BSTs com equilíbrio de altura.
 

// Restrições:

// 1 <= nums.comprimento <= 104
// -104 <= num[i] <= 104
// nums é classificado em ordem estritamente crescente.


var sortedArrayToBST = function(nums) {
    
    if (!nums.length) return null
    
    const mid = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[mid])
    
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))

    return root

}
let nums = [-10,-3,0,5,9]
sortedArrayToBST(nums)