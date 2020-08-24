
var catalogueEntry = function(text, type, symbol, data, color = "#222"){
  var k = {
    text: text,
    type: type,//0 - ship, 1 - category, 2 - special
    unicodeSymbol: symbol,
    data: data,
    items: {},
    color: color
  };
  return k;
}

screens[7].root = catalogueEntry("Root",2,">",{});

var root = screens[7].root;

root.items.allShips = catalogueEntry("All ships",1,"*",{});
var pushTo = root.items.allShips;
var allShipsCategory = [];
for(var sh in shipsData){
  allShipsCategory.push(sh);
}
var shipsInCategory = allShipsCategory;
pushTo.items.random = catalogueEntry("Random",2,"?",function(ship){
  //just in case. TODO: refactor?
  var shipsInCategory = allShipsCategory;
  ship.custom.selectedShip = Math.floor(Math.random()*shipsInCategory.length);
  sp.shipManager.respawn(ship,true);
});
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

//-------------- different categories of ships --------------

//------- ships by class --------
/*
root.items.byClass = catalogueEntry("Ships by class",1,"\u{1f527}",{},"#511");

//slow bullet speed, high agility, deadly but hard to use - bombers
root.items.byClass.items.bombers = catalogueEntry("Bombers",1,"\u{1f4a3}",{},"#511");
var pushTo = root.items.byClass.items.bombers;
var shipsInCategory = [2,11]
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

//reasonably deadly and reasonably agile - attack ships
root.items.byClass.items.attackShips = catalogueEntry("Attack ships",1,"\u{1f4a5}",{},"#521");
var pushTo = root.items.byClass.items.attackShips;
var shipsInCategory = [0,3,8,10,15,16,18,20,21];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

//extremely agile and damn annoying to fight against - interceptors
root.items.byClass.items.interceptors = catalogueEntry("Interceptors",1,"\u{2b5e}",{},"#551");
var pushTo = root.items.byClass.items.interceptors;
var shipsInCategory = [0,5,6,9,10,12,13,15,17,18,20,21];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}*/

//------- ships by skill --------
/*
root.items.bySkillRequired = catalogueEntry("Ships by skill required",1,"\u{1f4d6}",{},"#551");

//------- ships by size --------
root.items.bySize = catalogueEntry("Ships by size",1,"\u{2195}",{},"#125");

//------- ships by fighting strength(OP/balanced/UP) --------
root.items.byStrength = catalogueEntry("Ships by combat strength",1,"\u{2195}",{},"#125");
*/
//------- ships by manufacturer --------
root.items.byManufacturer = catalogueEntry("Ships by manufacturer",1,"\u{1f528}",{},"#115");
var companiesPushTo = root.items.byManufacturer;
for(var c = 0; c<companies.length; c++){
    var company = companies[c];
    root.items.byManufacturer.items[company.name] = catalogueEntry(company.name,1,company.unicodeChar,{});
    var pushTo = root.items.byManufacturer.items[company.name];
    for(var sh in shipsData){
      var data = shipsData[sh];
      if(data.company == c)
        pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,i);
    }
}

//------- ships by author --------
root.items.byAuthor = catalogueEntry("Ships by author",1,"\u{1f58b}",{},"#152");

root.items.byAuthor.items.uranus = catalogueEntry("UranusOrbiter",1,"\u{25c9}",{},"#025");
var pushTo = root.items.byAuthor.items.uranus;
var shipsInCategory = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.byAuthor.items.goldman = catalogueEntry("Goldman",1,"\u{1d406}",{},"#540");
var pushTo = root.items.byAuthor.items.goldman;
var shipsInCategory = [16,17,18,19,20,21,23,25,30];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.byAuthor.items.finalizer = catalogueEntry("Finalizer",1,"\u{1d53d}",{},"#500");
var pushTo = root.items.byAuthor.items.finalizer;
var shipsInCategory = [22,29];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.byAuthor.items.fivestars = catalogueEntry("\u{2605}".repeat(5),1," ",{},"#445");
var pushTo = root.items.byAuthor.items.fivestars;
var shipsInCategory = [24];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.byAuthor.items.malefor = catalogueEntry("MALEFOR",1,"\u{1f409}",{},"#015");
var pushTo = root.items.byAuthor.items.malefor;
var shipsInCategory = [26,27];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.byAuthor.items.interdictor = catalogueEntry("Interdictor-SD",1,"\u{25e9}",{},"#222");
var pushTo = root.items.byAuthor.items.interdictor;
var shipsInCategory = [28];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

//------- ship collections --------
root.items.collections = catalogueEntry("Collections",1,"\u{2b50}",{},"#115");

root.items.collections.items.prototypes = catalogueEntry("STARBLAST Prototypes",1,"\u{1f6f0}",{},"#054");
var pushTo = root.items.collections.items.prototypes
var shipsInCategory = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.collections.items.hyperspeedsters = catalogueEntry("HyperSpeedsters",1,"\u{2604}",{},"#500");
var pushTo = root.items.collections.items.hyperspeedsters
var shipsInCategory = [18,19,20,21];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}

root.items.collections.items.nautics = catalogueEntry("Nautic",1,"\u{1f420}",{},"#005");
var pushTo = root.items.collections.items.nautics
var shipsInCategory = [16,17];
for(var i = 0; i<shipsInCategory.length; i++){
  var data = shipsData[shipsInCategory[i]]
  pushTo.items[data.name] = catalogueEntry(data.name,0,data.unicodeChar,shipsInCategory[i]);
}
