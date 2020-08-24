sp.modes.capturePoints = {};

var controlPointsRange = 10;
var captureRate = 0.02;
var revertCaptureRate = 0.01
var pointsPerControlPointPerSecond = 1;
var lastCaptureByTeam = -1;
var gameLength = 5*60;

var winningTeam = -1;
var lastWinningTeam = -1;

var minPlayersPerTeam = 1;
var minPlayersSmallestBiggestTeamRatio = 0.5

var teamNeedsPlayers = 0;
var teamMostPlayers = 1;
var deltaPlayers = 0;

var availableAll = [];

for(var sh in shipsData){
  availableAll.push(sh);
}

var getAvailableShips = function(ship){
  return availableAll;

  if(ship.custom.team == 0){
    return modeVariations[currentVariation].shipCollectionTeamBlue;
  }else{
    return modeVariations[currentVariation].shipCollectionTeamRed;
  }

}

sp.modes.capturePoints.everySecond = function(){

  this.controlPointsMechanic();
  this.updateControlPoints();

  timeElapsed++;
  if(timeElapsed<5)
  for(i=0;i<game.ships.length;i++){
    game.ships[i].set({score:0})
  }
  if(winningTeam!=-1)
    gameTimer--;
  playerSwitchedTeams = false;
  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];

    if(ship.custom.wantsSurrender == null||winningTeam==-1)
      ship.custom.wantsSurrender = false;
    if(ship.custom.wantsTie == null||winningTeam!=-1)
      ship.custom.wantsTie = false;

    sp.systems.aliveBooster.tick(ship);

    ship.custom.state.nearObjective = false;
    ship.custom.state.doingObjective = false;
    //drawButton(ship,2,40,"voluntarySwitchTeams",teams[ship.custom.team].color,
    //(deltaPlayers>=2&&ship.team==teamMostPlayers),"U","Switch teams")

    //drawButton(ship,2,30,"voteSurrender",ship.custom.wantsSurrender?"#77FF77":"#FF7777",
    //(winningTeam!=-1&&ship.team!=winningTeam),"U","Vote surrender")

    //drawButton(ship,2,30,"voteTie",ship.custom.wantsTie?"#77FF77":"#FF7777",
    //(winningTeam==-1),"U","Vote for a tie")

    ship.custom.gameStatusText = "Time left: "+Math.floor(gameTimer/60)+"m "+(gameTimer%60).toFixed(0)+"s - "+
    ((winningTeam==-1)?"No team is winning.":teams[winningTeam].name+" is winning!");
  }

  for(p=0;p<controlPoints.length;p++){
    if(controlPoints[p].controlledBy!=-1)
      teams[controlPoints[p].controlledBy].points += pointsPerControlPointPerSecond;
  }


  minPlayers = game.ships.length;
  maxPlayers = 0;
  minPlTeam = 0;
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

  if(minPlayers<1){
    playerLog.pushPlayerLogAll("One of teams empty! End of game");
    this.stopGame();
    return;
  }


  /*
  if(minPlayers/maxPlayers<minPlayersSmallestBiggestTeamRatio){
    playerLog.pushPlayerLogAll("Teams extremely unbalanced - end of game");
    stopGame();
    return;
  }*/

  if(gameTimer<0){
    playerLog.pushPlayerLogAll("Time's up! End of game");
    this.stopGame();
    return;
  }
  if(gameLength-gameTimer>5&&game.ships.length<minPlayersPerTeam*teams.length){
    playerLog.pushPlayerLogAll("Not enough players - end of game");
    this.stopGame();
    return;
  }

  success = true;

  voteResults = "";

  for(tt=0;tt<teams.length;tt++){
    wantTie = 0;
    wantSurrender = 0;

    if(tt==winningTeam)continue;

    for(pl=0;pl<teams[tt].players.length;pl++){
      player = teams[tt].players[pl]
      if(game.ships[player].custom.wantsTie)
        wantTie++;
      if(game.ships[player].custom.wantsSurrender)
        wantSurrender++;
    }

    if(winningTeam==-1){
      if(wantTie/teams[tt].players.length<0.5){
        success = false;
        break;
      }
      voteResults += teams[tt].name + " "+wantTie+"/"+teams[tt].players.length+" ";
    }else{
      if(wantSurrender/teams[tt].players.length<0.5){
        success = false;
        break;
      }
      voteResults += teams[tt].name + " "+wantSurrender+"/"+teams[tt].players.length+" ";
    }
  }

  //log("s: "+s)

  if(success){
    if(winningTeam==-1){
     playerLog.pushPlayerLogAll("Teams voted for a tie!");
     playerLog.pushPlayerLogAll(voteResults);
    }else{
      if(teams.length>2)
       playerLog.pushPlayerLogAll("Teams surrendered!");
      else
       playerLog.pushPlayerLogAll("Losing team surrendered!");
     playerLog.pushPlayerLogAll(voteResults);
    }
    this.stopGame();
    return;
  }

  lastWinningTeam = winningTeam;

  highestCtrlPointsCount = 0;
  highestTeam = -1;
  highestTeamAmount = 0;
  for(tt=0;tt<teams.length;tt++){
    if(teams[tt].ctrlPoints>highestCtrlPointsCount){
      highestCtrlPointsCount = teams[tt].ctrlPoints;
      highestTeamAmount = 1;
      highestTeam = tt;
    }else if (teams[tt].ctrlPoints == highestCtrlPointsCount)
      highestTeamAmount++;
  }
  if(highestTeamAmount>1){
    winningTeam = -1;
  }else winningTeam = highestTeam;

  if(lastWinningTeam!=winningTeam){
    gameTimer = gameLength;
    if(winningTeam!=-1)
     playerLog.pushPlayerLogAll(teams[winningTeam].name+" is now winning!");
    else
     playerLog.pushPlayerLogAll("No team is winning!");
   playerLog.pushPlayerLogAll("Game timer reset.");
  }
}

sp.modes.capturePoints.stopGame = function(){
  if(currentVariation == 1)
    currentVariation = 0
  else currentVariation = 1
  var maxKills = 0
  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];
    ship.custom.wonLastGame = (game.ships[i].custom.team == winningTeam);
    ship.custom.lastScore = game.ships[i].score;
    ship.custom.wantsTie = false;
    ship.custom.wantsSurrender = false;

    sp.systems.aliveBooster.reset(ship);

    if(ship.score>maxKills)
      maxKills = ship.score
    drawButton(ship,2,40,"voluntarySwitchTeams",teams[ship.custom.team].color,UISkin(ship).sec,UISkin(ship).main,
    false,"U","Switch teams")

    drawButton(ship,2,30,"voteSurrender","#77FF77",UISkin(ship).sec,UISkin(ship).main,
    false,"U","Vote surrender")

    drawButton(ship,2,30,"voteTie","#77FF77",UISkin(ship).sec,UISkin(ship).main,
    false,"U","Vote for a tie")
  }
  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];
    if(maxKills!=0) {
      ship.custom.lastRating = ship.score/maxKills;
    } else {
      ship.custom.lastRating = 0;
    }
  }
  if(winningTeam!=-1)
    playerLog.pushPlayerLogAll(teams[winningTeam].name+" team wins!");
  else
    playerLog.pushPlayerLogAll("We'll call it a draw!");
  if(sp.systems.celebration!=null){
    sp.systems.celebration.celebrate();
  }
  sp.core.gameInProgress = false;
  gameTimer = intermissionLength;

  roundsLog[roundsLog.length-1].winner = winningTeam;
}

sp.modes.capturePoints.startGame = function(){
  timeElapsed = 0;
  GPOClear = true;
  playerPool = [];
  min = game.ships.length;
  minTeam = 0;
  for(tt=0;tt<teams.length;tt++){
    if(teams[tt].players.length<min){
      min = teams[tt].players.length;
      minTeam = tt;
    }
    teams[tt].points = 0;
    teams[tt].ctrlPoints = 0;
  }

  /*
  for(tt=0;tt<teams.length;tt++){
    teams[tt].players = shuffleArray(teams[tt].players);

    playerPool = playerPool.concat(teams[tt].players.splice(min,teams[tt].players.length-min));
  }

  tt=0
  playerPool = shuffleArray(playerPool);
  playersMoved = false;
  for(p=0;p<playerPool.length;p++){
    teams[tt].players.push(playerPool[p]);
    game.ships[playerPool[p]].custom.team = tt;
    playersMoved = true;
    tt++;
    if(tt>=teams.length)tt=0;
  }*/

  for(var i = 0; i<game.ships.length; i++){
    ship = game.ships[i]
    playerPool.push({
      id: i,
      rating: ship.custom.lastRating
    })
  }

  playerPool.sort(function(a,b){
    if(a.rating>b.rating) return -1; else return 1
  })

  var teamsRatingSums = []
  for(var tt = 0; tt<teams.length; tt++)
    teamsRatingSums[tt] = 0;

  var arrayMinIndex = function(arr){
    var min = arr[0]
    var ind = 0;
    for(var i = 0; i<arr.length; i++){
      if(arr[i]<min){
        min = arr[i]
        ind = i
      }
    }
    return ind
  }

  var worstTeam = 0
  for(p=0;p<playerPool.length;p++){
    ship = game.ships[playerPool[p].id]
    ship.custom.team = worstTeam
    teamsRatingSums[worstTeam] += 1+ship.custom.lastRating
    worstTeam = arrayMinIndex(teamsRatingSums);
  }

  //if(playersMoved)
 playerLog.pushPlayerLogAll(/*"Unfair teams. */"EXPERIMENTAL: Teams auto-balanced.");

  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i]
    var availableShips = getAvailableShips(ship)
    if(availableShips.indexOf(ship.custom.selectedShip)==-1)
      ship.custom.selectedShip  = availableShips[Math.floor(Math.random()*availableShips.length)]
    //game.ships[i].set({x:});
    ship.custom.needsRespawn = true;
    //game.ships[i].custom.killCause = -100;
  }

  currentMap = Math.floor(Math.random()*maps.length);
  controlPoints = [];
  for(p=0; p<maps[currentMap].cp.length; p++){
    controlPoints.push({
      x:maps[currentMap].cp[p].x,
      y:maps[currentMap].cp[p].y,
      controlledBy: -1,
      attemptedCaptureBy: -1,
      timeSinceAttacked: 0,
      captureProgress: 0.0,
      update: true
    })
  }
  for(tt=0;tt<teams.length;tt++){
    teams[tt].x = maps[currentMap].teams[tt].x
    teams[tt].y = maps[currentMap].teams[tt].y
  }
  game.setCustomMap(maps[currentMap].asteroids);

  gameTimer = gameLength
  sp.core.gameInProgress = true;

 playerLog.pushPlayerLogAll("Game started! Respawn to proceed...");

  roundsLog.push({
    roundLength: 0,
    startTime: getTime(),
    winner: -2
  })
}

sp.modes.capturePoints.updateControlPoints = function(){
  for(p=0; p<controlPoints.length; p++){
    if(!controlPoints[p].update)continue;
    controlPoints[p].update = false;
    passet = pointNeutral;
    if(controlPoints[p].controlledBy!=-1){
      pointTeam.id = "pointControlledBy"+teams[controlPoints[p].controlledBy].name;
      pointTeam.emissiveColor = teams[controlPoints[p].controlledBy].color;
      passet = pointTeam;
    }
    game.removeObject("point"+p)
    game.setObject({
      id: "point"+p,
      type: passet,
      position: {x:controlPoints[p].x,y:controlPoints[p].y,z:-5},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:10,y:10,z:10}
    }) ;
  }

}

sp.modes.capturePoints.controlPointsMechanic = function(){
  var pointsDeltaCapture = [];
  var teamsOnPoints = [];

  for(p=0; p<controlPoints.length; p++){
    teamsOnPoints[p] = [];
    pointsDeltaCapture[p] = 0;
    for(i=0;i<game.ships.length;i++){
      ship = game.ships[i];
      if(!ship.alive)continue;
      if(distance(ship.x-controlPoints[p].x, ship.y-controlPoints[p].y)<controlPointsRange){
        setObjectiveStatus(ship, controlPoints[p].state, 2);
        pointsDeltaCapture[p] += sp.systems.aliveBooster.getCaptureBuff(ship);
        ship.custom.state.doingObjective = true;
        t = ship.custom.team;
        if(!teamsOnPoints[p].includes(t))
        teamsOnPoints[p].push(t);
      }else if(distance(ship.x-controlPoints[p].x, ship.y-controlPoints[p].y)<controlPointsRange*5){
        ship.custom.state.nearObjective = true;
      }
    }
  }

  for(p=0; p<controlPoints.length; p++){

    var deltaCapture = pointsDeltaCapture[p]
    if(deltaCapture<1){
      controlPoints[p].captureProgress -= captureRate*0.5;
    }

    if(controlPoints[p].attemptedCaptureBy!=-1){
      //if the point is being captured
      if(teamsOnPoints[p].includes(controlPoints[p].attemptedCaptureBy)){
        //if the team which is doing the capture is present on the point
        if(teamsOnPoints[p].length>1){
          //and there are other teams on the point
          //then the point is contested
          controlPoints[p].state = "CONTESTED!"
        }else{
          //if it's the only team present, add capture progress
          if(controlPoints[p].controlledBy!=-1&&controlPoints[p].timeSinceAttacked>20)
         playerLog.pushPlayerLogTeam(("point "+String.fromCharCode(97+p)).toUpperCase() + " is under attack!", controlPoints[p].controlledBy)
          controlPoints[p].timeSinceAttacked = 0;
          controlPoints[p].captureProgress += captureRate*deltaCapture;
          controlPoints[p].state = "Capturing... "+(controlPoints[p].captureProgress*100).toFixed(0)+"%"

        }
      }else{
        //if the team doing the capture isn't present on the point, revert the capture
        controlPoints[p].captureProgress -= revertCaptureRate*deltaCapture;
        controlPoints[p].state = "Reverting capture(attempt by "+teams[controlPoints[p].attemptedCaptureBy].name+")... "+(controlPoints[p].captureProgress*100).toFixed(0)+"%"
      }
    }else{
      //otherwise check for possible capture attempts
      for(t=0;t<teamsOnPoints[p].length;t++){
        if(teamsOnPoints[p][t]!=controlPoints[p].controlledBy)
          controlPoints[p].attemptedCaptureBy = teamsOnPoints[p][t];
      }
      controlPoints[p].state = "Point under control."
    }

    if(controlPoints[p].captureProgress>1){
      controlPoints[p].update = true;
      if(controlPoints[p].controlledBy!=-1)
        teams[controlPoints[p].controlledBy].ctrlPoints--;
      controlPoints[p].controlledBy = controlPoints[p].attemptedCaptureBy;
      /*if(winningTeam!=controlPoints[p].controlledBy&&gameInProgress){
        gameTimer = gameLength;
      }*/
      controlPoints[p].timeSinceAttacked = 100000;
      lastCaptureByTeam = controlPoints[p].attemptedCaptureBy;
      teams[controlPoints[p].controlledBy].ctrlPoints++;
      controlPoints[p].attemptedCaptureBy = -1;
      controlPoints[p].captureProgress = 0.0;
      if(sp.core.gameInProgress)
       playerLog.pushPlayerLogAll(teams[controlPoints[p].controlledBy].name+" captured point "+(String.fromCharCode(97+p)).toUpperCase())
    }

    if(controlPoints[p].captureProgress<0.0){
      controlPoints[p].attemptedCaptureBy = -1;
      controlPoints[p].captureProgress = 0.0;
    }

  }
}
