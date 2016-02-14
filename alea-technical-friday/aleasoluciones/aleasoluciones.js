var XEMA = XEMA || {};
XEMA.View = XEMA.View || {};

XEMA.View.Base2 = function Base2() {

};

var XEMA.View.Base = (function () {
    var ELEMENTS = {
        document: $(document),
        myButton: $("#myButton")
    };

    return {
        getElements: function () {
            return ELEMENTS;
        },
        showMeTheMoney: function () {
            console.log("Take my money and shut up!!!");
        }
    }
})();

XEMA.View.Base.prototype.hello = function() {
        console.log("hello!");
};

XEMA.View.Customer = (function () {
    return {
        showCustomerName: function () {
            console.log("showCustomerName() executed");
        }
    }
})();

console.log("-------- XEMA.View.Base ---------");
console.log("XEMA.View.Base: ", XEMA.View.Base);
console.log("XEMA.View.Base.getElements(): ", XEMA.View.Base.getElements());
console.log("XEMA.View.Base.getElements().myButton: ", XEMA.View.Base.getElements().myButton);
console.log("XEMA.View.Base.showMeTheMoney(): ", XEMA.View.Base.showMeTheMoney());

console.log("-------- XEMA.View.Custome--------");
//XEMA.View.Customer.prototype = XEMA.View.Base;
XEMA.View.Customer.prototype = Object.create(XEMA.View.Base.prototype);
console.log("XEMA.View.Customer: ", XEMA.View.Customer);
console.log("XEMA.View.Customer: ", XEMA.View.Customer.hello());
//console.log("XEMA.View.Customer.showCustomerName(): ", XEMA.View.Customer.showCustomerName());
//console.log("XEMA.View.Customer.ELEMENTS: ", XEMA.View.Customer.ELEMENTS);
