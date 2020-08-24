var log = function(string){
  game.modding.terminal.echo(string);
}

var varToJSON = function(what, varName){
  if(typeof(what)!="string") {
    what = JSON.stringify(what);
  }

  if(varName != null){
    what = varName + " = " + what + ";";
  }

  return what;
}

/*downloadFile = function(what, filename){
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  var blob = new Blob([what], {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);

  document.body.removeChild(a);
}*/

//$fileTape setWriting false
//$fileTape ifFlag prerenderable
//$fileTape setWriting true

this.prerenderSP = function(download = true){

  var text = "";

  text += varToJSON(sp.parsedShips,"sp.parsedShips")+"\n\n";

  text += varToJSON(ships,"ships")+"\n\n";

  text += varToJSON(shipIdsToCodes,"shipIdsToCodes")+"\n\n";

  text += varToJSON(SPPages,"SPPages")+"\n\n";

  //if(download)
  //  downloadFile(text,"prerenderSP.js")  //obsolete
  //else
    return text;

}

//$fileTape setWriting true

var barrageExplain = function(ship){

  UISystem.autoClearUI.set(ship,
    {id: "barrageExplain",
    position: [25,80,40,8],
    visible: true,
    components: [
        { type: "text",position:[0,0,100,100],value:"\u{26a0} HOLD SPACEBAR OR LMB WHEN USING BARRAGE \u{26a0}",color:"#FFF"},
      ]
    },
    1
  );

}

var ensureParsed = function(JSONtoParse){
  if(typeof(JSONtoParse)=="string"){
    return JSON.parse(JSONtoParse);
  }else return JSONtoParse;
}

var ensureStringified = function(JSONtoStringify){
  if(typeof(JSONtoStringify)!="string"){
    return JSON.stringify(JSONtoStringify);
  }else return JSONtoStringify;
}

var sqrDist = function(x, y){
  return x*x+y*y;
};

var shortestPath = function(x1, y1, x2, y2, wrapV = true, wrapH = true){

  var shortestDist = 10000;

  var map_size = ms*5;

  var coords = [];



  var xx = x2-x1;
  var yy = y2-y1;

  if(!wrapH&&!wrapV)return [xx, yy];

  coords.push(xx, yy);
  var shortest = [xx, yy];

  if(wrapH){
    xx = x2+map_size*2-x1;
    yy = y2-y1;
    coords.push(xx, yy);

    xx = x2-map_size*2-x1;
    yy = y2-y1;
    coords.push(xx, yy);
  }

  if(wrapV){
    xx = x2-x1;
    yy = y2+map_size*2-y1;
    coords.push(xx, yy);

    xx = x2-x1;
    yy = y2-map_size*2-y1;
    coords.push(xx, yy);
  }

  if(wrapV&&wrapH){
    xx = x2+map_size*2-x1;
    yy = y2+map_size*2-y1;
    coords.push(xx, yy);

    xx = x2+map_size*2-x1;
    yy = y2-map_size*2-y1;
    coords.push(xx, yy);

    xx = x2-map_size*2-x1;
    yy = y2+map_size*2-y1;
    coords.push(xx, yy);

    xx = x2-map_size*2-x1;
    yy = y2-map_size*2-y1;
    coords.push(xx, yy);
  }

  for(var i = 0; i<9; i++){
    var dist = sqrDist(coords[i*2], coords[i*2+1]);
    if(dist<shortestDist){
      shortestDist = dist;
      shortest = [coords[i*2], coords[i*2+1]];
    }
  }

  return shortest;

};

var shuffleArray = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var now = new Date();

var getTime = function(){
  var hours = now.getHours()
  var mins = now.getMinutes()
  var secs = now.getSeconds()
  if(hours<10)hours = "0"+hours;
  if(mins<10)mins = "0"+mins;
  if(secs<10)secs = "0"+secs;
  return hours + ":" + mins + ":" + secs;
}

var ifAlreadyOtherwiseSet = function(ship, customVarName, value){
  if(ship.custom[customVarName]==value)
  return true;
  else ship.custom[customVarName] = value;
  return false;
};

var getOrInit = function(ship, customVarName, defaultValue){
  if(ship.custom[customVarName]==null)
    ship.custom[customVarName] = defaultValue;
  return ship.custom[customVarName];
}

var setObjectiveStatus = function(ship, text, time){
  ship.custom.objectiveStatusText = text;
  ship.custom.objectiveStatusTextTimeLeft = time;
}

var firstExc = null;
var logError = function(error, exc){
  log("ERROR-"+error.toUpperCase()+"["+getTime()+"] "+exc.name+": "+exc.message+"\n()");
  if(firstExc==null){
    firstExc = exc;
  }
  if(crashOnError){
    log(exc.stack);
    log("Mod crashed on error, as requested.")
    game.modding.commands.stop()
  }
}

var firework = function(){
  for(var i = 0; i<50; i++){
    var dir = Math.random()*2*Math.PI
    game.addAlien({x:0,y:0,vx:Math.sin(dir),vy:Math.cos(dir)})
    game.addAsteroid({size:30,x:Math.sin(dir)*20,y:Math.cos(dir)*20,vx:Math.sin(dir),vy:Math.cos(dir)})
  }
}

var respawnStatic = function(){

  for(var i = 0; i<controlPoints.length; i++){
    controlPoints[i].update = true;
  }

game.setObject({
  id: "changeShipBlue",
  type: changeShipMarkerB,
  position: {x:maps[currentMap].teams[0].x,y:maps[currentMap].teams[0].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:shipSelectRange,y:shipSelectRange,z:shipSelectRange}
}) ;

game.setObject({
  id: "changeShipRed",
  type: changeShipMarkerR,
  position: {x:maps[currentMap].teams[1].x,y:maps[currentMap].teams[1].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:shipSelectRange,y:shipSelectRange,z:shipSelectRange}
}) ;

game.setObject({
  id: "protectedBlue",
  type: baseMarkerB,
  position: {x:maps[currentMap].teams[0].x,y:maps[currentMap].teams[0].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:protectedAreaRange*1.05,y:protectedAreaRange*1.05,z:protectedAreaRange*1.05}
}) ;

game.setObject({
  id: "protectedRed",
  type: baseMarkerR,
  position: {x:maps[currentMap].teams[1].x,y:maps[currentMap].teams[1].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:protectedAreaRange*1.05,y:protectedAreaRange*1.05,z:protectedAreaRange*1.05}
}) ;

game.setObject({
  id: "warningBlue",
  type: baseWarningB,
  position: {x:maps[currentMap].teams[0].x,y:maps[currentMap].teams[0].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:protectedAreaRange*2,y:protectedAreaRange*2,z:protectedAreaRange*2}
}) ;

game.setObject({
  id: "warningRed",
  type: baseWarningR,
  position: {x:maps[currentMap].teams[1].x,y:maps[currentMap].teams[1].y,z:-5},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:protectedAreaRange*2,y:protectedAreaRange*2,z:protectedAreaRange*2}
}) ;
}
