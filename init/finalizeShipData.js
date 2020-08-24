
if(!startSettings.prerenderShips){
  log("lul wtf")
  var model = 1;
  for(var sh in gameplayShips){
    var parsed = ensureParsed(gameplayShips[sh]);

    parsed.model = model;
    model++;
    parsed.id = sh;

    shipIdsToCodes[sh] = 600+parsed.model;

    //ships.push(JSON.stringify(parsed))
    ships.push(parsed);
  }
}

for(var sh in shipsData){
  shipsData[sh].init();
}
