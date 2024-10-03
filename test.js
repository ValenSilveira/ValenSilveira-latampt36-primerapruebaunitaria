
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.86 to yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen (3.5);

    const expected = 3.5 * 146.84;

    expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("One Yen should be 0.0052 to Pound", function () {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound (3.5)
    const excepted = 3.5 * 0.0052; 
    expect(fromYenToPound(3.5)).toBe(3.045);
    
}) 