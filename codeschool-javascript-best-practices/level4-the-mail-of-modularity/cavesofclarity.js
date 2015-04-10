//Exercise: protect this data from global access

//BEFORE
var stalactites = 4235;
var stalagmites = 3924;
var bats = 345;
var treasureChests = 3;
var openChest = function(){
    treasureChests--;
    alert("DA DADADA DAAAAAAA!");
};

//AFTER
var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  treasureChests: 3,
  openChest: function(){
      this.treasureChests--;
      alert("DA DADADA DAAAAAAA!");
  }
};

//AFTER AFTER
var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
    treasureChests: 3,
    openChest: function() {
      this.treasureChests--;
      alert("DA DADADA DAAAAAAA!");
    }
	}
};