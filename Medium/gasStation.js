// Entrada: gás = [1,2,3,4,5], custo = [3,4,5,1,2]
// Saída: 3
// Explicação:
// Comece na estação 3 (índice 3) e encha com 4 unidades de gás. Seu tanque = 0 + 4 = 4
// Viaje para a estação 4. Seu tanque = 4 - 1 + 5 = 8
// Viaje para a estação 0. Seu tanque = 8 - 2 + 1 = 7
// Viaje para a estação 1. Seu tanque = 7 - 3 + 2 = 6
// Viaje para a estação 2. Seu tanque = 6 - 4 + 3 = 5
// Viaje para a estação 3. O custo é 5. Sua gasolina é suficiente apenas para viajar de volta à estação 3.
// Portanto, retorne 3 como índice inicial.
// Exemplo 2:

// Entrada: gás = [2,3,4], custo = [3,4,3]
// Saída: -1
// Explicação:
// Você não pode começar no posto 0 ou 1, pois não há gasolina suficiente para viajar até o próximo posto.
// Vamos começar no posto 2 e abastecer com 4 unidades de gasolina. Seu tanque = 0 + 4 = 4
// Viaje para a estação 0. Seu tanque = 4 - 3 + 2 = 3
// Viaje para a estação 1. Seu tanque = 3 - 3 + 3 = 3
// Você não pode voltar para a estação 2, pois são necessárias 4 unidades de gasolina, mas você só tem 3.
// Portanto, você não pode percorrer o circuito uma vez, não importa onde você comece.

const arr = [1,2,3,4,5]
const cost = [3,4,5,1,2]

function gasstation(arr,cost){
let stations = arr.length 
let arrIndex = 0, tanque = 0, total = 0

for(let i = 0;i<stations;i++){
    tanque += arr[i] - cost[i];
    
    if(tanque < 0){
        tanque = 0
        arrIndex = i+1;
        
    }
    total += arr[i] - cost[i]
}
    return console.log(total < 0 ? -1 : arrIndex)

}

gasstation(arr,cost)