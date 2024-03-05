// Você recebe uma matriz de preços onde os preços[i] são o preço de uma determinada ação no i-ésimo dia.

// Você deseja maximizar seu lucro escolhendo um único dia para comprar uma ação e escolhendo um dia diferente no futuro para vendê-la.

// Retorne o lucro máximo que você pode obter com esta transação. Se você não conseguir obter nenhum lucro, retorne 0.

 

// Exemplo 1:

// Entrada: preços = [7,1,5,3,6,4]
// Saída: 5
// Explicação: Compre no dia 2 (preço = 1) e venda no dia 5 (preço = 6), lucro = 6-1 = 5.
// Observe que não é permitido comprar no dia 2 e vender no dia 1 porque você deve comprar antes de vender.
// Exemplo 2:

// Entrada: preços = [7,6,4,3,1]
// Saída: 0
// Explicação: Neste caso, nenhuma transação é realizada e o lucro máximo = 0.
 

// Restrições:

// 1 <= preços.comprimento <= 105
// 0 <= preços[i] <= 104

let prices = [7,1,5,3,6,4]
// let prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let buy  = 0
    let sale = []

    let order = ''
    let orderFirst = 0
    let orderLast = 0
    let num = 0
    let first = 0
    let last =  0

        for(let i = 0;i<prices.length;i++){
            order = new Array(i + 1).fill(0)
             
                if(prices[first] != num){
                    first++       

                
                }else{
                    order[num] = prices[first]
                    first++
                    num++
                }
                
                // if(last && first > 5){
                //     break
                // }

                // if(order[first] > prices[last]){
                //     order[i] = order[first]
                //     first++
                  
                  
                // }else{
                //     order[i] = order[last]
                //     last++
                // }
            
            
    //         order.push(prices[i])
    //         order.sort((a,b)=>a-b)
    //         orderFirst = order[0]
    //         orderLast = order[prices.length - 1]

    //         if(prices[i] == orderFirst){
    //             buy = i
    //             num = i + 1
    //         }

    //         if(prices[num] != orderLast){
    //             num++

    //             if(num <= prices.length - 1){
    //                 sale.push(prices[num])
    //                 sale.sort((a,b)=>b-a)
    //             }
                  
    //         }3

    //         if(prices[i] == sale[0]){
    //             sale = i + 1
    //         }
        }
      console.log(order)
}


maxProfit(prices)