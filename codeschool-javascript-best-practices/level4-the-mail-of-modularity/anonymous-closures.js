//BEFORE

var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
    treasureChests: 3,
    openChest: function(){
      this.treasureChests--;
      alert("DA DADADA DAAAAAAA!");
    }
  }
};


//AFTER (make treasureChests private)
var CAVESOFCLARITY = (function() {
  var treasureChests = 3; 
  return {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    SECRET: {
      openChest: function(){
        treasureChests--;
        alert("DA DADADA DAAAAAAA!");
      }
    }
  };
})();


// AFTER 2 (make bats private as well)
var CAVESOFCLARITY = function () {
          
  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function(){
        treasureChests--;
        alert("DA DADADA DAAAAAAA!");
      }
    },
    getBats: function() {
      return bats;
    }
  };
}();