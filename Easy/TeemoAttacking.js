

// Nosso herói Teemo está atacando um inimigo Ashe com ataques de veneno! 
// Quando Teemo ataca Ashe, Ashe fica envenenado por exatamente alguns segundos. 
// Mais formalmente, um ataque no segundo t significará que Ashe será envenenado durante o intervalo de tempo inclusivo [t, t + duração - 1]. 
// Se Teemo atacar novamente antes do efeito do veneno terminar, o cronômetro será zerado e o efeito do veneno terminará segundos após o novo ataque.

// Você recebe um array inteiro não decrescente timeSeries, onde timeSeries[i] denota que Teemo ataca Ashe no segundo timeSeries[i], e uma duração inteira.

// Retorne o número total de segundos que Ashe fica envenenado.

 

// Exemplo 1:

// Entrada: timeSeries = [1,4], duração = 2
// Saída: 4
// Explicação: Os ataques de Teemo a Ashe são os seguintes:
// - No segundo 1, Teemo ataca, e Ashe é envenenada nos segundos 1 e 2.
// - No segundo 4, Teemo ataca, e Ashe é envenenada nos segundos 4 e 5.
// Ashe fica envenenado pelos segundos 1, 2, 4 e 5, o que equivale a 4 segundos no total.
// Exemplo 2:

// Entrada: timeSeries = [1,2], duração = 2
// Saída: 3
// Explicação: Os ataques de Teemo a Ashe são os seguintes:
// - No segundo 1, Teemo ataca, e Ashe é envenenada nos segundos 1 e 2.
// - Porém, no segundo 2, Teemo ataca novamente e zera o temporizador de veneno. 
// Ashe é envenenado pelos segundos 2 e 3.
// Ashe é envenenado pelos segundos 1, 2 e 3, o que equivale a 3 segundos no total.

let timeSeries = [1,4], duração = 2

var findPoisonedDuration = function(timeSeries, duration) {
    

const x = [1,2,3]

}

findPoisonedDuration(timeSeries, duration)