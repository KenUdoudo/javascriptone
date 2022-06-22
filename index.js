alert('Kendo Udoudo, 5ft10, Nigeria')

let nameVariable = "kendo";
let heightVariable = "five feet ten inches";
let countryVariable = "nigeria";

let firstLetter = nameVariable[0].toUpperCase();
let n = nameVariable.slice(1,5);
let name = firstLetter + n;

let heightFirstLetter = heightVariable[0].toUpperCase();
let h = heightVariable.slice(1,20);
let height = heightFirstLetter + h;

let countryFirstLetter = countryVariable[0].toUpperCase();
let c = countryVariable.slice(1,7);
let country = countryFirstLetter + c;


console.log(name);
console.log(height);
console.log(country);
