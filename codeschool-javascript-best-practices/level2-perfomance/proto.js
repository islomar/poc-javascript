var IP = ["Nipping Global Variable", "Sneaky Forin", "Bulging Blocking Script"],
GH = ["Switch Blocks", "Pesky Gnat", "Aiedra"],
inhabitants = [IP,GH];

function populationGetter(popn){
  var list = "";
  for(var i = 0, x = popn.length; i < x; i++){
    for(var j = 0; j < popn[i].length; j++){
      list += (popn[i][j] + ", ");
    }
  }
  return list;
}

populationGetter(inhabitants);
new SpeedTest(populationGetter, inhabitants, 100000).startTest();