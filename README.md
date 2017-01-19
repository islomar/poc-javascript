Playground for JavaScript

* [CodeSchool JavaScript best practices](./codeschool-javascript-best-practices/README.md)
* [Alea Technical Friday](./alea-technical-friday/README.md)


##My notes
[https://docs.google.com/document/d/1h-9INBkcZ1GGaDs5x3_XTXGWIq7cKWMPMdjgU6UD_Eo/edit](https://docs.google.com/document/d/1h-9INBkcZ1GGaDs5x3_XTXGWIq7cKWMPMdjgU6UD_Eo/edit)

##Interesting links
* [Great video with a visual and practical explanation about objects and prototypes](http://www.objectplayground.com/)
* [JavaScript para el desarrollo de videojuegos](https://mozdevs.github.io/js-for-gamedev/es/)

###How to create an object
1. Object literal
		`var myBox = { height: 6, width: 10, material: “cardboard”, contents: bookArray};`
		`Attribute access: myBox.height is like myBox[“height”]`
		`myBox.book1.title == myBox[book1][title]`
2. `newObject = Object.create(shoe);` >> classic solution from TGP-p22; whatever you pass as parameter will be the prototype for the new object.
 * see [example1](./codeschool-javascript-best-practices/level3-the-crystal-of-caution/instanceof-example.js)
 * see [example2](./codeschool-javascript-best-practices/level3-the-crystal-of-caution/birds.js)
 * TGP-p51
3. `new Shoe(42, “blue”);` >> no usarlo, según TGP-p49
 * see [example3](./codeschool-javascript-best-practices/level3-the-crystal-of-caution/birds-example-try-catch.js)
function Shoe(size, color) {
	this.size = size;
	this.color = color;

	this.changeColor = function(newColor) {
		this.color = newColor;
	}	
};

##Popurri
* `function diffOfSquares(){}` >> builds in memory immediately when the program loads
* `var diff = function diffOfSquares(a, b){};` >> function expression. It loads only when this particular line of code is reached while executing.


###Inheritance
* TGP-p47

###Public vs private properties
* We want to hide "private" properties, wrapping the whole file into an IIFE: Immediately Invoked Function Expression.
To make some properties public, return an object (see slides).
* TGP-p25
* JSBP_4-p28-43, 47-58

##Ideas for Alea:
* TGP-p25 & JSBP_4-p14: global abatement (avoid collisions with other libraries, applications, widgets, etc.) 

`var ALEA = {}

ALEA.flight = {
	airline = "Oceanic",
	number: 815
	departure: {
		IATA: 	"SYD",
		time:	"2016-01-14 14:55",
		city: 	"Sydney"
	}
}

* IIFE
* Use prototype and inheritance for memory efficiency: page 59 from [JSBP_3](./codeschool-javascript-best-practices/slides/JSBP_4.pdf)
 * Prototype: TGP-22, 47
* Invocation patterns:
 * Method invocation pattern
 * Function invocation pattern
 * Constructor invocation pattern
 * Apply invocation pattern
* Functions create a new scope: variables declared in a function STAY in a function (Drive-p6)
* Closures
 * When we return a function from a function, complete with variables which showed up in the external function, we have a closure.
 * Drive-p8
* Curry
* Memoization
 * Functions can use objects to remember the results of previous operations (e.g. fibonacci)
* Inheritance
 * TGP-p47, 48
 * HeadFirst: chapter 10
* Hoisting: program load order
 * Drive-p10
* Module pattern:
 * For getting privacy: TGP-p52
 * The Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.
* this vs that
 * “This” always refers to the owner Object of the function in which the “this” is used.
 * this inside a function refers to the owner of the function which is called
 * Drive-p13
* Tricks:
 * console.time("Total time") - console.timeEnd("Total time")
 * Load JS in an async way Drive-19
 
 
 ##Charla Borillo
 * Object.keys(myObject) >> it returns only the properties belonging to myObject (not those on the prototype chain).
 * let: block scope
 * Use Bable for ES6toES5 compatibility: https://babeljs.io/
 * caniuse.com
