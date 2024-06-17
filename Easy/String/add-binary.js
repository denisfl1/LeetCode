
// Saudações camaradas:

// Abaixo está minha solução chata, mas clara, usando o objeto BigInt proposto.

// A ideia é usar as entradas a e b para construir dois literais binários. 
// O cálculo da soma é feito chamando a função BigInt em nossos literais binários, 
// somando-os e retornando a soma com uma chamada ao método toString com 2 como argumento, 
// já que estamos trabalhando com números binários.



var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
  }

  const a = "11"
  const b = "1"

  addBinary(a,b)