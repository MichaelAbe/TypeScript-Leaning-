// to compile 'tsc sandbox.ts -w'
var char = 'Lewis';
var age = '30';
var isChampion = true;
var champions = ['Kimi', 'Seb', char];
// char = 34
// age = young
// isChampion = '6 times' 
console.log(char, age, isChampion);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circum = function (diam) {
    return diam * Math.PI;
};
console.log(circum(7));
console.log(circum(3.14));
