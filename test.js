const {sum, fromDollarToYen} = require ('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("Euros to Dollars", function(){
    const {fromEuroToDollar} = require ('./app.js');
    const dollar = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Dolars to Yen", function() {
    const {fromDollarToYen} = require ('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5;
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("Yens to Pounds", function() {
    const {fromYenToPound} = require ('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = (3.5 /156.5) * 0.87;
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665)
})