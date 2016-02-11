/**
 * JS is a prototypal language, which means that objects inherit directly from other objects.
 *
 * JS includes a prototype linkage feature that allows one object to inherit the properties of another.
 *
 * Every object is linked to a prototype object from which it can inherit properties.
 * All objects created from object literals are linked to Object.prototype.
 *
 * When you make a new object, you can select the object that should be its prototype.
 *
 * The prototype object is the place where inherited traits are to be deposited.
 *
 * Every function object is created with a prototype property. Its value is an object with a constructor property whose value is a function
 */

// Prototypal inheritance
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
var another_stooge = Object.create(stooge);    // prototypal inheritance
console.log(another_stooge);

another_stooge['first-name'] = 'Harry';
console.log(another_stooge);

another_stooge.nickname = 'Moe';
console.log(another_stooge);

console.log(another_stooge.__proto__);
console.log(another_stooge.hasOwnProperty("nickname"));
console.log(another_stooge.hasOwnProperty("first-name"));
console.log(another_stooge.hasOwnProperty("toString"));

//Pseudoclassical inheritance
var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function () {
    return this.name;
};
Mammal.prototype.says = function () {
    return this.saying || '';
};
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();
console.log("myMammal's name: " + name);

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};
Cat.prototype = new Mammal(); //replace Cat.prototype with a new instance of Mammal
Cat.prototype.purr = function () {
    return "rrrrrrr";
};
Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
console.log(myCat.says());
console.log(myCat.purr());
console.log(myCat.get_name());

//Augmenting Types
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

var value = 8.33;
console.log(typeof value);
console.log(value.integer());
