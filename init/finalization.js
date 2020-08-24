//TODO: extract into another file
if(!startSettings.prerenderShips){

  for(var i = 0; i<ships.length; i++){
    var pship = ensureParsed(ensureStringified(ships[i]));
    pship.bodies = {};
    parsedShips.push(pship)
    ships[i] = ensureStringified(ships[i])
  }


  /*sc = cl(sdata.shieldcap+3,0,6);
  sr = cl(sdata.shieldregen+3,0,6);
  ec = cl(sdata.energycap+3,0,6);
  er = cl(sdata.energyregen+3,0,6);
  bd = cl(sdata.damage+3,0,6);
  bs = cl(sdata.bspeed+3,0,6);
  ss = cl(sdata.speed+3,0,6);
  sa = cl(sdata.agility+3,0,6);*/


  for(var i = 0; i<parsedShips.length; i++){
    parsedShips[i].info = {}
    parsedShips[i].info.stats = {}

    var info = parsedShips[i].info.stats;
    var st = parsedShips[i].typespec.specs;

    var getNominal = function(arr){
      return (arr[0]+arr[1])/2;
    }

    info.nominalStats = {};

    info.shieldcap = st.shield.capacity;
    info.nominalStats.shieldcap = getNominal(st.shield.capacity);
    info.shieldregen = st.shield.reload;
    info.nominalStats.shieldregen = getNominal(st.shield.reload);

    info.energycap = st.generator.capacity;
    info.nominalStats.energycap = getNominal(st.generator.capacity);
    info.energyregen = st.generator.reload;
    info.nominalStats.energyregen = getNominal(st.generator.reload);

    var lasers = parsedShips[i].typespec.lasers;
    if(lasers.length>0){
      var maxDmg = 0;
      var maxDmgId = 0;
      for(var l = 0; l<lasers.length; l++)
        if(lasers[l].damage[0]>maxDmg){
          maxDmg = lasers[l].damage[0]
          maxDmgId = l;
        }
      info.damage = lasers[maxDmgId].damage
      info.bspeed = lasers[maxDmgId].speed
    }else{
      info.damage = [0,0]
      info.bspeed = [0,0]
    }

    info.speed = st.ship.speed;
    info.agility = st.ship.acceleration;//TODO: check if nothing relies on this misspell; refactor
    info.nominalStats.agility = getNominal(st.ship.acceleration);
    info.rotation = st.ship.rotation;
    info.nominalStats.rotation = getNominal(st.ship.rotation);
    info.mass = st.ship.mass;
  }

  for(var i = 0; i<showcaseShips.length; i++){
    var parsed = ensureParsed(showcaseShips[i]);

    parsed.level = 4;
    parsed.model = i+1;
    parsed.zoom = 10;
    thisShipSizeMult = parsed.scaleUp == null?1:parsed.scaleUp;
    parsed.size *= shipSizeMult * thisShipSizeMult;

    parsed.typespec.specs.ship.speed = [0.1,0.1];
    parsed.typespec.specs.ship.acceleration = [0.1,0.1];

    parsed.typespec.lasers = [];

    parsed.typespec.specs.ship.dash = null;

    //ships.push(JSON.stringify(parsed));
    ships.push(parsed);
  }

  for(var i = 0; i<ships.length; i++){
    ships[i] = ensureStringified(ships[i])
  }

}

var shipsByCode = {};

for(var i = 0; i<parsedShips.length; i++){

  shipsByCode[parsedShips[i].level*100 + parsedShips[i].model] = parsedShips[i]
}

modsys.scheduler.scheduleTask(function(){sp.core.everySecond()},60,0)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,0)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-1)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-2)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-3)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-4)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-5)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-6)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-7)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-8)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-9)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-10)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-11)
modsys.scheduler.scheduleTask(function(){sp.core.UISequence()},60,-12)
modsys.scheduler.scheduleTask(sp.hangarsManager.tickHook,60,1)

modsys.scheduler.scheduleTask(function(){
  if(sp.core.gameInProgress){
    sp.core.getCurrentMode().everySecond();
  }
  else{
    if(game.ships.length>=minPlayersPerTeam*teams.length)
    gameTimer--;
    if(gameTimer<0)
    sp.core.getCurrentMode().startGame();
  }

},60,2)
