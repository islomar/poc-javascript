/**
 * In addtion to the declared parameters, every function receives tow additional parameters: 'this' and arguments.
 * Chapter 6 from JavaScript Enlightenment
 *
 * The 'this' parameter value is determined by the invocation pattern.
 * The value of 'this', passed to all functions is based on the context in which the function is called at runtime.
 *
 * When a function is created, a keyword called 'this' is created (behind the scenes), which links to the object IN WHICH the function operates.
 * 'this' is a reference to the object of which that function is a property/method
 */


/**
 * Method invocation pattern
 * =========================
 *
 * When a function is stored as a property.
 * The binding of 'this' to the object happens at invocation time.
 */

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

// Function invocation pattern
// Constructor invocation pattern
// Apply invocation pattern
