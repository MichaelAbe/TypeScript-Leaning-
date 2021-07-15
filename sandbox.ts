// to compile 'tsc sandbox.ts -w'

let char = 'Lewis'

let age = '30'

let isChampion = true

// char = 34
// age = young
// isChampion = '6 times' 
 
console.log(char, age, isChampion)

const inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})

const circum = (diam) => {
    return diam * Math.PI
}

console.log(circum(7))