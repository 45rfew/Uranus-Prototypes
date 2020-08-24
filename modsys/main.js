//main.js

/*
This module defines the this.tick and this.event callbacks, that allow the API
to send data to the mod on-demand.
*/

var tickTimeLastSecAvg = 0;
var tickTimeLastSecMax = 0;
var ticksLastSec = 60;
var tickTimeLog = []

var perfnow = 0;//performance.now();
var realtimeMSecondsCounter = 0;

var lastGameStep = 0;

this.tick = function(game) {
  /*lastTickDuration = performance.now() - perfnow;
  realtimeMSecondsCounter += lastTickDuration;
  perfnow = performance.now();

  if(realtimeMSecondsCounter>1000){

    sum = 0;
    tickTimeLastSecMax = 0;
    for(i=0;i<tickTimeLog.length;i++){
      sum += tickTimeLog[i];
      if(tickTimeLog[i]>tickTimeLastSecMax)
        tickTimeLastSecMax = tickTimeLog[i];
    }
    ticksLastSec = tickTimeLog.length/(realtimeMSecondsCounter/1000);
    tickTimeLastSecAvg = sum/tickTimeLog.length;
    tickTimeLog = []

    realtimeMSecondsCounter %= 1000;
  }*/

  now = new Date();
  /*if(game.step-lastGameStep>1){
    log("WARNING ["+getTime()+"] Skipped "+game.step-(lastGameStep+1)+" ticks!");
  }*/
  lastGameStep = game.step;
  if(game.step==1)
    playerLog.pushPlayerLogAll("Mod started.");
  //$fileTape ifflag noTickWithoutPlayers
  //$fileTape setwriting false
  if(game.ships.length<1)return;
  //$fileTape setwriting true
  // do mod stuff here ; see documentation
  try{
    modsys.scheduler.tick(game.step);
    //mmm ifflag onlySchedulerTick
    //return;
    /*if(game.step%60==0){

      //if(new Date().getMinutes() == 0 && new Date().getSeconds() == 0)
      //  firework()
      //everySecond();

    }*/

  }
  catch(e){
    log("ERROR ["+getTime()+"] "+e.name+": "+e.message);
  }
  //tickTimeLog.push(performance.now()-perfnow);
}

//TODO: extract the same way as scheduler.js
/*Events should not be handles by modsys; instead, modsys should forward
events to the mod itself.
*/
this.event = function(event,game) {
  try{
  switch (event.name)
  {
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;

      if(!UISystem.rateLimiter.input(ship))return;

      if(ship.custom.ignoreMod)return;

      if(screens[ship.custom.screen].input!=null){
        screens[ship.custom.screen].input(ship, component);
      }

      if (component.includes("selectShip")){
        sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);
        if(distance(sh[0],sh[1])<shipSelectRange){
          i = +component[10];
          //log(i+(ship.custom.shipChoosePage*8));
          var type = i+(ship.custom.shipChoosePage*8)-1
          //h = shipsData[type].healer!=null;
          availableShips = getAvailableShips(ship)
          ship.custom.selectedShip = -1;
          if(type<availableShips.length){
            ship.custom.selectedShip = availableShips[type];
            //ship.custom.killCause = -3;
            //ship.set({generator:0,kill:true});

            //ship.custom.needsRespawn = true;
          }
          sp.shipManager.respawn(ship);
        }else
       playerLog.pushPlayerLog(ship, "Ship select area out of range.");
      }

      if (component.includes("ability")&&ship.alive){
        a = +component[7];
        //type = ship.custom.selectedShip;
        sp.shipManager.useAbility(ship, a);
      }

      if (component=="switchTeams"){
        if(ship.custom.team==1)
        ship.custom.team = 0;
        else ship.custom.team = 1;
      }

      if (component=="dockHangar"){
        //TODO: refactor screen assignment
        switchScreen(ship, 7);
        sp.shipManager.respawn(ship,true);
      }

      if (component=="undockHangar"){
        //TODO: refactor screen assignment
        switchScreen(ship, 0);
        if(
          ship.custom.selectedShip == null ||
          ship.custom.selectedShip == -1)
          ship.custom.selectedShip = ship.custom.sprototype.type;
        sp.shipManager.respawn(ship,false);
      }

      if (component=="voluntarySwitchTeams"){
        //not implemented
        /*if(!playerSwitchedTeams&&deltaPlayers>=2){
          playerSwitchedTeams = true;
          ship.custom.killCause = -4;
          ship.set({generator:0,kill:true});
          ship.custom.needsRespawn = true;
          ship.custom.team = teamNeedsPlayers;
        }*/
      }

      if (component=="voteSurrender"){
        ship.custom.wantsSurrender = !ship.custom.wantsSurrender;
      }
      if (component=="voteTie"){
        ship.custom.wantsTie = !ship.custom.wantsTie;
      }

      if (component.startsWith("chat")){

        if(sp.systems.globalChat==null)return;
        if(component=="chatNewMsg"){

          //TODO: refactor
          sp.systems.globalChat.startNewMsg(ship)
        } else {

          sp.systems.globalChat.addMsg(ship, component[8]);
        }
      }

      break;

    case "ship_destroyed":
      ship = event.ship;
      killer = event.killer;

      if(killer!=null){
        playerLog.pushPlayerLog(ship,"You were killed by "+killer.name+" using "+sp.shipManager.getShipData(killer).name);
        playerLog.pushPlayerLog(killer,"Killed "+ship.name);
      }

      ship.custom.justDied = true;

      kname = "";
      kcol = "#00000000"
      if(ship.custom.killCause!=null){
        cause = ship.custom.killCause;
      }else{
        cause = -1;
      }

      ship.custom.killCause = -1;

      ship.custom.needsRespawn = true;
      //ship.set({score:0});
      if(killer!=null){
        if(ship.custom.leftTheBase&&sp.core.gameInProgress)
          killer.set({score:killer.score+1});
        kname = killer.name;
        kcol = teams[killer.custom.team].color;
        cause = killer.custom.selectedShip
      }
      ship.custom.sinceRespawned = 0;

      if(cause != -100&&(ship.custom.leftTheBase||cause==-3))
      pushKillFeed(kname, kcol, cause, ship.name, teams[ship.custom.team].color);

      ship.custom.leftTheBase = false;

      //ship.set({type:101});
      break;
  }
}catch(e){
  log("ERROR-EVENT ["+getTime()+"] "+e.name+": "+e.message);
}
}

if(game.step == 0){
  log("STARBLAST PROTOTYPES by UranusOrbiter")
  log("Zero mining. Pure combat.")
  log("The mod will start in a moment...")
}else
  playerLog.pushPlayerLogAll("Mod re-started.");

respawnStatic();
