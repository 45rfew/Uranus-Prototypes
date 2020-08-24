var origParsedShips = sp.origParsedShips;
var parsedShips = sp.parsedShips;


startSettings.prerenderShips = true;
this.options.ships = ships;

/*log(SPPages+": "+Object.keys(SPPages))

var copies = 6;
var new_ships = [];
for (var i=0; i<copies; i++) {
  new_ships.push([]);
}
for (var i=0; i<ships.length; i++) {
  ship = JSON.parse(ships[i]);
  ship.model = i - (ship.level*100);
  ships[i] = JSON.stringify(ship);
  for (var j=0; j<copies; j++) {
    ship.model = i - (ship.level*100) + ((j+1)*ships.length);
    new_ships[j].push(JSON.stringify(ship));
  }
}
for (var i=0; i<new_ships.length; i++) {
  for (var j=0; j<new_ships[i].length; j++) {
    ships.push(new_ships[i][j]);
  }
}*/
