
// Dadas duas matrizes inteiras nums1 e nums2, retorne uma matriz de seus
// interseção
// .Cada elemento no resultado deve ser único e você pode retornar o resultado em qualquer ordem.

 

// Exemplo 1:

// Entrada: nums1 = [1,2,2,1], nums2 = [2,2]
// Resultado: [2]
// Exemplo 2:

// Entrada: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Saída: [9,4]
// Explicação: [4,9] também é aceito.
 

// Restrições:

// 1 <= nums1.comprimento, nums2.comprimento <= 1000
// 0 <= nums1[i], nums2[i] <= 1000



var intersection = function(nums1,nums2) {
    let set1 = new Set([...nums1])
    let set2 = new Set([...nums2])
    let result =[];
    for(const num of set1){
        if (set2.has(num)) result.push(num);
    }
    console.log(result)

}

intersection([1,2,2,1],[2,2])