
// Dada uma string s contendo apenas os caracteres '(', ')', '{', '}', '[' e ']', 
// determine se a string de entrada é válida.

// Uma string de entrada é válida se:

// Os colchetes abertos devem ser fechados pelo mesmo tipo de colchetes.
// Os colchetes abertos devem ser fechados na ordem correta.
// Cada colchete fechado possui um colchete aberto correspondente do mesmo tipo.


// Exemplo 1:

// Entrada: s = "()"
// Saída: verdadeiro
// Exemplo 2:

// Entrada: s = "()[]{}"
// Saída: verdadeiro
// Exemplo 3:

// Entrada: s = "(]"
// Saída: falso


const s = "()[]{}"

var isValid = function(s) {
    
    const output = []

    for(let i = 0;i<s.length;i++){
        if(s[i] == '('){
            output.push(')')
        }else if(s[i] == '['){
            output.push(']')
        }else if(s[i] == '{'){
            output.push('}')
        }
        else if(output.length === 0 || output.pop() != s[i]){
           return false
        }
    }

    return output.length === 0 ?  true :  false
}

isValid(s)