
sp.core.currentMode = "capturePoints";
sp.core.gameInProgress = false;
sp.core.uniquePlId = 0;

var protectedAreaRange = 30;
var shipSelectRange = 20;

var intermissionLength = 40;

var gameTimer = intermissionLength;
var timeElapsed = 0;

sp.core.initPlayer = function(ship){

  var globalChat = sp.systems.globalChat;

  playerLog.pushPlayerLogAll("Player joined: "+ship.name);

  if(globalChat!=null){
    globalChat.init(ship);
  }

  ship.custom.init = true;
  ship.custom.id = this.uniquePlId;

  ship.custom.team = teamNeedsPlayers; //TODO: move to currentGamemode
  ship.custom.selectedShip = -1;//0;
  ship.custom.needsRespawn = true;
  ship.custom.screen = 6;
  ship.custom.lastScore = 0;
  //ship.custom.introSequence = 0;
  ship.custom.state = {
    isInBase: false,
    nearObjective: false,
    doingObjective: false
  }

  ship.custom.bugfix_UITickId = 0;

  //systems init
  //TODO: iterate over all systems
  UISystem.init(ship);
  sp.systems.aliveBooster.initShip(ship);

  ship.custom.lastRating = 0;
  screens[0].show(ship);
  t = teamNeedsPlayers
  sp.shipManager.respawn(ship);
}

sp.core.everySecond = function(){

  //
  for(t=0;t<teams.length;t++)
  teams[t].players = [];
  try{
    for(i=0;i<game.ships.length;i++){
      var found = -1;
      if(game.ships[i].custom.init==null)
        continue;
      for(j=0;j<playerNames.length;j++){
        if(playerNames[j]==game.ships[i].name){
          found = j;
          break;
        }
      }
      if(found!=-1)
        playerNames.splice(found, 1);
    }

    if(playerNames.length>0){
    if(playerNames.length>1){
      s = "Players left: "
      for(i=0;i<playerNames.length;i++)
        s+=playerNames[i]+", ";
      playerLog.pushPlayerLogAll(s);
    }
    else playerLog.pushPlayerLogAll(playerNames[0]+" left");

    }
  }catch(e){logError("PL-JOIN-LEFT ",e)}

  try{
    //TODO: schedule as task
    tipTimer++;
    if(tipTimer>tipDuration){
      tipTimer = 0;
      randomizeTip();
    }


  }catch(e){}
  playerNames = [];
  //TODO: schedule as a task
  try{
    if(sp.systems.celebration!=null)
      sp.systems.celebration.tick();

    //TODO: should be handled by the current gamemode
    drawControlPointStatus();

    //TODO: rename, encapsulate
    lastshipsInGameData = shipsInGameData;
    shipsInGameData = [];

    //TODO: schedule as a task
    secondPassedKillFeed();
  }catch(e){}
  //TODO: move to UI, encapsulate
  try{
    var radarBackground = {
      id:"radar_background",
      position:[0,0,100,100],
      visible: true,
      components: []
    } ;

    var s = 10;
    var sm = 6;
    var sc = 50/(5*ms);
    for(var i = 0; i<teams.length; i++)
    radarBackground.components.push(
      {type:"text",position:[50+teams[i].x*sc-sm,50-teams[i].y*sc-sm,sm*2,sm*2],color:teams[i].color,value:"\u{2b24}"},
      {type:"text",position:[50+teams[i].x*sc-s,50-teams[i].y*sc-s,s*2,s*2],color:teams[i].color,value:"\u{25ef}"},
      {type:"text",position:[50+teams[i].x*sc-sm,50-teams[i].y*sc-sm,sm*2,sm*2],color:"#000000",value:"\u{1f6f0}"}
    ) ;

    sm = 2.5;
    for(var i = 0; i<controlPoints.length; i++){
      var col = (controlPoints[i].controlledBy==-1)?"#CCCCCC":teams[controlPoints[i].controlledBy].color;
      radarBackground.components.push(
        {type:"text",position:[50+controlPoints[i].x*sc-sm,50-controlPoints[i].y*sc-sm,sm*2,sm*2],color:col,value:"\u{2b24}"},
        {type:"text",position:[50+controlPoints[i].x*sc-sm,50-controlPoints[i].y*sc-sm,sm*2,sm*2],color:"#000000",value:"\u{2691}"}
      ) ;
    }
  }catch(e){}

  for(i=0;i<game.ships.length;i++){
    try{
      ship = game.ships[i];
      playerNames.push(ship.name);

      if(!ship.custom.init){
        this.initPlayer(ship);
      }

      ship.custom.bugfix_UITickId = i;

      ship.custom.index = i;

      if(ship.custom.sinceRespawned==null)
        ship.custom.sinceRespawned = 0;
      else if(ship.alive) ship.custom.sinceRespawned++;

      try{//TODO: remove cushion try-catch
        if(!ship.custom.isInHangar){
          if(ship.custom.screen == 7){
            switchScreen(ship, 0);
          }
          if(Math.abs(ship.x)>hangarsSideWallXPos){
            ship.set({x:Math.sign(ship.x)*220})
          }
        }
      }catch(e){}

      t = ship.custom.team;
      playerNames[i] = ship.name;


      ship.setUIComponent(radarBackground)

      if(!this.gameInProgress)
        ship.set({score:ship.custom.lastScore})

        for(tt=0;tt<teams.length;tt++){
          //base blasters
          if(t!=tt&&ship.custom.sinceRespawned>3&&distance(ship.x-teams[tt].x,ship.y-teams[tt].y)<protectedAreaRange){
            ship.set({kill:true});
            ship.custom.killCause = -2;
          }
          if(t==tt){
            if(distance(ship.x-teams[tt].x,ship.y-teams[tt].y)<protectedAreaRange){
              ship.set({invulnerable:300});
              ship.custom.state.isInBase = true
            }else{
              ship.custom.state.isInBase = false
              if(ship.custom.sinceRespawned<3){
                ship.x = teams[tt].x;
                ship.y = teams[tt].y;
              }else if(ship.alive&&ship.custom.sinceRespawned>10){
                ship.custom.leftTheBase = true;
              }
            }
          }
        }
      //drawTutorial(ship);
      //log(t)
      //t = Math.max(Math.min(ship.custom.team,1),0);
      //ship.custom.team = t;
      teams[t].players.push(i);
      ship.set({team:t,hue:teams[t].hue});
      sh = shortestPath(ship.x, ship.y, teams[t].x, teams[t].y);
      if(ship.alive&&(!ship.custom.justDied)&&ship.custom.needsRespawn){
        ship.set({x:teams[ship.custom.team].x,y:teams[ship.custom.team].y})
        ship.custom.needsRespawn = false;
        sp.shipManager.respawn(ship);
      }
      if(ship.alive&&(!ship.custom.justDied)&&ship.custom.needsLaunch){//TODO: refactor
        ship.set({x:teams[ship.custom.team].x,y:teams[ship.custom.team].y})
        ship.custom.needsLaunch = false;
      }
      if(ship.custom.justDied) ship.custom.justDied = false;


      shipsInGameData.push({x:ship.x,y:ship.y,
        shieldcap:0,energycap:0,
        shieldregen:0,energyregen:0,
        damage:0,bspeed:0,
        speed:0,agility:0,
        idle:false,
        team:ship.custom.team
      })


    }catch(e){logError("PL-ITERATE ",e)}
  }

  try{
    sp.core.updateScoreboard();
  }catch(e){}

  for(i=0;i<game.ships.length;i++){
    try{
      ship = game.ships[i];
      try{
        if(ship.alive)
          sp.shipManager.tick(ship);
      }catch(e){logError("PL-SHIP-TICK ",e)}
      if(ship.custom.effects!=null)
      for(e=0;e<durationEffectsPerShip;e++){
        if(ship.custom.effects[e]!=null){
          edata = ship.custom.effects[e]
          shipsInGameData[i] = effectTypes[edata.type].apply(shipsInGameData[i], edata);
          ship.custom.effects[e].duration--;
          if(ship.custom.effects[e].duration<0)
          ship.custom.effects[e] = null;
        }
      }
    }catch(e){logError("PL-ITERATE-ST-EFFECTS ",e)}
  }

  if(GPOClear){
    game.removeObject();
    respawnStatic();
  }

  var GPOKeys = Object.keys(GPO);

  for(go=0;go<GPOKeys.length;go++){
    try{
      g = GPO[GPOKeys[go]];
      if(GPOClear)respawnGPO(GPOKeys[go]);
      GPOTypes[g.type].tick(g);
      if(g.destroyTimer!=null){
        g.destroyTimer--;
        if(g.destroyTimer<0)
        removeGPO(GPOKeys[go]);
      }
    }catch(e){logError("GPO-ITERATE",e)}
  }

  GPOClear = Math.random()<GPOClearChance;

  cl = function(v, min, max){
    return Math.round(v<min?min:(v>max?max:v));
  }
  for(i=0;i<game.ships.length;i++){
    try{
      ship = game.ships[i];
      sdata = shipsInGameData[i];
      sc = cl(sdata.shieldcap+3,0,6);
      sr = cl(sdata.shieldregen+3,0,6);
      ec = cl(sdata.energycap+3,0,6);
      er = cl(sdata.energyregen+3,0,6);
      bd = cl(sdata.damage+3,0,6);
      bs = cl(sdata.bspeed+3,0,6);
      ss = cl(sdata.speed+3,0,6);
      sa = cl(sdata.agility+3,0,6);
      stats = 1e8+sc*1e7+sr*1e6+ec*1e5+er*1e4+bd*1e3+bs*1e2+ss*10+sa;
      ship.custom.lastStats = stats;
      ship.set({stats:stats,idle:sdata.idle});
    }catch(e){}
    //writeEffectsShip(ship);
  }

  /*
  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];
    if(!ship||!ship.custom.sprototype)continue;
    abKeys = Object.keys(ship.custom.sprototype.abilitiesCooldowns)
    for(ab=0;ab<abKeys.length;ab++){
      ship.custom.sprototype.abilitiesCooldowns[abKeys[ab]]--;
    }
  }*/

  try{
    minPlayers = game.ships.length;
    minPlTeam = 0;
    maxPlayers = 0;
    maxPlTeam = 0;
    for(t=0;t<teams.length;t++){
      if(teams[t].players.length<minPlayers){
        minPlayers = teams[t].players.length;
        minPlTeam = t;
      }
      if(teams[t].players.length>maxPlayers){
        maxPlayers = teams[t].players.length;
        maxPlTeam = t;
      }
    }

    for(p=0; p<controlPoints.length; p++){
      controlPoints[p].timeSinceAttacked++;
    }

    deltaPlayers = maxPlayers-minPlayers;
    teamMostPlayers = maxPlTeam;
    teamNeedsPlayers = minPlTeam;
  }catch(e){}
}

sp.core.UISequence = function(){
  var globalChat = sp.systems.globalChat;
  for(var i = 0; i<game.ships.length; i++){
    var ship = game.ships[i]
    if( !( Math.round(ship.custom.bugfix_UITickId%10) == Math.round(game.step%60) ) )continue;
    try{
      if(!ship.custom.init)continue;
      UISystem.autoClearUI.tick(ship)
      //drawIntroSequence(ship);
      playerLog.secondPassedPlayerLog(ship);
      if(globalChat!=null){
        globalChat.tick(ship);
      }

      //if(ship.custom.introSequenceFinished)
      screens[ship.custom.screen].tick(ship,true);
      ship.custom.objectiveStatusTextTimeLeft--;

      var opt = ["\u{1f6ab}\u{1f48e}","\u{1f4af}\u{2694}","PROTO","TYPES"];
      var sec = Math.floor((game.step/60)%4);
      ship.setUIComponent({
        id:"stayAlive",
        position:[0,3,6,4],
        visible: true,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#222222",stroke:"#222222",width:2},
          { type: "text",position:[5,5,90,90],value:opt[sec],color:"#CCCCCC"}
        ]
      });

      try{
        drawTeamLists(ship);
      }catch(e){}
      /*ship.setUIComponent({
        id:"debugInfo",
        position:[85,57,15,7],
        clickable: false,
        visible: b,
        components: [
          { type: "text",position:[0,0,100,30],value:"avg "+tickTimeLastSecAvg.toFixed(2)+"ms",align:"right",
          color:tickTimeLastSecAvg>35?"#FF7777":(tickTimeLastSecAvg>17?"#CCCC00":"#CCCCCC")},
          { type: "text",position:[0,30,100,30],value:"max "+tickTimeLastSecMax.toFixed(2)+"ms",align:"right",
          color:tickTimeLastSecAvg>35?"#FF7777":(tickTimeLastSecMax>17?"#CCCC00":"#CCCCCC")},
          { type: "text",position:[0,60,100,30],value:"@ "+ticksLastSec.toFixed(2)+" TPS",align:"right",
          color:ticksLastSec<50?"#FF7777":(ticksLastSec<59?"#CCCC00":"#CCCCCC")}
        ]
      });*/

        if(!this.gameInProgress)
        ship.custom.gameStatusText = "Next round starts in "+gameTimer+"s";
        /*for(tt=0;tt<teams.length;tt++){
          drawDirectionMarker(ship,teams[tt].x, teams[tt].y,
          true, true, "team"+teams[tt].name+"marker",teams[tt].color, teams[tt].name)
        }
        for(p=0;p<controlPoints.length;p++){
          if(controlPoints[p].controlledBy==-1)
          c = "#AAAAAA"
          else c = teams[controlPoints[p].controlledBy].color
          drawDirectionMarker(ship,controlPoints[p].x, controlPoints[p].y,
          true, true, "point"+p+"marker",c, ("point "+String.fromCharCode(97+p)).toUpperCase())

        }*/

        UISystem.events.flushEvents(ship);
        UISystem.rateLimiter.tick(ship);
      }catch(e){logError("PL-DRAW-UI ",e)}
  }
}

sp.core.getCurrentMode = function(){
  return sp.modes[sp.core.currentMode];
}

sp.core.updateScoreboard = function(){
  var scoreboard = {state:{}};

  //sort the players by score(which is currently the number of kills)
  var tplayers = [];
  for(var t=0;t<2;t++){
    tplayers[t] = teams[t].players.slice();
    tplayers[t].sort(function(a,b){
      return game.ships[b].score-game.ships[a].score;
    });
  }

  for(var t=0;t<2;t++){
    scoreboard.state[teams[t].name] = teams[t].ctrlPoints;
    for(var p=0;p<9&&p<tplayers[t].length;p++){
      var shdata = sp.shipManager.getShipData(game.ships[tplayers[t][p]]);
      scoreboard.state[teams[t].name+"_p"+p] =
      shdata.unicodeChar+" "+
      game.ships[tplayers[t][p]].score+" "+
      game.ships[tplayers[t][p]].name
    }
    //if(teams[t].players.length>7)
    //  scoreboard[teams[t].name+"_more"] = teams[t].players.length-8+" more..."
  }

  //obtain a short reference to the previous scoreboard state
  var lastSc = sp.core.lastScoreboard;
  //if there is a saved scoreboard state
  if(lastSc!=null){
    lastSc.update = false;
    //check if the newly calculated state is different
    for(var k in scoreboard.state){
      //if at least one key differs, we must redraw
      //(scoreboard is a single element, can't redraw partially)
      //a bit inefficient, but still orders of magnitude better than redrawing
      //every tick
      if(lastSc.state[k]!=scoreboard.state[k]){
        log("diff "+k+" = "+lastSc.state[k]+" :: "+scoreboard.state[k])
        scoreboard.update = true;
        break;
      }
    }
    //TODO: OPTIMIZE: definitely is a better way
    if(!scoreboard.update)
    for(var k in lastSc.state){
      //same thing in case keys were removed
      if(lastSc.state[k]!=scoreboard.state[k]){
        log("diff "+k+" = "+lastSc.state[k]+" :: "+scoreboard.state[k])
        scoreboard.update = true;
        break;
      }
    }
  }else{
    //if there is no saved state, we must definitely redraw
    scoreboard.update = true;
  }

  //if we must redraw, save the newly computed state
  //otherwise, discard
  if(scoreboard.update){
    sp.core.lastScoreboard = scoreboard;
  }
}
