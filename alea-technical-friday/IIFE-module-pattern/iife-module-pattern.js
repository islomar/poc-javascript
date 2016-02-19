/**
 * IIFE: Immediately Invoked Function Expression
 *
 * Pass all your globals into your IIFE using the calling parantheses:
 * the function's parameter creates a modifiable value for use in the module, while the global value stays protected if necessary.
 */


/**
 * MODULE pattern
 *
 * A module is a function or object that presents an interface but that hides its state and implementation.
 * TODO: ver p40-42 TGP
 *
 * Ventajas: no se usa el new ni el this (desaconsejado por Crockford en TGP)
 *
 */


var explorerAnswer = "agnostic";
var madeItAcross = true;

var LEXICALLAKE = (function (answer, foundShore) {

  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;
    
  return {
    getFish: function(){ return fish; },
    getDepth: function(){ return depth; },
    getSleepers: function(){ return unknownSleepers; },
    setDepth: function(newDepth) {depth=newDepth},
    awakenSleeper: function(){
      alert("Far below, in the deep, something awakens. Row faster.");
    },
    summonBoat: function(){
      if(answer === "agnostic"){
        alert("The boat fades into view.");
      }
      else{
        alert("...the lake is silent.");
      }
    },
    stopSleeper: function(){
      if (foundShore === true) {
        alert('That which has awoken shall now return to slumber.');
      } else {
        alert('A Sleeper cometh. Abandon hope.');
      }
    }

  };
})(explorerAnswer, madeItAcross);

console.log(LEXICALLAKE);

console.log('LEXICALLAKE.depth: ' + LEXICALLAKE.depth);  // undefined >> there is no visibility
console.log('LEXICALLAKE.getDepth(): ' + LEXICALLAKE.getDepth()); // 400
LEXICALLAKE.setDepth(6666666);
console.log('LEXICALLAKE.getDepth(): ' + LEXICALLAKE.getDepth()); // 6666666
