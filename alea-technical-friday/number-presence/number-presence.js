console.log("typeOf NaN is " + (typeof NaN));

console.log("NaN === NaN is " + (NaN === NaN));

console.log("isNaN(0/0) = " + (isNaN(0/0)));
console.log("isNaN('42') = " + (isNaN("42"))); //Turns out that this method is looking strictly for the JS value NaN itself. Fun.
console.log("isNaN(9) = " + (isNaN(9)));

console.log("isNaN(NaN) is " + (isNaN(NaN)));

console.log("isThisActuallyANumberDontLie(640) = " + isThisActuallyANumberDontLie(640));
console.log("isThisActuallyANumberDontLie(NaN) = " + isThisActuallyANumberDontLie(NaN));

function isThisActuallyANumberDontLie( data ) {
    return ( typeof data === "number" && !isNaN(data) );
}
