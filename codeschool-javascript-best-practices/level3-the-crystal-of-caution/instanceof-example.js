function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function(){},
    SwitchSnagger  = function(){},
    TernaryTracker = function(){};

TryCatchTaster = Object.create(SyntaxBird.prototype);
SwitchSnagger  = Object.create(SyntaxBird.prototype);
TernaryTracker = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){},
    StringSeeker = function(){},
    BooleanBiter = function(){};

NumberNommer = Object.create(DatatypeBird.prototype);
StringSeeker = Object.create(DatatypeBird.prototype);
BooleanBiter = Object.create(DatatypeBird.prototype);

var duneInhabitants = [ NumberNommer, StringSeeker, TryCatchTaster, 
                        SwitchSnagger, TernaryTracker, BooleanBiter ];

var count = 0;
for(var i = 0; i < duneInhabitants.length; i++){
  if (duneInhabitants[i] instanceof SyntaxBird) {
    count++;
  }
}
