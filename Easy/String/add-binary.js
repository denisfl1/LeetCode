

// Dadas duas strings binárias aeb, retorne sua soma como uma string binária.

var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
  }

  const a = "11"
  const b = "1"

  addBinary(a,b)