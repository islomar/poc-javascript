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
 * Methods that get their object context from 'this' are called public methods.
 */
console.log("--------------------------------------");
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
console.log("myObject.value after increment(): " + myObject.value);

myObject.increment(2);
console.log("myObject.value after increment(2): " + myObject.value);

/**
 * Function invocation pattern
 * ===========================
 *
 * When a function is not the property of an object, then it is invoked as a function.
 * When a function is invoked with this pattern, 'this' is bound to the global object: this was a mistake in the design of the language.
 *
 */
console.log("--------------------------------------");
var add = function (a, b) {
    return a + b;
};

//var value = 6666666666666;

myObject.double = function () {
    var that = this; //Workaround >> 'this' is bound to myObject

    var helper = function () {
        that.value = add(that.value, that.value); // If case we used 'this' here, it would not work, it is not the same 'this' the outer function.
        console.log("this.value: " + this.value); // 'this' is bound to the global object, NOT to myObject >> uncomment var value for testing.
        console.log("that.value: " + that.value);
    };

    helper(); //Invoke helper as a function
};
myObject.double();
console.log("myObject.value after double(): " + myObject.value);

/**
 * Constructor invocation pattern
 * ==============================
 * JS is a prototypal inheritance language: that means that objects can inherit properties directly from another objects.
 * Objects are class-free.
 *
 * If a function is invoked with the 'new' prefix, then a new object will be created with a hidden link to the value of the function's 'prototype' member,
 * and 'this' will be bound to that new object.
 * The 'new' prefix also changes the behavior of the return statement.
 */
console.log("--------------------------------------");
var Quo = function (string) {
    this.status = string;  // 'this' is bound to the new object (neither to the caller -method invocation- nor the the global object -function invocation)
};

Quo.prototype.get_status = function () {
    return this.status;
};

var status = "you should not be reading this";

var myQuo = new Quo("confused"); //Functions which are intended to bused with the 'new' prefix are called constructors: capitalize names >> not recommended.
console.log("myQuo.get_status(): " + myQuo.get_status());

/**
 * Apply invocation pattern
 * ========================
 * The 'apply' method lets us construct an array of argumetns to use to invoke a function.
 * It also lets us choose the value of 'this'.
 * The 'apply' method takes two parameters: the first is the value that should be bound to 'this'. The second is an array of parameters.
 */
console.log("--------------------------------------");
var array = [3, 4];
var sum = add.apply(null, array); //sum is 7

var statusObject = {
    status: 'A-OK'
};
var status = Quo.prototype.get_status.apply(statusObject);
console.log("status: " + status);

/**
 * Nested functions (review)
 */
console.log("--------------------------------------");
var myNestedFunctionsObject = {
    func1: function () {
        console.log(this); // logs myNestedFunctionsObject
        var func2 = function () {
            console.log(this); // logs window, and will do so from this point on
            var func3 = function () {
                console.log(this); // logs window, as it's the head object
            }();
        }();
    }
};
myNestedFunctionsObject.func1();

/**
 * Example with two different 'this' bindings
 */
console.log("--------------------------------------");
var foo = 'foo';
var myObject = {
    foo: 'I am myObject.foo'
};

var sayFoo = function () {
    console.log(this['foo']);
};

myObject.sayFoo = sayFoo;

myObject.sayFoo();  // "I am myObject.foo"  > 'this' refers to myObject
sayFoo();           // "foo" > 'this' refers to window


/**
 * Borillo's example
 *
 */
console.log("--------------------------------------");
var point = {
    x: 10,
    y: 20,
    show: function () {
        console.log(this.x, this.y);
    }
};
var myShow = point.show;
myShow(); //fail!!          >>> undefined undefined
point.show();  //works!!    >>> 10 20
