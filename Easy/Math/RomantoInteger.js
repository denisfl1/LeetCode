


// Os algarismos romanos são representados por sete símbolos diferentes: 
// I, V, X, L, C, D e M.

// Valor do símbolo
// eu 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// Por exemplo, 2 é escrito como II em algarismo romano, apenas duas unidades somadas. 
// 12 é escrito como XII, que é simplesmente X + II. 
// O número 27 é escrito como XXVII, que é XX + V + II.

// Os algarismos romanos são geralmente escritos do maior para o menor, 
// da esquerda para a direita. 
// No entanto, o número quatro não é IIII. 
// Em vez disso, o número quatro é escrito como IV. 
// Como o um está antes do cinco, subtraímo-lo, totalizando quatro. 
// O mesmo princípio se aplica ao número nove, que é escrito como IX. 
// Existem seis casos em que a subtração é usada:

// I pode ser colocado antes de V (5) e X (10) para formar 4 e 9.
// X pode ser colocado antes de L (50) e C (100) para formar 40 e 90.
// C pode ser colocado antes de D (500) e M (1000) para perfazer 400 e 900.
// Dado um algarismo romano, converta-o para um número inteiro.

 

// Exemplo 1:

// Entrada: s = "III"
// Saída: 3
// Explicação: III = 3.
// Exemplo 2:

// Entrada: s = "LVIII"
// Saída: 58
// Explicação: L = 50, V= 5, III = 3.
// Exemplo 3:

// Entrada: s = "MCMXCIV"
// Saída: 1994
// Explicação: M = 1000, CM = 900, XC = 90 e IV = 4.
 

// Restrições:

// 1 <= s.comprimento <= 15
// s contém apenas os caracteres ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// É garantido que s é um numeral romano válido no intervalo [1, 3999].


var romanToInt = function(s) {
    
    const numbers = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    let prev = 0
    let next = 0
    let output = 0

    for(let i = 0;i<s.length;i++){
        prev = numbers[s[i]]
        next = numbers[s[i + 1]]

        if(prev < next){
            output -= prev
         
        }else{
            output+= prev
        }

    }
    console.log(output)
}

let s = 'MCMXCIV'

romanToInt(s)

