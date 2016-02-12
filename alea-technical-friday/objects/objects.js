/**
 *
 * METHOD 1
 *
 * The simple types of JS are numbers, strings, booleans, null and undefined
 * All other values are objects: arrays, functions, regular expressions, etc.
 * Numbers, strings and booleans have methods but they are immutable.
 * Objects are mutable keyed collections.
 * Objects are class-free.
 *
 */


// 1.- Object literals: a pair of curly braces surrounding zero or more name/value pairs

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(flight);
console.log(flight["airline"]);
console.log(flight.airline);

/**
 *
 * METHOD 2
 *
 * JS includes a prototype linkage feature that allows one object to inherit the properties of another.
 * All objects created from object literals are linked to Object.prototype
 * The prototype relationthip is a dynamic relationthip: if we add a new property to a prototype, that property will immediately be visible in all of
 * the objects that are based on that prototype.
 *
 * The prototype link is used only in retrieval. If we try to retrieve a property value from an object, and if the object lacks the property name,
 * then JS attempts to retrieve the property value from the prototype object. If it does NOT exist anywhere in the protype chain,
 * the result is the undefined value (delegation).
 *
 */

//Parent Bird Class
function Bird() {
}

// SyntaxBird Inherits From Parent Bird
function SyntaxBird() {
}
SyntaxBird.prototype = Object.create(Bird.prototype);

var LoopLover = function (birdFood) {
    this.birdFood = birdFood;
    this.fed = false;
};
LoopLover.prototype = Object.create(SyntaxBird.prototype);

// bird variables below inherit from above prototype chain
var loopy = new LoopLover("loops");

console.log(loopy);


/**
 * Example 3
 */
// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.move(1, 1); // Outputs, 'Shape moved.'

/**
 * Method 3
 *
 * 3. `new Shoe(42, “blue”);` >> no usarlo, según TGP-p49
 */

function Shoe(size, color) {
    this.size = size;
    this.color = color;

    this.changeColor = function(newColor) {
        this.color = newColor;
    }
};
var myShoe = new Shoe(42, 'red');
console.log('My shoe color: ' + myShoe.color);
