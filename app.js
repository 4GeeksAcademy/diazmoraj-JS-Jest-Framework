//console.log("Hello World")

const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

let oneEurols = {
    "JPY": 156.5, //Japan
    "USD": 1.07, // US
    "GBP": 0.87, // British
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollars) {
    let valueInEuro = valueInDollars / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYens) {
    let valueInEuro = valueInYens / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
