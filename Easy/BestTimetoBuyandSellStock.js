// Você recebe uma matriz de preços onde os preços[i] são o preço de uma determinada ação no i-ésimo dia.

// Você deseja maximizar seu lucro escolhendo um único dia para comprar uma ação e escolhendo um dia diferente no futuro para vendê-la.

// Retorne o lucro máximo que você pode obter com esta transação. Se você não conseguir obter nenhum lucro, retorne 0.

 

// Exemplo 1:

//let prices = [7,1,5,3,6,4]
// Saída: 5
// Explicação: Compre no dia 2 (preço = 1) e venda no dia 5 (preço = 6), lucro = 6-1 = 5.
// Observe que não é permitido comprar no dia 2 e vender no dia 1 porque você deve comprar antes de vender.
// Exemplo 2:

// let prices = [7,6,4,3,1]
// Saída: 0
// Explicação: Neste caso, nenhuma transação é realizada e o lucro máximo = 0.
 

// Restrições:

// 1 <= preços.comprimento <= 105
// 0 <= preços[i] <= 104

// let prices = [7,6,4,3,1]
let prices = [7,1,5,3,6,4]


var maxProfit = function(prices) {
    let profit = 0
    let low = prices[0]
    for(let i=1; i<prices.length; i++){
        if(prices[i] < low){
            low = prices[i]
  
        }

        if(prices[i] - low > profit){
            profit = prices[i] - low
                    
        }
    
    }
   
    console.log(profit)
}


maxProfit(prices)