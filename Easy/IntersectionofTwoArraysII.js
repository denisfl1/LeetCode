

// Dadas duas matrizes inteiras nums1 e nums2, retorne uma matriz de sua interseção. 
// Cada elemento no resultado deve aparecer quantas vezes for mostrado em ambos os arrays e você pode retornar o resultado em qualquer ordem.

 

// Exemplo 1:

// Entrada: nums1 = [1,2,2,1], nums2 = [2,2]
// Saída: [2,2]
// Exemplo 2:

// Entrada: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Saída: [4,9]
// Explicação: [9,4] também é aceito.
 

// Restrições:

// 1 <= nums1.comprimento, nums2.comprimento <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


var intersect = function(nums1,nums2) {
    
    let arrA = new Map()
    let arrB = new Map()
    let arr  = []
    let x  = [1,2,3]
    // for(const i of arrA){
    //     if(arrB.has(i))arr.push(i)
    // }
    arrA.set(...nums1,1)
    
    console.log(arrA.get(1))
}

intersect([1,2,2,1],[2,2])