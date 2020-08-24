
/*jshint maxerr: 10000 */
//"use strict";
//TODO: ideally would split this into multiple files, but works well enough for now

var modsys = {};

var sp = {};
sp.core = {};
sp.systems = {};
sp.debug = {};
sp.modes = {};

var SPPages = {};

//you know what?!
var a; var b; var c; var d; var e; var  f; var  g; var  h; var  i; var  j; var  k;
var  l; var  m; var  n; var  o; var  p; var  q; var  r; var  s; var  t; var  u;
var  v; var  w; var  x; var  y; var  z;
//modern problems...
//...require modern solutions.

//that may have been the stupidest line of JS i've written in a loooong time
//but it works so eh

//the seaaaaa of vars, in the ocean of globals... y'arr!

//cursed be the one who uses a single-letter variable in global scope
//wait, shit, that might be me

//and while i am at it:
//this is so stupid.
var ship; var tt; var edata; var go; var cl; var sdata;
var sr; var ec; var er; var bd;

//this is total
var bs;

var ss; var sa; var stats; var minPlayers; var minPlTeam;

//well maybe this isn't too ridiculous, right? it's like hyper-hoisting
//ugh, who am i kidding

var maxPlayers; var maxPlTeam; var dist; var width; var randomRange; var fp;
var xf; var yf; var xs; var ys; var xr; var yr;

//thank fuck for JSHint

var FWState; var HSState; var range; var EMPState; var buffState; var config;
var expl; var possibleLinkerTargets; var targetname; var ready; var state;
var owlPS; var thunderbirdPD70; var wyvernWX; var marker;

//even tho my atom JSHint plug-in didn't work

var asset; var possibleLightsColors; var linkerStreamEn; var linkerStreamSh;
var ang; var star; var lights; var comps; var msg; var components; var tcol;
var lines; var tcomps; var availableShips; var lastSpacePos; var leftShift;
var colF; var colB; var wonUI; var lostUI; var playerSwitchedTeams; var success;
var voteResults; var wantTie; var wantSurrender; var pl; var player;

var highestCtrlPointsCount; var highestTeam; var highestTeamAmount;
var playerPool; var min; var minTeam; var passet; var killer; var kname; var kcol;
var cause; var thisShipSizeMult; var shipSizeMult;

var ships; var shipIdsToCodes; var SPPages;

//dear reader, forgive me for this heresy.
//go to https://www.reddit.com/r/Eyebleach/ to restore your lost sanity. or dont

var startSettings = {
  prerenderShips: false,//true,
  globalChat: false//true for custom global chat, false for good ol' vocabulary
  //simplifiedShips: false,
  //oneAwesomeMap: false
}

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

//declaring all existing "companies" according to lore.

var companies = [];

companies[-1] = {name: "Unknown Company",logo:[
]}

companies[0] = {name: "Starblast Prototypes Project",unicodeChar:"\u{1f794}",logo:[
  { type:"box",position:[0,0,100,100],fill:"#222",stroke:"#222",width:2},
  { type: "text",position:[-20,-40,60,180],value:"\u{1f6e6}",color:"#888"},
  { type: "text",position:[0,0,100,20],value:"STARBLAST",color:"#CDE"},
  { type: "text",position:[0,20,100,60],value:"𝙿𝚁𝙾𝚃𝙾𝚃𝚈𝙿𝙴𝚂",color:"#CDE"},
  { type: "text",position:[0,80,100,20],value:"HIGH AGILITY CONCEPT SPACE FIGHTERS",color:"#CDE"},
]}

companies[1] = {name: "Uranus Military Institutions",unicodeChar:"\u{2645}",logo:[
  { type:"box",position:[0,0,100,100],fill:"#004",stroke:"#004",width:2},
  { type:"box",position:[0,80,100,15],fill:"#000",stroke:"#000",width:2},
  { type: "text",position:[0,0,35,80],value:"\u{2b24}",color:"#03A"},
  { type: "text",position:[0,0,35,80],value:"\u{25dd}",color:"#0AF"},
  { type: "text",position:[0,0,35,80],value:"\u{25ef}",color:"#026"},
  { type: "text",position:[0,0,35,60],value:"\u{26e2}",color:"#0AF"},
  { type: "text",position:[35,0,65,90],value:"U M I",color:"#0AF"},
  { type: "text",position:[0,80,25,20],value:"URANUS",color:"#0AF"},
  { type: "text",position:[25,80,35,20],value:"MILITARY",color:"#CDE"},
  { type: "text",position:[55,80,45,20],value:"INSTITUTIONS",color:"#0AF"},
]}

companies[2] = {name: "Military Done Right",unicodeChar:"\u{2756}",logo:[
  { type:"box",position:[0,0,10,100],fill:"#DDD",stroke:"#DDD",width:2},
  { type:"box",position:[65,0,35,100],fill:"#DDD",stroke:"#DDD",width:2},

  { type: "text",position:[5,-35,100,200],value:"\u{25e3}",color:"#DDD",align:"left"},
  { type: "text",position:[30,-35,100,200],value:"\u{25e5}",color:"#DDD",align:"left"},
  { type: "text",position:[-2,10,25,100],value:"\u{1f66d}",color:"#000"},
  { type: "text",position:[20,-10,20,60],value:"M",color:"#DDD"},
  { type: "text",position:[27.5,20,20,60],value:"D",color:"#DDD"},
  { type: "text",position:[35,50,20,60],value:"R",color:"#DDD"},
  { type: "text",position:[45,10,55,30],value:"ILITARY",color:"#000",align:"left"},
  { type: "text",position:[52.5,40,47.5,30],value:"ONE",color:"#000",align:"left"},
  { type: "text",position:[60,70,40,30],value:"IGHT",color:"#000",align:"left"},
]}

companies[3] = {name: "Enhanced Collision Dynamics Unlimited",unicodeChar:"\u{1f835}",logo:[]}

companies[4] = {name: "Goldman Aerospace",unicodeChar:"\u{1d406}\u{1d400}",logo:[]}

companies[5] = {name: "Antares High-Tech Machinery Group",unicodeChar:"\u{2bce}",logo:[]}

companies[6] = {name: "Billions Degrees Kelvin",unicodeChar:"K",logo:[]}

companies[7] = {name: "U-TECH",unicodeChar:"U",logo:[]}

companies[8] = {name: "Five Stars Technologies",unicodeChar:"\u{2606}",logo:[]}

companies[9] = {name: "MALEFOR MACHINATIONS",unicodeChar:"\u{1f409}",logo:[]}

companies[10] = {name: "Phoenix Fleet Forge",unicodeChar:"\u{1f6e0}",logo:[]}

var ms = 100;

var crashOnError = false;

var ships = [];
var gameplayShips = {};
var showcaseShips = [];
var shipsData = {};
var shipIdsToCodes = {};

var vocabulary;
if(!startSettings.globalChat){
  var vocabulary = [
        { text: "You", icon:"\u004e", key:"O" },
        { text: "Me", icon:"\u004f", key:"E" },
        { text: "Yes", icon:"\u004c", key:"Y" },
        { text: "No", icon:"\u004d", key:"N" },

        { text: "Attack", icon:"\u00bd", key:"A" },
        { text: "Follow", icon:"\u0050", key:"F" },
        //{ text: "Objective", icon:"\u0044", key:"M" },
        { text: "Defend", icon:"\u0025", key:"D" },

        { text: "Wait", icon:"\u0048", key:"T" },
        { text: "Kill", icon:"\u005b", key:"K" },
        { text: "Objective", icon:"\u{1f6a9}", key:"B" },
        { text: "Hmm", icon:"\u004b", key:"Q" },

        { text: "Heal", icon:"\u0037", key:"H" },

        { text: "Good Game", icon:"GG", key:"G" },
        { text: "No Prob", icon:"\u0047", key:"P" },
        { text: "Thanks", icon:"\u0041", key:"X" },
        { text: "Sorry", icon:"\u00a1", key:"S" }
      ] ;
}

this.options = {
  // see documentation for options reference
  //root_mode: "survival",
  map_size: ms,
  starting_ship:601,
  friendly_colors:2,
  asteroids_strength:100000,
  crystal_value:0,
  weapons_store:false,
  vocabulary:vocabulary,
  custom_map: [],
  max_players: 20,
  ships:ships
};

//Generated via prerender.js at Fri Apr 05 2019 22:21:49 GMT+0300 (GMT+03:00)

sp.parsedShips = [{"name":"Firewall HGS-3","level":6,"model":1,"size":0.48,"zoom":1,"scaleUp":1.2,"circularHitbox":1,"specs":{"shield":{"capacity":[350,350],"reload":[2,2]},"generator":{"capacity":[500,500],"reload":[20,20]},"ship":{"mass":130,"speed":[150,150],"rotation":[70,70],"acceleration":[100,100]}},"bodies":{},"typespec":{"name":"Firewall HGS-3","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[93.75,656.25],"reload":[-30,60]},"ship":{"mass":65,"speed":[140,140],"rotation":[15.75,157.5],"acceleration":[10,270]}},"shape":[1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536,1.536],"lasers":[{"x":0.6432,"y":-1.056,"z":0.048,"angle":0,"damage":[3,9],"rate":6,"type":1,"speed":[35,105],"number":2,"spread":0,"error":0.5,"recoil":0},{"x":-0.6432,"y":-1.056,"z":0.048,"angle":0,"damage":[3,9],"rate":6,"type":1,"speed":[35,105],"number":2,"spread":0,"error":0.5,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[6,18],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.8448000000000001},"id":"firewallHGS3","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":375,"energyregen":15,"agility":140,"rotation":86.625},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[93.75,656.25],"energyregen":[-30,60],"damage":[6,18],"bspeed":[15,180],"speed":[140,140],"agility":[10,270],"rotation":[15.75,157.5],"mass":65}}},{"name":"Burstcharger Mk1","level":6,"scaleUp":1.2,"model":2,"size":0.6,"zoom":1,"circularHitbox":1,"specs":{"shield":{"capacity":[250,250],"reload":[4,4]},"generator":{"capacity":[100,100],"reload":[30,30]},"ship":{"mass":110,"speed":[150,150],"rotation":[30,30],"acceleration":[45,45]}},"bodies":{},"typespec":{"name":"Burstcharger Mk1","level":1,"model":2,"code":102,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-6,12]},"generator":{"capacity":[12.5,87.5],"reload":[-30,60]},"ship":{"mass":55,"speed":[140,140],"rotation":[15.75,157.5],"acceleration":[10,210]}},"shape":[1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997,1.4990399999999997],"lasers":[{"x":0,"y":-1.248,"z":0,"angle":0,"damage":[2.5,7.5],"rate":1,"type":1,"speed":[35,105],"number":5,"spread":10,"error":3,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[12.5,37.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.68706},"id":"burstchargerMk1","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":3,"energycap":50,"energyregen":15,"agility":110,"rotation":86.625},"shieldcap":[46.875,328.125],"shieldregen":[-6,12],"energycap":[12.5,87.5],"energyregen":[-30,60],"damage":[12.5,37.5],"bspeed":[15,180],"speed":[140,140],"agility":[10,210],"rotation":[15.75,157.5],"mass":55}}},{"name":"Unstablecore LDB","level":6,"model":3,"size":0.4,"specs":{"shield":{"capacity":[300,100],"reload":[2,3]},"generator":{"capacity":[500,60],"reload":[100,15]},"ship":{"mass":140,"speed":[150,150],"rotation":[60,60],"acceleration":[100,100]}},"bodies":{},"wings":{"fwings":{"doubleside":true,"offset":{"x":40,"y":-90,"z":-10},"length":[0,20,0,20,0,20],"width":[0,160,120,80,40],"angle":[0,0,0,0,0,0],"position":[-10,-10,10,30,70,0],"texture":[63,63,4],"bump":{"position":40,"size":5}},"bwings":{"doubleside":true,"offset":{"x":25,"y":100,"z":-10},"length":[0,30,20,0,20],"width":[0,100,50,20],"angle":[0,0,0,0,0,0],"position":[-10,-10,-10,-25,0],"texture":[63,63,4],"bump":{"position":-40,"size":5}}},"typespec":{"name":"Unstablecore LDB","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-3,6]},"generator":{"capacity":[62.5,437.5],"reload":[-100,200]},"ship":{"mass":70,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,230]}},"shape":[1.8905,1.847,1.475,1.323,1.125,0.9135,0.834,0.779,0.7425,0.782,0.953,0.9475,0.9355,0.9355,0.9575,0.998,1.059,1.186,1.2595,1.3425,1.298,1.0215,1.0645,1.13,1.1375,0.9295,1.1375,1.13,1.0645,1.0215,1.298,1.3425,1.2595,1.186,1.059,0.998,0.9575,0.9355,0.9355,0.9475,0.953,0.782,0.7425,0.779,0.834,0.9135,1.125,1.323,1.475,1.847],"lasers":[{"x":0,"y":-0.08,"z":0,"angle":0,"damage":[25,75],"rate":0.5,"type":1,"speed":[0.75,2.25],"number":4,"spread":270,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[100,300],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.24773},"id":"unstablecoreLDB","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":1.5,"energycap":250,"energyregen":50,"agility":120,"rotation":74.25},"shieldcap":[56.25,393.75],"shieldregen":[-3,6],"energycap":[62.5,437.5],"energyregen":[-100,200],"damage":[100,300],"bspeed":[15,180],"speed":[140,140],"agility":[10,230],"rotation":[13.5,135],"mass":70}}},{"name":"Stinger LMT","level":6,"model":4,"size":0.7,"scaleUp":1.4,"circularHitbox":1,"zoom":1,"specs":{"shield":{"capacity":[450,450],"reload":[3,3]},"generator":{"capacity":[300,300],"reload":[65,65]},"ship":{"mass":100,"speed":[150,150],"rotation":[105,105],"acceleration":[30,30]}},"bodies":{},"wings":{"cockpitCorners":{"length":[7],"width":[20,10],"angle":[-12],"position":[-3,0],"doubleside":true,"offset":{"x":8,"y":-15,"z":8},"bump":{"position":50,"size":35},"texture":[9]},"weaponsBottomShieldTop":{"length":[0,4,7,7,4,0],"width":[0,60,50,50,50,60,0],"angle":[90,90,30,-30,-90,-90],"position":[-10,-10,0,5,0,-10,-10],"doubleside":true,"offset":{"x":52,"y":-15,"z":0},"bump":{"position":10,"size":3},"texture":[1]},"weaponsBottomShieldBottom":{"length":[0,4,7,7,4,0],"width":[0,60,50,50,50,60,0],"angle":[-90,-90,-30,30,90,90],"position":[-10,-10,0,5,0,-10,-10],"doubleside":true,"offset":{"x":52,"y":-15,"z":-7},"bump":{"position":10,"size":3},"texture":[1]}},"typespec":{"name":"Stinger LMT","level":1,"model":4,"code":104,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-4.5,9]},"generator":{"capacity":[37.5,262.5],"reload":[-50,100]},"ship":{"mass":50,"speed":[140,140],"rotation":[23.625,236.25],"acceleration":[10,100]}},"shape":[1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998,1.1829999999999998],"lasers":[{"x":0.8119999999999999,"y":-0.252,"z":-0.06,"angle":0,"damage":[25,75],"rate":1,"type":2,"speed":[37.5,112.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8119999999999999,"y":-0.252,"z":-0.06,"angle":0,"damage":[25,75],"rate":1,"type":2,"speed":[37.5,112.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.77,"y":-0.7,"z":0.22,"angle":0,"damage":[1.75,5.25],"rate":3,"type":1,"speed":[33.75,101.25],"number":2,"spread":0,"error":2,"recoil":0},{"x":-0.77,"y":-0.7,"z":0.22,"angle":0,"damage":[1.75,5.25],"rate":3,"type":1,"speed":[33.75,101.25],"number":2,"spread":0,"error":2,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[25,75],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.5577},"id":"stingerLMT","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":2.25,"energycap":150,"energyregen":25,"agility":55,"rotation":129.9375},"shieldcap":[46.875,328.125],"shieldregen":[-4.5,9],"energycap":[37.5,262.5],"energyregen":[-50,100],"damage":[25,75],"bspeed":[37.5,112.5],"speed":[140,140],"agility":[10,100],"rotation":[23.625,236.25],"mass":50}}},{"name":"Longlegs LRA Assault","teamMarkerSize":1.3,"level":6,"model":5,"size":0.525,"zoom":1,"specs":{"shield":{"capacity":[400,100],"reload":[5,3]},"generator":{"capacity":[120,60],"reload":[30,15]},"ship":{"mass":170,"speed":[150,150],"rotation":[20,30],"acceleration":[90,90]}},"bodies":{},"wings":{"frontSidesWings":{"doubleside":true,"offset":{"x":60,"y":-105,"z":19},"length":[-20,0,30,12,5,12,30,0],"width":[0,0,140,80,80,80,80,140,0],"angle":[0,0,-10,-70,-90,-110,-170,-180],"position":[20,20,0,20,20,20,20,0,20,null],"texture":3,"bump":{"position":0,"size":3}},"backSidesWings":{"doubleside":true,"offset":{"x":60,"y":105,"z":19},"length":[-20,0,30,12,5,12,30,0],"width":[0,0,140,80,80,80,80,140,0],"angle":[0,0,-10,-70,-90,-110,-170,-180],"position":[20,20,40,20,20,20,20,40,20,null],"texture":3,"bump":{"position":0,"size":3}}},"typespec":{"name":"Longlegs LRA Assault","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-7.5,15]},"generator":{"capacity":[15,105],"reload":[-40,80]},"ship":{"mass":85,"speed":[140,140],"rotation":[4.5,45],"acceleration":[10,210]}},"shape":[1.6305,1.631,1.885,1.728,1.567,1.451,1.246,1.083,0.962,0.8135,0.7675,0.7365,0.596,0.481,0.4305,0.389,0.307,0.372,0.9765,1.2145,1.481,1.8265,2.0105,2.2825,2.296,1.4205,2.296,2.2825,2.0105,1.8265,1.481,1.2145,0.9765,0.372,0.307,0.389,0.4305,0.481,0.596,0.7365,0.7675,0.8135,0.962,1.083,1.246,1.451,1.567,1.728,1.885,1.631],"lasers":[{"x":0,"y":-1.4175,"z":0.042,"angle":0,"damage":[5,15],"rate":4,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":5,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[5,15],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.51536},"id":"longlegsLRA_Assault","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":3.75,"energycap":60,"energyregen":20,"agility":110,"rotation":24.75},"shieldcap":[112.5,787.5],"shieldregen":[-7.5,15],"energycap":[15,105],"energyregen":[-40,80],"damage":[5,15],"bspeed":[38.75,116.25],"speed":[140,140],"agility":[10,210],"rotation":[4.5,45],"mass":85}}},{"name":"Longlegs LRA Sniper","teamMarkerSize":1.3,"level":6,"model":6,"size":0.525,"zoom":0.5,"specs":{"shield":{"capacity":[400,100],"reload":[3,3]},"generator":{"capacity":[120,60],"reload":[50,15]},"ship":{"mass":170,"speed":[150,150],"rotation":[120,30],"acceleration":[40,90]}},"bodies":{},"wings":{"frontSidesWings":{"doubleside":true,"offset":{"x":106.78462643176172,"y":-79.60252449425515,"z":19},"length":[-20,0,30,12,5,12,30,0],"width":[0,0,140,80,80,80,80,140,0],"angle":[0,0,-10,-70,-90,-110,-170,-180],"position":[20,20,0,20,20,20,20,0,20,null],"texture":3,"bump":{"position":0,"size":3}},"backSidesWings":{"doubleside":true,"offset":{"x":106.78462643176172,"y":79.60252449425515,"z":19},"length":[-20,0,30,12,5,12,30,0],"width":[0,0,140,80,80,80,80,140,0],"angle":[0,0,-10,-70,-90,-110,-170,-180],"position":[20,20,40,20,20,20,20,40,20,null],"texture":3,"bump":{"position":0,"size":3}}},"typespec":{"name":"Longlegs LRA Sniper","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[75,525],"reload":[-1.5,3]},"generator":{"capacity":[37.5,262.5],"reload":[-60,120]},"ship":{"mass":85,"speed":[140,140],"rotation":[31.5,315],"acceleration":[-10,100]}},"shape":[2.26,2.2525,0.979,0.725,1.816,1.776,1.6815,1.641,1.572,1.466,1.378,1.312,0.984,0.77,0.506,0.389,1.448,1.5835,1.7555,1.936,2.017,2.172,2.1895,1.38,1.426,1.4205,1.426,1.38,2.1895,2.172,2.017,1.936,1.7555,1.5835,1.448,0.389,0.506,0.77,0.984,1.312,1.378,1.466,1.572,1.641,1.6815,1.776,1.816,0.725,0.979,2.2525],"lasers":[{"x":0,"y":-1.4175,"z":0.042,"angle":0,"damage":[57.5,172.5],"rate":2,"type":2,"speed":[50,150],"number":1,"spread":0,"error":0,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[57.5,172.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.4916},"id":"longlegsLRA_Sniper","info":{"stats":{"nominalStats":{"shieldcap":300,"shieldregen":0.75,"energycap":150,"energyregen":30,"agility":45,"rotation":173.25},"shieldcap":[75,525],"shieldregen":[-1.5,3],"energycap":[37.5,262.5],"energyregen":[-60,120],"damage":[57.5,172.5],"bspeed":[50,150],"speed":[140,140],"agility":[-10,100],"rotation":[31.5,315],"mass":85}}},{"name":"Niteracer Retracted","scaleUp":1.2,"level":6,"model":7,"size":0.48,"zoom":1,"specs":{"shield":{"capacity":[300,100],"reload":[3,3]},"generator":{"capacity":[300,60],"reload":[20,15]},"ship":{"mass":130,"speed":[150,150],"rotation":[40,30],"acceleration":[90,90]}},"bodies":{},"wings":{"main":{"length":[0,30,0],"width":[0,200,130,0],"angle":[0,0,0],"position":[0,-10,0,10],"doubleside":true,"offset":{"x":35,"y":-10,"z":-2},"bump":{"position":17,"size":2},"texture":[1,1,63]},"front":{"length":[0,10,6,4,0],"width":[0,100,100,90,80,0],"angle":[0,0,0,0,0],"position":[0,-5,-3,3,50,20],"doubleside":true,"offset":{"x":0,"y":-100,"z":-2},"bump":{"position":-1,"size":4},"texture":[1]},"winglet":{"length":[0,50,0],"width":[0,130,50,0],"angle":[0,-10,0],"position":[0,0,10,0],"doubleside":true,"offset":{"x":65,"y":-10,"z":-2},"bump":{"position":10,"size":3},"texture":[1,1,63]}},"typespec":{"name":"Niteracer Retracted","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-4.5,9]},"generator":{"capacity":[37.5,262.5],"reload":[-20,40]},"ship":{"mass":65,"speed":[140,140],"rotation":[9,90],"acceleration":[10,250]}},"shape":[1.4898,1.4754,1.2,1.1706,1.0728,1.0031999999999999,0.9581999999999999,0.96,0.9851999999999999,1.0488,1.098,1.1226,1.1052,1.1052,1.1226,1.0794,1.011,0.8922,0.8387999999999999,0.825,0.8274,0.9179999999999999,1.1832,1.2053999999999998,1.1723999999999999,0.7026,1.1723999999999999,1.2053999999999998,1.1832,0.9179999999999999,0.8274,0.825,0.8387999999999999,0.8922,1.011,1.0794,1.1226,1.1052,1.1052,1.1226,1.098,1.0488,0.9851999999999999,0.96,0.9581999999999999,1.0031999999999999,1.0728,1.1706,1.2,1.4754],"lasers":[{"x":0.2592,"y":-1.152,"z":-0.16,"angle":0,"damage":[17.5,52.5],"rate":1,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.2592,"y":-1.152,"z":-0.16,"angle":0,"damage":[17.5,52.5],"rate":1,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.8193900000000001},"id":"niteracer_Retracted","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":2.25,"energycap":150,"energyregen":10,"agility":130,"rotation":49.5},"shieldcap":[56.25,393.75],"shieldregen":[-4.5,9],"energycap":[37.5,262.5],"energyregen":[-20,40],"damage":[17.5,52.5],"bspeed":[38.75,116.25],"speed":[140,140],"agility":[10,250],"rotation":[9,90],"mass":65}}},{"name":"Niteracer Deployed","level":6,"scaleUp":1.2,"model":8,"size":0.48,"zoom":1,"specs":{"shield":{"capacity":[300,100],"reload":[1,3]},"generator":{"capacity":[300,60],"reload":[40,15]},"ship":{"mass":130,"speed":[150,150],"rotation":[120,30],"acceleration":[60,90]}},"bodies":{},"wings":{"main":{"length":[0,30,0],"width":[0,200,130,0],"angle":[0,0,0],"position":[0,-10,0,10],"doubleside":true,"offset":{"x":35,"y":-10,"z":-2},"bump":{"position":17,"size":2},"texture":[1,1,63]},"front":{"length":[0,10,6,4,0],"width":[0,100,100,90,80,0],"angle":[0,0,0,0,0],"position":[0,-5,-3,3,50,20],"doubleside":true,"offset":{"x":0,"y":-100,"z":-2},"bump":{"position":-1,"size":4},"texture":[1]},"winglet":{"length":[0,50,0],"width":[0,130,50,0],"angle":[0,-10,0],"position":[0,0,10,0],"doubleside":true,"offset":{"x":90.98076884558158,"y":4.999988339744057,"z":-2},"bump":{"position":10,"size":3},"texture":[1,1,63]}},"typespec":{"name":"Niteracer Deployed","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-1.5,3]},"generator":{"capacity":[37.5,262.5],"reload":[-40,80]},"ship":{"mass":65,"speed":[140,140],"rotation":[27,270],"acceleration":[10,150]}},"shape":[1.4898,1.4754,1.2,1.1706,1.0728,1.0031999999999999,0.9581999999999999,0.8543999999999999,1.065,1.1136,1.1856,1.2905999999999997,1.3494,1.3566,1.3896,1.3998000000000002,1.2966,1.1856,1.1124,0.825,0.8274,0.9179999999999999,1.1832,1.2053999999999998,1.1723999999999999,0.7026,1.1723999999999999,1.2053999999999998,1.1832,0.9179999999999999,0.8274,0.825,1.1124,1.1856,1.2966,1.3998000000000002,1.3896,1.3566,1.3494,1.2905999999999997,1.1856,1.1136,1.065,0.8543999999999999,0.9581999999999999,1.0031999999999999,1.0728,1.1706,1.2,1.4754],"lasers":[{"x":0.2592,"y":-1.152,"z":-0.16,"angle":0,"damage":[17.5,52.5],"rate":1,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.2592,"y":-1.152,"z":-0.16,"angle":0,"damage":[17.5,52.5],"rate":1,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.8193900000000001},"id":"niteracer_Deployed","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":0.75,"energycap":150,"energyregen":20,"agility":80,"rotation":148.5},"shieldcap":[56.25,393.75],"shieldregen":[-1.5,3],"energycap":[37.5,262.5],"energyregen":[-40,80],"damage":[17.5,52.5],"bspeed":[38.75,116.25],"speed":[140,140],"agility":[10,150],"rotation":[27,270],"mass":65}}},{"name":"JMP Flea Jumper","level":6,"model":9,"size":0.4,"specs":{"shield":{"capacity":[230,100],"reload":[2,3]},"generator":{"capacity":[120,60],"reload":[45,15]},"ship":{"mass":120,"speed":[150,150],"rotation":[50,50],"acceleration":[80,80],"dash":{"rate":2,"burst_speed":[240,240],"speed":[150,150],"acceleration":[200,70],"initial_energy":[40,75],"energy":[70,30]}}},"bodies":{},"typespec":{"name":"JMP Flea Jumper","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[43.125,301.875],"reload":[-3,6]},"generator":{"capacity":[7.5,52.5],"reload":[-45,90]},"ship":{"mass":60,"speed":[140,140],"rotation":[11.25,112.5],"acceleration":[10,230],"dash":{"rate":2,"burst_speed":[33600,33600],"speed":[140,140],"acceleration":[40000,40000],"initial_energy":[100000,100000],"energy":[0,0]}}},"shape":[1.307,1.328,1.3255,1.1925,1.0895,0.862,0.728,0.634,0.57,0.284,0.46,0.5715,0.5795,0.605,0.6955,0.7405,0.81,0.9435,1.156,1.412,1.511,1.6555,1.877,1.842,0.8955,0.8815,0.8955,1.842,1.877,1.6555,1.511,1.412,1.156,0.9435,0.81,0.7405,0.6955,0.605,0.58,0.5715,0.46,0.284,0.57,0.634,0.728,0.862,1.0895,1.1925,1.3255,1.328],"lasers":[{"x":0,"y":2.5,"z":0,"angle":180,"damage":[1.25,3.75],"rate":1,"type":2,"speed":[35,105],"number":7,"spread":0,"error":20,"recoil":100},{"x":0,"y":0,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.23882},"id":"JMPFlea_Jumper","info":{"stats":{"nominalStats":{"shieldcap":172.5,"shieldregen":1.5,"energycap":30,"energyregen":22.5,"agility":120,"rotation":61.875},"shieldcap":[43.125,301.875],"shieldregen":[-3,6],"energycap":[7.5,52.5],"energyregen":[-45,90],"damage":[8.75,26.25],"bspeed":[15,180],"speed":[140,140],"agility":[10,230],"rotation":[11.25,112.5],"mass":60}}},{"name":"JMP Flea Fighter","level":6,"model":10,"size":0.4,"specs":{"shield":{"capacity":[230,100],"reload":[2,3]},"generator":{"capacity":[120,60],"reload":[45,15]},"ship":{"mass":120,"speed":[150,150],"rotation":[50,50],"acceleration":[80,80]}},"bodies":{},"typespec":{"name":"JMP Flea Fighter","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[43.125,301.875],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-45,90]},"ship":{"mass":60,"speed":[140,140],"rotation":[11.25,112.5],"acceleration":[10,230]}},"shape":[0.9215,0.8995,1.199,1.26,1.261,1.1865,1.138,1.0335,0.9285,0.8595,0.8105,0.7775,0.73,0.605,0.6955,0.7405,0.81,0.9435,1.156,1.412,1.511,1.6555,1.877,1.842,0.517,0.513,0.517,1.842,1.877,1.6555,1.511,1.412,1.156,0.9435,0.81,0.7405,0.6955,0.605,0.73,0.7775,0.8105,0.8595,0.9285,1.0335,1.138,1.1865,1.261,1.26,1.199,0.8995],"lasers":[{"x":0,"y":-0.92,"z":0.032,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[41.25,123.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.23882},"id":"JMPFlea_Fighter","info":{"stats":{"nominalStats":{"shieldcap":172.5,"shieldregen":1.5,"energycap":60,"energyregen":22.5,"agility":120,"rotation":61.875},"shieldcap":[43.125,301.875],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-45,90],"damage":[17.5,52.5],"bspeed":[41.25,123.75],"speed":[140,140],"agility":[10,230],"rotation":[11.25,112.5],"mass":60}}},{"name":"Sword n shield Shield","teamMarkerSize":1.8,"level":6,"model":11,"size":0.5,"scaleUp":2,"specs":{"shield":{"capacity":[1200,100],"reload":[10,3]},"generator":{"capacity":[250,60],"reload":[40,100]},"ship":{"mass":300,"speed":[150,150],"rotation":[40,60],"acceleration":[30,100]}},"bodies":{},"typespec":{"name":"Sword n shield Shield","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[225,1575],"reload":[-7.5,15]},"generator":{"capacity":[7.5,52.5],"reload":[-4.5,9]},"ship":{"mass":750,"speed":[140,140],"rotation":[1.125,11.25],"acceleration":[-26,100]}},"shape":[3.5,3.197,2.644,2.255,2.889,3.202,3.652,4.252,5.075,7.06,8.028,8.01,6.983,6.5,6.16,4.007,2.711,0.89,1.069,1.197,1.322,1.343,1.382,3.309,3.838,3.807,3.838,3.309,1.382,1.343,1.322,1.197,1.069,0.89,2.711,4.007,6.16,6.49,6.983,8.01,8.028,7.06,5.075,4.252,3.652,3.202,2.889,2.255,2.644,3.197],"lasers":[],"radius":2.6492400000000003},"id":"sword_n_shield_Shield","info":{"stats":{"nominalStats":{"shieldcap":900,"shieldregen":3.75,"energycap":30,"energyregen":2.25,"agility":37,"rotation":6.1875},"shieldcap":[225,1575],"shieldregen":[-7.5,15],"energycap":[7.5,52.5],"energyregen":[-4.5,9],"damage":[0,0],"bspeed":[0,0],"speed":[140,140],"agility":[-26,100],"rotation":[1.125,11.25],"mass":750}}},{"name":"Sword n shield Sword","level":6,"model":12,"teamMarkerSize":1.8,"size":0.5,"scaleUp":2,"specs":{"shield":{"capacity":[1200,100],"reload":[5,3]},"generator":{"capacity":[250,60],"reload":[0.00999999999999801,100]},"ship":{"mass":300,"speed":[150,150],"rotation":[40,60],"acceleration":[30,100],"dash":{"rate":0.5,"burst_speed":[120,120],"speed":[150,150],"acceleration":[30,100],"initial_energy":[50,75],"energy":[0,0]}}},"bodies":{},"typespec":{"name":"Sword n shield Sword","level":6,"model":12,"code":612,"specs":{"shield":{"capacity":[225,1575],"reload":[-4.5,9]},"generator":{"capacity":[7.5,52.5],"reload":[-0.00999999999999801,0.01999999999999602]},"ship":{"mass":750,"speed":[140,140],"rotation":[1.125,11.25],"acceleration":[-26,100],"dash":{"rate":0.5,"burst_speed":[28000,28000],"speed":[140,140],"acceleration":[120,120],"initial_energy":[100000,100000],"energy":[0,0]}}},"shape":[5.4,4.891,3.718,2.252,2.211,2.204,2.221,2.241,2.22,2.053,1.88,1.858,1.814,1.763,1.858,1.931,1.994,2.224,2.397,2.44,2.269,1.432,1.382,3.309,3.838,3.807,3.838,3.309,1.382,1.432,2.269,2.44,2.397,2.224,1.994,1.931,1.858,1.763,1.814,1.858,1.88,2.053,2.22,2.241,2.221,2.204,2.211,2.252,3.718,4.891],"lasers":[{"x":0,"y":5,"z":0,"angle":180,"damage":[0.875,2.625],"rate":0.3,"type":2,"speed":[41.25,123.75],"number":5,"spread":0,"error":20,"recoil":140},{"x":0,"y":0,"z":0,"angle":0,"damage":[4.375,13.125],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.7820000000000003},"id":"sword_n_shield_Sword","info":{"stats":{"nominalStats":{"shieldcap":900,"shieldregen":2.25,"energycap":30,"energyregen":0.004999999999999005,"agility":37,"rotation":6.1875},"shieldcap":[225,1575],"shieldregen":[-4.5,9],"energycap":[7.5,52.5],"energyregen":[-0.00999999999999801,0.01999999999999602],"damage":[4.375,13.125],"bspeed":[15,180],"speed":[140,140],"agility":[-26,100],"rotation":[1.125,11.25],"mass":750}}},{"name":"Brrrt LMT Burst","level":6,"model":13,"size":0.44000000000000006,"scaleUp":1.1,"specs":{"shield":{"capacity":[250,450],"reload":[2,3]},"generator":{"capacity":[200,300],"reload":[80,65]},"ship":{"mass":140,"speed":[150,150],"rotation":[45,105],"acceleration":[60,30]}},"bodies":{},"typespec":{"name":"Brrrt LMT Burst","level":6,"model":13,"code":613,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[25,175],"reload":[-30,60]},"ship":{"mass":70,"speed":[140,140],"rotation":[10.125,101.25],"acceleration":[10,150]}},"shape":[2.3804000000000003,2.3980000000000006,1.6934500000000003,1.0230000000000001,0.8679000000000001,0.6347,0.48565,0.44165000000000004,0.3982,0.83655,0.902,0.8899000000000001,0.8541500000000001,0.8690000000000001,0.8800000000000001,0.8992500000000001,0.9537000000000001,1.06535,1.1467500000000002,1.3123000000000002,1.31285,1.1979,0.7678,1.2034000000000002,1.5873000000000002,1.5873000000000002,1.5873000000000002,1.2034000000000002,0.7678,1.1979,1.31285,1.3123000000000002,1.1467500000000002,1.06535,0.9537000000000001,0.8992500000000001,0.8800000000000001,0.8690000000000001,0.8541500000000001,0.8899000000000001,0.902,0.83655,0.24805000000000002,0.2321,0.23815000000000003,0.6347,0.8679000000000001,1.0230000000000001,1.6934500000000003,2.3980000000000006],"lasers":[{"x":0,"y":-2.3760000000000003,"z":0,"angle":0,"damage":[6.25,18.75],"rate":0.7,"type":1,"speed":[37.5,112.5],"number":6,"spread":0,"error":5,"recoil":50},{"x":0,"y":0,"z":0,"angle":0,"damage":[37.5,112.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.4388},"id":"brrrt_LMT_Burst","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":100,"energyregen":15,"agility":80,"rotation":55.6875},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[25,175],"energyregen":[-30,60],"damage":[37.5,112.5],"bspeed":[15,180],"speed":[140,140],"agility":[10,150],"rotation":[10.125,101.25],"mass":70}}},{"name":"Brrrt LMT Spinning","level":6,"model":14,"size":0.44000000000000006,"scaleUp":1.1,"specs":{"shield":{"capacity":[250,450],"reload":[2,3]},"generator":{"capacity":[50,300],"reload":[130,65]},"ship":{"mass":140,"speed":[150,150],"rotation":[15,105],"acceleration":[60,30]}},"bodies":{},"typespec":{"name":"Brrrt LMT Spinning","level":6,"model":14,"code":614,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[6.25,43.75],"reload":[-130,260]},"ship":{"mass":70,"speed":[140,140],"rotation":[3.375,33.75],"acceleration":[10,150]}},"shape":[2.3804000000000003,2.4046000000000003,1.9673500000000002,1.19405,0.8662500000000001,0.6886000000000001,0.48565,0.44165000000000004,0.3982,0.83655,0.902,0.8899000000000001,0.8541500000000001,0.8690000000000001,0.8800000000000001,0.8992500000000001,0.9537000000000001,1.06535,1.1467500000000002,1.3123000000000002,1.31285,1.1979,0.7678,1.2034000000000002,1.5873000000000002,1.5873000000000002,1.5873000000000002,1.2034000000000002,0.7678,1.1979,1.31285,1.3123000000000002,1.1467500000000002,1.06535,0.9537000000000001,0.8992500000000001,0.8800000000000001,0.8690000000000001,0.8541500000000001,0.8899000000000001,0.902,0.83655,0.24805000000000002,0.2321,0.23815000000000003,0.6886000000000001,0.8662500000000001,1.19405,1.9673500000000002,2.4046000000000003],"lasers":[{"x":0,"y":-2.3760000000000003,"z":0,"angle":0,"damage":[6.25,18.75],"rate":10,"type":1,"speed":[41.25,123.75],"number":1,"spread":0,"error":15,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[6.25,18.75],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.44276},"id":"brrrt_LMT_Spinning","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":25,"energyregen":65,"agility":80,"rotation":18.5625},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[6.25,43.75],"energyregen":[-130,260],"damage":[6.25,18.75],"bspeed":[41.25,123.75],"speed":[140,140],"agility":[10,150],"rotation":[3.375,33.75],"mass":70}}},{"name":"GA Linker","author":"Goldman","level":6,"model":15,"size":0.78,"scaleUp":1.3,"specs":{"shield":{"capacity":[200,100],"reload":[2,3]},"generator":{"capacity":[150,60],"reload":[15,15]},"ship":{"mass":100,"speed":[150,145],"rotation":[40,130],"acceleration":[70,120]}},"bodies":{},"typespec":{"name":"GA Linker","level":6,"model":15,"code":615,"specs":{"shield":{"capacity":[37.5,262.5],"reload":[-3,6]},"generator":{"capacity":[18.75,131.25],"reload":[-25,50]},"ship":{"mass":50,"speed":[140,140],"rotation":[9,90],"acceleration":[10,170]}},"shape":[1.95195,1.4664,1.06665,0.9347,0.8073,0.76765,0.6734,0.6084,0.56355,0.55705,0.8151,0.8866,0.9405500000000001,0.9457500000000001,0.9691500000000001,0.9711000000000001,0.9412,1.01985,1.11735,1.13815,1.0523500000000001,0.8008000000000001,0.98735,0.9841000000000001,0.9529,0.9379500000000001,0.9529,0.9841000000000001,0.98735,0.8008000000000001,1.0523500000000001,1.13815,1.11735,1.01985,0.9412,0.9711000000000001,0.9691500000000001,0.9457500000000001,0.9405500000000001,0.8866,0.8151,0.55705,0.56355,0.6084,0.6734,0.76765,0.8073,0.9347,1.06665,1.6230499999999999],"lasers":[{"x":-0.062400000000000004,"y":-1.9500000000000002,"z":-0.096,"angle":0,"damage":[10,30],"rate":3,"type":1,"speed":[36.25,108.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[10,30],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.99099},"id":"GA_Linker","info":{"stats":{"nominalStats":{"shieldcap":150,"shieldregen":1.5,"energycap":75,"energyregen":12.5,"agility":90,"rotation":49.5},"shieldcap":[37.5,262.5],"shieldregen":[-3,6],"energycap":[18.75,131.25],"energyregen":[-25,50],"damage":[10,30],"bspeed":[36.25,108.75],"speed":[140,140],"agility":[10,170],"rotation":[9,90],"mass":50}}},{"name":"Sidewinder LMT","level":6,"model":16,"size":0.7,"zoom":1,"scaleUp":1.4,"circularHitbox":1,"specs":{"shield":{"capacity":[300,300],"reload":[2,2]},"generator":{"capacity":[200,200],"reload":[55,55]},"ship":{"mass":110,"speed":[150,150],"rotation":[30,105],"acceleration":[50,30]}},"bodies":{},"typespec":{"name":"Sidewinder LMT","level":6,"model":16,"code":616,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-3,6]},"generator":{"capacity":[25,175],"reload":[-35,70]},"ship":{"mass":55,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,210]}},"shape":[1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997,1.5588999999999997],"lasers":[{"x":-0.35,"y":-1.148,"z":0,"angle":0,"damage":[37.5,112.5],"rate":1,"type":2,"speed":[43.75,131.25],"number":1,"spread":0,"error":0,"recoil":300},{"x":0,"y":0,"z":0,"angle":0,"damage":[37.5,112.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.73491},"id":"sidewinderLMT","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":1.5,"energycap":100,"energyregen":17.5,"agility":110,"rotation":37.125},"shieldcap":[56.25,393.75],"shieldregen":[-3,6],"energycap":[25,175],"energyregen":[-35,70],"damage":[37.5,112.5],"bspeed":[43.75,131.25],"speed":[140,140],"agility":[10,210],"rotation":[6.75,67.5],"mass":55}}},{"name":"Splitter","level":6,"model":17,"size":0.5,"lockBulletSpeed":true,"specs":{"shield":{"capacity":[300,100],"reload":[3,3]},"generator":{"capacity":[220,60],"reload":[80,100]},"ship":{"mass":130,"speed":[150,150],"rotation":[30,60],"acceleration":[50,100]}},"bodies":{},"typespec":{"name":"Splitter","level":6,"model":17,"code":617,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-4.5,9]},"generator":{"capacity":[27.5,192.5],"reload":[-80,160]},"ship":{"mass":65,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,390]}},"shape":[2,1.884,1.5365,1.1515,1.0015,0.801,0.6895,0.674,0.708,0.7015,0.6665,0.64,0.6245,0.625,0.631,0.734,0.7735,0.824,0.816,0.9095,1.07,1.2355,1.352,1.649,1.6285,1.603,1.6285,1.649,1.352,1.2355,1.07,0.9095,0.816,0.824,0.7735,0.734,0.631,0.625,0.6245,0.64,0.6665,0.7015,0.708,0.674,0.6895,0.801,1.0015,1.1515,1.5365,1.884],"lasers":[{"x":0,"y":-0.1,"z":0,"angle":90,"damage":[50,150],"rate":1,"type":2,"speed":[7.5,22.5],"number":1,"spread":0,"error":0,"recoil":500},{"x":0,"y":-0.1,"z":0,"angle":-90,"damage":[50,150],"rate":1,"type":2,"speed":[7.5,22.5],"number":1,"spread":0,"error":0,"recoil":500},{"x":0,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.32},"id":"splitter","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":2.25,"energycap":110,"energyregen":40,"agility":200,"rotation":37.125},"shieldcap":[56.25,393.75],"shieldregen":[-4.5,9],"energycap":[27.5,192.5],"energyregen":[-80,160],"damage":[50,150],"bspeed":[7.5,22.5],"speed":[140,140],"agility":[10,390],"rotation":[6.75,67.5],"mass":65}}},{"name":"D-Blast","level":6,"model":18,"size":0.75,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[40,100]}},"bodies":{},"typespec":{"name":"D-Blast","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-50,100]},"ship":{"mass":75,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,190]}},"shape":[1.0515,1.069,1.0805,1.907,1.6535,1.284,1.08,0.9805,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.901,0.9175,0.9115,0.8885,0.8905,0.9,0.8905,0.8885,0.9115,0.9175,0.901,0.922,0.937,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.914,0.9865,1.0445,1.0805,1.069],"lasers":[{"x":-1.049999999999762,"y":7.068653587816622e-7,"z":0,"angle":90,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":-1.049999868724767,"y":0.1950007068653146,"z":0,"angle":90,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0,"y":0,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.25862},"id":"d_blast0","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":60,"energyregen":25,"agility":100,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-50,100],"damage":[8.75,26.25],"bspeed":[42.5,127.5],"speed":[140,140],"agility":[10,190],"rotation":[6.75,67.5],"mass":75}}},{"name":"D-Blast","level":6,"model":19,"size":0.75,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[40,100]}},"bodies":{},"typespec":{"name":"D-Blast","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-50,100]},"ship":{"mass":75,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,190]}},"shape":[1.0515,1.069,1.0805,1.907,1.6535,1.284,1.08,0.9805,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.901,0.9175,0.9115,0.8885,0.8905,0.9,0.8905,0.8885,0.9115,0.9175,0.901,0.922,0.937,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.914,0.9865,1.0445,1.0805,1.069],"lasers":[{"x":0.0000014137307175630038,"y":1.0499999999990484,"z":0,"angle":180,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0.19500141373054083,"y":1.049999737449058,"z":0,"angle":180,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0,"y":0,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.25862},"id":"d_blast1","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":60,"energyregen":25,"agility":100,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-50,100],"damage":[8.75,26.25],"bspeed":[42.5,127.5],"speed":[140,140],"agility":[10,190],"rotation":[6.75,67.5],"mass":75}}},{"name":"D-Blast","level":6,"model":20,"size":0.75,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[40,100]}},"bodies":{},"typespec":{"name":"D-Blast","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-50,100]},"ship":{"mass":75,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,190]}},"shape":[1.0515,1.069,1.0805,1.907,1.6535,1.284,1.08,0.9805,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.901,0.9175,0.9115,0.8885,0.8905,0.9,0.8905,0.8885,0.9115,0.9175,0.901,0.922,0.937,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.914,0.9865,1.0445,1.0805,1.069],"lasers":[{"x":1.0499999999978586,"y":-0.0000021205960758774113,"z":0,"angle":270,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":1.0499996061728731,"y":-0.1950021205956782,"z":0,"angle":270,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0,"y":0,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.25862},"id":"d_blast2","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":60,"energyregen":25,"agility":100,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-50,100],"damage":[8.75,26.25],"bspeed":[42.5,127.5],"speed":[140,140],"agility":[10,190],"rotation":[6.75,67.5],"mass":75}}},{"name":"D-Blast","level":6,"model":21,"size":0.75,"specs":{"shield":{"capacity":[350,100],"reload":[2,2]},"generator":{"capacity":[120,60],"reload":[50,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[30,60],"acceleration":[40,100]}},"bodies":{},"typespec":{"name":"D-Blast","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-50,100]},"ship":{"mass":75,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,190]}},"shape":[1.0515,1.069,1.0805,1.907,1.6535,1.284,1.08,0.9805,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.901,0.9175,0.9115,0.8885,0.8905,0.9,0.8905,0.8885,0.9115,0.9175,0.901,0.922,0.937,0.9305,0.938,0.933,0.9335,0.956,0.957,0.9335,0.933,0.938,0.9305,0.937,0.922,0.914,0.9865,1.0445,1.0805,1.069],"lasers":[{"x":0,"y":-1.05,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0.195,"y":-1.05,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1.5,"type":1,"speed":[42.5,127.5],"number":1,"spread":0,"error":5,"recoil":70},{"x":0,"y":0,"z":0,"angle":0,"damage":[8.75,26.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.25862},"id":"d_blast","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":60,"energyregen":25,"agility":100,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-50,100],"damage":[8.75,26.25],"bspeed":[42.5,127.5],"speed":[140,140],"agility":[10,190],"rotation":[6.75,67.5],"mass":75}}},{"name":"LSV OnMyPosition","level":6,"model":22,"size":0.75,"scaleUp":1.5,"specs":{"shield":{"capacity":[450,100],"reload":[5,5]},"generator":{"capacity":[150,60],"reload":[80,100]},"ship":{"mass":170,"speed":[150,150],"rotation":[70,60],"acceleration":[70,100]}},"bodies":{},"typespec":{"name":"LSV OnMyPosition","level":6,"model":17,"code":617,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[31.25,218.75],"reload":[-50,100]},"ship":{"mass":85,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,330]}},"shape":[3.2264999999999997,2.06625,1.37625,1.2817500000000002,1.1272499999999999,1.0859999999999999,1.167,1.3267499999999999,1.41525,1.3935,1.3155000000000001,1.30125,1.338,1.37475,1.4084999999999999,1.467,1.554,1.6590000000000003,1.7497500000000001,1.75125,1.605,1.377,0.8362499999999999,0.8002499999999999,0.79275,0.7582499999999999,0.7702499999999999,0.7965,0.8362499999999999,1.377,1.605,1.75125,1.7497500000000001,1.6590000000000003,1.554,1.467,1.4084999999999999,1.37475,1.3387499999999999,1.30125,1.3155000000000001,1.3935,1.41525,1.3267499999999999,1.167,1.0859999999999999,1.1272499999999999,1.2817500000000002,1.37625,2.6235],"lasers":[{"x":0,"y":-48.75,"z":0,"angle":180,"damage":[30,90],"rate":0.5,"type":2,"speed":[47.5,142.5],"number":2,"spread":0,"error":10,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[60,180],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.41966},"zoom":0.5,"id":"LSV_OnMyPosition","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":125,"energyregen":25,"agility":170,"rotation":74.25},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[31.25,218.75],"energyregen":[-50,100],"damage":[60,180],"bspeed":[15,180],"speed":[140,140],"agility":[10,330],"rotation":[13.5,135],"mass":85}}},{"name":"LSV OnMyPosition","level":6,"model":23,"size":0.75,"scaleUp":1.5,"specs":{"shield":{"capacity":[450,100],"reload":[5,5]},"generator":{"capacity":[150,60],"reload":[80,100]},"ship":{"mass":170,"speed":[150,150],"rotation":[70,60],"acceleration":[70,100]}},"bodies":{},"typespec":{"name":"LSV OnMyPosition","level":6,"model":17,"code":617,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[5000,35000],"reload":[-0.000001,0.000002]},"ship":{"mass":85,"speed":[140,140],"rotation":[13.5,135],"acceleration":[20,10]}},"shape":[3.2264999999999997,2.06625,1.37625,1.2817500000000002,1.1272499999999999,1.0859999999999999,1.167,1.3267499999999999,1.41525,1.3935,1.3155000000000001,1.30125,1.338,1.37475,1.4084999999999999,1.467,1.554,1.6590000000000003,1.7497500000000001,1.75125,1.605,1.377,0.8362499999999999,0.8002499999999999,0.79275,0.7582499999999999,0.7702499999999999,0.7965,0.8362499999999999,1.377,1.605,1.75125,1.7497500000000001,1.6590000000000003,1.554,1.467,1.4084999999999999,1.37475,1.3387499999999999,1.30125,1.3155000000000001,1.3935,1.41525,1.3267499999999999,1.167,1.0859999999999999,1.1272499999999999,1.2817500000000002,1.37625,2.6235],"lasers":[{"x":5.175,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":3.6592775926403833,"y":-3.6592775926403833,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":3.1687735927937765e-16,"y":-5.175,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":-3.6592775926403833,"y":-3.6592775926403833,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":-5.175,"y":-6.337547185587553e-16,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":-3.659277592640384,"y":3.6592775926403833,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":-9.506320778381328e-16,"y":5.175,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":3.6592775926403824,"y":3.659277592640384,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":1,"spread":0,"error":360,"recoil":0},{"x":17.25,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":15.936921935819695,"y":-6.601289208297798,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":12.197591975467944,"y":-12.197591975467944,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":6.6012892082978,"y":-15.936921935819695,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":1.0562578642645922e-15,"y":-17.25,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-6.601289208297797,"y":-15.936921935819695,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-12.197591975467944,"y":-12.197591975467944,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-15.936921935819695,"y":-6.601289208297802,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-17.25,"y":-2.1125157285291845e-15,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-15.936921935819697,"y":6.601289208297797,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-12.197591975467947,"y":12.197591975467944,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-6.601289208297808,"y":15.936921935819694,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":-3.168773592793776e-15,"y":17.25,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":6.6012892082978025,"y":15.936921935819695,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":12.197591975467942,"y":12.197591975467947,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":15.936921935819694,"y":6.601289208297809,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[3.75,11.25],"number":2,"spread":0,"error":360,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.41966},"lockBulletSpeed":true,"lockShipAccel":true,"id":"LSV_OnMyPosition_barrage","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":20000,"energyregen":5e-7,"agility":15,"rotation":74.25},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[5000,35000],"energyregen":[-0.000001,0.000002],"damage":[50,150],"bspeed":[3.75,11.25],"speed":[140,140],"agility":[20,10],"rotation":[13.5,135],"mass":85}}},{"name":"Cupola-defender","level":6,"model":24,"size":1.7249999999999999,"teamMarkerSize":1.4,"scaleUp":1.5,"lockBulletSpeed":1,"specs":{"shield":{"capacity":[1600,100],"reload":[1,1]},"generator":{"capacity":[350,60],"reload":[50,100]},"ship":{"mass":300,"speed":[150,150],"rotation":[5,60],"acceleration":[5,100]}},"bodies":{},"typespec":{"name":"Cupola-defender","level":6,"model":24,"code":624,"specs":{"shield":{"capacity":[300,2100],"reload":[-1.5,3]},"generator":{"capacity":[43.75,306.25],"reload":[-280,560]},"ship":{"mass":600,"speed":[140,140],"rotation":[1.125,11.25],"acceleration":[-20,100]}},"shape":[3.0067500000000003,3.0547500000000003,3.1229999999999998,3.0907500000000003,3.10575,3.1425,3.0015,3.0112499999999995,2.97225,2.84325,2.6782500000000002,2.4915000000000003,2.43375,2.41575,1.4264999999999999,1.8427499999999999,1.9455,2.0895,2.319,2.9227499999999997,3.4245,3.966,4.3950000000000005,4.154249999999999,4.07925,3.3187499999999996,4.07925,4.154249999999999,4.3950000000000005,3.966,3.4245,2.9227499999999997,2.319,2.0895,1.9455,1.8427499999999999,1.4264999999999999,2.41575,2.43375,2.4915000000000003,2.6782500000000002,2.84325,2.97225,3.0112499999999995,3.0015,3.1425,3.10575,3.0907500000000003,3.1229999999999998,3.0547500000000003],"lasers":[{"x":0,"y":-3.0015,"z":0,"angle":0,"damage":[20,60],"rate":7,"type":2,"speed":[20,60],"number":1,"spread":0,"error":20,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[20,60],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.9338000000000002},"id":"cupolaDefender_main","info":{"stats":{"nominalStats":{"shieldcap":1200,"shieldregen":0.75,"energycap":175,"energyregen":140,"agility":40,"rotation":6.1875},"shieldcap":[300,2100],"shieldregen":[-1.5,3],"energycap":[43.75,306.25],"energyregen":[-280,560],"damage":[20,60],"bspeed":[20,60],"speed":[140,140],"agility":[-20,100],"rotation":[1.125,11.25],"mass":600}}},{"name":"Cupola-defender","level":6,"model":25,"size":1.7249999999999999,"scaleUp":1.5,"lockBulletSpeed":1,"lockShipAccel":1,"specs":{"shield":{"capacity":[1600,100],"reload":[1,1]},"generator":{"capacity":[350,60],"reload":[50,100]},"ship":{"mass":300,"speed":[150,150],"rotation":[5,60],"acceleration":[1,100]}},"bodies":{},"typespec":{"name":"Cupola-defender","level":6,"model":25,"code":625,"specs":{"shield":{"capacity":[300,2100],"reload":[-1.5,3]},"generator":{"capacity":[43.75,306.25],"reload":[-280,560]},"ship":{"mass":600,"speed":[140,140],"rotation":[5.625,56.25],"acceleration":[0.2,0.1]}},"shape":[3.3697500000000002,3.7455,3.8625000000000003,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.8625000000000003,3.7455,3.3697500000000002,3.7455,3.8625000000000003,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.7455,3.3697500000000002,3.3697500000000002,3.7455,3.9427499999999998,3.9427499999999998,3.8625000000000003,3.7455],"lasers":[{"x":0.9637499999999999,"y":2.3265,"z":1.61,"angle":-157.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":2.3265,"y":0.9637499999999999,"z":1.61,"angle":-112.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":2.3265,"y":-0.9637499999999999,"z":1.61,"angle":-67.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":0.9637499999999999,"y":-2.3265,"z":1.61,"angle":-22.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":-0.9637499999999999,"y":-2.3265,"z":1.61,"angle":22.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":-2.3265,"y":-0.9637499999999999,"z":1.61,"angle":67.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":-2.3265,"y":0.9637499999999999,"z":1.61,"angle":112.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":-0.9637499999999999,"y":2.3265,"z":1.61,"angle":157.5,"damage":[2,6],"rate":8,"type":1,"speed":[7.5,22.5],"number":1,"spread":0,"error":360,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[2,6],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.73481},"id":"cupolaDefender_heal","info":{"stats":{"nominalStats":{"shieldcap":1200,"shieldregen":0.75,"energycap":175,"energyregen":140,"agility":0.15000000000000002,"rotation":30.9375},"shieldcap":[300,2100],"shieldregen":[-1.5,3],"energycap":[43.75,306.25],"energyregen":[-280,560],"damage":[2,6],"bspeed":[7.5,22.5],"speed":[140,140],"agility":[0.2,0.1],"rotation":[5.625,56.25],"mass":600}}},{"name":"Hotswap Fighter","level":6,"model":26,"size":0.6,"specs":{"shield":{"capacity":[120,100],"reload":[1,1]},"generator":{"capacity":[100,60],"reload":[20,100]},"ship":{"mass":100,"speed":[150,150],"rotation":[60,60],"acceleration":[180,100]}},"bodies":{},"typespec":{"name":"Hotswap Fighter","level":6,"model":26,"code":626,"specs":{"shield":{"capacity":[22.5,157.5],"reload":[-1.5,3]},"generator":{"capacity":[12.5,87.5],"reload":[-20,40]},"ship":{"mass":50,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,390]}},"shape":[1.2265,1.241,1.445,1.4095,1.0295,0.8195,0.7215,0.63,0.5675,0.524,0.4945,0.474,0.4665,0.4795,0.4905,0.5105,0.541,0.587,0.644,0.693,0.7515,0.9445,1.0095,1.009,0.9775,0.864,0.9775,1.009,1.0095,0.9445,0.7515,0.693,0.644,0.587,0.541,0.5105,0.4905,0.4795,0.4695,0.474,0.4945,0.524,0.5675,0.63,0.7215,0.8195,1.0295,1.4095,1.445,1.241],"lasers":[{"x":0.408,"y":-1.38,"z":-0.12,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":-0.408,"y":-1.38,"z":-0.12,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[3.75,11.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.9537000000000001},"id":"hotswapFighter_main","info":{"stats":{"nominalStats":{"shieldcap":90,"shieldregen":0.75,"energycap":50,"energyregen":10,"agility":200,"rotation":74.25},"shieldcap":[22.5,157.5],"shieldregen":[-1.5,3],"energycap":[12.5,87.5],"energyregen":[-20,40],"damage":[3.75,11.25],"bspeed":[36.25,108.75],"speed":[140,140],"agility":[10,390],"rotation":[13.5,135],"mass":50}}},{"name":"Hotswap Fighter","level":6,"model":27,"size":0.6,"specs":{"shield":{"capacity":[120,100],"reload":[1,1]},"generator":{"capacity":[100,60],"reload":[20,100]},"ship":{"mass":100,"speed":[150,150],"rotation":[60,60],"acceleration":[180,100]}},"bodies":{},"typespec":{"name":"Hotswap Fighter","level":6,"model":26,"code":626,"specs":{"shield":{"capacity":[22.5,157.5],"reload":[-1.5,3]},"generator":{"capacity":[12.5,87.5],"reload":[-20,40]},"ship":{"mass":50,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,390]}},"shape":[1.2265,1.241,1.445,1.4095,1.0295,0.8195,0.7215,0.63,0.5675,0.524,0.4945,0.474,0.4665,0.4795,0.4905,0.5105,0.541,0.587,0.644,0.693,0.7515,0.9445,1.0095,1.009,0.9775,0.864,0.9775,1.009,1.0095,0.9445,0.7515,0.693,0.644,0.587,0.541,0.5105,0.4905,0.4795,0.4695,0.474,0.4945,0.524,0.5675,0.63,0.7215,0.8195,1.0295,1.4095,1.445,1.241],"lasers":[{"x":0.408,"y":-1.38,"z":-0.12,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":-0.408,"y":-1.38,"z":-0.12,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[3.75,11.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.9537000000000001},"id":"hotswapFighter_equipping","info":{"stats":{"nominalStats":{"shieldcap":90,"shieldregen":0.75,"energycap":50,"energyregen":10,"agility":200,"rotation":74.25},"shieldcap":[22.5,157.5],"shieldregen":[-1.5,3],"energycap":[12.5,87.5],"energyregen":[-20,40],"damage":[3.75,11.25],"bspeed":[36.25,108.75],"speed":[140,140],"agility":[10,390],"rotation":[13.5,135],"mass":50}}},{"name":"Hotswap Fighter","teamMarkerSize":1.4,"level":6,"model":28,"size":0.6,"specs":{"shield":{"capacity":[800,100],"reload":[2,2]},"generator":{"capacity":[150,60],"reload":[40,100]},"ship":{"mass":200,"speed":[150,150],"rotation":[50,60],"acceleration":[70,100]}},"bodies":{},"typespec":{"name":"Hotswap Fighter","level":6,"model":28,"code":628,"specs":{"shield":{"capacity":[187.5,1312.5],"reload":[-4.5,9]},"generator":{"capacity":[18.75,131.25],"reload":[-50,100]},"ship":{"mass":135,"speed":[140,140],"rotation":[5.625,56.25],"acceleration":[10,150]}},"shape":[3.126,3.138,2.7075,2.0915,1.786,1.5525,1.399,1.354,1.309,1.2405,1.1975,1.1755,1.174,1.1765,1.2045,1.256,1.27,1.324,1.465,1.662,1.683,1.9655,1.856,1.7655,1.042,1.0455,1.042,1.7655,1.856,1.9655,1.683,1.662,1.465,1.324,1.27,1.256,1.2045,1.1765,1.174,1.1755,1.1975,1.2405,1.309,1.354,1.399,1.5525,1.786,2.0915,2.7075,3.138],"lasers":[{"x":0,"y":-1.2,"z":-0.12,"angle":0,"damage":[37.5,112.5],"rate":1,"type":2,"speed":[38.75,116.25],"number":1,"spread":0,"error":2,"recoil":130},{"x":0.408,"y":-1.38,"z":0.672,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":-0.408,"y":-1.38,"z":0.672,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[37.5,112.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.07108},"id":"hotswapFighter_heavyPulse","info":{"stats":{"nominalStats":{"shieldcap":750,"shieldregen":2.25,"energycap":75,"energyregen":25,"agility":80,"rotation":30.9375},"shieldcap":[187.5,1312.5],"shieldregen":[-4.5,9],"energycap":[18.75,131.25],"energyregen":[-50,100],"damage":[37.5,112.5],"bspeed":[38.75,116.25],"speed":[140,140],"agility":[10,150],"rotation":[5.625,56.25],"mass":135}}},{"name":"Hotswap Fighter","teamMarkerSize":1.2,"level":6,"model":29,"size":0.6,"specs":{"shield":{"capacity":[600,100],"reload":[1,1]},"generator":{"capacity":[100,60],"reload":[30,100]},"ship":{"mass":150,"speed":[150,150],"rotation":[80,60],"acceleration":[100,100]}},"bodies":{},"typespec":{"name":"Hotswap Fighter","level":6,"model":37,"code":637,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-1.5,3]},"generator":{"capacity":[12.5,87.5],"reload":[-30,60]},"ship":{"mass":75,"speed":[140,140],"rotation":[18,180],"acceleration":[10,230]}},"shape":[2.702,2.5615,1.445,1.4095,1.0295,0.8195,0.7215,0.633,0.5755,0.5335,0.553,1.412,1.4285,1.4345,1.519,1.5825,1.6785,1.8895,2.0615,2.3165,2.2575,2.0605,1.923,1.009,0.9775,0.864,0.9775,1.009,1.923,2.0605,2.2575,2.3165,2.0615,1.8895,1.6785,1.5825,1.519,1.4345,1.4285,1.412,0.553,0.5335,0.5755,0.633,0.7215,0.8195,1.0295,1.4095,1.445,2.5615],"lasers":[{"x":0.408,"y":-1.38,"z":0.672,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":-0.408,"y":-1.38,"z":0.672,"angle":0,"damage":[3.75,11.25],"rate":2,"type":2,"speed":[36.25,108.75],"number":1,"spread":0,"error":5,"recoil":40},{"x":0,"y":-2.1,"z":-0.12,"angle":0,"damage":[20,60],"rate":2,"type":2,"speed":[41.25,123.75],"number":1,"spread":0,"error":2,"recoil":200},{"x":0,"y":0,"z":0,"angle":0,"damage":[20,60],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.78332},"id":"hotswapFighter_lightPulse","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":0.75,"energycap":50,"energyregen":15,"agility":120,"rotation":99},"shieldcap":[112.5,787.5],"shieldregen":[-1.5,3],"energycap":[12.5,87.5],"energyregen":[-30,60],"damage":[20,60],"bspeed":[41.25,123.75],"speed":[140,140],"agility":[10,230],"rotation":[18,180],"mass":75}}},{"name":"Hotswap Fighter","teamMarkerSize":1.2,"level":6,"model":30,"size":0.6,"specs":{"shield":{"capacity":[500,100],"reload":[2,1]},"generator":{"capacity":[250,60],"reload":[80,100]},"ship":{"mass":170,"speed":[150,150],"rotation":[60,60],"acceleration":[100,100]}},"bodies":{},"typespec":{"name":"Hotswap Fighter","level":6,"model":38,"code":638,"specs":{"shield":{"capacity":[131.25,918.75],"reload":[-3,6]},"generator":{"capacity":[31.25,218.75],"reload":[-80,160]},"ship":{"mass":85,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,230]}},"shape":[2.7285,2.711,2.34,1.4885,1.1165,0.974,0.8185,0.717,0.714,0.7325,0.7435,0.7265,0.7095,0.9345,1.0775,1.188,1.2615,1.3645,1.442,1.649,1.997,1.9895,2.1445,2.3885,2.3595,1.984,2.3595,2.3885,2.1445,1.9895,1.997,1.649,1.442,1.3645,1.2615,1.188,1.0775,0.9345,0.7095,0.7265,0.7435,0.7325,0.714,0.717,0.8185,0.974,1.1165,1.4885,2.34,2.711],"lasers":[{"x":0,"y":1.2,"z":0.24,"angle":90,"damage":[30,90],"rate":1,"type":2,"speed":[0.5,1.5],"number":2,"spread":180,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[60,180],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.80081},"id":"hotswapFighter_bomber","info":{"stats":{"nominalStats":{"shieldcap":525,"shieldregen":1.5,"energycap":125,"energyregen":40,"agility":120,"rotation":74.25},"shieldcap":[131.25,918.75],"shieldregen":[-3,6],"energycap":[31.25,218.75],"energyregen":[-80,160],"damage":[60,180],"bspeed":[15,180],"speed":[140,140],"agility":[10,230],"rotation":[13.5,135],"mass":85}}},{"name":"ur face","level":6,"teamMarkerSize":2,"model":31,"size":0.6,"zoom":0.8,"specs":{"shield":{"capacity":[700,100],"reload":[1,1]},"generator":{"capacity":[350,60],"reload":[50,100]},"ship":{"mass":250,"speed":[150,150],"rotation":[120,60],"acceleration":[50,100]}},"bodies":{},"typespec":{"name":"ur face","level":6,"model":38,"code":638,"specs":{"shield":{"capacity":[131.25,918.75],"reload":[-1.5,3]},"generator":{"capacity":[43.75,306.25],"reload":[-50,100]},"ship":{"mass":125,"speed":[140,140],"rotation":[27,270],"acceleration":[10,100]}},"shape":[0.7215,0.73,4.2475,3.92,3.9085,3.944,3.798,3.436,3.4615,4.3355,4.747,2.5035,2.4005,2.444,2.725,2.839,2.981,3.482,3.7525,4.0385,4.458,4.5995,4.375,2.019,2.0635,2.044,2.0635,2.019,1.641,3.8575,4.335,4.432,3.976,3.5695,3.2685,2.9265,2.813,2.7445,2.7465,2.7865,2.965,3.1655,3.425,3.7375,3.6805,3.2695,0.604,0.6665,0.7175,0.73],"lasers":[{"x":-1.75,"y":0,"z":0,"angle":0,"damage":[62.5,187.5],"rate":1,"type":2,"speed":[45,135],"number":1,"spread":0,"error":0,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[62.5,187.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":3.13302},"id":"hotswapFighter_sniper","info":{"stats":{"nominalStats":{"shieldcap":525,"shieldregen":0.75,"energycap":175,"energyregen":25,"agility":55,"rotation":148.5},"shieldcap":[131.25,918.75],"shieldregen":[-1.5,3],"energycap":[43.75,306.25],"energyregen":[-50,100],"damage":[62.5,187.5],"bspeed":[45,135],"speed":[140,140],"agility":[10,100],"rotation":[27,270],"mass":125}}},{"name":"ur face","teamMarkerSize":1.6,"level":6,"model":32,"size":0.6,"specs":{"shield":{"capacity":[1300,100],"reload":[3,3]},"generator":{"capacity":[450,60],"reload":[20,100]},"ship":{"mass":250,"speed":[150,150],"rotation":[50,60],"acceleration":[40,100]}},"bodies":{},"typespec":{"name":"ur face","level":6,"model":30,"code":630,"specs":{"shield":{"capacity":[168.75,1181.25],"reload":[-4.5,9]},"generator":{"capacity":[31.25,218.75],"reload":[-30,60]},"ship":{"mass":125,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,100]}},"shape":[2.8185,2.8555,2.8405,2.5705,2.2545,1.791,1.519,1.362,1.229,1.1365,1.069,0.9665,0.925,0.926,0.975,1.015,1.0595,1.136,1.26,1.4805,1.6635,1.9855,2.3705,2.5175,2.9025,2.8855,2.9025,2.5175,2.3705,1.9855,1.6635,1.4805,1.26,1.136,1.0595,1.015,0.975,0.926,0.925,0.9665,1.069,1.1365,1.229,1.362,1.519,1.791,2.2545,2.5705,2.8405,2.8555],"lasers":[{"x":0,"y":2.16,"z":-0.24,"angle":180,"damage":[2.5,7.5],"rate":0.8,"type":1,"speed":[35,105],"number":10,"spread":0,"error":15,"recoil":70},{"x":0,"y":0,"z":0,"angle":0,"damage":[25,75],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.91565},"id":"hotswapFighter_rammer","info":{"stats":{"nominalStats":{"shieldcap":675,"shieldregen":2.25,"energycap":125,"energyregen":15,"agility":55,"rotation":37.125},"shieldcap":[168.75,1181.25],"shieldregen":[-4.5,9],"energycap":[31.25,218.75],"energyregen":[-30,60],"damage":[25,75],"bspeed":[15,180],"speed":[140,140],"agility":[10,100],"rotation":[6.75,67.5],"mass":125}}},{"name":"Lobster","author":"Goldman","level":6,"model":33,"size":0.35,"zoom":1.35,"specs":{"shield":{"capacity":[175,225],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[65,80]},"ship":{"mass":175,"speed":[95,110],"rotation":[80,100],"acceleration":[75,100]}},"bodies":{},"typespec":{"name":"Lobster","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-1.5,3]},"generator":{"capacity":[25,175],"reload":[-65,130]},"ship":{"mass":67.5,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,140]}},"shape":[2.6435,3.1745,3.1265,2.6305,2.2735,2.031,1.836,1.632,1.5095,1.311,1.2125,1.3335,1.2855,1.197,1.139,1.058,0.9295,1.635,1.638,1.6095,1.0895,1.1015,1.353,2.332,2.3695,2.3695,2.3695,2.332,1.353,1.1015,1.0895,1.6095,1.638,1.635,0.9295,1.058,1.139,1.197,1.2855,1.3335,1.2125,1.311,1.5095,1.632,1.836,2.031,2.2735,2.6305,3.1265,3.1745],"lasers":[{"x":0.75,"y":-7.5,"z":0,"angle":10,"damage":[30,90],"rate":2,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.75,"y":-7.5,"z":0,"angle":-10,"damage":[30,90],"rate":2,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[30,90],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.09517},"lockBulletSpeed":1,"id":"GA_Lobster","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":0.75,"energycap":100,"energyregen":32.5,"agility":75,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-1.5,3],"energycap":[25,175],"energyregen":[-65,130],"damage":[30,90],"bspeed":[2.5,7.5],"speed":[140,140],"agility":[10,140],"rotation":[6.75,67.5],"mass":67.5}}},{"name":"Lobster","author":"Goldman","level":6,"model":34,"size":0.35,"zoom":1.35,"specs":{"shield":{"capacity":[175,225],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[65,80]},"ship":{"mass":175,"speed":[95,110],"rotation":[80,100],"acceleration":[75,100]}},"bodies":{},"typespec":{"name":"Lobster","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-1.5,3]},"generator":{"capacity":[25,175],"reload":[-65,130]},"ship":{"mass":67.5,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,140]}},"shape":[2.6435,3.1745,3.1265,2.6305,2.2735,2.031,1.836,1.632,1.5095,1.311,1.2125,1.3335,1.2855,1.197,1.139,1.058,0.9295,1.635,1.638,1.6095,1.0895,1.1015,1.353,2.332,2.3695,2.3695,2.3695,2.332,1.353,1.1015,1.0895,1.6095,1.638,1.635,0.9295,1.058,1.139,1.197,1.2855,1.3335,1.2125,1.311,1.5095,1.632,1.836,2.031,2.2735,2.6305,3.1265,3.1745],"lasers":[{"x":-0.5,"y":-0.75,"z":0,"angle":30,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":0.5,"y":-0.75,"z":0,"angle":-30,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":-0.5,"y":-0.5,"z":0,"angle":40,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":0.5,"y":-0.5,"z":0,"angle":-40,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":-0.5,"y":-0.25,"z":0,"angle":60,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":0.5,"y":-0.25,"z":0,"angle":-60,"damage":[1,3],"rate":5,"type":1,"speed":[2.5,7.5],"number":1,"spread":0,"error":0,"recoil":40},{"x":0,"y":0,"z":0,"angle":0,"damage":[1,3],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.09517},"lockBulletSpeed":1,"lasers":[],"id":"GA_Lobster_scoot","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":0.75,"energycap":100,"energyregen":32.5,"agility":75,"rotation":37.125},"shieldcap":[65.625,459.375],"shieldregen":[-1.5,3],"energycap":[25,175],"energyregen":[-65,130],"damage":[1,3],"bspeed":[2.5,7.5],"speed":[140,140],"agility":[10,140],"rotation":[6.75,67.5],"mass":67.5}}},{"name":"Turtle","level":6,"author":"Goldman","model":35,"teamMarkerSize":1.3,"size":0.9099999999999999,"scaleUp":1.3,"zoom":1.25,"specs":{"shield":{"capacity":[150,200],"reload":[5,7]},"generator":{"capacity":[125,175],"reload":[45,60]},"ship":{"mass":175,"speed":[90,105],"rotation":[75,95],"acceleration":[75,100]}},"bodies":{},"typespec":{"name":"G_303_G","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-6,12]},"generator":{"capacity":[21.25,148.75],"reload":[-45,90]},"ship":{"mass":220,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,240]}},"shape":[2.55905,2.483,2.2327500000000002,1.6978000000000002,1.5723500000000001,2.17555,2.52785,2.5597000000000003,1.4469,1.4534000000000002,1.4774500000000002,1.51515,1.5301,1.5704,1.57365,1.58145,1.5925000000000002,1.59315,1.62045,1.9682000000000002,2.22885,2.4154,2.41345,1.85835,2.0111,2.4128000000000003,2.0111,1.85835,2.41345,2.4154,2.22885,1.9682000000000002,1.62045,1.59315,1.5925000000000002,1.58145,1.57365,1.5704,1.5301,1.51515,1.4774500000000002,1.4534000000000002,1.4469,2.5597000000000003,2.52785,2.17555,1.5723500000000001,1.6978000000000002,2.2327500000000002,2.483],"lasers":[{"x":0.9776,"y":2.184,"z":-0.352,"angle":180,"damage":[3.75,11.25],"rate":4,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":70},{"x":-0.9776,"y":2.184,"z":-0.352,"angle":-180,"damage":[3.75,11.25],"rate":4,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":150},{"x":0,"y":0,"z":0,"angle":0,"damage":[3.75,11.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.2995400000000001},"id":"GA_Turtle","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":3,"energycap":85,"energyregen":22.5,"agility":125,"rotation":74.25},"shieldcap":[112.5,787.5],"shieldregen":[-6,12],"energycap":[21.25,148.75],"energyregen":[-45,90],"damage":[3.75,11.25],"bspeed":[47.5,142.5],"speed":[140,140],"agility":[10,240],"rotation":[13.5,135],"mass":220}}},{"name":"Turtle","level":6,"author":"Goldman","model":36,"teamMarkerSize":1.3,"size":0.9099999999999999,"scaleUp":1.3,"zoom":1.25,"specs":{"shield":{"capacity":[150,200],"reload":[5,7]},"generator":{"capacity":[125,175],"reload":[45,60]},"ship":{"mass":175,"speed":[90,105],"rotation":[75,95],"acceleration":[75,100]}},"bodies":{},"typespec":{"name":"G_303_G","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[487.5,3412.5],"reload":[-0.0015,0.003]},"generator":{"capacity":[21.25,148.75],"reload":[-45,90]},"ship":{"mass":220,"speed":[140,140],"rotation":[13.5,135],"acceleration":[10,240]}},"shape":[2.55905,2.483,2.2327500000000002,1.6978000000000002,1.5723500000000001,2.17555,2.52785,2.5597000000000003,1.4469,1.4534000000000002,1.4774500000000002,1.51515,1.5301,1.5704,1.57365,1.58145,1.5925000000000002,1.59315,1.62045,1.9682000000000002,2.22885,2.4154,2.41345,1.85835,2.0111,2.4128000000000003,2.0111,1.85835,2.41345,2.4154,2.22885,1.9682000000000002,1.62045,1.59315,1.5925000000000002,1.58145,1.57365,1.5704,1.5301,1.51515,1.4774500000000002,1.4534000000000002,1.4469,2.5597000000000003,2.52785,2.17555,1.5723500000000001,1.6978000000000002,2.2327500000000002,2.483],"lasers":[],"radius":1.2995400000000001},"id":"GA_Turtle_tucked","info":{"stats":{"nominalStats":{"shieldcap":1950,"shieldregen":0.00075,"energycap":85,"energyregen":22.5,"agility":125,"rotation":74.25},"shieldcap":[487.5,3412.5],"shieldregen":[-0.0015,0.003],"energycap":[21.25,148.75],"energyregen":[-45,90],"damage":[0,0],"bspeed":[0,0],"speed":[140,140],"agility":[10,240],"rotation":[13.5,135],"mass":220}}},{"name":"U-Monitor","level":6,"author":"Finalizer","teamMarkerSize":2.3,"scaleUp":0.75,"model":37,"size":1.0125000000000002,"specs":{"shield":{"capacity":[350,500],"reload":[2,2]},"generator":{"capacity":[250,700],"reload":[50,450]},"ship":{"mass":240,"speed":[150,150],"rotation":[30,30],"acceleration":[50,90]}},"bodies":{},"typespec":{"name":"U-Monitor","level":6,"model":41,"code":641,"specs":{"shield":{"capacity":[178.125,1246.875],"reload":[-3,6]},"generator":{"capacity":[31.25,218.75],"reload":[-50,100]},"ship":{"mass":360,"speed":[140,140],"rotation":[1.575,15.75],"acceleration":[-10,100]}},"shape":[2.6343750000000004,4.123125,4.141125,3.320625,2.665125,2.342625,2.050125,1.8105000000000002,1.764375,1.630125,1.5791250000000001,1.54875,1.5307499999999998,1.58175,1.598625,1.7313749999999999,1.759125,1.87725,1.88325,1.8555000000000001,2.22075,2.450625,2.7705,2.767875,1.73325,1.724625,3.710625,3.7458750000000003,3.1518749999999995,2.698125,2.2353750000000003,2.1262499999999998,1.851375,1.79925,1.4955,1.522875,1.500375,1.3661249999999998,1.23225,1.201875,1.201125,1.227375,1.2806250000000001,1.3545,1.462875,1.62975,1.6601249999999999,1.073625,1.16625,1.5273750000000001],"lasers":[{"x":0,"y":-2.6325,"z":-0.27,"angle":0,"damage":[35,105],"rate":0.5,"type":2,"speed":[52.5,157.5],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.405,"y":-0.6075,"z":1.89,"angle":0,"damage":[5,15],"rate":2,"type":2,"speed":[52.5,157.5],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.405,"y":-0.6075,"z":1.89,"angle":0,"damage":[5,15],"rate":2,"type":2,"speed":[52.5,157.5],"number":1,"spread":0,"error":0,"recoil":50},{"x":0,"y":0,"z":0,"angle":0,"damage":[35,105],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":3.64419},"zoom":0.6,"id":"UMonitor_main","info":{"stats":{"nominalStats":{"shieldcap":712.5,"shieldregen":1.5,"energycap":125,"energyregen":25,"agility":45,"rotation":8.6625},"shieldcap":[178.125,1246.875],"shieldregen":[-3,6],"energycap":[31.25,218.75],"energyregen":[-50,100],"damage":[35,105],"bspeed":[52.5,157.5],"speed":[140,140],"agility":[-10,100],"rotation":[1.575,15.75],"mass":360}}},{"name":"U-Monitor","level":6,"author":"Finalizer","teamMarkerSize":2.3,"scaleUp":0.75,"model":38,"size":1.0125000000000002,"specs":{"shield":{"capacity":[350,500],"reload":[2,2]},"generator":{"capacity":[250,700],"reload":[50,450]},"ship":{"mass":240,"speed":[150,150],"rotation":[30,30],"acceleration":[50,90]}},"bodies":{},"typespec":{"name":"U-Monitor","level":6,"model":41,"code":641,"specs":{"shield":{"capacity":[178.125,1246.875],"reload":[-3,6]},"generator":{"capacity":[31.25,218.75],"reload":[-250,500]},"ship":{"mass":360,"speed":[140,140],"rotation":[1.575,15.75],"acceleration":[-10,100]}},"shape":[2.6343750000000004,4.123125,4.141125,3.320625,2.665125,2.342625,2.050125,1.8105000000000002,1.764375,1.630125,1.5791250000000001,1.54875,1.5307499999999998,1.58175,1.598625,1.7313749999999999,1.759125,1.87725,1.88325,1.8555000000000001,2.22075,2.450625,2.7705,2.767875,1.73325,1.724625,3.710625,3.7458750000000003,3.1518749999999995,2.698125,2.2353750000000003,2.1262499999999998,1.851375,1.79925,1.4955,1.522875,1.500375,1.3661249999999998,1.23225,1.201875,1.201125,1.227375,1.2806250000000001,1.3545,1.462875,1.62975,1.6601249999999999,1.073625,1.16625,1.5273750000000001],"lasers":[{"x":1.296,"y":-2.2275,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.3365,"y":-1.8225000000000002,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.377,"y":-1.4175,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.427625,"y":-1.0125000000000002,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.4681250000000001,"y":-0.6075,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.5187499999999998,"y":-0.2025,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.569375,"y":0.2025,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.6098750000000002,"y":0.6075,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.5896249999999998,"y":0.6075,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.5187499999999998,"y":1.0125000000000002,"z":-0.27,"angle":-90,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[32.5,97.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":3.64419},"id":"UMonitor_broadside","info":{"stats":{"nominalStats":{"shieldcap":712.5,"shieldregen":1.5,"energycap":125,"energyregen":125,"agility":45,"rotation":8.6625},"shieldcap":[178.125,1246.875],"shieldregen":[-3,6],"energycap":[31.25,218.75],"energyregen":[-250,500],"damage":[17.5,52.5],"bspeed":[32.5,97.5],"speed":[140,140],"agility":[-10,100],"rotation":[1.575,15.75],"mass":360}}},{"name":"Avanache","level":6,"author":"Goldman","model":39,"size":2.625,"scaleUp":5,"teamMarkerSize":0.3,"teamMarkerDepth":0.3,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{},"typespec":{"name":"Avanache","level":6,"model":43,"code":643,"specs":{"shield":{"capacity":[131.25,918.75],"reload":[-1.5,3]},"generator":{"capacity":[18.75,131.25],"reload":[-50,100]},"ship":{"mass":170,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,190]}},"shape":[2.9925,2.4425,2.1174999999999997,2.0175,1.2475,0.8975,0.7575,0.66,0.595,0.6775,0.8450000000000001,0.8799999999999999,0.9175,0.9199999999999999,0.9375,0.9725,1.32,1.915,2.105,2.4425,2.4175,2.3825,2.49,2.4575,2.585,2.5774999999999997,2.585,2.4575,2.49,2.3825,2.4175,2.4425,2.105,1.915,1.32,0.9725,0.9375,0.9199999999999999,0.9175,0.8799999999999999,0.8450000000000001,0.6775,0.595,0.66,0.7575,0.8975,1.2475,2.0175,2.1174999999999997,2.4425],"lasers":[{"x":0,"y":-5,"z":0,"angle":0,"damage":[20,60],"rate":1.2,"type":2,"speed":[37.5,112.5],"number":1,"spread":0,"error":0,"recoil":80},{"x":0,"y":0,"z":0,"angle":0,"damage":[20,60],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.39501000000000003},"zoom":0.7,"id":"avalanche_pulse","info":{"stats":{"nominalStats":{"shieldcap":525,"shieldregen":0.75,"energycap":75,"energyregen":25,"agility":100,"rotation":37.125},"shieldcap":[131.25,918.75],"shieldregen":[-1.5,3],"energycap":[18.75,131.25],"energyregen":[-50,100],"damage":[20,60],"bspeed":[37.5,112.5],"speed":[140,140],"agility":[10,190],"rotation":[6.75,67.5],"mass":170}}},{"name":"Avanache","level":6,"author":"Goldman","model":40,"size":2.625,"scaleUp":5,"teamMarkerSize":0.3,"teamMarkerDepth":0.3,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{},"typespec":{"name":"Avanache","level":6,"model":43,"code":643,"specs":{"shield":{"capacity":[131.25,918.75],"reload":[-1.5,3]},"generator":{"capacity":[5000,35000],"reload":[-0.000001,0.000002]},"ship":{"mass":170,"speed":[140,140],"rotation":[2.25e-7,0.00000225],"acceleration":[0.000002,0.000001]}},"shape":[2.9925,2.4425,2.1174999999999997,2.0175,1.2475,0.8975,0.7575,0.66,0.595,0.6775,0.8450000000000001,0.8799999999999999,0.9175,0.9199999999999999,0.9375,0.9725,1.32,1.915,2.105,2.4425,2.4175,2.3825,2.49,2.4575,2.585,2.5774999999999997,2.585,2.4575,2.49,2.3825,2.4175,2.4425,2.105,1.915,1.32,0.9725,0.9375,0.9199999999999999,0.9175,0.8799999999999999,0.8450000000000001,0.6775,0.595,0.66,0.7575,0.8975,1.2475,2.0175,2.1174999999999997,2.4425],"lasers":[{"x":0,"y":0,"z":0,"angle":180,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":0,"y":0,"z":0,"angle":180,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":3.125,"y":0,"z":0,"angle":175,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":-3.125,"y":0,"z":0,"angle":185,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":6.25,"y":0,"z":0,"angle":170,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":-6.25,"y":0,"z":0,"angle":190,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":9.375,"y":0,"z":0,"angle":165,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":-9.375,"y":0,"z":0,"angle":195,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":12.5,"y":0,"z":0,"angle":160,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":-12.5,"y":0,"z":0,"angle":200,"damage":[35,105],"rate":4,"type":2,"speed":[-11.25,-33.75],"number":1,"spread":0,"error":0,"recoil":5},{"x":0,"y":0,"z":0,"angle":0,"damage":[35,105],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.39501000000000003},"zoom":0.5,"lockBulletSpeed":true,"lockShipAccel":true,"id":"avalanche_barrage","info":{"stats":{"nominalStats":{"shieldcap":525,"shieldregen":0.75,"energycap":20000,"energyregen":5e-7,"agility":0.0000015,"rotation":0.0000012375},"shieldcap":[131.25,918.75],"shieldregen":[-1.5,3],"energycap":[5000,35000],"energyregen":[-0.000001,0.000002],"damage":[35,105],"bspeed":[-11.25,-33.75],"speed":[140,140],"agility":[0.000002,0.000001],"rotation":[2.25e-7,0.00000225],"mass":170}}},{"name":"5STARS","level":6,"author":"★★★★★","model":41,"size":0.63,"teamMarkerSize":1.5,"scaleUp":0.63,"specs":{"shield":{"capacity":[350,400],"reload":[2,2]},"generator":{"capacity":[120,175],"reload":[40,50]},"ship":{"mass":180,"speed":[150,150],"rotation":[40,70],"acceleration":[90,100]}},"bodies":{},"wings":{"main":{"length":[60],"width":[60,35],"angle":[-10],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[10.13],"offset":{"x":0,"y":80,"z":4}},"main2":{"length":[30],"width":[60,30],"angle":[0],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":0,"y":10,"z":0}},"winglets":{"length":[20],"width":[80,50],"angle":[-10],"position":[0,30],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":20,"y":-80,"z":0}},"wings1":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings2":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings3":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings4":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}}},"typespec":{"name":"5STARS","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[36.25,253.75],"reload":[-40,80]},"ship":{"mass":140,"speed":[140,140],"rotation":[9,90],"acceleration":[10,270]}},"shape":[1.7674649999999998,1.777545,1.638315,1.25685,1.1088,0.93303,0.77994,0.683865,0.6158250000000001,0.441315,0.421155,1.0952549999999999,1.09494,1.0955700000000002,1.1220299999999999,1.16802,1.23858,1.37088,1.55547,1.77786,1.8522,1.81314,2.0109600000000003,1.5586200000000001,1.53909,1.5148350000000002,1.53909,1.5586200000000001,2.0109600000000003,1.81314,1.8522,1.77786,1.55547,1.37088,1.23858,1.16802,1.1220299999999999,1.0955700000000002,1.09494,1.0952549999999999,0.421155,0.441315,0.6158250000000001,0.683865,0.77994,0.93303,1.1088,1.25685,1.638315,1.777545],"lasers":[{"x":1.0332,"y":-0.252,"z":-0.16,"angle":0,"damage":[12.5,37.5],"rate":1.2,"type":1,"speed":[46.25,138.75],"number":1,"spread":0,"error":5,"recoil":50},{"x":-1.0332,"y":-0.252,"z":-0.16,"angle":0,"damage":[12.5,37.5],"rate":1.2,"type":1,"speed":[46.25,138.75],"number":1,"spread":0,"error":5,"recoil":50},{"x":0,"y":0,"z":0,"angle":0,"damage":[12.5,37.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.10672},"zoom":1,"id":"fivestars_pulse","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":145,"energyregen":20,"agility":140,"rotation":49.5},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[36.25,253.75],"energyregen":[-40,80],"damage":[12.5,37.5],"bspeed":[46.25,138.75],"speed":[140,140],"agility":[10,270],"rotation":[9,90],"mass":140}}},{"name":"5STARS","level":6,"author":"★★★★★","model":42,"size":0.63,"teamMarkerSize":1.5,"scaleUp":0.63,"specs":{"shield":{"capacity":[350,400],"reload":[2,2]},"generator":{"capacity":[120,175],"reload":[40,50]},"ship":{"mass":180,"speed":[150,150],"rotation":[40,70],"acceleration":[90,100]}},"bodies":{},"wings":{"main":{"length":[60],"width":[60,35],"angle":[-10],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[10.13],"offset":{"x":0,"y":80,"z":4}},"main2":{"length":[30],"width":[60,30],"angle":[0],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":0,"y":10,"z":0}},"winglets":{"length":[20],"width":[80,50],"angle":[-10],"position":[0,30],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":20,"y":-80,"z":0}},"wings1":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings2":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings3":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings4":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}}},"typespec":{"name":"5STARS","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[5000,35000],"reload":[-0.000001,0.000002]},"ship":{"mass":140,"speed":[140,140],"rotation":[2.25e-7,0.00000225],"acceleration":[0.000002,0.000001]}},"shape":[1.7674649999999998,1.777545,1.638315,1.25685,1.1088,0.93303,0.77994,0.683865,0.6158250000000001,0.441315,0.421155,1.0952549999999999,1.09494,1.0955700000000002,1.1220299999999999,1.16802,1.23858,1.37088,1.55547,1.77786,1.8522,1.81314,2.0109600000000003,1.5586200000000001,1.53909,1.5148350000000002,1.53909,1.5586200000000001,2.0109600000000003,1.81314,1.8522,1.77786,1.55547,1.37088,1.23858,1.16802,1.1220299999999999,1.0955700000000002,1.09494,1.0952549999999999,0.421155,0.441315,0.6158250000000001,0.683865,0.77994,0.93303,1.1088,1.25685,1.638315,1.777545],"lasers":[{"x":0,"y":-14.175,"z":0,"angle":185,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":-14.175,"z":0,"angle":175,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":13.4812261184838,"y":-4.3803158952648795,"z":0,"angle":113,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":13.4812261184838,"y":-4.3803158952648795,"z":0,"angle":103,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":-72,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":8.331855951245808,"y":11.467815895264877,"z":0,"angle":41,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":8.331855951245808,"y":11.467815895264877,"z":0,"angle":31,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":-144,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":-8.331855951245805,"y":11.46781589526488,"z":0,"angle":-31,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":-8.331855951245805,"y":11.46781589526488,"z":0,"angle":-41,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":-216,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":-13.481226118483804,"y":-4.380315895264877,"z":0,"angle":-103,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":-13.481226118483804,"y":-4.380315895264877,"z":0,"angle":-113,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":-288,"damage":[50,150],"rate":1,"type":2,"speed":[5,15],"number":2,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[100,300],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.10672},"zoom":0.7,"lockBulletSpeed":true,"lockShipAccel":true,"id":"fivestars_barrage","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":20000,"energyregen":5e-7,"agility":0.0000015,"rotation":0.0000012375},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[5000,35000],"energyregen":[-0.000001,0.000002],"damage":[100,300],"bspeed":[15,180],"speed":[140,140],"agility":[0.000002,0.000001],"rotation":[2.25e-7,0.00000225],"mass":140}}},{"name":"Stealth Vehicle Type 1","author":"Goldman","level":6,"circularHitbox":1,"scaleUp":1.7,"teamMarkerSize":0.8,"model":43,"size":0.8925,"specs":{"shield":{"capacity":[240,100],"reload":[2,2]},"generator":{"capacity":[150,60],"reload":[40,15]},"ship":{"mass":120,"speed":[150,145],"rotation":[40,130],"acceleration":[120,120]}},"bodies":{},"typespec":{"name":"Stealth Vehicle Type 1","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[45,315],"reload":[-3,6]},"generator":{"capacity":[18.75,131.25],"reload":[-40,80]},"ship":{"mass":60,"speed":[140,140],"rotation":[9,90],"acceleration":[10,270]}},"shape":[1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965],"lasers":[{"x":-0.357,"y":-0.9282,"z":0.011,"angle":0,"damage":[20,60],"rate":1,"type":2,"speed":[43.75,131.25],"number":1,"spread":0,"error":0,"recoil":70},{"x":0.1785,"y":-0.55335,"z":0.252,"angle":0,"damage":[2.5,7.5],"rate":2,"type":2,"speed":[38.75,116.25],"number":1,"spread":0,"error":2,"recoil":0},{"x":-0.1785,"y":-0.55335,"z":0.252,"angle":0,"damage":[2.5,7.5],"rate":2,"type":2,"speed":[38.75,116.25],"number":1,"spread":0,"error":2,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[20,60],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.6365700000000001},"id":"stealth1_main","info":{"stats":{"nominalStats":{"shieldcap":180,"shieldregen":1.5,"energycap":75,"energyregen":20,"agility":140,"rotation":49.5},"shieldcap":[45,315],"shieldregen":[-3,6],"energycap":[18.75,131.25],"energyregen":[-40,80],"damage":[20,60],"bspeed":[43.75,131.25],"speed":[140,140],"agility":[10,270],"rotation":[9,90],"mass":60}}},{"name":"Stealth Vehicle Type 1","author":"Goldman","level":6,"circularHitbox":1,"scaleUp":1.7,"teamMarkerSize":0.001,"model":44,"size":0.8925,"specs":{"shield":{"capacity":[240,100],"reload":[2,2]},"generator":{"capacity":[150,60],"reload":[40,15]},"ship":{"mass":120,"speed":[150,145],"rotation":[40,130],"acceleration":[120,120]}},"bodies":{},"typespec":{"name":"Stealth Vehicle Type 1","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[45,315],"reload":[-3,6]},"generator":{"capacity":[18.75,131.25],"reload":[-40,80]},"ship":{"mass":60,"speed":[140,140],"rotation":[9,90],"acceleration":[10,100]}},"shape":[1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965,1.63965],"lasers":[],"radius":0.6365700000000001},"id":"stealth1_cloaked","info":{"stats":{"nominalStats":{"shieldcap":180,"shieldregen":1.5,"energycap":75,"energyregen":20,"agility":55,"rotation":49.5},"shieldcap":[45,315],"shieldregen":[-3,6],"energycap":[18.75,131.25],"energyregen":[-40,80],"damage":[0,0],"bspeed":[0,0],"speed":[140,140],"agility":[10,100],"rotation":[9,90],"mass":60}}},{"name":"Harbinger","level":6,"model":45,"size":0.5,"author":"MALEFOR","specs":{"shield":{"capacity":[330,300],"reload":[2,3]},"generator":{"capacity":[120,200],"reload":[30,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[70,80],"acceleration":[120,120]}},"tori":{"engine_ring1":{"segments":16,"radius":35,"section_segments":12,"offset":{"x":0,"y":80,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[18]},"engine_ring2":{"segments":16,"radius":25,"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[8]}},"bodies":{},"wings":{"side_plates_inner":{"doubleside":true,"offset":{"x":70,"y":10,"z":10},"length":[20,20,20,20],"width":[70,80,80,70,60],"angle":[-75,-100,-155,-190],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"side_plates_outer":{"doubleside":true,"offset":{"x":110,"y":10,"z":-15},"length":[10,15,15,10],"width":[50,75,90,75,50],"angle":[-65,-95,-125,-155],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_main":{"doubleside":true,"offset":{"x":12,"y":0,"z":50},"length":[20,20,25],"width":[65,75,75,65],"angle":[-30,-50,-70],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_narrow":{"doubleside":true,"offset":{"x":15,"y":-20,"z":40},"length":[10,10,15],"width":[85,145,145,105],"angle":[-30,-50,-70],"position":[20,0,0,10],"texture":[4],"bump":{"position":10,"size":5}},"top_joins1":{"doubleside":true,"offset":{"x":0,"y":20,"z":0},"length":[90],"width":[8,2],"angle":[45],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"top_joins2":{"doubleside":true,"offset":{"x":0,"y":-20,"z":0},"length":[70],"width":[8,2],"angle":[45],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_front":{"doubleside":true,"offset":{"x":0,"y":-15,"z":0},"length":[125],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_mid":{"doubleside":true,"offset":{"x":0,"y":10,"z":0},"length":[140],"width":[30,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_back":{"doubleside":true,"offset":{"x":0,"y":35,"z":0},"length":[125],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"engine_decor_main":{"doubleside":true,"offset":{"x":29,"y":120,"z":12},"length":[10,10,10],"width":[50,50,50,50],"angle":[-65,-90,-115],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_upper":{"doubleside":true,"offset":{"x":12,"y":120,"z":30},"length":[4,6,4],"width":[50,50,50,50],"angle":[-15,-40,-65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_lower":{"doubleside":true,"offset":{"x":12,"y":120,"z":-30},"length":[4,6,4],"width":[50,50,50,50],"angle":[15,40,65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"front_decor1":{"doubleside":true,"offset":{"x":8,"y":-180,"z":8},"length":[6,6],"width":[90,90,90],"angle":[-55,-90],"position":[0,60,0],"texture":[4],"bump":{"position":10,"size":2}}},"typespec":{"name":"Harbinger","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[61.875,433.125],"reload":[-3,6]},"generator":{"capacity":[15,105],"reload":[-35,70]},"ship":{"mass":85,"speed":[140,140],"rotation":[15.75,157.5],"acceleration":[10,270]}},"shape":[2.253,1.927,1.456,0.9725,1.166,1.1285,0.987,1.18,1.174,1.107,1.182,1.1875,1.184,1.3215,1.202,1.233,1.256,1.2545,1.333,1.3795,1.2095,1.1845,1.0745,1.4875,1.467,1.2025,1.467,1.4875,1.0745,1.1845,1.2095,1.3795,1.333,1.2545,1.256,1.233,1.202,1.3215,1.184,1.1875,1.182,1.107,1.174,1.18,0.987,1.1285,1.166,0.9725,1.456,1.927],"lasers":[{"x":0,"y":-1.8,"z":0,"angle":0,"damage":[12.5,37.5],"rate":1.2,"type":1,"speed":[38.75,116.25],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.6,"y":-1,"z":-0.4,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[36.25,108.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.6,"y":-1,"z":-0.4,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[36.25,108.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.95,"y":-0.7,"z":-0.7,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[36.25,108.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.95,"y":-0.7,"z":-0.7,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[36.25,108.75],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[12.5,37.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.4869800000000002},"id":"harbinger_deployed","info":{"stats":{"nominalStats":{"shieldcap":247.5,"shieldregen":1.5,"energycap":60,"energyregen":17.5,"agility":140,"rotation":86.625},"shieldcap":[61.875,433.125],"shieldregen":[-3,6],"energycap":[15,105],"energyregen":[-35,70],"damage":[12.5,37.5],"bspeed":[38.75,116.25],"speed":[140,140],"agility":[10,270],"rotation":[15.75,157.5],"mass":85}}},{"name":"Harbinger","level":6,"model":46,"size":0.5,"author":"MALEFOR","specs":{"shield":{"capacity":[330,300],"reload":[4,4]},"generator":{"capacity":[290,200],"reload":[80,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[20,80],"acceleration":[30,120]}},"tori":{"engine_ring1":{"segments":16,"radius":35,"section_segments":12,"offset":{"x":0,"y":80,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[18]},"engine_ring2":{"segments":16,"radius":25,"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[8]}},"bodies":{},"wings":{"side_plates_inner":{"doubleside":true,"offset":{"x":50,"y":10,"z":15},"length":[20,20,20,20],"width":[70,80,80,70,60],"angle":[-75,-100,-155,-190],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"side_plates_outer":{"doubleside":true,"offset":{"x":80,"y":10,"z":-5},"length":[10,15,15,10],"width":[50,75,90,75,50],"angle":[-65,-95,-125,-155],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_main":{"doubleside":true,"offset":{"x":0,"y":0,"z":50},"length":[20,20,25],"width":[65,75,75,65],"angle":[-30,-50,-70],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_narrow":{"doubleside":true,"offset":{"x":3,"y":-20,"z":40},"length":[10,10,15],"width":[85,145,145,105],"angle":[-30,-50,-70],"position":[20,0,0,10],"texture":[4],"bump":{"position":10,"size":5}},"top_joins1":{"doubleside":true,"offset":{"x":0,"y":20,"z":0},"length":[90],"width":[8,2],"angle":[60],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"top_joins2":{"doubleside":true,"offset":{"x":0,"y":-20,"z":0},"length":[70],"width":[8,2],"angle":[60],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_front":{"doubleside":true,"offset":{"x":0,"y":-15,"z":0},"length":[105],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_mid":{"doubleside":true,"offset":{"x":0,"y":10,"z":0},"length":[120],"width":[30,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_back":{"doubleside":true,"offset":{"x":0,"y":35,"z":0},"length":[105],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"engine_decor_main":{"doubleside":true,"offset":{"x":29,"y":120,"z":12},"length":[10,10,10],"width":[50,50,50,50],"angle":[-65,-90,-115],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_upper":{"doubleside":true,"offset":{"x":12,"y":120,"z":30},"length":[4,6,4],"width":[50,50,50,50],"angle":[-15,-40,-65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_lower":{"doubleside":true,"offset":{"x":12,"y":120,"z":-30},"length":[4,6,4],"width":[50,50,50,50],"angle":[15,40,65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"front_decor":{"doubleside":true,"offset":{"x":8,"y":-180,"z":8},"length":[6,6],"width":[90,90,90],"angle":[-55,-90],"position":[0,60,0],"texture":[49],"bump":{"position":10,"size":2}}},"typespec":{"name":"Harbinger","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[61.875,433.125],"reload":[-6,12]},"generator":{"capacity":[36.25,253.75],"reload":[-90,180]},"ship":{"mass":85,"speed":[140,140],"rotation":[4.5,45],"acceleration":[10,100]}},"shape":[2.253,1.927,1.456,1.077,0.973,0.849,0.99,0.9655,0.892,0.9,0.8955,1.002,0.865,1.1345,1.057,1.0555,1.02,0.995,1.054,1.1435,1.2205,1.109,1.105,1.4875,1.932,1.9035,1.932,1.4875,1.105,1.109,1.2205,1.1435,1.054,0.995,1.02,1.0555,1.057,1.1345,0.865,1.002,0.8955,0.9,0.892,0.9655,0.99,0.849,0.973,1.077,1.456,1.927],"lasers":[{"x":0,"y":-1.8,"z":0,"angle":0,"damage":[12.5,37.5],"rate":2,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.4,"y":-1,"z":-0.3,"angle":0,"damage":[5,15],"rate":2,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.4,"y":-1,"z":-0.3,"angle":0,"damage":[5,15],"rate":2,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.7,"y":-0.7,"z":-0.5,"angle":0,"damage":[5,15],"rate":2,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.7,"y":-0.7,"z":-0.5,"angle":0,"damage":[5,15],"rate":2,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[12.5,37.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.4869800000000002},"id":"harbinger_retracted","info":{"stats":{"nominalStats":{"shieldcap":247.5,"shieldregen":3,"energycap":145,"energyregen":45,"agility":55,"rotation":24.75},"shieldcap":[61.875,433.125],"shieldregen":[-6,12],"energycap":[36.25,253.75],"energyregen":[-90,180],"damage":[12.5,37.5],"bspeed":[47.5,142.5],"speed":[140,140],"agility":[10,100],"rotation":[4.5,45],"mass":85}}},{"name":"Wyvern MK II","author":"Malefor","level":6,"scaleUp":1.2,"teamMarkerSize":1.6,"model":47,"size":0.6,"specs":{"shield":{"capacity":[450,180],"reload":[3,3]},"generator":{"capacity":[350,350],"reload":[35,35]},"ship":{"mass":480,"speed":[150,135],"rotation":[80,120],"acceleration":[90,90]}},"bodies":{},"typespec":{"name":"Wyvern MK II","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-4.5,9]},"generator":{"capacity":[87.5,612.5],"reload":[-120,240]},"ship":{"mass":240,"speed":[140,140],"rotation":[4.5,45],"acceleration":[120,90]}},"shape":[2.76,2.2254,1.8672,1.6716,1.5282,1.2167999999999999,1.026,0.9984,0.9899999999999999,0.9822,0.9971999999999999,0.9905999999999999,1.4597999999999998,1.5534,2.1822,2.8968000000000003,2.985,3.0912,2.6124,3.0978,2.3952,2.6832000000000003,3.3569999999999998,3.8417999999999997,3.2622,2.2241999999999997,3.2622,3.8417999999999997,3.3569999999999998,2.6832000000000003,2.3952,3.0978,2.6124,3.0912,2.985,2.8968000000000003,2.1822,1.5534,1.4597999999999998,0.9905999999999999,0.9971999999999999,0.9822,0.9899999999999999,0.9984,1.026,1.2167999999999999,1.5282,1.6716,1.8672,2.2254],"lasers":[{"x":0,"y":-0.6,"z":0,"angle":0,"damage":[25,75],"rate":0.5,"type":2,"speed":[40,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[25,75],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.11299},"zoom":0.7,"lockShipAccel":1,"id":"wyvernMk2_pulse","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":2.25,"energycap":350,"energyregen":60,"agility":105,"rotation":24.75},"shieldcap":[112.5,787.5],"shieldregen":[-4.5,9],"energycap":[87.5,612.5],"energyregen":[-120,240],"damage":[25,75],"bspeed":[40,120],"speed":[140,140],"agility":[120,90],"rotation":[4.5,45],"mass":240}}},{"name":"Wyvern MK II","author":"Malefor","level":6,"scaleUp":1.2,"teamMarkerSize":1.6,"model":48,"size":0.6,"specs":{"shield":{"capacity":[450,180],"reload":[3,3]},"generator":{"capacity":[350,350],"reload":[35,35]},"ship":{"mass":480,"speed":[150,135],"rotation":[80,120],"acceleration":[90,90]}},"bodies":{},"typespec":{"name":"Wyvern MK II","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-4.5,9]},"generator":{"capacity":[125,875],"reload":[-1000,2000]},"ship":{"mass":240,"speed":[140,140],"rotation":[0.022500000000000003,0.22500000000000003],"acceleration":[0.002,0.001]}},"shape":[2.76,2.2254,1.8672,1.6716,1.5282,1.2167999999999999,1.026,0.9984,0.9899999999999999,0.9822,0.9971999999999999,0.9905999999999999,1.4597999999999998,1.5534,2.1822,2.8968000000000003,2.985,3.0912,2.6124,3.0978,2.3952,2.6832000000000003,3.3569999999999998,3.8417999999999997,3.2622,2.2241999999999997,3.2622,3.8417999999999997,3.3569999999999998,2.6832000000000003,2.3952,3.0978,2.6124,3.0912,2.985,2.8968000000000003,2.1822,1.5534,1.4597999999999998,0.9905999999999999,0.9971999999999999,0.9822,0.9899999999999999,0.9984,1.026,1.2167999999999999,1.5282,1.6716,1.8672,2.2254],"lasers":[{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":2,"type":2,"speed":[10,30],"number":8,"spread":288,"error":40,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[140,420],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.11299},"zoom":1.5,"lockBulletSpeed":1,"lockShipAccel":1,"id":"wyvernMk2_emitter","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":2.25,"energycap":500,"energyregen":500,"agility":0.0015,"rotation":0.12375000000000001},"shieldcap":[112.5,787.5],"shieldregen":[-4.5,9],"energycap":[125,875],"energyregen":[-1000,2000],"damage":[140,420],"bspeed":[15,180],"speed":[140,140],"agility":[0.002,0.001],"rotation":[0.022500000000000003,0.22500000000000003],"mass":240}}},{"name":"Wyvern MK II","author":"Malefor","level":6,"scaleUp":1.2,"teamMarkerSize":1.6,"model":49,"size":0.6,"specs":{"shield":{"capacity":[450,180],"reload":[3,3]},"generator":{"capacity":[350,350],"reload":[35,35]},"ship":{"mass":480,"speed":[150,135],"rotation":[80,120],"acceleration":[90,90]}},"bodies":{},"typespec":{"name":"Wyvern MK II","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[112.5,787.5],"reload":[-4.5,9]},"generator":{"capacity":[87.5,612.5],"reload":[-120,240]},"ship":{"mass":240,"speed":[140,140],"rotation":[4.5,45],"acceleration":[120,90]}},"shape":[2.76,2.2254,1.8672,1.6716,1.5282,1.2167999999999999,1.026,0.9984,0.9899999999999999,0.9822,0.9971999999999999,0.9905999999999999,1.4597999999999998,1.5534,2.1822,2.8968000000000003,2.985,3.0912,2.6124,3.0978,2.3952,2.6832000000000003,3.3569999999999998,3.8417999999999997,3.2622,2.2241999999999997,3.2622,3.8417999999999997,3.3569999999999998,2.6832000000000003,2.3952,3.0978,2.6124,3.0912,2.985,2.8968000000000003,2.1822,1.5534,1.4597999999999998,0.9905999999999999,0.9971999999999999,0.9822,0.9899999999999999,0.9984,1.026,1.2167999999999999,1.5282,1.6716,1.8672,2.2254],"lasers":[{"x":0,"y":-0.6,"z":0,"angle":0,"damage":[13.75,41.25],"rate":1,"type":2,"speed":[2.5,7.5],"number":12,"spread":330,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[165,495],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.11299},"lockBulletSpeed":1,"lockShipAccel":1,"id":"wyvernMk2_main","info":{"stats":{"nominalStats":{"shieldcap":450,"shieldregen":2.25,"energycap":350,"energyregen":60,"agility":105,"rotation":24.75},"shieldcap":[112.5,787.5],"shieldregen":[-4.5,9],"energycap":[87.5,612.5],"energyregen":[-120,240],"damage":[165,495],"bspeed":[15,180],"speed":[140,140],"agility":[120,90],"rotation":[4.5,45],"mass":240}}},{"name":"Shadow Phoenix MK-II","author":"Interdictor SD","teamMarkerSize":1.9,"scaleUp":0.6,"level":6,"model":50,"size":0.42,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[0.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[120,120],"acceleration":[90,105]}},"bodies":{},"wings":{"outer":{"offset":{"x":50,"y":-30,"z":10},"length":[0,22,25,50,10,65],"width":[0,120,170,100,80,75,15],"angle":[-15,-15,-50,-30,-30,-40],"position":[0,0,0,0,0,-15,-100],"texture":[63,4,63,4,63,4],"doubleside":true,"bump":{"position":30,"size":10}},"inner":{"offset":{"x":35,"y":-40,"z":10},"length":[0,7,14,21,28,35],"width":[140,120,100,80,60,40,20],"angle":[60,60,60,60,60,60],"position":[0,0,0,0,0,10,60],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"top":{"offset":{"x":20,"y":-40,"z":10},"length":[0,4,8,12,16,20],"width":[140,120,100,80,60,40,20],"angle":[90,90,90,90,90,90],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"side":{"offset":{"x":0,"y":-140,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"wingtop":{"offset":{"x":0,"y":100,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"Shadow Phoenix MK-II","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[0.00125,0.00875],"reload":[-0.01,0.02]},"ship":{"mass":70,"speed":[140,140],"rotation":[27,270],"acceleration":[10,210]}},"shape":[1.9404,1.8753,1.4787000000000001,1.3674,1.1363999999999999,1.1274,1.2657,2.0886,1.9782,1.8458999999999999,1.7286,1.6479000000000001,1.2513,1.2348,0.9485999999999999,0.7769999999999999,0.7383,0.7512,0.756,0.3777,0.9396,1.0524,1.0683,1.2264,1.5993000000000002,1.5957,1.5993000000000002,1.2264,1.0683,1.0524,0.9396,0.3777,0.756,0.7512,0.7383,0.7769999999999999,0.9485999999999999,1.1387999999999998,1.2513,1.6479000000000001,1.7286,1.8458999999999999,1.9782,2.0886,1.2657,1.1274,1.1363999999999999,1.3674,1.4787000000000001,1.8753],"lasers":[{"x":1.5372,"y":-1.386,"z":-2.576,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.5372,"y":-1.386,"z":-2.576,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.176,"y":-1.008,"z":-1.68,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.176,"y":-1.008,"z":-1.68,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.84,"y":-0.9239999999999999,"z":-0.952,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.84,"y":-0.9239999999999999,"z":-0.952,"angle":0,"damage":[1.25,3.75],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[1.25,3.75],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.29746},"id":"shadowPhoenix_main","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":0.005,"energyregen":0.005,"agility":110,"rotation":148.5},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[0.00125,0.00875],"energyregen":[-0.01,0.02],"damage":[1.25,3.75],"bspeed":[47.5,142.5],"speed":[140,140],"agility":[10,210],"rotation":[27,270],"mass":70}}},{"name":"Shadow Phoenix MK-II","author":"Interdictor SD","teamMarkerSize":1.9,"scaleUp":0.6,"level":6,"model":51,"size":0.42,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[700.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[20,120],"acceleration":[10,105]}},"bodies":{},"wings":{"outer":{"offset":{"x":50,"y":-30,"z":10},"length":[0,22,25,50,10,65],"width":[0,120,170,100,80,75,15],"angle":[-15,-15,-50,-30,-30,-40],"position":[0,0,0,0,0,-15,-100],"texture":[17,4,17,4,17,4],"doubleside":true,"bump":{"position":30,"size":10}},"inner":{"offset":{"x":35,"y":-40,"z":10},"length":[0,7,14,21,28,35],"width":[140,120,100,80,60,40,20],"angle":[60,60,60,60,60,60],"position":[0,0,0,0,0,10,60],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"top":{"offset":{"x":20,"y":-40,"z":10},"length":[0,4,8,12,16,20],"width":[140,120,100,80,60,40,20],"angle":[90,90,90,90,90,90],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"side":{"offset":{"x":0,"y":-140,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"wingtop":{"offset":{"x":0,"y":100,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"Shadow Phoenix MK-II","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-3,6]},"generator":{"capacity":[125,875],"reload":[-0.01,0.02]},"ship":{"mass":70,"speed":[140,140],"rotation":[2.25,22.5],"acceleration":[0.002,0.001]}},"shape":[1.9404,1.8753,1.4787000000000001,1.3674,1.1363999999999999,1.1274,1.2657,2.0886,1.9782,1.8458999999999999,1.7286,1.6479000000000001,1.2513,1.2348,0.9485999999999999,0.7769999999999999,0.7383,0.7512,0.756,0.3777,0.9396,1.0524,1.0683,1.2264,1.5993000000000002,1.5957,1.5993000000000002,1.2264,1.0683,1.0524,0.9396,0.3777,0.756,0.7512,0.7383,0.7769999999999999,0.9485999999999999,1.1387999999999998,1.2513,1.6479000000000001,1.7286,1.8458999999999999,1.9782,2.0886,1.2657,1.1274,1.1363999999999999,1.3674,1.4787000000000001,1.8753],"lasers":[{"x":1.5372,"y":-1.386,"z":-2.576,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.5372,"y":-1.386,"z":-2.576,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.176,"y":-1.008,"z":-1.68,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.176,"y":-1.008,"z":-1.68,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.84,"y":-0.9239999999999999,"z":-0.952,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.84,"y":-0.9239999999999999,"z":-0.952,"angle":0,"damage":[3.75,11.25],"rate":3,"type":1,"speed":[47.5,142.5],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[3.75,11.25],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":2.29746},"lockShipAccel":1,"id":"shadowPhoenix_glow","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":1.5,"energycap":500,"energyregen":0.005,"agility":0.0015,"rotation":12.375},"shieldcap":[46.875,328.125],"shieldregen":[-3,6],"energycap":[125,875],"energyregen":[-0.01,0.02],"damage":[3.75,11.25],"bspeed":[47.5,142.5],"speed":[140,140],"agility":[0.002,0.001],"rotation":[2.25,22.5],"mass":70}}},{"name":"VirtualBlade","level":6,"author":"Finalizer","scaleUp":0.8,"model":52,"size":0.8,"specs":{"shield":{"capacity":[350,500],"reload":[10,20]},"generator":{"capacity":[550,700],"reload":[350,450]},"ship":{"mass":700,"speed":[80,100],"rotation":[20,30],"acceleration":[50,90]}},"bodies":{},"wings":{"shields":{"doubleside":true,"offset":{"x":6,"y":65,"z":-38},"length":[0,25,30,25],"width":[50,50,85,85,50,50],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4,18,4,18],"bump":{"position":40,"size":4}}},"typespec":{"name":"VirtualBlade","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[121.875,853.125],"reload":[-3,6]},"generator":{"capacity":[68.75,481.25],"reload":[-40,80]},"ship":{"mass":120,"speed":[140,140],"rotation":[6.75,67.5],"acceleration":[10,170]}},"shape":[1.6,2.3176,2.3088,1.9300000000000002,1.5032,1.4536,1.4752,1.4264000000000001,1.3784,1.2708000000000002,1.1992,1.1504,1.124,1.1288,1.1508,1.2000000000000002,1.2708000000000002,1.3844,1.4244,1.2844,1.1644,1.4052,1.8112,1.8468,1.7068000000000003,1.6044,1.7068000000000003,1.8468,1.8112,1.4052,1.1644,1.2844,1.4244,1.3844,1.2708000000000002,1.2000000000000002,1.1508,1.1288,1.124,1.1504,1.1992,1.2708000000000002,1.3784,1.4264000000000001,1.4752,1.4536,1.5032,1.9300000000000002,2.3088,2.3176],"lasers":[],"radius":1.91202},"id":"virtualBlade_main","info":{"stats":{"nominalStats":{"shieldcap":487.5,"shieldregen":1.5,"energycap":275,"energyregen":20,"agility":90,"rotation":37.125},"shieldcap":[121.875,853.125],"shieldregen":[-3,6],"energycap":[68.75,481.25],"energyregen":[-40,80],"damage":[0,0],"bspeed":[0,0],"speed":[140,140],"agility":[10,170],"rotation":[6.75,67.5],"mass":120}}},{"name":"VirtualBlade","level":6,"author":"Finalizer","scaleUp":0.8,"model":53,"size":0.8,"specs":{"shield":{"capacity":[350,500],"reload":[10,20]},"generator":{"capacity":[550,700],"reload":[350,450]},"ship":{"mass":700,"speed":[80,100],"rotation":[20,30],"acceleration":[50,90]}},"bodies":{},"wings":{"shields":{"doubleside":true,"offset":{"x":6,"y":65,"z":-38},"length":[0,25,30,25],"width":[50,50,85,85,50,50],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4,18,4,18],"bump":{"position":40,"size":4}}},"typespec":{"name":"VirtualBlade","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[121.875,853.125],"reload":[-3,6]},"generator":{"capacity":[625,4375],"reload":[-0.001,0.002]},"ship":{"mass":120,"speed":[140,140],"rotation":[4.5,45],"acceleration":[0.002,0.001]}},"shape":[1.6,2.3176,2.3088,1.9300000000000002,1.5032,1.4536,1.4752,1.4264000000000001,1.3784,1.2708000000000002,1.1992,1.1504,1.124,1.1288,1.1508,1.2000000000000002,1.2708000000000002,1.3844,1.4244,1.2844,1.1644,1.4052,1.8112,1.8468,1.7068000000000003,1.6044,1.7068000000000003,1.8468,1.8112,1.4052,1.1644,1.2844,1.4244,1.3844,1.2708000000000002,1.2000000000000002,1.1508,1.1288,1.124,1.1504,1.1992,1.2708000000000002,1.3784,1.4264000000000001,1.4752,1.4536,1.5032,1.9300000000000002,2.3088,2.3176],"lasers":[{"x":0,"y":-1.2000000000000002,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-2.4000000000000004,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-3.6,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-4.800000000000001,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-6,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-7.2,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-8.4,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-9.600000000000001,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-10.8,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-12,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-13.200000000000001,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-14.4,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-15.600000000000001,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-16.8,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-18,"z":0,"angle":-90,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[0.00025,0.00075],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-1.2000000000000002,"z":0,"angle":0,"damage":[13.75,41.25],"rate":3,"type":2,"speed":[1.25,3.75],"number":2,"spread":180,"error":0,"recoil":0},{"x":0,"y":-21.200000000000003,"z":0,"angle":-180,"damage":[11.25,33.75],"rate":3,"type":2,"speed":[1,3],"number":2,"spread":20,"error":0,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[27.5,82.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.91202},"lockShipAccel":1,"lockBulletSpeed":1,"id":"virtualBlade_blade","info":{"stats":{"nominalStats":{"shieldcap":487.5,"shieldregen":1.5,"energycap":2500,"energyregen":0.0005,"agility":0.0015,"rotation":24.75},"shieldcap":[121.875,853.125],"shieldregen":[-3,6],"energycap":[625,4375],"energyregen":[-0.001,0.002],"damage":[27.5,82.5],"bspeed":[15,180],"speed":[140,140],"agility":[0.002,0.001],"rotation":[4.5,45],"mass":120}}},{"name":"Fly","level":6,"author":"Goldman","scaleUp":2,"model":54,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-3,6]},"generator":{"capacity":[10,70],"reload":[-30,60]},"ship":{"mass":115,"speed":[140,140],"rotation":[15.75,157.5],"acceleration":[10,170]}},"shape":[1.788,1.775,1.47,1.067,0.844,0.954,0.993,0.925,0.837,0.773,0.733,0.705,0.777,1.078,1.144,1.467,1.557,1.607,1.506,1.552,1.499,1.443,1.471,1.435,1.162,1.157,1.162,1.435,1.471,1.443,1.499,1.552,1.506,1.607,1.557,1.467,1.144,1.078,0.777,0.705,0.733,0.773,0.837,0.925,0.993,0.954,0.846,1.068,1.47,1.775],"lasers":[{"x":-0.7,"y":-1,"z":-0.2,"angle":0,"damage":[2.5,7.5],"rate":2,"type":2,"speed":[40,120],"number":1,"spread":0,"error":0,"recoil":10},{"x":0.7,"y":-2,"z":-0.2,"angle":0,"damage":[2.5,7.5],"rate":2,"type":2,"speed":[40,120],"number":1,"spread":0,"error":0,"recoil":10},{"x":0,"y":0,"z":0,"angle":0,"damage":[2.5,7.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.59004},"id":"fusionburner_main","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":1.5,"energycap":40,"energyregen":15,"agility":90,"rotation":86.625},"shieldcap":[56.25,393.75],"shieldregen":[-3,6],"energycap":[10,70],"energyregen":[-30,60],"damage":[2.5,7.5],"bspeed":[40,120],"speed":[140,140],"agility":[10,170],"rotation":[15.75,157.5],"mass":115}}},{"name":"Fly","level":6,"author":"Goldman","scaleUp":2,"model":55,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[56.25,393.75],"reload":[-3,6]},"generator":{"capacity":[150,1050],"reload":[-0.001,0.002]},"ship":{"mass":115,"speed":[140,140],"rotation":[15.75,157.5],"acceleration":[10,170]}},"shape":[1.788,1.775,1.47,1.067,0.844,0.954,0.993,0.925,0.837,0.773,0.733,0.705,0.777,1.078,1.144,1.467,1.557,1.607,1.506,1.552,1.499,1.443,1.471,1.435,1.162,1.157,1.162,1.435,1.471,1.443,1.499,1.552,1.506,1.607,1.557,1.467,1.144,1.078,0.777,0.705,0.733,0.773,0.837,0.925,0.993,0.954,0.846,1.068,1.47,1.775],"lasers":[{"x":0,"y":-1,"z":0,"angle":0,"damage":[15,45],"rate":0.4,"type":2,"speed":[22.5,67.5],"number":10,"spread":0,"error":40,"recoil":10},{"x":0,"y":0,"z":0,"angle":0,"damage":[150,450],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":0.59004},"lockBulletSpeed":1,"id":"fusionburner_burst","info":{"stats":{"nominalStats":{"shieldcap":225,"shieldregen":1.5,"energycap":600,"energyregen":0.0005,"agility":90,"rotation":86.625},"shieldcap":[56.25,393.75],"shieldregen":[-3,6],"energycap":[150,1050],"energyregen":[-0.001,0.002],"damage":[150,450],"bspeed":[15,180],"speed":[140,140],"agility":[10,170],"rotation":[15.75,157.5],"mass":115}}},{"name":"Roc Birdt D-70","author":"Goldman","teamMarkerSize":1.3,"level":6,"model":56,"size":1.15,"specs":{"shield":{"capacity":[350,450],"reload":[8,10]},"generator":{"capacity":[250,300],"reload":[100,150]},"ship":{"mass":450,"speed":[185,200],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{},"wings":{"main":{"length":[40],"width":[120,35],"angle":[0],"position":[0,0],"doubleside":true,"offset":{"x":0,"y":20,"z":0},"bump":{"position":30,"size":10},"texture":[8]},"main2":{"doubleside":true,"offset":{"x":40,"y":20,"z":0},"length":[-2,10],"width":[0,80,50],"angle":[0,0,0],"position":[0,0,20],"texture":[1,63,63],"bump":{"position":30,"size":15}}},"typespec":{"name":"Roc Birdt D-70","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[65.625,459.375],"reload":[-3,6]},"generator":{"capacity":[31.25,218.75],"reload":[-40,80]},"ship":{"mass":95,"speed":[140,140],"rotation":[20.25,202.5],"acceleration":[10,330]}},"shape":[2.187,2.098,1.536,1.5525,1.3655,1.159,0.6495,0.634,0.651,0.9875,0.971,0.977,1.005,1.0495,1.117,1.1875,1.2555,1.3595,1.5135,1.7315,1.8585,1.8,1.858,1.8135,2.0885,2.074,2.0885,1.8135,1.858,1.8,1.8585,1.7315,1.5135,1.3595,1.2555,1.1875,1.117,1.0495,1.005,0.977,0.971,0.9875,0.651,0.634,0.6495,1.159,1.3655,1.5525,1.536,2.098],"lasers":[{"x":0,"y":-2.185,"z":-0.23,"angle":0,"damage":[8.75,26.25],"rate":1,"type":1,"speed":[38.75,116.25],"number":2,"spread":0,"error":0,"recoil":30},{"x":0,"y":0,"z":0,"angle":0,"damage":[17.5,52.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.44342},"id":"rocBirdtD70","info":{"stats":{"nominalStats":{"shieldcap":262.5,"shieldregen":1.5,"energycap":125,"energyregen":20,"agility":170,"rotation":111.375},"shieldcap":[65.625,459.375],"shieldregen":[-3,6],"energycap":[31.25,218.75],"energyregen":[-40,80],"damage":[17.5,52.5],"bspeed":[15,180],"speed":[140,140],"agility":[10,330],"rotation":[20.25,202.5],"mass":95}}},{"name":"Owl-PS","author":"Goldman","level":6,"model":57,"size":0.825,"specs":{"shield":{"capacity":[300,375],"reload":[8,10]},"generator":{"capacity":[145,185],"reload":[75,100]},"ship":{"mass":300,"speed":[180,205],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{},"wings":{"main1":{"doubleside":true,"offset":{"x":20,"y":40,"z":0},"length":[15,10,0,15,0,12,0,20],"width":[35,35,35,100,50,35,35,135,60],"angle":[40,40,0,0,0,-20,0,0],"position":[-20,-20,-10,20,0,0,10,30,10],"texture":[4,11,3,63,63,11,3,63],"bump":{"position":-35,"size":10}}},"typespec":{"name":"Owl-PS","level":5,"model":5,"code":505,"specs":{"shield":{"capacity":[46.875,328.125],"reload":[-4.5,9]},"generator":{"capacity":[18.75,131.25],"reload":[-30,60]},"ship":{"mass":70,"speed":[140,140],"rotation":[27,270],"acceleration":[10,430]}},"shape":[1.24,1.253,1.1345,0.846,0.6725,0.8565,0.899,0.857,0.8005,0.755,0.7135,0.69,0.678,1.2145,1.4545,1.516,1.604,1.7415,1.931,2.0615,2.2505,2.5125,1.9265,1.619,1.5955,1.5705,1.5955,1.619,1.9265,2.5125,2.2505,2.0615,1.931,1.7415,1.604,1.516,1.4545,1.2145,0.678,0.69,0.7135,0.755,0.8005,0.857,0.899,0.8565,0.6725,0.846,1.1345,1.253],"lasers":[{"x":0.528,"y":-0.66,"z":0,"angle":0,"damage":[5,15],"rate":3,"type":1,"speed":[46.875,140.625],"number":1,"spread":0,"error":1,"recoil":0},{"x":-0.528,"y":-0.66,"z":0,"angle":0,"damage":[5,15],"rate":3,"type":1,"speed":[46.875,140.625],"number":1,"spread":0,"error":1,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[5,15],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.6582500000000002},"id":"owlPS","info":{"stats":{"nominalStats":{"shieldcap":187.5,"shieldregen":2.25,"energycap":75,"energyregen":15,"agility":220,"rotation":148.5},"shieldcap":[46.875,328.125],"shieldregen":[-4.5,9],"energycap":[18.75,131.25],"energyregen":[-30,60],"damage":[5,15],"bspeed":[46.875,140.625],"speed":[140,140],"agility":[10,430],"rotation":[27,270],"mass":70}}},{"name":"Thunderbird PD-70","author":"Goldman","teamMarkerSize":1.2,"level":6,"model":58,"size":0.95,"specs":{"shield":{"capacity":[325,425],"reload":[10,12]},"generator":{"capacity":[275,325],"reload":[80,125]},"ship":{"mass":400,"speed":[190,205],"rotation":[130,170],"acceleration":[130,170]}},"bodies":{},"wings":{"main1":{"doubleside":true,"offset":{"x":10,"y":55,"z":0},"length":[30,5],"width":[35,35,30],"angle":[0,0],"position":[-20,0,-10],"texture":[2],"bump":{"position":-35,"size":10}},"main2":{"doubleside":true,"offset":{"x":47,"y":45,"z":5},"length":[15,0,10],"width":[20,20,100,20],"angle":[50,50,50],"position":[0,0,-15,5],"texture":[8,13,1],"bump":{"position":35,"size":20}},"main3":{"doubleside":true,"offset":{"x":47,"y":45,"z":-5},"length":[15,0,10],"width":[20,20,100,20],"angle":[-50,-50,-50],"position":[0,0,-15,5],"texture":[8,13,1],"bump":{"position":35,"size":20}}},"typespec":{"name":"Thunderbird PD-70","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[75,525],"reload":[-1.5,3]},"generator":{"capacity":[18.75,131.25],"reload":[-35,70]},"ship":{"mass":85,"speed":[140,140],"rotation":[40.5,405],"acceleration":[10,250]}},"shape":[2.0905,1.7205,1.7295,0.995,0.851,0.595,0.5275,0.4835,0.45,0.472,1.1415,1.1285,1.143,1.1775,1.235,1.3195,1.442,1.619,1.8425,1.8455,1.9785,2.004,1.8895,1.4625,1.7305,1.7135,1.7305,1.4625,1.8895,2.004,1.9785,1.8455,1.8425,1.619,1.442,1.3195,1.235,1.1775,1.143,1.1285,1.1415,0.472,0.45,0.4835,0.5275,0.595,0.851,0.995,1.7295,1.7205],"lasers":[{"x":0,"y":-2.185,"z":-0.23,"angle":0,"damage":[5.5,16.5],"rate":1,"type":1,"speed":[38.75,116.25],"number":5,"spread":0,"error":15,"recoil":30},{"x":0,"y":0,"z":0,"angle":0,"damage":[27.5,82.5],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.3797300000000001},"id":"thunderbirdPD70","info":{"stats":{"nominalStats":{"shieldcap":300,"shieldregen":0.75,"energycap":75,"energyregen":17.5,"agility":130,"rotation":222.75},"shieldcap":[75,525],"shieldregen":[-1.5,3],"energycap":[18.75,131.25],"energyregen":[-35,70],"damage":[27.5,82.5],"bspeed":[15,180],"speed":[140,140],"agility":[10,250],"rotation":[40.5,405],"mass":85}}},{"name":"Wyvern WX","author":"Goldman","teamMarkerSize":1.4,"level":6,"model":59,"size":1.225,"specs":{"shield":{"capacity":[550,550],"reload":[15,15]},"generator":{"capacity":[700,700],"reload":[230,230]},"ship":{"mass":560,"speed":[160,160],"rotation":[170,170],"acceleration":[170,170]}},"bodies":{},"wings":{"main1":{"doubleside":true,"offset":{"x":40,"y":45,"z":5},"length":[15,0,10],"width":[20,20,100,20],"angle":[90,90,90],"position":[0,0,-15,5],"texture":[8,13,63],"bump":{"position":35,"size":20}},"main2":{"doubleside":true,"offset":{"x":40,"y":15,"z":0},"length":[35],"width":[35,35,30],"angle":[0,0],"position":[20,0],"texture":[11],"bump":{"position":-35,"size":10}},"main3":{"doubleside":true,"offset":{"x":0,"y":-45,"z":-5},"length":[15,0,10],"width":[20,20,120,20],"angle":[-90,-90,-90],"position":[0,0,-15,5],"texture":[8,1,4],"bump":{"position":35,"size":22}},"main4":{"doubleside":true,"offset":{"x":40,"y":45,"z":-5},"length":[15,0,10],"width":[20,20,100,20],"angle":[-90,-90,-90],"position":[0,0,-15,5],"texture":[8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Wyvern WX","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[138.75,971.25],"reload":[-1.5,3]},"generator":{"capacity":[31.25,218.75],"reload":[-40,80]},"ship":{"mass":125,"speed":[140,140],"rotation":[27,270],"acceleration":[10,190]}},"shape":[2.94,2.3455,2.23,1.3595,1.151,1.001,0.9035,0.8355,0.783,1.0955,1.949,1.951,1.964,1.9755,2.0235,2.1065,2.231,2.249,1.976,2.283,2.5515,2.584,2.4365,1.886,2.2315,2.2095,2.2315,1.886,2.4365,2.584,2.5515,2.283,1.976,2.249,2.231,2.1065,2.0235,1.9755,1.964,1.951,1.949,1.0955,0.783,0.8355,0.9035,1.001,1.151,1.3595,2.23,2.3455],"lasers":[{"x":0,"y":-2.185,"z":-0.23,"angle":0,"damage":[5,15],"rate":1,"type":1,"speed":[38.75,116.25],"number":10,"spread":0,"error":15,"recoil":10},{"x":0,"y":0,"z":0,"angle":0,"damage":[50,150],"rate":1,"type":2,"speed":[15,180],"number":20000,"spread":0,"error":360,"recoil":0}],"radius":1.9404000000000001},"id":"wyvernWX","info":{"stats":{"nominalStats":{"shieldcap":555,"shieldregen":0.75,"energycap":125,"energyregen":20,"agility":100,"rotation":148.5},"shieldcap":[138.75,971.25],"shieldregen":[-1.5,3],"energycap":[31.25,218.75],"energyregen":[-40,80],"damage":[50,150],"bspeed":[15,180],"speed":[140,140],"agility":[10,190],"rotation":[27,270],"mass":125}}}];


shipIdsToCodes = {"firewallHGS3":601,"burstchargerMk1":602,"unstablecoreLDB":603,"stingerLMT":604,"longlegsLRA_Assault":605,"longlegsLRA_Sniper":606,"niteracer_Retracted":607,"niteracer_Deployed":608,"JMPFlea_Jumper":609,"JMPFlea_Fighter":610,"sword_n_shield_Shield":611,"sword_n_shield_Sword":612,"brrrt_LMT_Burst":613,"brrrt_LMT_Spinning":614,"GA_Linker":615,"sidewinderLMT":616,"splitter":617,"d_blast0":618,"d_blast1":619,"d_blast2":620,"d_blast":621,"LSV_OnMyPosition":622,"LSV_OnMyPosition_barrage":623,"cupolaDefender_main":624,"cupolaDefender_heal":625,"hotswapFighter_main":626,"hotswapFighter_equipping":627,"hotswapFighter_heavyPulse":628,"hotswapFighter_lightPulse":629,"hotswapFighter_bomber":630,"hotswapFighter_sniper":631,"hotswapFighter_rammer":632,"GA_Lobster":633,"GA_Lobster_scoot":634,"GA_Turtle":635,"GA_Turtle_tucked":636,"UMonitor_main":637,"UMonitor_broadside":638,"avalanche_pulse":639,"avalanche_barrage":640,"fivestars_pulse":641,"fivestars_barrage":642,"stealth1_main":643,"stealth1_cloaked":644,"harbinger_deployed":645,"harbinger_retracted":646,"wyvernMk2_pulse":647,"wyvernMk2_emitter":648,"wyvernMk2_main":649,"shadowPhoenix_main":650,"shadowPhoenix_glow":651,"virtualBlade_main":652,"virtualBlade_blade":653,"fusionburner_main":654,"fusionburner_burst":655,"rocBirdtD70":656,"owlPS":657,"thunderbirdPD70":658,"wyvernWX":659};

SPPages = {"changelog":[{"type":1,"data":"Changelog"},{"type":2}],"credits":[{"type":1,"data":"STARBLAST PROTOTYPES"},{"type":3,"widths":[50,50],"data":["Zero mining.","Pure combat."]},{"type":0,"data":""},{"type":1,"data":"Lead developer/idea by"},{"type":0,"data":"/u/UranusOrbiter Uranus_is_big#7833"},{"type":1,"data":"Main tester/obscure bug fixing/helper/developer"},{"type":0,"data":"123 Notus"},{"type":1,"data":"Ships by"},{"type":0,"data":"UranusOrbiter"},{"type":0,"data":"Goldman"},{"type":0,"data":"Finalizer"},{"type":0,"data":"Malefor"},{"type":0,"data":"5STARS"},{"type":0,"data":"Interdictor SD"},{"type":2},{"type":0,"data":"Huge thanks for everyone who, in one way or another, contributed to the amazing cause of SPrototypes, the Moddest of all mods. Without your help, your contributions, none of this would exist. You wouldn't be reading this text in an in-game web browser."},{"type":1,"data":"Thank you."},{"type":0,"data":"Huge thanks to our beloved dev, pmgl, for designing this mind-bogglingly awesome modding system, for putting up with the incredibly annoying me, and for encouraging me to do all of this."},{"type":0,"data":"Thanks to all playtesters, including but not limited to(because my brain's memory is very limited): "},{"type":0,"data":"Nova, PearEatingBear, Zeul, L.Gaming, IRAN, ECLIPSE, Goldman, NeXagon, ACE, APPLE PIE, and all others."},{"type":0,"data":"One cannot develop a mod for so many players without testing it with that many players. Thus, thank you for being my audience for all these weeks, and thank you for all the feedback and gameplay."},{"type":0,"data":"Special thanks to 201X CAPTAIN and REBEL for letting me use their discord server for invites and announcements."},{"type":0,"data":"Oh and of course, shoutout to all the haters! I'd like to thank y'all for providing me with motivation to keep going. You don't deserve having your names put here, though... sorry for that!"},{"type":2},{"type":0,"data":"Also shoutout to these awesome sites that turned out to be very, very useful for developing such a large mod:"},{"type":0,"data":"esprima.org - great online js syntax checker"},{"type":0,"data":"color-hex.com - awesome color palettes for skins"},{"type":0,"data":"stackoverflow.com - but of course"},{"type":0,"data":"emojipedia.org - great insight into emojis"},{"type":2},{"type":0,"data":"%wiki%In-game wiki(under construction)"},{"type":0,"data":"%changelog%Changelog"},{"type":0,"data":"%doesntExist%Go check out our 404 page lmao"},{"type":2},{"type":0,"data":"{} by UranusOrbiter with 💖"}],"wiki":[{"type":1,"data":"STARBLAST PROTOTYPES"},{"type":3,"widths":[50,50],"data":["Zero mining.","Pure combat."]},{"type":0,"data":""},{"type":2},{"type":1,"data":"In-game wiki"},{"type":1,"data":"THIS IS A PROOF OF CONCEPT"},{"type":0,"data":"This right here is just a placeholder page for the yet-to-be-added in-game encyclopedia.The links currently point nowhere. It will be populated with pages in future."},{"type":2},{"type":0,"data":"STARBLAST PROTOTYPES: Zero mining. Pure combat is a highly complex interactive mod for online multiplayer game Starblast. It's main premise is the idea that mining is a useless, poisonous feature that adds very little to gameplay, at the cost of making the game a huge uncompetitive timesink. SP is designed to be a quick, objective-based mode, where all players are treated as equal. It is, in a way, a merger of Pro DeathMatch and Vanilla Teams, taking best features from both modes while filtering out useless ones."},{"type":2},{"type":0,"data":"Gameplay is spiced up by the addition of %abilities%abilities in an attempt to parody Overwatch. All ships have unique abilities that question the limits of Modding API. %effects%Effects can be applied to ships by abilities, increasing gameplay complexity and making room for strategy and tactics. Ships are completely free and the only penalty for dying is loss of points(kills).Most rounds last 10-20 minutes, with the shortest possible round being 5 minutes. Gameplay is fast and engaging."},{"type":2},{"type":0,"data":"%ships%Ships"},{"type":0,"data":"%shipStats%Ship stats"},{"type":0,"data":"%abilities%Abilities"},{"type":0,"data":"%effects%Effects"}]};


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

//just some random assets. should refactor these somehow...

var changeShipMarkerR = {
  id: "changeShipMarkerR",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/changeShipIcon.png",
  transparent:true,
  emissiveColor: 0xFF5522,
} ;

var changeShipMarkerB = {
  id: "changeShipMarkerB",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/changeShipIcon.png",
  transparent:true,
  emissiveColor: 0x2288FF,
} ;

var baseMarkerR = {
  id: "baseMarkerR",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/circleSpikes.png",
  transparent:true,
  emissiveColor: 0xFF5522,
} ;

var baseMarkerB = {
  id: "baseMarkerB",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/circleSpikes.png",
  transparent:true,
  emissiveColor: 0x2288FF,
} ;

var baseWarningR = {
  id: "baseWarningR",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/baseWarning.png",
  transparent:true,
  emissiveColor: 0xFF5522,
} ;

var baseWarningB = {
  id: "baseWarningB",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/baseWarning.png",
  transparent:true,
  emissiveColor: 0x2288FF,
} ;

var pointNeutral = {
  id: "pointNeutral",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ctrlPointNeutral.png",
  emissiveColor: 0xAAAAAA,
} ;

var pointTeam = {
  id: "pointTeam",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ctrlPointCaptured.png",
  emissiveColor: 0xAAAAAA,
} ;

//refactoring required!

var roundsLog = []



var currentMap = 0;







var playerNames = [];

var durationEffectsPerShip = 10;

var currentVariation = 0;

var GPOClearChance = 0.001;
var GPOClear = false;

var modeVariations = [
  {
    name:"Starblast Prototypes Battlefield",
    shipCollectionTeamBlue: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    shipCollectionTeamRed: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  },
  {
    name:"GA Incursion",
    shipCollectionTeamBlue: [0,2,3,4,5,6,8,10,11,13],
    shipCollectionTeamRed: [9,16,17,18,19,20,21]
  }
]

var teams = [];

teams.push({x:170,y:0,name:"Blue",color:"#4cd5ff",hue:180,points:0,ctrlPoints:0});
teams.push({x:-170,y:0,name:"Red",color:"#FF2222",hue:0,points:0,ctrlPoints:0});

var controlPoints = [];

var shipsInGameData = [];
var lastShipsInGameData = [];
var lastshipsInGameData = []; //fuck. TODO: what the fuck?!

var modsys = {};

modsys.scheduler = {
  tasks: [],
  scheduleTask: function(func,period=60,offset=0,condition){
    var task = {
      enabled: true,
      period: period,
      offset: offset,
      condition: condition,
      exec: func
    };
    this.tasks.push(task);
  },
  tick: function(step){
    var tasks = this.tasks;
    for(var i = 0; i<tasks.length; i++){
      var t = tasks[i]
      if( (step+t.offset)%t.period==0 && (t.condition==null||t.condition()) ){
        t.exec();
      }
    }
  }
}


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

/*Burst Inferno 3
Medium Superiority Fighter

Pulses are cool and all, but sometimes you just want to spray the hell out of your
enemies. Inferno allows you to do just that.

Inferno also allows you to dispatch HELL to confined regions of space. Some call
it a HELL DELIVERY SERVICE, a DEVIL'S FIGHTER, or also a MOBILE HELL PLATFORM.

Inferno has giant capacitors. Truly remarkable for its size. Its recharge rate is
somewhat low, but that's secondary. What truly matters is the amazing amount of
damage it can output within just a few seconds.

Damage stun. Shields are good at preventing direct damage, but a lot of damage
in a short period of time tends to interfere with electronics. Inferno is built
to really abuse that fact.

Firewall is a secondary weapon, or, if you want, an ability, that allows Inferno
to launch shield-disrupting pods in a wall pattern. Said pods can really change
the course of a battle. They badly interfere with enemy shield capacitors, and
also drain the shields further with a lingering disruption efect.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[0] = {name:"Burst Inferno MSF-3",cl:"Attack ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["firewallHGS3"];
  },
  firewallCooldownTime: 25,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.firewallCooldown = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.firewallCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.firewallCooldown<0){
          p.firewallCooldown = this.firewallCooldownTime;
          //spawn the firewall;
          dist = 15;
          width = 20;
          randomRange = 4;
          for(fp=0;fp<10;fp++){
            xf = Math.cos(ship.r);
            yf = Math.sin(ship.r);
            xs = -yf;
            ys = xf;
            xf*=dist; yf*=dist;
            xs*=width; ys*=width;
            xr = Math.random()*randomRange*2-randomRange;
            yr = Math.random()*randomRange*2-randomRange;
            GPOTypes[1].create(ship.x+xf-xs*0.5+xs*(fp/9)+xr,ship.y+yf-ys*0.5+ys*(fp/9)+yr,ship.custom.team)
          }
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship, sh, p){

    k = [];
    FWState = 0;
    if(p.firewallCooldown>=0){
      FWState = 2;
    }
    k[1] = {name:"Firewall",id:1,
      explanation:"A wall of pods disrupting enemy shields",
      ready: 1-p.firewallCooldown/this.firewallCooldownTime,
      state: FWState
    }

    return k;
  },
  tips:[
    "Burst is life. Try to engage enemies only when your capacitor is full.",
    "Don't spam shots; let your capacitor refill.",
    "Retreat when empty, let your capacitor refill, then engage into battle.",
    "Deploy your Firewall onto enemies to soften their shields.",
    "Most ships won't survive your entire burst."
    ],
  unicodeChar: "\u{1f525}",
  color: "#FFAA00"
};


/*Burstcharger Mk1

A basic, small-sized shield charger. It's remarkably small size makes it an annoying
little enemy, which maybe won't hurt you directly, but will likely spoil your day
by undoing all of your damage with it's quick bursts.

Its weapon is of shotgun type, and thus is most efficient at close range, while
providing minimal(a bit is better than none) healing at longer ranges.

The ship carries small healing pods, and can deploy them every so often. Said pods
don't provide too spectacular of an effect, but they do apply it via AOE, meaning
that multiple teammates can benefit from them.

*/

//$fileTape ifFlag prerender
//$fileTape setwriting true

shipsData[1] = {name:"Burstcharger Mk1",cl:"Healer",company: 0,
  healPodCooldownTime: 30,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["burstchargerMk1"];
  },
  respawn:function(ship,sh,p){
    ship.custom.sprototype.healPodCooldown = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:true});
  },
  tick:function(ship, sh, p){
    p.healPodCooldown -= sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.healPodCooldown<0){
          p.healPodCooldown = this.healPodCooldownTime;
          GPOTypes[2].create(ship.x,ship.y,ship.custom.team)
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship, sh, p){
    k = [];
    HSState = 0;
    if(p.healPodCooldown>=0){
      HSState = 2;
    }
    k[1] = {name:"Healing Station",id:1,
      explanation:"Heals teammates\n in an area",
      ready: 1-p.healPodCooldown/this.healPodCooldownTime,
      state: HSState
    }
    return k;
  },
  tips:[
    "This is a dedicated healer. You cannot damage enemies.",
    "Heal your teammates to increase your team's efficiency.",
    "Prioritize damaged teammates.",
    "Prioritize heavy ships.",
    "Deploy your Healing Station to further boost your efforts."
    ],
  unicodeChar: "\u{2724}",
  color: "#22FF55"
};


/*Unstablecore
Light Dive Bomber

Inertial bombers aren't a new idea - it doesn't take that big of an intellectual
to imagine dive bombers in space - and yet in never really took off. Lets see
if 4339 is any different, with the advent of Unstablecore - a powerful,
efficient dive bomber, built around the Crystal Core, also known as
AHTP-4335-00d2. Scientist are still not entirely sure as to how these things
work, but we have managed to increase their stability to a reasonable level -
and we found plenty of them to reverse-engineer and produce our own.

Said core can produce a blast of pure energy when triggered. That blast can be
captured into a proper, damaging bolt, with some basic, trivial equipment.
The core loses stability over time, but the system is able to monitor and
combat that effect - yet sometimes, it is useful to let the core fail, which
produces a powerful EMP-like burst, disrupting enemy electronics within range,
bypassing their shields.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[2] = {name:"Unstablecore LDB",cl:"Dive bomber",company: 1,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["unstablecoreLDB"];
  },
  EMPCooldownTime: 60,
  EMPRange: 20,
  EMPReactorFailureTime: 10,
  EMPElShutdownTime: 4,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.EMPCooldown = this.EMPCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.EMPCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.EMPCooldown<0){
          p.EMPCooldown = this.EMPCooldownTime;

          addEffectToShip(ship, 10, this.EMPReactorFailureTime, 2, 10);

          range = this.EMPRange*this.EMPRange;
          for(ss=0;ss<game.ships.length;ss++){
            sh = game.ships[ss];
            xx = sh.x-ship.x;
            yy = sh.y-ship.y;
            xx = xx*xx;
            yy = yy*yy;
            if(xx+yy<range&&sh.custom.team!=ship.custom.team){
              addEffectToShip(sh, 6, this.EMPElShutdownTime, 5, 5);
            }

          }
          GPOTypes[0].create(ship.x,ship.y,ship.custom.team,this.EMPRange,3);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    EMPState = 0;
    if(p.EMPCooldown>=0){
      EMPState = 2;
    }
    k[1] = {name:"EMP",id:1,
      explanation:"Temporarily shut down all enemies in range",
      ready: 1-p.EMPCooldown/this.EMPCooldownTime,
      state: EMPState
    }
    return k;
  },
  tips:[
    "Prioritize slow targets.",
    "This ship is a dive bomber. Shots should be aimed with movement.",
    "Shots inherit your velocity when fired - dive towards enemies to hit your shots.",
    "Use your EMP ability to temporarily disable enemies in proximity.",
    "EMP is very useful for taking out fast, small fighters."
    ],
  unicodeChar: "\u{1f31f}",
  color: "#FFFF88"
};


/*Stinger
Light Mobile Turret

A medium-sized fighter with a powerful reactor, deadly twin pulse weapons,
and horrific abilities.

The ship itself lacks acceleration quite badly, however the turning rate is
exceptional. It features two identical, heavy pulse weapons on its sides,
accomplained by 4 puny rapid-firing blasters.

This ship also features two AOE abilities, that allow it to boost self and
teammates within a small range. Utilizing a unique, recently discovered technology,
it is able to either boost the engines, or boost the DPS and weapon power of ships
in range.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[3] = {name:"Stinger LMT",cl:"Defense ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["stingerLMT"];
  },
  buffCooldownTime: 40,
  buffDuration: 10,
  buffRange: 15,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.buffCooldown = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.buffCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
      case 2:
        if(p.buffCooldown<0){
          p.buffCooldown = this.buffCooldownTime;
          range = this.buffRange;

          range = range*range;
          for(ss=0;ss<game.ships.length;ss++){
            sh = game.ships[ss];
            xx = sh.x-ship.x;
            yy = sh.y-ship.y;
            xx = xx*xx;
            yy = yy*yy;
            if(xx+yy<range&&sh.custom.team==ship.custom.team){
              if(abId==1){
                addEffectToShip(sh, 9, this.buffDuration, 2, 3);
              }else{
                addEffectToShip(sh, 4, this.buffDuration, 1, 3);
                addEffectToShip(sh, 7, this.buffDuration, 3, 3);
                addEffectToShip(sh, 8, this.buffDuration, 1, 3);
              }
            }

          }
          GPOTypes[0].create(ship.x,ship.y,ship.custom.team,this.buffRange,3);
        }
        break;

      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    buffState = 0;
    if(p.buffCooldown>=0){
      buffState = 2;
    }
    //k.push({name:"Defcon",id:1})
    k[1] = {name:"Float like a butterfly",id:1,
      explanation:"Agility +2 to yourself and all teammates in range",
      ready: 1-p.buffCooldown/this.buffCooldownTime,
      state: buffState
    }
    k[2] = {name:"Sting like a bee",id:2,
      explanation:"BSpeed+3, DMG+1, EReg+1 to yourself and teammates in range",
      ready: 1-p.buffCooldown/this.buffCooldownTime,
      state: buffState
    }
    return k;
  },
  tips:[
    "This ship is somewhat sluggish: don't rely on dodges.",
    "You're the heart of a good offensive - use your abilities near teammates!",
    "Abilities apply to your ship and all teammates in range. Use that to your advantage!",
    "Simple and efficient.",
    "Sting like a bee and show them who's the boss!",
    "Sometimes you just have to fly like a butterfly inbetween enemy blasts."
    ],
  unicodeChar: "\u{1f41d}",
  color: "#FFFF00"
};


/*Longlegs
Long Range Artillery

Spiders are scary.

But, contrary to its name, this thing is not a spider. It is something much,
much more horrific.

It is a transforming LRA, and it is DEADLY.

The ship features two modes. When shielding is retracted, the ship gains
additional shield capacity and redirects some of its reactor's output towards
shields. Auxiliary accelerators are moved behind the engines, providing
additional acceleration. The weapon is retracted and reconfigured, firing
semi-pulses at a medium rate. This mode is most useful for maneuvering and
reposition, as the DPS doesn't really justify combat.

But when this ship truly shines, is when it is in its Sniper config, which
means extended shielding, lower shield capacity and regen, and yet, much higher
DPS due to extension of main weapon, which now fires powerful pulses
ever so often, and increased turn rate, thanks to moving the auxiliary
accelerators to the side, giving them a much longer arm to act upon.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[4] = {name:"Longlegs LRA",cl:"Sniper",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["longlegsLRA_Assault"];
    this.configs[1] = shipIdsToCodes["longlegsLRA_Sniper"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
  },
  tick:function(ship, sh, p){


  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Sniper";
    expl = "Switch into Assault for close-range combat";
    if(ship.type == this.configs[0]){
      config = "Assault";
      expl = "Switch into Sniper for taking out enemies from far away";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Sniper is deadly, but sluggish.",
    "Sniper configuration is superior at long distances.",
    "Accelerate/slow down as Assault, rotate/maneuver as Sniper.",
    "Assault regens shields faster.",
    "Utilize Assault to reposition yourself, then deploy into Sniper."
    ],
  unicodeChar: "\u{1f577}",
  color: "#FF00FF"
};


/*Niteracer

Niteracer is a pretty basic, decent pulse fighter with mediocre agility. It is
a transformer, though, which makes it slightly more appealing.

Its transformer label comes from its ability to deploy/retract its wings,
simultaneously rerouting power to shield or weapons.

While wings are retracted, this ship is mostly configured for chasing/retreating.
Reactor power is redirected to shields, and due to a shorter arm, engines are
less efficient at turning the ship. This form is also superior in-atmosphere,
but these days, fighters rarely engage in atmospheric battles.

Deploying wings reconfigures this ship for combat. DPS is greatly increased,
at the cost of shield regen and acceleration. Longer arms boost engine efficiency
for rotating the ship.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[5] = {name:"Niteracer",cl:"Defense ship",company: 2,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["niteracer_Retracted"];
    this.configs[1] = shipIdsToCodes["niteracer_Deployed"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
  },
  tick:function(ship, sh, p){


  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Retracted";
    expl = "Deploy your wings for higher maneuverability";
    if(ship.type == this.configs[1]){
      config = "Deployed";
      expl = "Retract wings to improve defenses";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type!=this.configs[1],
      state: 0
    }
    return k;
  },
  tips:[
    "While wings are retracted, your ship accelerates faster.",
    "Shield regenerates much faster while wings are retracted.",
    "While wings are extended, reactor generates more energy for weapons.",
    "Extending your wings trades acceleration for rotation speed.",
    "Extending your wings trades shield regen for energy regen."
    ],
  unicodeChar: "\u{1f320}",
  color: "#FFFFFF"
};


/*JMP Flea

Prototypes are, in general, pretty fast and agile. But some pilots want more
agility, and for those fighters, JMP Flea fits best.

It is a pulse fighter. A reasonable, somewhat-low-DPS pulse fighter with a
rather-rapid pulse.

It is also a transformer. Transforming into Jumper config makes the wings/shields
close around the weapon, preventing it from firing and being damaged by
high-velocity collisions, and deploys the deflector on the back.

When in Jumper config, the ship launches miniature nukes upon engagement of weapons.
Said nukes blast behind the ship, and half of their blast's energy deflects off
the... deflector, propelling the ship forwards, at high velocity.

The ship is fragile, but agile. It is the nightmare of most snipers, and is
an incredibly useful combat vehicle, though it takes a really skilled pilot to
use it well.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[6] = {name:"JMP Flea",cl:"Attack ship",company: 1,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["JMPFlea_Jumper"];
    this.configs[1] = shipIdsToCodes["JMPFlea_Fighter"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  /*tick:function(ship, sh, p){
  },*/
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Jumper";
    expl = "Open the wings to utilize your weapon";
    if(ship.type == this.configs[1]){
      config = "Biter";
      expl = "Close your wings to maneuver";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type!=this.configs[1],
      state: 0
    }
    return k;
  },
  tips:[
    "Adjust for ping - press the button to switch between configurations a bit early.",
    "JMP to select an attack vector, deploy your weapon and fly-by-blast enemies.",
    "Your dashes are practically unlimited - JMP like a crazy madman!",
    "The ship is fragile - don't use your dash as an attack."
    ],
  unicodeChar: "\u{1f41c}",
  color: "#884400"
};


/*Sword'n'shield

A heavy space tank, a superheavy ramming fighter, and a giant deployable
barrier carrier.

While that may sound awesome, don't get too excited. The ship, and especially the
barrier part of its equation, are pretty disappointing. It sounds great in
theory, but on practice, it just doesn't work.

And yet, having a giant space sword, capable of one-slash taking out small enemies
is quite awesome. It is hard to use and, as all tanks, lacks agility, especially
rotation - however, when it hits, it hits hard.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[7] = {name:"Sword'n'shield",cl:"Tank",company: 3,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["sword_n_shield_Shield"];
    this.configs[1] = shipIdsToCodes["sword_n_shield_Sword"];
  },
  trDuration: 5,
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.trProgress = 0;
    ship.custom.sprototype.trDirection = 0;
  },
  tick:function(ship, sh, p){


    if(p.trDirection>0){
      if(p.trProgress>=this.trDuration)
        p.trDirection = 0
      else
        p.trProgress += 1
    }else if(p.trDirection<0){
      if(p.trProgress<=0)
        p.trDirection = 0
      else
        p.trProgress -= 1
    }
    if(p.trDirection!=0){
      if(p.trProgress>this.trDuration/2)
        ship.set({type:this.configs[1],stats:ship.custom.lastStats});
      else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
      UISystem.events.pushEvent(ship,"shipConfigChange");
    }
    //log("yeet progress: "+p.trProgress+" direction: "+p.trDirection)
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.trDirection!=0)return;
        if(p.trProgress==0)
          p.trDirection = 1
        else
          p.trDirection = -1
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];

    config = "Shield";
    expl = "Close the shield, extend the blade";
    if(ship.type == this.configs[1]){
      config = "Sword";
      expl = "Open the shield to defend teammates";
    }
    //log("yeet"+p.trProgress+":"+this.trDuration)
    k[1] = {name:config,id:1,explanation:expl,
      ready: p.trProgress/this.trDuration,
      state: p.trProgress==0||p.trProgress==this.trDuration?0:1
    }
    return k;
  },
  tips:[
    "Your capacitors are incredibly large - block enemy shots with your shield.",
    "Try to only block shots that would otherwise endanger your teammates.",
    "Having a pocket healer helps a lot.",
    "Deploy the shield to restore energy.",
    "Try to pierce enemies while moving away from them.",
    "Your dashes regen slowly - use them wisely."
    ],
  unicodeChar: "\u{1f5e1}",
  color: "#0055FF"
};


/*Brrt
Light Mobile Turret

A big, awesome space machine gun. Great for crowd control, decent at combat. Overall
quite reasonable, though nothing too exciting.

The ship features two modes, correlated to two possible states of it's main, giant
weapon: spinning and, well, not spinning.

While the guns are stationary, their reload is slower, but they fire in-sync,
turning this ship into a decent shotgun fighter. Such shotgunning action is devastating
close-range, but obviously isn't too great at longer ranges.

Spinning up the weapon turns this ship into a bullet-spraying sentry. Reactors are
kicked into overdrive, making this ship one of, if not the highest-DPS ship out of
all Prototypes. Shots are numerous and hurt a lot. However, the gyroscopic effect
of such a giant spinning piece of metal works against your steering, making this
ship much less useful in 1v1 combat.
*/

//$fileTape ifFlag prerender
//$fileTape setwriting true

shipsData[8] = {name:"Brrrt LMT",cl:"Defense ship",company: 2,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["brrrt_LMT_Burst"];
    this.configs[1] = shipIdsToCodes["brrrt_LMT_Spinning"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  /*tick:function(ship, sh, p){
  },*/
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Burst";
    expl = "Crowd-control shotgun";
    if(ship.type == this.configs[1]){
      config = "Spun-up";
      expl = "Brrrrrrrt them all!";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type!=this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Utilize your burst to take out far away targets.",
    "Due to gyroscopic effect your ship turns slower while the barrel is spinning.",
    "Use your recoil to your advantage.",
    "When engaging the enemy, burst once, then immediately spin up.",
    "Prioritize groups of enemies.",
    "Hiding behind teammates is a great strategy for this ship."
    ],
  unicodeChar: "\u{1f7cc}",
  color: "#777777"
};


/*Linker

Attaching more reactors to your fighter will make it heavier, less agile and easier
to hit.

That's why you build another fighter, whose sole purpose is to act as an additional
reactor, one that is piloted by a good pilot, is able to dodge enemy fire and
even fire back.

Meet the Linker by Goldman Aerospace. A medium-light fighter with a shitty weapon
and low DPS, yet capable of sharing its reactor's power with nearby teammates.

Said reactor power doesn't have to be directed into teammate's weapons. The ship
can also act as a mediocre healer, sharing its reactor for recharging teammate
shields.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[9] = {name:"❰𝐆𝐀❱ Linker",cl:"Support",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["GA_Linker"];
  },
  linkerRange: 25,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.linkerMode = 0;
    ship.custom.sprototype.linkerTarget = -1;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.linkerStreamKey = Math.floor(Math.random()*1000000)
    ship.custom.sprototype.linkerStream = GPOTypes[3].create(ship.custom.sprototype.linkerStreamKey);
  },
  randomizeTarget:function(ship){
    possibleLinkerTargets = [];
    for(ss=0;ss<game.ships.length;ss++){
      sh = game.ships[ss];
      if(this.checkIfAValidTarget(ship, sh))
        possibleLinkerTargets.push(ss);
    }
    UISystem.events.pushEvent(ship,"shipConfigChange");
    if(possibleLinkerTargets.length>0)
      return possibleLinkerTargets[Math.floor(Math.random()*possibleLinkerTargets.length)]
    else return -1

  },
  checkIfAValidTarget:function(ship,checkShipAsTarget){
    return checkShipAsTarget.alive&&
    ship!=checkShipAsTarget&&
    checkShipAsTarget.custom.team == ship.custom.team&&
    distance(checkShipAsTarget.x-ship.x,checkShipAsTarget.y-ship.y)<this.linkerRange
  },
  validateTarget:function(ship, p){
    if(p.linkerTarget>=0&&p.linkerTarget<game.ships.length&&
      this.checkIfAValidTarget(ship, game.ships[p.linkerTarget])
    ){
      return true
    }else{
      p.linkerTarget = this.randomizeTarget(ship)
      return false
    }
  },
  tryShowStream:function(ship,show,p){
    try{
      if(GPO[p.linkerStream]==null){
        p.linkerStreamKey = Math.floor(Math.random()*1000000)
        p.linkerStream = GPOTypes[3].create(p.linkerStreamKey);
      }
      GPOTypes[GPO[p.linkerStream].type].update(
        p.linkerStreamKey,GPO[p.linkerStream],ship,show?game.ships[p.linkerTarget]:null,p.linkerMode
      )
    }catch(e){log("Failed to spawn steam")}
  },
  tick:function(ship, sh, p){

    if(p.linkerMode!=0&&this.validateTarget(ship,p)){
      switch(p.linkerMode){
        case 1: shipsInGameData[p.linkerTarget].shieldregen+=3; break;
        case 2: shipsInGameData[p.linkerTarget].energyregen+=1; break;
      }
      sh.energyregen-=1;
      sh.shieldregen-=1;
      this.tryShowStream(ship,true,p)
    }else{
       this.tryShowStream(ship,false,p);
    }

  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        p.linkerMode = 1;
        break;
      case 2:
        p.linkerMode = 2;
        break;
      case 3:
        p.linkerMode = 0;
        break;
      case 4:
        p.linkerTarget = this.randomizeTarget(ship);
        break;
      default:
      log("unknown ability "+abId);
    }
    UISystem.events.pushEvent(ship,"shipConfigChange");
  },
  getAbilities:function(ship,sh,p){
    k = [];


    buffState = 0;
    if(p.buffCooldown>=0){
      buffState = 2;
    }
    //k.push({name:"Defcon",id:1})
    k[1] = {name:"Auxiliary Shield Generator",id:1,
      explanation:"Boost one teammate's shieldregen +5",
      ready: p.linkerMode==1?1:0,
      state: p.linkerMode==0?2:(p.linkerMode==1?0:1)
    }
    k[2] = {name:"Auxiliary Reactor",id:2,
      explanation:"Boost one teammate's energy regen +5",
      ready: p.linkerMode==2?1:0,
      state: p.linkerMode==0?2:(p.linkerMode==2?0:1)
    }
    k[3] = {name:p.linkerMode!=0?"Disable":"Disabled",id:3,
      explanation:"Disable Auxiliary Reactor activity",
      ready: p.linkerMode==0?1:0,
      state: p.linkerMode==0?0:2
    }
    targetname = p.linkerTarget>=0&&p.linkerTarget<game.ships.length?game.ships[p.linkerTarget].name:"error"
    k[4] = {name:p.linkerTarget==-1?"No target":"Switch targets: "+targetname,id:4,
      explanation:"Switch to a different target",
      ready: p.linkerMode!=0?1:0,
      state: p.linkerMode==0?3:0
    }
    return k;
  },
  tips:[
    "The perfect pocket healer - link up with a teammate, and stay close.",
    "Link up with damaged teammates and use ASG to speed up their recovery.",
    "Link up with high-DPS ships and share your reactor to deal a lot of damage.",
    "This ship's fighting capabilities are extremely limited - better than nothing.",
    "Shoot at the enemies if you can, but remember your main purpose"
    ],
  unicodeChar: "\u{26d3}",
  color: "#999999"
};


/*Sidewinder
Light Mobile Turret

Stinger was highly successful, efficient and deadly, and thus, the engineers
behind it decided to expand upon its concept.

And so they did. Sidewinder LMT is the "brother" of Stinger LMT, utilizing
the same(slightly modified) base platform, and swapping two reasonable
pulse weapons for a giant, deadly one, full of recoil.

A mighty fighter. Its recoil may seem like a downside in some rare situations,
but most of the time, it is trully useful. It also allows the ship to
retreat from combat without turning around, and on top of that, the Reentry
ability allows the ship to re-enter combat soon after, fully reshielded and
searching revenge.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[10] = {name:"Sidewinder LMT",cl:"Attack ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["sidewinderLMT"];
  },
  reentryCooldownTime: 60,
  reentryDuration: 4,
  reentryVelocity: 1.5,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.reentryCooldown = this.reentryCooldownTime;
    ship.custom.sprototype.reentryActive = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.reentryCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.reentryActive--;
    if(p.reentryActive>0){
      sh.idle = true
      ship.set({generator:0})
    }else if(p.reentryActive==0){
      ship.set({shield:10000,vx:Math.cos(ship.r)*this.reentryVelocity,vy:Math.sin(ship.r)*this.reentryVelocity})
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.reentryCooldown<0){
          p.reentryCooldown = this.reentryCooldownTime;
          p.reentryActive = this.reentryDuration;
        }
        break;

      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    buffState = 0;
    if(p.reentryActive>=0){
      buffState = 1
    }else
    if(p.reentryCooldown>=0){
      buffState = 2;
    }
    //k.push({name:"Defcon",id:1})
    k[1] = {name:"Battle reentry",id:1,
      explanation:"Temporarily disable self to heal.",
      ready: p.reentryActive>0?(1-p.reentryActive/this.reentryDuration):(1-p.reentryCooldown/this.reentryCooldownTime),
      state: buffState
    }
    return k;
  },
  tips:[
    "Recoil is love, recoil is life.",
    "When maneuvering, utilize your weapon's recoil.",
    "Shields are low? Get out of the battle and prepare for Battle Reentry!",
    "Some battles just don't go the way you want them to. Tactical retreat is a valid option."

    ],
  unicodeChar: "\u{2b40}",
  color: "#4466FF"
};


/*Splitter

Success of Unstablecore did not go unnoticed. Bombers are clearly a great concept,
although their combat strength is somewhat low against fast, small, agile fighters.
They are mainly designed for engaging large, slow targets, and Prototypes tests
kinda lacked those. Yet that considered, Unstablecore turned out to be a worthy
opponent even for agile fighters.

Another problem Unstablecore faced, which is fundamental to all inertial bombers,
is the necessity to direct itself straight at the enemy to make own bomb connect.

Splitter addresses both issues. First, with its alternating-sides bomb
launcher, which features extremely high recoil and reasonable DPS. Being a
broadside weapon, it solves the issue of going at the enemy directly - and
via its recoil, it makes Splitter extremely tough to hit, greatly increasing its
combat potential. Yet, pilots often complain about its alternating nature -
sadly, the protocols of Starblast didn't let the engineers solve that issue
properly.

The former issue is addressed by this ship's Slug Burst, which is an AOE ability
targetting enemy engines. This allows this ship to temporarily turn fast, agile
fighters into worthless slugs, that can then easily and efficiently be bombed.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[11] = {name:"Splitter",cl:"Broadside bomber",company: 5,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["splitter"];
  },
  EMPCooldownTime: 30,
  EMPRange: 15,
  EMPElShutdownTime: 10,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.EMPCooldown = this.EMPCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.EMPCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.EMPCooldown<0){
          p.EMPCooldown = this.EMPCooldownTime;

          //addEffectToShip(ship, 10, this.EMPReactorFailureTime, 2, 10);

          range = this.EMPRange*this.EMPRange;
          for(ss=0;ss<game.ships.length;ss++){
            sh = game.ships[ss];
            xx = sh.x-ship.x;
            yy = sh.y-ship.y;
            xx = xx*xx;
            yy = yy*yy;
            if(xx+yy<range&&sh.custom.team!=ship.custom.team){
              addEffectToShip(sh, 11, this.EMPElShutdownTime, 3, 5);
            }

          }
          GPOTypes[0].create(ship.x,ship.y,ship.custom.team,this.EMPRange,3);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];


    EMPState = 0;
    if(p.EMPCooldown>=0){
      EMPState = 2;
    }
    k[1] = {name:"Slug Burst",id:1,
      explanation:"Temprorarily disrupt enemy engines in range",
      ready: 1-p.EMPCooldown/this.EMPCooldownTime,
      state: EMPState
    }
    return k;
  },
  tips:[
    "Keep your weapon layout in mind while maneuvering.",
    "Your weapons will automatically alternate sides.",
    "Fly by your enemies and sidestep them with bombs.",
    "Use your Slug Burst to make targets easier to hit."
    ],
  unicodeChar: "\u{2948}",
  color: "#00CCFF"
};


/*D-Blast

Sometimes you'd like to maneuver and shoot at the same time. That is possible -
with turrets. Sadly, turrets are only installed onto larger ships: fregates,
battleships, dreadnaughts.

But what if you built a fighter around a turret?

Well, then you'd end up with this thing.

It's a reasonable fighter with a somewhat-boring shape. It is able to rotate its
weapons 360 degrees, thus allowing for unconventional combat maneuvers. Weapons
are powerful and produce a reasonable amount of recoil, which can be utilized
by the aforementioned turret's rotation.

*/

//$fileTape ifFlag prerender
//$fileTape setwriting true

shipsData[12] = {name:"D-Blast",cl:"Defense Ship",company: 5,
  shipCycle: [],
  init: function(){
    this.shipCycle[0] = shipIdsToCodes["d_blast"];
    this.shipCycle[1] = shipIdsToCodes["d_blast0"];
    this.shipCycle[2] = shipIdsToCodes["d_blast1"];
    this.shipCycle[3] = shipIdsToCodes["d_blast2"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:618,stats:66666666,healing:false});
    ship.custom.sprototype.cycle = 0
  },
  /*tick:function(ship, sh, p){
  },*/
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        ship.custom.sprototype.cycle++
        break;
      case 2:
        ship.custom.sprototype.cycle+=2
        break;
      case 3:
        ship.custom.sprototype.cycle--
        break;
      default:
      log("unknown ability "+abId);
    }
    var c = ship.custom.sprototype.cycle;
    ship.custom.sprototype.cycle = ((c % 4) + 4)%4
    ship.set({type:this.shipCycle[ship.custom.sprototype.cycle],stats:ship.custom.lastStats})
    UISystem.events.pushEvent(ship,"shipConfigChange");
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Turn left",id:1,explanation:"Turn the turret 90 degrees to the left",
      ready: 1,
      state: 0
    }
    k[2] = {name:"Flip around",id:2,explanation:"Flip the turret 180 degrees",
      ready: 1,
      state: 0
    }

    k[3] = {name:"Turn right",id:3,explanation:"Turn the turret 90 degrees to the right",
      ready: 1,
      state: 0
    }
    return k;
  },
  tips:[
    "The ultimate turret - choose the aiming configuration that fits you needs best!",
    "Firing straight ahead - simple, classic, reliable.",
    "Broadside drive-by bombing, at your fingertips!",
    "Chased? Or maybe need a boost? Not a problem - turn the turret!",
    "Movement and aiming have never been so detached."
    ],
  unicodeChar: "\u{1f4a0}",
  color: "#00AAFF"
};


/*OnMyPosition
Light Scout Vehicle

Prototypes project was going to get a scout vehicle of its own sooner or later,
and in Jan 4339, it did happen. Sadly, scout vehicles are, by definition, not
designed for combat, which prevented this ship from participating in Prototypes
combat tests initially.

Meanwhile, some other engineers were working on a heavy AI LRA drone, featuring
a state-of-the-art cloaking system. Cloaking worked well, extremely well, in fact -
and that led to an obvious problem. If nobody can see you, and if everbody is trying
to hide as well, you can't really see anybody, either.

Basically, without shining a space flashlight, properly aiming the drone was
out of the question - and shining said flashlight would've made cloaking pointless.

At some point the two groups met and realized: what if we attached engines and
a cockpit to the flashlight, and made it shine back at our LRA drone? Of course,
that still compromises the cloaking somewhat, but not nearly to the extent of
the naive approach.

And so, OnMyPosition gained a purpose on the battlefield. It can still be used
as a scout - it is designed for that task - and it isn't the only scout, hell,
not even the only fighter capable of guiding the LRA drone - but it is the best
suited one for this task. So far.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[13] = {name:"HSV OnMyPosition",cl:"Scout",company: 2,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["LSV_OnMyPosition"];
    this.configs[1] = shipIdsToCodes["LSV_OnMyPosition_barrage"];
  },
  barrageCooldownTime: 60,
  barragePrepareTime: 3,
  barrageDuration: 4,
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 60
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Beacon";
    expl = "Transmit your location to a cloaked heavy LRA";
    if(ship.type == this.configs[1]){
      config = "Barrage Ready!";
      expl = "LRA barrage ready!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "Stay at range. Close combat is suboptimal for this ship.",
    "Transmit the position of your enemies to the cloaked heavy LRA.",
    "Stay behind cover and try not to attract attention.",
    "Barrage is deadly, but hard to use.",
    "Your ship idles for a couple of seconds before the barrage!"
    ],
  unicodeChar: "\u{2bd0}",
  color: "#66DDDD",
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }
};


/*Cupola-defender

A heavy space... jellyfish. I mean, it kinda looks like one, right?

It's a tank. What does that mean? It means extremely large shield capacitors,
exceptionally powerful weapons, and yet, worthless agility.

The ship is a "transformer" technically, but really, it just rotates to better
aim at its targets.

Its ability allows it to redirect its reactor's power either to its pulse weapon,
which hits hard and often, but doesn't accelerate shots too far, or its healing
orbs, that provide an aura of healing around this ship, making it a reasonable,
dare one say great, support/healer.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[14] = {name:"Cupola-defender",cl:"Tank",company: 6,
  trDuration: 5,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["cupolaDefender_main"];
    this.configs[1] = shipIdsToCodes["cupolaDefender_heal"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.trProgress = 0;
    ship.custom.sprototype.trDirection = 0;
  },
  tick:function(ship, sh, p){
    if(p.trDirection>0){
      if(p.trProgress>=this.trDuration)
        p.trDirection = 0
      else
        p.trProgress += 1
    }else if(p.trDirection<0){
      if(p.trProgress<=0)
        p.trDirection = 0
      else
        p.trProgress -= 1
    }
    if(p.trDirection!=0){
      if(p.trProgress>this.trDuration/2)
        ship.set({type:this.configs[1],healing:true,stats:ship.custom.lastStats});
      else ship.set({type:this.configs[0],healing:false,stats:ship.custom.lastStats});
      UISystem.events.pushEvent(ship,"shipConfigChange");
    }
    //log("yeet progress: "+p.trProgress+" direction: "+p.trDirection)
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.trDirection!=0)return;
        if(p.trProgress==0)
          p.trDirection = 1
        else
          p.trDirection = -1
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship, sh, p){
    k = [];
    config = "Blaster";
    expl = "Redirect power to healing orbs";
    if(ship.type == this.configs[1]){
      config = "Station";
      expl = "Redirect power to main weapon";
    }
    //log("yeet"+p.trProgress+":"+this.trDuration)
    k[1] = {name:config,id:1,explanation:expl,
      ready: p.trProgress/this.trDuration,
      state: p.trProgress==0||p.trProgress==this.trDuration?0:1
    }
    return k;
  },
  tips:[
    "An omnidirectional healer - be the heart of your team!",
    "Avoid open areas and engage enemies at point-blank range.",
    "Enemies too far to hit? Switch into healing mode and heal nearby teammates!",
    "This ship heavily relies on teammates for success. Don't play solo.",
    ],
  unicodeChar: "\u{2bca}",
  color: "#2288FF"
};


/*Hotswap Fighter

Sometimes, returning back to home base is just not reasonable. Sometimes, you
need to have the hangar teleported to your position, so that you can switch/tune
your ship here and now.

Teleporting an entire hangar is stupid. Really. But it is possible to teleport
ships, or even their pieces, if said pieces are properly designed.

And that's what Hotswap Fighter is all about.

The Core is a fragile-yet-agile fighter of low DPS, featuring two rapid-ish
medium-recoil weapons. It is built to run away and survive, not to fight.

And most importantly, it is built to dock with HF-Dockables. So far, 2 Dockables
are available:

Heavy Pulse is a nice little heavy fighter, featuring, you guessed it, a heavy
pulse. It has a reasonable amount of ships and decent DPS and agility.

Light Pulse is the opposite. It doesn't really address the fragile-yet-agile
situation of the Core, but it does provide additional DPS and a nice, large
pulse weapon to play with. Oh, and two GIANT, as big as the Core, engines, for
exceptional acceleration.

Upon being critically deshielded, HF doesn't teleport out of the battle; instead,
the disposable(they're really cheap) Dockable channels some of it's remaining
energy into an electronics-disrupting burst, and the other some into Core's shields.
The latter quickly undocks and boosts out of the hussle, just to come back
attached to a new Dockable.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[15] = {name:"Hotswap Fighter",cl:"Multipurpose Vehicle",company: 5,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["hotswapFighter_main"];
    this.configs[1] = shipIdsToCodes["hotswapFighter_equipping"];
    this.configs[2] = shipIdsToCodes["hotswapFighter_heavyPulse"];
    this.configs[3] = shipIdsToCodes["hotswapFighter_lightPulse"];
    this.configs[4] = shipIdsToCodes["hotswapFighter_bomber"];
    this.configs[5] = shipIdsToCodes["hotswapFighter_sniper"];
    this.configs[6] = shipIdsToCodes["hotswapFighter_rammer"];
  },

  ejectReloadDuration: 10,
  ejectDuration: 2,
  ejectAutoAtShield: 200,
  ejectVelocity: 2,

  equipReloadDuration: 40,
  equipDuration: 4,

  /*states:
  0 - nominal
  1 - ejecting
  2 - equipping
  */
  //platforms: [628,637,638,639,640],

  respawn:function(ship, sh, p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
    p.reload = this.equipReloadDuration;
    p.stateProgress = 0;
    p.state = 0;
    p.desiredPlatform = 0;
  },
  tick:function(ship, sh, p){


    p.reload += sp.systems.aliveBooster.getReloadBuff(ship);
    if(ship.type == this.configs[0]){
      if(p.state==2){
        sh.idle = true
        p.stateProgress++;
        if(p.stateProgress>this.equipDuration){
          p.reload = 0
          p.state = 0
          ship.set({type:this.configs[p.desiredPlatform+2],shield:10000,stats:ship.custom.lastStats})
          UISystem.events.pushEvent(ship,"shipConfigChange",2);
        }
      }
    }else{
      if(p.state!=1 && ship.shield<this.ejectAutoAtShield){
        p.state = 1
        p.stateProgress = 0;
       playerLog.pushPlayerLog(ship, "SHIELDS CRITICAL - DOCKABLE EJECT")
      }
      if(p.state==1){
        sh.idle = true
        p.stateProgress++;
        if(p.stateProgress>this.ejectDuration){
          p.reload = 0
          p.state = 0
          ship.set({type:this.configs[0],shield:10000,stats:ship.custom.lastStats,
            vx:Math.cos(ship.r)*this.ejectVelocity,vy:Math.sin(ship.r)*this.ejectVelocity
          })
          UISystem.events.pushEvent(ship,"shipConfigChange",2);
        }
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    if(ship.type == this.configs[0]) {
      switch(abId){
        case 1:
          if(p.reload<this.equipReloadDuration)return;

          p.state = 2; //equipping
          p.stateProgress = 0;
          p.desiredPlatform = 0; //heavy pulse

          break;
        case 2:
            if(p.reload<this.equipReloadDuration)return;

            p.state = 2; //equipping
            p.stateProgress = 0;
            p.desiredPlatform = 1; //light pulse

            break;
        case 3:
            if(p.reload<this.equipReloadDuration)return;

            p.state = 2; //equipping
            p.stateProgress = 0;
            p.desiredPlatform = 2; //bomber

            break;
        case 4:
            if(p.reload<this.equipReloadDuration)return;

            p.state = 2; //equipping
            p.stateProgress = 0;
            p.desiredPlatform = 3; //sniper

            break;

        case 5:
            if(p.reload<this.equipReloadDuration)return;

            p.state = 2; //equipping
            p.stateProgress = 0;
            p.desiredPlatform = 4; //rammer

            break;

        default:
        log("unknown ability "+abId);
      }
    } else {
      switch(abId){
        case 1:
          if(p.reload<this.ejectReloadDuration)return;

          p.state = 1; //manual eject
          p.stateProgress = 0;

          break;
        default:
        log("unknown ability "+abId);
      }
    }
  },
  getAbilities:function(ship, sh, p){

    k = [];

    if(ship.type == this.configs[0]){
      ready = p.reload/this.equipReloadDuration
      state = p.reload/this.equipReloadDuration>0.99?0:2
      if(p.state == 2){
        ready = p.stateProgress/this.equipDuration
        state = 1
      }

      k[1] = {name:"Dockable: Heavy Pulse",id:1,explanation:"Request Heavy Pulse dockable platform",
        ready: ready,
        state: state
      }

      k[2] = {name:"Dockable: Light Pulse",id:2,explanation:"Request Light Pulse dockable platform",
        ready: ready,
        state: state
      }

      k[3] = {name:"Dockable: Bomber",id:3,explanation:"Request Bomber dockable platform",
        ready: ready,
        state: state
      }

      k[4] = {name:"Dockable: Sniper",id:4,explanation:"Request Sniper dockable platform",
        ready: ready,
        state: state
      }

      k[5] = {name:"Dockable: Rammer",id:5,explanation:"Request Rammer dockable platform",
        ready: ready,
        state: state
      }

    }else{
      k[1] = {name:"EJECT",id:1,explanation:"Eject from dockable",
        ready: p.reload/this.ejectReloadDuration,
        state: p.reload/this.ejectReloadDuration>0.99?0:2
      }
    }
    return k;
  },
  tips:[
    "Core fighter is fast and agile - yet not that great for actual combat.",
    "Try to avoid combat while piloting the core.",
    "Core's small size doesn't justify it's trashy combat capabilities.",
    "Heavy Pulse platform - simple, efficient, deadly.",
    "More platforms to be added!"
    ],
  unicodeChar: "\u{21ee}",
  color: "#FF4433",
  augmentUI: function(ship){
    //var data = this;
    var currentStats = sp.shipManager.getCurrentStats(ship);

    if(ship.type!=this.configs[0]&&ship.type!=this.configs[1]){
      var ratio = 200/currentStats["shieldcap"].val;;
      UISystem.autoClearUI.set(ship,
        {id: "shieldBarEject",
        position: [3,10.5,18*ratio,3],
        visible: true,
        components: [
            { type:"box",position:[0,0,100,100],fill:"#CC0000",stroke:"#CC0000",width:2},
            { type: "text",position:[0,0,100,60],value:"AUTO EJECT AT",color:"#000"},
            { type: "text",position:[0,60,100,40],value:""+this.ejectAutoAtShield,color:"#000"}
          ]
        },
        1
      );
    }
  }
};


/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Lobster is a short-range melee/bomber hybrid. It is a Lobster, after all.

With such unconventional weaponry, its combat strength can't be rated too high.
However, it does feature an interesting ability - it is able to retreat in reverse,
allowing for some interesting maneuvers and improving survivability.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[16] = {name:"GA Lobster",cl:"Melee",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["GA_Lobster"];
    this.configs[1] = shipIdsToCodes["GA_Lobster_scoot"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
  },
  tick:function(ship, sh, p){


  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Clack-clack";
    expl = "Close-ranged melee blaster";
    if(ship.type == this.configs[1]){
      config = "Scoot-scoot";
      expl = "Run away from enemies. Backwards.";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Deadly in close-range.",
    "Lobsters can bomb. Apparently.",
    "Under heavy fire? Scoot away!"
    ],
  unicodeChar: "\u{1f980}",
  color: "#FF7700"
};


/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Turtle is a medium-large fighter/rammer, with exceptional survivability.

It is a turtle. A space turtle. While its combat strength can't be rated too
high, where it truly shines is surviving enemy fire. Its Shell it up! ability
lets it tuck its bits and pieces into the shell - just like a real turtle would!
Then, all of its power is directed towards shields, making it incredibly hard to
hit. Sadly, this kind of shielding doesn't last, and thus the prior shield
state is restored when Unshelling.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[17] = {name:"GA Turtle",cl:"Rammer",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["GA_Turtle"];
    this.configs[1] = shipIdsToCodes["GA_Turtle_tucked"];
  },
  tuckReloadDuration: 10,
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.tuckReload = 0
    ship.custom.sprototype.lastShield = 100
  },
  tick:function(ship, sh, p){


    p.tuckReload+=sp.systems.aliveBooster.getReloadBuff(ship);
    if(ship.type==this.configs[1])sh.idle = true
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0]){
          if(p.tuckReload>this.tuckReloadDuration){
            p.lastShield = ship.shield
            ship.set({type:this.configs[1],stats:ship.custom.lastStats,shield:6000});
          }
        }else{
          p.tuckReload = 0
          ship.set({type:this.configs[0],stats:ship.custom.lastStats,shield:Math.min(p.lastShield,ship.shield)});
        }
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];

    config = "Shell it up";
    expl = "Hide from danger";
    if(ship.type == this.configs[1]){
      config = "Unshell";
      expl = "Continue fighting";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[1]?1:(p.tuckReload/this.tuckReloadDuration),
      state: ship.type == this.configs[1]?0:((p.tuckReload/this.tuckReloadDuration>0.99)?0:2)
    }
    return k;
  },
  tips:[
    "Too many enemies to handle? Your shell will keep you alive and well!",
    "In critical situations, don't hesitate to retreat into the shell.",
    "Shelling up doesn't heal you - but it will prevent you from dying, temporarily. Hopefully."
    ],
  unicodeChar: "\u{1f422}",
  color: "#00AA22"
};


/*U-Monitor
Long Range Broadside Artillery

The initial concept of U-Monitor wasn't nothing too exciting, and didn't go too
far. However, after a couple of years, Finalizer gathered his engineers together
to rework this machine.

Although the ship inherited it's predecessor's name, it is a completely different
beast. And it is a beast, indeed. A flammable mixture of a LRA and a broadside
fighter, the new U-Monitor is foe to be feared.

Oh, and as an added bonus, it looks absolutely amazing.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[22] = {name:"U-Monitor",cl:"Broadside LRA",company: 7,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["UMonitor_main"];
    this.configs[1] = shipIdsToCodes["UMonitor_broadside"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
  },
  tick:function(ship, sh, p){


  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Broadside";
    expl = "Switch into Sniper for long range combat";
    if(ship.type == this.configs[0]){
      config = "Sniper";
      expl = "Switch into Broadside for sustained combat";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Broadside has higher DPS"
    ],
  unicodeChar: "\u{1f4fa}",
  color: "#CCCCCC"
};


/*Avalache
Heavy Attack Ship

Every once in a while an organization producing spaceships just goes wild
and pours billions of credits into creating a single, amazing, hi-tech design.

Meet the Avalanche, by Goldman Aerospace. Truly beautiful, truly deadly, truly
complex. A heavy pulse fighter with a large cockpit, which almost bumps it into
fregate territory. Enhanced with cutting-edge technology, and

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[23] = {name:"GA Avalache",cl:"Defense ship",company: 4,
  barrageCooldownTime: 60,
  barragePrepareTime: 3,
  barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["avalanche_pulse"];
    this.configs[1] = shipIdsToCodes["avalanche_barrage"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 60
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Avalanche";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Avalanche Ready!";
      expl = "Avalanche in progress!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "Avalanche is a very powerful, but slowly recharging ability. Use it wisely.",
    ],
  unicodeChar: "\u{2744}",
  color: "#88eeff",
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }
};


/*Avalache
Heavy Attack Ship

Every once in a while an organization producing spaceships just goes wild
and pours billions of credits into creating a single, amazing, hi-tech design.

Meet the Avalanche, by Goldman Aerospace. Truly beautiful, truly deadly, truly
complex. A heavy pulse fighter with a large cockpit, which almost bumps it into
fregate territory. Enhanced with cutting-edge technology, and

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[24] = {name:"LMT 5STARS",cl:"Attack ship",company: 8,
  barrageCooldownTime: 20,
  barragePrepareTime: 3,
  barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["fivestars_pulse"];
    this.configs[1] = shipIdsToCodes["fivestars_barrage"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 20
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Starfire";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Starfire Ready!";
      expl = "Avalanche in progress!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "A decent twin-pulse fighter. With a twist.",
    "You are the rockstar of this show.",
    "Twinkle, twinkle, little star - press [1] to show them who you are!"
    ],
  unicodeChar: "\u{2606}",
  color: "#FFFFFF",
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }
};


/*Avalache
Heavy Attack Ship

Every once in a while an organization producing spaceships just goes wild
and pours billions of credits into creating a single, amazing, hi-tech design.

Meet the Avalanche, by Goldman Aerospace. Truly beautiful, truly deadly, truly
complex. A heavy pulse fighter with a large cockpit, which almost bumps it into
fregate territory. Enhanced with cutting-edge technology, and

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[25] = {name:"Stealth Vehicle Type 1",cl:"Stealth fighter",company: 4,
  barrageCooldownTime: 10,
  barragePrepareTime: 2,
  cloakBurstVelocity: 0.4,
  //barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["stealth1_main"];
    this.configs[1] = shipIdsToCodes["stealth1_cloaked"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 10
    ship.custom.sprototype.barragePrepare = 0
    ship.custom.sprototype.engines = false;
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      /*if(p.barragePrepare <= 1 && !p.decloaking){
        sh.idle = true;
      }*/
      if(!p.engines){
        sh.idle = true;
      }
      if(ship.type == this.configs[1] && p.barragePrepare == 0){
        ship.set({vx:Math.cos(ship.r)*this.cloakBurstVelocity+ship.vx,vy:Math.sin(ship.r)*this.cloakBurstVelocity+ship.vy});
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }else{
          ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
          UISystem.events.pushEvent(ship,"shipConfigChange");
          p.barrageCooldown = this.barrageCooldownTime
        }
        break;
      case 2:
        if(ship.type != this.configs[1]) return;
        p.engines = !p.engines;
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Cloak";
    expl = "They will never see it coming";
    if(ship.type == this.configs[1]){
      config = "Cloaked";
      expl = "Lurking among the shadows.";

      k[2] = {name:p.engines?"Semi-cloak":"Full cloak",id:1,explanation:"Toggle engines to maneuver",
        ready: p.engines?0:1,
        state: p.engines?2:0
      }
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "Engines sadly can't be used while cloaked.",
    "When cloaking, choose a direction to dash in.",
    "Cloaking doesn't remove you from the radar."
    ],
  unicodeChar: "\u{2666}",
  color: "#555555",
  augmentUI: function(ship){
    //TODO: optimize. Events might work, alternatively maybe some kind of a
    //simple ACUI extention that optimizes UI elements with a finite number of
    //states
    if(ship.type==this.configs[1]){
      if(ship.custom.sprototype.engines)
        UISystem.autoClearUI.set(ship,
          {id: "selfShipMarker",
          position: [41,47,18,6],
          visible: true,
          components: [
              { type: "text",position:[33,0,33,100],value:"+",color:"#FF0"},
              { type: "text",position:[0,20,40,60],value:"your name",align:"left",color:"#FF0"},
              { type: "text",position:[60,20,40,60],value:"is visible",align:"right",color:"#FF0"},
            ]
          },
          1
        );
      else
        UISystem.autoClearUI.set(ship,
          {id: "selfShipMarker",
          position: [41,47,18,6],
          visible: true,
          components: [
              { type: "text",position:[0,0,100,100],value:"+",color:"#FFF"},
              { type: "text",position:[0,20,40,60],value:"visible on",align:"left",color:"#FFF"},
              { type: "text",position:[60,20,40,60],value:"radar only",align:"right",color:"#FFF"},
            ]
          },
          1
        );
    }
  }
};


/*Longlegs
Long Range Artillery

Spiders are scary.

But, contrary to its name, this thing is not a spider. It is something much,
much more horrific.

It is a transforming LRA, and it is DEADLY.

The ship features two modes. When shielding is retracted, the ship gains
additional shield capacity and redirects some of its reactor's output towards
shields. Auxiliary accelerators are moved behind the engines, providing
additional acceleration. The weapon is retracted and reconfigured, firing
semi-pulses at a medium rate. This mode is most useful for maneuvering and
reposition, as the DPS doesn't really justify combat.

But when this ship truly shines, is when it is in its Sniper config, which
means extended shielding, lower shield capacity and regen, and yet, much higher
DPS due to extension of main weapon, which now fires powerful pulses
ever so often, and increased turn rate, thanks to moving the auxiliary
accelerators to the side, giving them a much longer arm to act upon.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[26] = {name:"Harbinger",cl:"Attack ship",company: 9,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["harbinger_deployed"];
    this.configs[1] = shipIdsToCodes["harbinger_retracted"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
  },
  tick:function(ship, sh, p){


  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0])
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
        else ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    config = "Interceptor";
    expl = "Switch into Assault for heavy fire";
    if(ship.type == this.configs[0]){
      config = "Assault";
      expl = "Switch into Interceptor for maneuvering";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Interceptor configuration is great for dodging.",
    "Use Assault when heavy firepower is required.",
    ],
  unicodeChar: "\u{29d7}",
  color: "#8800FF"
};


/*Longlegs
Long Range Artillery

Spiders are scary.

But, contrary to its name, this thing is not a spider. It is something much,
much more horrific.

It is a transforming LRA, and it is DEADLY.

The ship features two modes. When shielding is retracted, the ship gains
additional shield capacity and redirects some of its reactor's output towards
shields. Auxiliary accelerators are moved behind the engines, providing
additional acceleration. The weapon is retracted and reconfigured, firing
semi-pulses at a medium rate. This mode is most useful for maneuvering and
reposition, as the DPS doesn't really justify combat.

But when this ship truly shines, is when it is in its Sniper config, which
means extended shielding, lower shield capacity and regen, and yet, much higher
DPS due to extension of main weapon, which now fires powerful pulses
ever so often, and increased turn rate, thanks to moving the auxiliary
accelerators to the side, giving them a much longer arm to act upon.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[27] = {name:"Firebird",cl:"Multipurpose Vehicle",company: 9,
  overchargeReloadDuration: 20,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["wyvernMk2_main"];
    this.configs[1] = shipIdsToCodes["wyvernMk2_pulse"];
    this.configs[2] = shipIdsToCodes["wyvernMk2_emitter"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    p.overchargeReload = 0;
  },
  tick:function(ship, sh, p){

    p.overchargeReload+=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type != this.configs[0]){
          if(ship.type == this.configs[2]) p.overchargeReload = 0;
          ship.set({type:this.configs[0],stats:ship.custom.lastStats});
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      case 2:
        if(ship.type != this.configs[1]){
          if(ship.type == this.configs[2]) p.overchargeReload = 0;
          ship.set({type:this.configs[1],stats:ship.custom.lastStats});
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      case 3:
        if(ship.type != this.configs[2] && p.overchargeReload>this.overchargeReloadDuration){
          ship.set({type:this.configs[2],stats:ship.custom.lastStats});
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    var k = [];
    k[1] = {name:"Bomber",id:1,explanation:"Dive bomb your enemies with heavy bursts",
      ready: ship.type == this.configs[0],
      state: 0
    }
    k[2] = {name:"Pulse",id:2,explanation:"Fire at far-away enemies",
      ready: ship.type == this.configs[1],
      state: 0
    }
    k[3] = {name:"Overcharge",id:3,explanation:"Short-range omnidirectional weapon",
      ready: (ship.type == this.configs[2])?1:(p.overchargeReload/this.overchargeReloadDuration),
      state: (ship.type==this.configs[2])?0:((p.overchargeReload>this.overchargeReloadDuration)?1:2)
    }
    return k;
  },
  tips:[
    "Bomber is the main configuration and is best for combat.",
    "Overcharge can be useful against dense groups.",
    ],
  unicodeChar: "\u{1f409}",
  color: "#22CCAA"
};


/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Turtle is a medium-large fighter/rammer, with exceptional survivability.

It is a turtle. A space turtle. While its combat strength can't be rated too
high, where it truly shines is surviving enemy fire. Its Shell it up! ability
lets it tuck its bits and pieces into the shell - just like a real turtle would!
Then, all of its power is directed towards shields, making it incredibly hard to
hit. Sadly, this kind of shielding doesn't last, and thus the prior shield
state is restored when Unshelling.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[28] = {name:"Shadow Phoenix MK-II",cl:"Attack ship",company: 10,
  barrageCooldownTime: 5,
  barragePrepareTime: 2,
  barrageDuration: 3,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["shadowPhoenix_main"];
    this.configs[1] = shipIdsToCodes["shadowPhoenix_glow"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 6
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        p.barrageCooldown = this.barrageCooldownTime
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Meltdown";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Meltdown Ready!";
      expl = "Meltdown in progress!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "Main configuration has lasers, but is incapable of firing them.",
    "Meltdown can put out a lot of damage quickly.",
    "Meltdown doesn't take too long to reload, but still, use it wisely."
    ],
  unicodeChar: "\u{2bcd}",
  color: "#FFCC00"
  /*,
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }*/
};


/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Turtle is a medium-large fighter/rammer, with exceptional survivability.

It is a turtle. A space turtle. While its combat strength can't be rated too
high, where it truly shines is surviving enemy fire. Its Shell it up! ability
lets it tuck its bits and pieces into the shell - just like a real turtle would!
Then, all of its power is directed towards shields, making it incredibly hard to
hit. Sadly, this kind of shielding doesn't last, and thus the prior shield
state is restored when Unshelling.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[29] = {name:"VirtualBlade",cl:"Melee",company: 7,
  barrageCooldownTime: 7,
  barragePrepareTime: 2,
  barrageDuration: 3,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["virtualBlade_main"];
    this.configs[1] = shipIdsToCodes["virtualBlade_blade"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 6
    ship.custom.sprototype.barragePrepare = 0
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      //if(p.barragePrepare <= 1)
      //  sh.idle = true;
      if(ship.type == this.configs[1] && p.barragePrepare == 0)
        ship.set({generator:50000});
      if(p.barragePrepare<-this.barrageDuration){
        ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
        UISystem.events.pushEvent(ship,"shipConfigChange");
        p.barrageCooldown = this.barrageCooldownTime
      }
    }
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type==this.configs[0] && p.barrageCooldown>1)return;
        p.hasTransformed = true;
        if(ship.type == this.configs[0]){
          ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:0});
          p.barrageCooldown = this.barrageCooldownTime
          p.barragePrepare = this.barragePrepareTime
          UISystem.events.pushEvent(ship,"shipConfigChange");
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Extend blade";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Projecting blade!";
      expl = "Slash them up!";
    }
    var ready = 0.5
    var state = 4

    if(ship.type == this.configs[0]){
      ready = 1-(p.barrageCooldown/this.barrageCooldownTime)
      state = 2
      if(ready >= 1)
        state = 0
    }
    else {
      if(p.barragePrepare>0){
        ready = 1-(p.barragePrepare/this.barragePrepareTime)
        state = 1
      }else{
        ready = 1-(-p.barragePrepare/this.barrageDuration)
        state = 1
      }
    }


    k[1] = {name:config,id:1,explanation:expl,
      ready: ready,
      state: state
    }
    return k;
  },
  tips:[
    "The main configuration is a reasonable fighter. But the blade is deadlier."
    ],
  unicodeChar: "\u{1f5e1}",
  color: "#AAAAAA"
  /*,
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }*/
};


/*Lobster

The enginers at Goldman Aerospace must've been very bored, when they decided to
design a bunch of fish-like space combat vehicles. They designed a whole lot of
them, and called them Nautic-Series. Two of said fighters have been approved for
participation in Prototypes combat tests.

Turtle is a medium-large fighter/rammer, with exceptional survivability.

It is a turtle. A space turtle. While its combat strength can't be rated too
high, where it truly shines is surviving enemy fire. Its Shell it up! ability
lets it tuck its bits and pieces into the shell - just like a real turtle would!
Then, all of its power is directed towards shields, making it incredibly hard to
hit. Sadly, this kind of shielding doesn't last, and thus the prior shield
state is restored when Unshelling.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

shipsData[30] = {name:"GA Fusionburner",cl:"Defense ship",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["fusionburner_main"];
    this.configs[1] = shipIdsToCodes["fusionburner_burst"];
  },
  burnReloadDuration: 20,
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.burnReload = 0

  },
  tick:function(ship, sh, p){
    p.burnReload+=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(ship.type == this.configs[0]){
          if(p.burnReload>this.burnReloadDuration){
            ship.set({type:this.configs[1],stats:ship.custom.lastStats,generator:6000});
          }
        }else{
          p.burnReload = 0
          ship.set({type:this.configs[0],stats:ship.custom.lastStats});
        }
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];

    config = "Burner charging";
    expl = "Preparing to unleash the beast!";
    if(ship.type == this.configs[1]){
      config = "Burn them all!";
      expl = "Heavy shotgun artillery!";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[1]?1:(p.burnReload/this.burnReloadDuration),
      state: ship.type == this.configs[1]?0:((p.burnReload/this.burnReloadDuration>0.99)?0:2)
    }
    return k;
  },
  tips:[
    "Burner is extremely deadly against groups.",
    "Burner is best suited for close-range combat"
    ],
  unicodeChar: "\u{2b4d}",
  color: "#FF8800"
};


/*Hyperspeedsters

Agility is key - that is the consensus among all great pilots. Hyperspeedsters
by Goldman Aerospace follow that principle. Impressively large fighters with
great agility, powerful reactors, and decent shields. They're not really a part
of Prototypes project, but they are valid combat vehicles and since January 4339
they are allowed to participate in Prototypes combat tests.

All Hyperspeedsters are able to engage Reroute ability, boosting their engines
even further at the cost of their reactor's power.

All ships are rather heavy, and most are equipped with shotgun-like weapons.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting true

var hyperspeedstersTips = [
  "Hyperspeedsters are agile. Dodge.",
  "Utilize your Reroute ability when additional maneuverability is required."
]

shipsData[18] = {name:"Roc Birdt D-70",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["rocBirdtD70"];
  },
  boosterCooldownTime: 20,
  boosterEffectTime: 10,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;
          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.owlPS = owlPS;
if(!startSettings.prerenderShips) showcaseShips[19] = owlPS;
shipsData[19] = {name:"Owl PS",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["owlPS"];
  },
  boosterCooldownTime: 10,
  boosterEffectTime: 6,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.thunderbirdPD70 = thunderbirdPD70;
if(!startSettings.prerenderShips) showcaseShips[20] = thunderbirdPD70;
shipsData[20] = {name:"Thunderbird PD-70",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["thunderbirdPD70"];
  },
  boosterCooldownTime: 15,
  boosterEffectTime: 10,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};

if(!startSettings.prerenderShips) gameplayShips.wyvernWX = wyvernWX;
if(!startSettings.prerenderShips) showcaseShips[21] = wyvernWX;
shipsData[21] = {name:"Wyvern VX",cl:"Hyperspeedster",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["wyvernWX"];
  },
  boosterCooldownTime: 45,
  boosterEffectTime: 8,
  respawn:function(ship,sh,p){
    ship.custom.sprototype.cooldown = this.boosterCooldownTime;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
    p.cooldown--;
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        if(p.cooldown<0){
          p.cooldown = this.boosterCooldownTime;

          addEffectToShip(ship, 10, this.boosterEffectTime, 1, 10);
          addEffectToShip(ship, 9, this.boosterEffectTime, 3, 10);
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    var state = 0;
    if(p.cooldown>=0){
      state = 2;
    }
    k[1] = {name:"HYPERSPEED Reroute",id:1,
      explanation:"Reroute energy from reactor to engines",
      ready: 1-p.cooldown/this.boosterCooldownTime,
      state: state
    }
    return k;
  },
  tips: hyperspeedstersTips,
  unicodeChar: "\u{27ff}",
  color: "#FF2200"
};



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

var addEffectToShip = function(ship, type, duration, strength, priority, debug = false){
  if(ship.custom.effects!=null){
    var lowerPriority = -1;
    for(var e=0;e<durationEffectsPerShip;e++){
      if(ship.custom.effects[e]==null){
        ship.custom.effects[e] = {};
        ship.custom.effects[e].duration = duration;
        ship.custom.effects[e].strength = strength;
        ship.custom.effects[e].type = type;
        ship.custom.effects[e].priority = priority;
        if(debug)log("added effect as "+e);
        return;
      }else
      if(ship.custom.effects[e].type == type){
        var d = ship.custom.effects[e].duration;
        var s = ship.custom.effects[e].strength;
        if(d*s<duration*strength){
          if(duration>d){
            ship.custom.effects[e].duration = duration;
            ship.custom.effects[e].strength = strength;
            ship.custom.effects[e].type = type;
            ship.custom.effects[e].priority = priority;
            if(debug)log("updated effect "+e+", increasing duration");
            return;

          }else{
            var s = duration*strength/d
            ship.custom.effects[e].strength = s;
            ship.custom.effects[e].type = type;
            ship.custom.effects[e].priority = priority;
            if(debug)log("updated effect "+e+", recalculating strength");
            return;
          }
        }else return;
      }else if(ship.custom.effects[e].priority<priority&&ship.custom.effects[e].priority<ship.custom.effects[lowerPriority].priority){
        lowerPriority = e;
      }
    }
    if(lowerPriority!=-1){
      var e = lowerPriority;
      ship.custom.effects[e].duration = duration;
      ship.custom.effects[e].strength = strength;
      ship.custom.effects[e].type = type;
      ship.custom.effects[e].priority = priority;
      if(debug)log("overridden lower priority effect "+e);
      return;
    }

  }else{
    if(debug)log("effects array init");
    ship.custom.effects = [];
    ship.custom.effects.push({type:type, duration:duration, strength:strength, priority:priority});
  }
}

var effectTypes = [];

effectTypes[0] = {
  name:"Dummy",
  apply:function(shipdata, effectdata){
    //why not?
    return shipdata;
  },
  FX: {
    colBkg: "#000000",
    colFrg: "#AAAAAA",
    char: "#",
    shortName: "DUM"
  }
};

effectTypes[1] = {
  name:"Shield Capacity Boost",
  apply:function(shipdata, effectdata){
    shipdata.shieldcap += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#000055",
    colFrg: "#2222CC",
    char: "\u{1f6e1}",
    shortName: "ShCap"
  }
};

effectTypes[2] = {
  name:"Energy Capacity Boost",
  apply:function(shipdata, effectdata){
    shipdata.energycap += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#333388",
    colFrg: "#CCCC00",
    char: "\u{1f50b}",
    shortName: "ECap"
  }
};

effectTypes[3] = {
  name:"Shield Regen Boost",
  apply:function(shipdata, effectdata){
    shipdata.shieldregen += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#000055",
    colFrg: "#2222CC",
    char: "\u{1f6e1}+",
    shortName: "ShRg"
  }
};

effectTypes[4] = {
  name:"Energy Regen Boost",
  apply:function(shipdata, effectdata){
    shipdata.energyregen += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#555500",
    colFrg: "#FFFF33",
    char: "\u{26a1}",
    shortName: "ERg"
  }
};

effectTypes[5] = {
  name:"Shield Disruption",
  apply:function(shipdata, effectdata){
    shipdata.shieldcap -= effectdata.strength;
    shipdata.shieldregen -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550000",
    colFrg: "#FFFF33",
    char: "\u{1f6e1}",
    shortName: "ShDrp"
  }
};

effectTypes[6] = {
  name:"Electronics Shutdown",
  apply:function(shipdata, effectdata){
    shipdata.idle = true;
    return shipdata;
  },
  FX: {
    colBkg: "#002255",
    colFrg: "#2222AA",
    char: "\u{2745}",
    shortName: "EShut"
  }
};

effectTypes[7] = {
  name:"Bullet Speed Boost",
  apply:function(shipdata, effectdata){
    shipdata.bspeed += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#552200",
    colFrg: "#FFAA00",
    char: "\u{27b6}",
    shortName: "BSpd"
  }
};

effectTypes[8] = {
  name:"Damage Boost",
  apply:function(shipdata, effectdata){
    shipdata.damage += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550000",
    colFrg: "#FF3333",
    char: "\u{1f4a5}",
    shortName: "Dmg"
  }
};

effectTypes[9] = {
  name:"Agility Boost",
  apply:function(shipdata, effectdata){
    shipdata.agility += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550055",
    colFrg: "#FF00FF",
    char: "\u{1f680}",
    shortName: "Agi"
  }
};

effectTypes[10] = {
  name:"Reactor Disruption",
  apply:function(shipdata, effectdata){
    shipdata.energyregen -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#BB0000",
    colFrg: "#440000",
    char: "\u{2622}",
    shortName: "EDrp"
  }
};

effectTypes[11] = {
  name:"Agility Disruption",
  apply:function(shipdata, effectdata){
    shipdata.agility -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#220022",
    colFrg: "#FF0055",
    char: "\u{1f680}",
    shortName: "AgDrp"
  }
};

var GPOTypes = [];

GPOTypes[0] = {
  name:"AOERange",
  create:function(x, y, team, range, duration){
    data = {};
    data.type = 0;
    data.team = team;
    data.destroyTimer = duration;
    data.range = range;
    data.x = x;
    data.y = y;
    addGPO(data);

  },
  spawn:function(data){
    marker ={
      id: "AOEMarkerGeneric"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true
    } ;
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-10+2*Math.random()},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:data.range*2,y:data.range*2,z:data.range*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoAOE"+data.objId);
  },
  tick:function(data){

  }
}

GPOTypes[1] = {
  name:"Firewall Pod",
  AOERange: 5,
  create:function(x, y, team){
    data = {};
    data.type = 1;
    data.team = team;
    data.destroyTimer = 10;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){

    asset = {
      id: "firewallPod"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/starblast-1532455530031.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFF8040
    } ;
    marker ={
      id: "bchgHealingStationAOE"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true
    } ;
    /*asset = {
      id: "firewallPod"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/present.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFF8040
    } ;

    asset.specularColor = teams[data.team].color;*/
    asset.emissiveColor = teams[data.team].color;
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoFWPod"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:-3},
      rotation: {x:Math.PI*2*Math.random(),y:Math.PI*2*Math.random(),z:Math.PI*2*Math.random()},
      scale: {x:1,y:1,z:1}
    }) ;
    game.setObject({
      id: "gpoFWPodAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-7+Math.random()*2},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:this.AOERange*2,y:this.AOERange*2,z:this.AOERange*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoFWPod"+data.objId);
    game.removeObject("gpoFWPodAOE"+data.objId);
  },
  tick:function(data){
    range = this.AOERange;

    range = range*range;
    for(ss=0;ss<game.ships.length;ss++){
      sh = game.ships[ss];
      xx = sh.x-data.x;
      yy = sh.y-data.y;
      xx = xx*xx;
      yy = yy*yy;
      if(xx+yy<range&&data.team!=sh.custom.team){
        addEffectToShip(sh, 5, 5, 2, 3);
      }

    }

  }
}

GPOTypes[2] = {
  name:"Burstcharger Healing Station",
  AOERange: 25,
  create:function(x, y, team){
    data = {};
    data.type = 2;
    data.team = team;
    data.destroyTimer = 15;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){
    possibleLightsColors = [0xFF0000,0xFFFF00,0xFF00FF,0x00FFFF,0xFFCC00,0xFF22CC]
    asset = {
      id: "bchgHealingStation"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/starblast-1532575075281.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0x00CC00
    } ;
    /*star = {
      id: "pineTreeStar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreestar.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFFFF00
    } ;
    lights = []
    for(var i = 0; i<possibleLightsColors.length; i++)
    lights[i] = {
      id: "pineTreeLights"+i+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreelights.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: possibleLightsColors[i],
      emissiveColor: possibleLightsColors[i]
    } ;*/
    marker ={
      id: "bchgHealingStationAOE"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true

    } ;
    asset.emissiveColor = teams[data.team].color;
    /*game.setObject({
      id: "gpoHealStation"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:Math.PI/2,z:0},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    game.setObject({
      id: "gpoHealStationStar"+data.objId,
      type: star,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:Math.PI/2,z:0},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    for(var i = 0; i<4; i++)
    game.setObject({
      id: "gpoHealStationLights"+i+data.objId,
      type: lights[Math.floor(Math.random()*lights.length)],
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:0,z:Math.random()*2*Math.PI},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;*/
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoHealStation"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:0,z:Math.PI*2*Math.random()},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    game.setObject({
      id: "gpoHealStationAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-3},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:this.AOERange*2,y:this.AOERange*2,z:this.AOERange*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoHealStation"+data.objId);
    //game.removeObject("gpoHealStationStar"+data.objId);
    //for(var i = 0; i<4; i++)
    //game.removeObject("gpoHealStationLights"+i+data.objId);
    game.removeObject("gpoHealStationAOE"+data.objId);
  },
  tick:function(data){

    range = this.AOERange;

    range = range*range;
    for(ss=0;ss<shipsInGameData.length;ss++){
      sh = shipsInGameData[ss];
      xx = sh.x-data.x;
      yy = sh.y-data.y;
      xx = xx*xx;
      yy = yy*yy;
      if(xx+yy<range&&data.team==sh.team){
        sh.shieldregen += 3;
      }

    }


  }
}

GPOTypes[3] = {
  name:"LinkerStream",
  create:function(key){
    data = {};
    data.type = 3;
    //data.team = 0;
    data.destroyTimer = 10;
    data.key = key;
    //data.x = x;
    //data.y = y;
    return addGPO(data);
  },
  spawn:function(data){
    if(!data.updated)return
    linkerStreamEn = {
      id: "linkerTestEn",
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/linkerStream.png",
      emissiveColor: 0xFFCC00,
    } ;
    linkerStreamSh = {
      id: "linkerTestSh",
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/linkerStream.png",
      emissiveColor: 0x00CCCC,
    } ;
    dist = distance(data.source.x-data.target.x,data.source.y-data.target.y)
    ang = Math.atan2(data.source.x-data.target.x,data.source.y-data.target.y)
    game.setObject({
      id: "gpoLinker"+data.objId,
      type: data.mode==2?linkerStreamEn:linkerStreamSh,
      position: {x:(data.source.x+data.target.x)/2,y:(data.source.y+data.target.y)/2,z:0},
      rotation: {x:Math.PI/2,y:-ang+Math.PI/2,z:0},
      scale: {x:dist/2,y:1,z:1}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoLinker"+data.objId);
  },
  tick:function(data){
    if(data.updated&&data.target!=null){
      if(data.mode!=data.lastMode)
        this.removeObj(data)
      this.spawn(data)
    }else{
      this.removeObj(data)
    }
    data.updated = false
    data.lastMode = data.mode
  },
  update:function(key,data,source,target,mode){
    if(key!=data.key){log("wrong key!");return}
    data.destroyTimer = 10;
    data.updated = true
    data.source = source
    data.target = target
    data.mode = mode
  }
}

GPOTypes[4] = {
  name:"Decorated pine tree in the middle of the map",
  lightsChangeTimer: 10,
  create:function(x, y, team){
    data = {};
    data.type = 4;
    data.team = team;
    data.destroyTimer = 15;
    data.changeTimer = 0
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){
    possibleLightsColors = [0xFF0000,0xFFFF00,0xFF00FF,0x00FFFF,0xFFCC00,0xFF22CC]
    asset = {
      id: "bchgHealingStation"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetree.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0x00CC00
    } ;
    star = {
      id: "pineTreeStar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreestar.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFFFF00
    } ;
    this.lights = []
    for(var i = 0; i<possibleLightsColors.length; i++)
    this.lights[i] = {
      id: "pineTreeLights"+i+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreelights.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: possibleLightsColors[i],
      emissiveColor: possibleLightsColors[i]
    };
    asset.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "pineTree"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:10},
      rotation: {x:0/*Math.PI*2*Math.random()*/,y:Math.PI/2,z:0},
      scale: {x:7.5,y:7.5,z:7.5}
    }) ;
    game.setObject({
      id: "pineTreeStar"+data.objId,
      type: star,
      position: {x:data.x,y:data.y,z:10},
      rotation: {x:0/*Math.PI*2*Math.random()*/,y:Math.PI/2,z:0},
      scale: {x:7.5,y:7.5,z:7.5}
    }) ;
    data.changeTimer = 10000;
    this.tick(data);
  },
  removeObj:function(data){
    game.removeObject("pineTree"+data.objId);
    game.removeObject("pineTreeStar"+data.objId);
    for(var i = 0; i<7; i++)
    game.removeObject("pineTreeLights"+i+data.objId);
    //game.removeObject("gpoHealStationAOE"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
    data.changeTimer++;
    if(data.changeTimer>this.lightsChangeTimer){
      for(var i = 0; i<7; i++)
      game.removeObject("pineTreeLights"+i+data.objId);
      data.changeTimer = 0;
      for(var i = 0; i<7; i++)
      game.setObject({
        id: "pineTreeLights"+i+data.objId,
        type: this.lights[Math.floor(Math.random()*lights.length)],
        position: {x:data.x,y:data.y,z:10},
        rotation: {x:0/*Math.PI*2*Math.random()*/,y:0,z:(i/7)*2*Math.PI},
        scale: {x:7.5,y:7.5,z:7.5}
      }) ;
    }
  }
}

//TODO: really should refactor this shit
GPOTypes[5] = {
  name:"Ship hangar",
  create:function(x, y, team){
    data = {};
    data.type = 5;
    data.team = team;
    data.destroyTimer = 15;
    data.x = x;
    data.y = y;
    return addGPO(data);
  },
  spawn:function(data){
    var asset = {
      id: "hangar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/sprototypes-hangar-concept.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png"
      //specularColor: 0x00CC00
    } ;
    asset.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "hangar"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:-2},
      rotation: {x:0,y:0,z:data.x<0?0:Math.PI},
      scale: {x:5,y:5,z:5}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("hangar"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
  }
}

GPOTypes[6] = {
  name:"cube",
  create:function(x, y, xsize, ysize, angle = 0){
    data = {};
    data.type = 6;
    data.xsize = xsize;
    data.ysize = ysize;
    data.destroyTimer = 5;
    data.angle = angle;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  asset: {
    id: "cube",
    obj: "https://starblast.data.neuronality.com/mods/objects/cube/cube.obj",
    diffuse: "https://starblast.data.neuronality.com/mods/objects/cube/diffuse.jpg",
    emissive: "https://starblast.data.neuronality.com/mods/objects/cube/emissive.jpg",
    bump: "https://starblast.data.neuronality.com/mods/objects/cube/bump.jpg",
    emissiveColor: 0x80FFFF,
    specularColor: 0x805010,
    diffuseColor:0xFF8080,
  },
  spawn:function(data){
    game.setObject({
      id: "gpoCube"+data.objId,
      type: this.asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:data.angle,z:0},
      scale: {x:data.xsize,y:data.ysize,z:1}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoCube"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
  }
}

var GPO = [];
var GPOUniqueId = 0;

var removeGPO = function(id){
  if(GPO[id]!=null){
    if(GPOTypes[GPO[id].type])
      GPOTypes[GPO[id].type].removeObj(GPO[id]);
    else log("ERROR ["+getTime()+"] Unknown GPO type: "+GPO[id].type)
    delete GPO[id];
  }else log("ERROR ["+getTime()+"] GPO does not exist - tried to remove GPO["+GPO[id].type+"]")
}

var respawnGPO = function(id){
  if(GPO[id])
  if(GPOTypes[GPO[id].type]){
    GPOTypes[GPO[id].type].removeObj(GPO[id]);
    GPOTypes[GPO[id].type].spawn(GPO[id]);
  } else log("ERROR ["+getTime()+"] Unknown GPO type: "+GPO[id].type)
}

var addGPO = function(data){
  data.objId = GPOUniqueId;
  GPOUniqueId++;
  GPO[data.objId] = data;
  GPOTypes[data.type].spawn(data);
  return data.objId;
}

var distance = function(x, y){
  return Math.sqrt(x*x+y*y);
};

var killFeed = [];

var killFeedLength = 5;

var killFeedStartFadeAtSeconds = 5;
var killFeedFadeSeconds = 10;

for(var i=0; i<killFeedLength; i++)
killFeed.push({killer:"",kcol:"",cause:-1,victim:"",vcol:"",time:killFeedFadeSeconds});

var specialKillCauses = [];
specialKillCauses[-2] = "\u{1f4e1}"
specialKillCauses[-3] = "\u{1f5d8}"
specialKillCauses[-4] = "\u{1f5d8}"

var secondPassedKillFeed = function(){
  comps = [];
  for(l=0;l<killFeedLength;l++){
    /*if(ship.custom["plog"+l]==null){
      ship.custom["plog"+l]="";
      ship.custom["plogt"+l]=0;*/
    //}else{
      killFeed[l].time++;
      var fade =
        1.0-
        (killFeed[l].time-killFeedStartFadeAtSeconds)/
        (killFeedFadeSeconds-killFeedStartFadeAtSeconds);
      fade = Math.min(fade,1.0);
      fade = Math.max(fade,0.0);

      //log(fade);
      if(fade<0.1)continue;

      var cause = killFeed[l].cause;

      var causeChar = "?";
      var causeCol = "#FFFFFF";
      if(cause<0){
        if(specialKillCauses[cause]!=null)
          causeChar = specialKillCauses[cause];
      }
      if(cause>=0&&shipsData[cause]!=null){
        causeChar = shipsData[cause].unicodeChar;
        causeCol = shipsData[cause].color;
      }

      comps.push({ type: "text",
      position: [0,l*(100/killFeedLength),40,100/killFeedLength],
      color: killFeed[l].kcol,
      value: killFeed[l].killer})
      comps.push({ type: "text",
      position: [60,l*(100/killFeedLength),40,100/killFeedLength],
      color: killFeed[l].vcol,
      value: killFeed[l].victim})
      comps.push({ type: "text",
      position: [40,l*(100/killFeedLength),20,100/killFeedLength],
      color: causeCol,
      value: causeChar})
    //}
  }

  for(var s=0;s<game.ships.length;s++){
    var ship = game.ships[s];
    ship.setUIComponent({
    id:"killFeed",
    position:[60,75,15,20],
    clickable: false,
    visible: true,
    components:comps
    });
  }
}

var specialKillCausesVerbose = [];
specialKillCausesVerbose[-3] = " chose another ship";
specialKillCausesVerbose[-2] = " got blasted by the base";
specialKillCausesVerbose[-1] = " died for unknown reasons";
specialKillCausesVerbose[-4] = " switched teams";

var pushKillFeed = function(killer, kcol, cause, victim, vcol){
  for(var j=killFeedLength-1;j>0;j--){
    killFeed[j]=killFeed[j-1];
  }
  killFeed[0] = {};
  killFeed[0].killer = killer;
  killFeed[0].cause = cause;
  killFeed[0].victim = victim;
  killFeed[0].kcol = kcol;
  killFeed[0].vcol = vcol;
  killFeed[0].time = 0;
  if(cause>-1){
    log("KF ["+getTime()+"] "+victim+" was killed by "+killer+" using "+shipsData[cause].name);
  }else{
    var s = " what the?!";
    if(specialKillCausesVerbose[cause]!=null){
      s = specialKillCausesVerbose[cause];
    }
    log("KF ["+getTime()+"] "+victim+specialKillCausesVerbose[cause]);
  }
}

var playerLog = {
  length: 6,
  fadeSeconds: 10,
  startFadeAtSeconds: 5,
  playerLogLength: 6,

  secondPassedPlayerLog: function(ship){

    if(ship.custom.plog==null){
      ship.custom.plog = {messages:[]}
    }
    for(var l=0;l<this.playerLogLength;l++){
      if(ship.custom.plog.messages[l]==null){
        ship.custom.plog.messages[l] = {content: "", time: 0}
      }else{
        var msg = ship.custom.plog.messages[l];
        msg.time++
        var comps = [];

        /*var fade =
          1.0-
          (ship.custom["plogt"+l]-this.startFadeAtSeconds)/
          (this.fadeSeconds-this.startFadeAtSeconds);
        fade = Math.min(fade,1.0);
        fade = Math.max(fade,0.0);

        if(fade<0.1)continue;
        */
        //var col = "#FFFFFF"+Math.floor(fade*255).toString(16).toUpperCase();
        var col = "#FFFFFF"
        var updateChat = false;
        if(typeof msg.content == "string") {
          comps.push({ type: "text",position: [0,0,100,100],color: col,value: msg.content})
        }else{
          var msgData = sp.systems.globalChat.getMsg(msg.content.id)
          /*if(msg.updated){
            updateChat = true;
          }*/
          updateChat = true;
          comps.push({ type: "text",position: [0,0,20,100],color:msgData.color,
          value: msgData.sender})
          for(var i = 0; i<msgData.render.length; i++){
            comps.push({ type: "text",position: [30+(70/8)*i,0,70/8,60],color:msgData.color,
            value: msgData.render[i].symbol})
            comps.push({ type: "text",position: [30+(70/8)*i,60,70/8,40],color:msgData.color,
            value: msgData.render[i].text})
          }

        }

        if(updateChat||UISystem.events.shouldRedraw(ship,["playerLogUpdate"]))
          ship.setUIComponent({
          id:"playerLog"+l,
          position:[2,85-l*(25/this.playerLogLength),25,25/this.playerLogLength],
          clickable: false,
          visible: true,
          components:comps
          });
      }
    }


  },

  pushPlayerLog: function(ship, content, logToConsole = true){
    if(ship.custom.plog==null)
      return;
    for(j=this.playerLogLength-1;j>0;j--){
      ship.custom.plog.messages[j]=ship.custom.plog.messages[j-1];
    }
    ship.custom.plog.messages[j] = {content: content, time: 0}
    if(logToConsole&&typeof content == 'string')
      log("MSG ["+getTime()+"] @"+ship.name+": "+content);
    UISystem.events.pushEvent(ship,"playerLogUpdate");
    //should maybe handle somehow?
    //else
      //log("CHAT ["+getTime()+"] "+ship.name+": "+content);
  },

  pushPlayerLogTeam: function(content, tt){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      if(ship.custom.team!=tt)continue;

     playerLog.pushPlayerLog(ship, content, false);

    }
    if(typeof content == 'string')
      log("MSG-TEAM ["+getTime()+"] @"+teams[tt].name+": "+content);
  },

  pushPlayerLogTeamOrProximity: function(content, tt, x, y){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      /*if(ship.custom.team==tt)
        content.source = "TEAM"
      else if(distance(ship.x-x,ship.y-y)<100)
        content.source = "PROXIMITY"
      else continue;*/
      if(ship.custom.team!=tt&&distance(ship.x-x,ship.y-y)>100)continue;

      playerLog.pushPlayerLog(ship, content, false);

    }
    if(typeof content == 'string')
      log("MSG-TEAM ["+getTime()+"] @"+teams[tt].name+": "+content);
  },

  pushPlayerLogAll : function(content){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      playerLog.pushPlayerLog(ship, content, false);

    }

    if(typeof content == 'string')
      log("MSG-ALL ["+getTime()+"] "+content);
  }
}

/*vocabulary = [
      { text: "You", icon:"\u004e", key:"O" },
      { text: "Me", icon:"\u004f", key:"E" },
      { text: "Yes", icon:"\u004c", key:"Y" },
      { text: "No", icon:"\u004d", key:"N" },

      { text: "Attack", icon:"\u00bd", key:"A" },
      { text: "Follow", icon:"\u0050", key:"F" },
      //{ text: "Objective", icon:"\u0044", key:"M" },
      { text: "Defend", icon:"\u0025", key:"D" },

      { text: "Wait", icon:"\u0048", key:"T" },
      { text: "Kill", icon:"\u005b", key:"K" },
      { text: "Objective", icon:"\u{1f6a9}", key:"B" },
      { text: "Hmm", icon:"\u004b", key:"Q" },

      { text: "Heal", icon:"\u0037", key:"H" },

      { text: "Good Game", icon:"GG", key:"G" },
      { text: "No Prob", icon:"\u0047", key:"P" },
      { text: "Thanks", icon:"\u0041", key:"X" },
      { text: "Sorry", icon:"\u00a1", key:"S" }
    ] ;*/

//TODO: merge with playerlog system... maybe?
//TODO: flush messages every now and then

if(startSettings.globalChat){
  sp.systems.globalChat = {
    vocabulary: {
      O:{shortcut: "O", symbol:"\u{1f446}", text:"You"},
      E:{shortcut: "E", symbol:"\u{1f447}", text:"Me"},
      Y:{shortcut: "Y", symbol:"\u{1f44d}", text:"Yes"},
      N:{shortcut: "N", symbol:"\u{1f44e}", text:"No"},

      T:{shortcut: "T", symbol:"\u{270b}", text:"Wait"},
      K:{shortcut: "K", symbol:"\u{1f480}", text:"Kill"},
      B:{shortcut: "B", symbol:"\u{1f6a9}", text:"Objective"},
      Q:{shortcut: "Q", symbol:"?", text:"Hmm?"},

      A:{shortcut: "A", symbol:"\u{1f5e1}", text:"Attack"},
      F:{shortcut: "F", symbol:"\u{1f885}", text:"Follow"},
      D:{shortcut: "D", symbol:"\u{1f6e1}",text:"Defend"},

      H:{shortcut: "H", symbol:"\u{2719}",text:"Heal"},

      G:{shortcut: "G", symbol:"GG", text:"Good Game"},
      P:{shortcut: "P", symbol:"\u{270c}", text:"No Prob"},
      X:{shortcut: "X", symbol:"\u{1f60a}", text:"Thanks"},
      S:{shortcut: "S", symbol:"\u{1f61e}", text:"Sorry"},
    },
    combos:[
      {combo: ["O","O"], symbol:"\u{1f46a}", text:"Y'all"},
      {combo: ["Y","Y","Y","Y"], symbol:"\u{1f386}", text:"Yeah!"},
      {combo: ["Q","Q","Q","Q"], symbol:"?!", text:"WTF?!"},
      {combo: ["F","F"], symbol:"\u{1f91d}", text:"Help"},
      {combo: ["G","G"], symbol:"GGWP", text:""},
      {combo: ["N","O"], symbol:"\u{2b8d}", text:"NO U"},
    ],
    messageBuffer: {
      //sample message, "Y'all GG":
      /*244502: {sender: "PLAYERNAME", parts:[".0","G"]}*/
    },
    msgCounter: 0,
    tick: function(ship){
      if(this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]!=null)
        ship.custom.globalChat.writeTimer++;
      if(ship.custom.globalChat.writeTimer>3){
        this.startNewMsg(ship)
      }
    },
    getMsg: function(id){
      if(this.messageBuffer[id]!=null){
        var msg = this.messageBuffer[id]
        var render = []
        for(var p = 0; p<msg.parts.length; p++){
          if(msg.parts[p][0]=="."){
            render.push(this.combos[msg.parts[p].substring(1)])
          }else{
            render.push(this.vocabulary[msg.parts[p]])
          }
        }
        var updated = ((game.step-msg.lastChanged)<120);
        //log("getMsg: updated = "+updated)
        return {sender: msg.sender, color:msg.color, render: render, updated: updated};
      }
      return {sender: "error", color:"#AA0000", render: []};
    },
    addMsg: function(ship, key){
      msg = this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]
      if(msg==null){
        msg = {
          sender: ship.name, color:teams[ship.custom.team].color, parts:[]
        }
        this.messageBuffer[ship.custom.globalChat.currentlyWritingTo] = msg;
        playerLog.pushPlayerLogTeamOrProximity({id:ship.custom.globalChat.currentlyWritingTo}, ship.custom.team, ship.x, ship.y);
      }

      msg.parts.push(key);

      nextCombo:
      for(var i = 0; i<this.combos.length; i++){
        for(var j = 0; j<this.combos[i].combo.length; j++){
          if(msg.parts[msg.parts.length-1-j]!=this.combos[i].combo[this.combos[i].combo.length-1-j])
            continue nextCombo;
        }
        msg.parts = msg.parts.slice(0,-this.combos[i].combo.length);
        msg.parts.push("."+i)
        break;
      }

      msg.lastChanged = game.step;
      //log("addMsg: lastChanged = "+msg.lastChanged);

      ship.custom.globalChat.writeTimer = 0
    },
    startNewMsg: function(ship){
      if(this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]!=null){
        this.msgCounter++;
        ship.custom.globalChat.currentlyWritingTo = this.msgCounter;
        ship.custom.globalChat.writeTimer = 0
      }
    },
    init: function(ship){
      ship.custom.globalChat = {
        currentlyWritingTo: this.msgCounter,
        writeTimer: 0
      }
      this.msgCounter++;
      for(var k in this.vocabulary){
        var msg = this.vocabulary[k]
        ship.setUIComponent({
          id:"chatSend"+msg.shortcut,
          position: [0,0,1,1],
          clickable: true,
          shortcut: msg.shortcut,
          visible: true,
          components:[
            { type: "text",position: [0,0,100,100],color: "#FFF",value: " "}
          ]
        })
      }
      ship.setUIComponent({
        id:"chatNewMsg",
        position: [0,0,1,1],
        clickable: true,
        shortcut: "C",
        visible: true,
        components:[
          { type: "text",position: [0,0,100,100],color: "#FFF",value: " "}
        ]
      })
    }
  }
}

sp.systems.aliveBooster = {
  boost:{
    objectiveRateMin: 1,
    objectiveRateMax: 2.5,
    abilityReloadMin: 0.5,
    abilityReloadMax: 1,
  },
  chargeSettings:{
    nominalChargeRate: 1/120,

    chargeEnemyConsiderSqrRange: 100,
    chargeNearEnemyBuff: 0.2,
    chargeMaxEnemies: 3,

    objectiveNearBuff: 0.5,
    doingObjectiveBuff: 1
  },

  initShip: function(ship){
    ship.custom.aliveBooster = {
      charge: 0,
      lastChargeRate: 0
    }
  },

  //just for clarity
  reset: function(ship){
    //don't reinvent the wheel
    this.initShip(ship);
  },

  tick: function(ship){
    if(ship.custom.state.isInBase)return;
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);

    var chSet = this.chargeSettings;
    var deltaCharge = 1;

    var enemiesConsidered = 0
    for(var i = 0; i<game.ships.length; i++){
      var other = game.ships[i]
      if(other==ship)continue;
      if(
        ship.custom.team!=other.custom.team &&
        sqrDist(ship.x-other.x,ship.y-other.y)<chSet.chargeEnemyConsiderSqrRange
      ){
        enemiesConsidered++;
        deltaCharge += chSet.chargeNearEnemyBuff;
      }
      if(enemiesConsidered>chSet.chargeMaxEnemies)break;
    }

    if(ship.custom.state.doingObjective){
      deltaCharge += chSet.doingObjectiveBuff;
    }else if(ship.custom.state.nearObjective){
      deltaCharge += chSet.objectiveNearBuff;
    }

    deltaCharge *= chSet.nominalChargeRate;

    ship.custom.aliveBooster.lastChargeRate = deltaCharge;
    ship.custom.aliveBooster.charge += deltaCharge;

    if(ship.custom.aliveBooster.charge > 1)
      ship.custom.aliveBooster.charge = 1
    if(ship.custom.aliveBooster.charge < 0)
      ship.custom.aliveBooster.charge = 0


  },

  getReloadBuff: function(ship){
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);
    return this.boost.abilityReloadMin+ship.custom.aliveBooster.charge*(this.boost.abilityReloadMax-this.boost.abilityReloadMin);
  },

  getCaptureBuff: function(ship){
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);
    return this.boost.objectiveRateMin+ship.custom.aliveBooster.charge*(this.boost.objectiveRateMax-this.boost.objectiveRateMin);
  }

}

//UI system

var UISystem = {

  init: function(ship){
    ship.custom.UISystem = {
      events: {
        in: {},
        out: {}
      },
      autoClearUI: {},
      rateLimiter: {
        heat: 0,
        sinceWarning: 0,
        sinceWarningMax: 0
      }
    }
  },

  rateLimiter:{
    settings:{
      kickHeat: 150,
      maxHeat: 50,
      warningHeat: 15,
      heatLossPerSecond: 3, //pressing the buttons less often than this will cool down the limiter
      warningEvery: 10
    },
    input: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var rt = ship.custom.UISystem.rateLimiter
      var sett = this.settings;
      rt.heat++;
      if(sett.kickHeat>0&&rt.heat>sett.kickHeat){
        ship.gameover({
          "Kicked":"UI input spam",
          "Don't hold interactive":" buttons down, please"
        })
      }
      if(rt.heat>sett.maxHeat){
        if(rt.sinceWarningMax>sett.warningEvery){
          playerLog.pushPlayerLog(ship, "OVERHEATED: UI DISABLED")
          playerLog.pushPlayerLog(ship, "Please do not abuse the interactive UI buttons")
          rt.sinceWarningMax = 0;
        }
        return false;
      }
      if(rt.heat>sett.warningHeat&&rt.sinceWarning>sett.warningEvery){
        playerLog.pushPlayerLog(ship, "Too fast! Cool down a bit!")
        playerLog.pushPlayerLog(ship, "You're pressing the buttons a bit too often.")
        rt.sinceWarning = 0;
      }
      return true;
    },
    tick: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var rt = ship.custom.UISystem.rateLimiter;
      var sett = this.settings;
      rt.heat -= sett.heatLossPerSecond;
      if(rt.heat<0)
        rt.heat = 0;
      rt.sinceWarning++;
      rt.sinceWarningMax++;
    }
  },

  events: {

    pushEvent:function(ship, event, duration=2){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      if(duration<1)
        duration = 1;
      var eshipin = ship.custom.UISystem.events.in;
      if(eshipin[event]>duration)
        return;
      eshipin[event] = duration;
    },

    shouldRedraw: function(ship, events){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var eshipin = ship.custom.UISystem.events.in;
      //var eshipout = ship.custom.UISystem.events.out;
      if(eshipin.forceRedraw)//||eshipout.forceRedraw)
        return true;
      if(events==null||events.length<1)
        return false;
      for(var i = 0; i<events.length; i++){
        if(eshipin[events[i]]>0)//||eshipout[events[i]])
          return true;
      }
      return false;
    },

    flushEvents: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var eship = ship.custom.UISystem.events;
      /*eship.in = eship.out;
      eship.out = {};*/
      //TODO: probably extremely inefficient. There's gotta be a better way!
      for(var k in eship.in){
        eship.in[k]--;
        if(eship.in[k]<1){
          delete eship.in[k];
        }
      }
    }

  },

  autoClearUI: {

    set: function(ship, UI, time){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      ship.custom.UISystem.autoClearUI[UI.id] = time;
      ship.setUIComponent(UI);
    },

    delay: function(ship, UIid, time){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      if(ship.custom.UISystem.autoClearUI[UIid]!=null){
        ship.custom.UISystem.autoClearUI[UIid] = time;
      }
    },

    tick: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var ACUI = ship.custom.UISystem.autoClearUI;
      for(var e in ACUI){
          ACUI[e]--;
          if(ACUI[e]<0){
            ship.setUIComponent(
              {id: e,
              //position: [x,y,7,7],
              clickable: false,
              //shortcut: shortcut,
              visible: false,
              //components: components
              }
            );
            delete ACUI[e];
          }
      }
    }

  }
};

//generic functions
var drawButton = function(ship, x, y, id, fill, bordercol, textcol, visible, shortcut, text){
  components = [];
  tcol = textcol//"#CDE"
  /*if(parseInt(fill.substring(1,3),16)>128)
    tcol = "#222";
  if(parseInt(fill.substring(3,5),16)>128)
    tcol = "#222";
  if(parseInt(fill.substring(5,7),16)>128)
    tcol = "#222";*/
  if(visible)
    components = [
    { type:"box",position:[0,0,100,100],fill:fill/*+"33"*/,stroke:bordercol,width:10},
  	//{ type:"box",position:[10,10,80,80],fill:fill,stroke:fill,width:2},
  	{ type: "text",position:[11,20,78,30],value:text,color:tcol},
  	{ type: "text",position:[20,40,60,40],value:"["+shortcut+"]",color:tcol}
  	]
  ship.setUIComponent(
    {id: id,
    position: [x,y,7,7],
    clickable: visible,
    shortcut: shortcut,
    visible: visible,
    components: components
    }
  );
}

//UI system functions
var switchScreen = function(ship, id){
  if(id<0||id>=screens.length||screens[id]==null){
    log("Error: screen "+id+" does not exist");
    return;
  }
  //current = ship.custom.screen;
  if(ship.custom.UISystem==null)
    UISystem.init(ship);
  ship.custom.UISystem.events.in.forceRedraw = true;
  try{
    screens[ship.custom.screen].hide(ship);
  }catch(e){
    logError("ERROR-SWITCH-SCREEN-HIDE ",e)
  }
  ship.custom.screen = id;
  try{
    screens[id].show(ship);
  }catch(e){
    logError("ERROR-SWITCH-SCREEN-SHOW ",e)
  }
}

var skins = [
  {
      name:"The Abyss",
      main:"#CCCCCC",
      sec:"#222222",
      unicodeChar:"\u{1f30c}"
  },
  {
      name:"The Sun Is Up",
      main:"#222222",
      sec:"#CCCCCC",
      unicodeChar:"\u{2600}"
  },
  {
    //shoutout to color-hex
      name:"Blueprint",
      main:"#9ce5fb",
      sec:"#1183a5",
      unicodeChar:"\u{1f5c9}"
  },
  {
    //color-hex
      name:"Excess Heat",
      main:"#5e0000",
      sec:"#f9f37c",
      unicodeChar:"\u{1f7d2}"
  },
  {
    //color-hex
      name:"Radiant Star",
      main:"#156870",
      sec:"#0cffe1",
      unicodeChar:"\u{1f7c7}"
  },
  {
    //shoutout to f.lux
      name:"f.lux",
      main:"#000000",
      sec:"#efa55f",
      unicodeChar:"\u{269d}"
  },
  {
      name:"Burning Desire",
      main:"#380023",
      sec:"#ff003f",
      unicodeChar:"\u{1f352}"
  },
  {
      name:"Blaster Of Love",
      main:"#ffb3fe",
      sec:"#222222",
      unicodeChar:"\u{1f497}"
  },
  {
      name:"Cherry Blossom",
      main:"#5b4045",
      sec:"#ffb7c5",
      unicodeChar:"\u{1f338}"
  },
  {
      name:"Pure Gold",
      main:"#493e00",
      sec:"#ffd600",
      unicodeChar:"\u{269c}"
  },
  {
      name:"At The Beach",
      main:"#ffeead",
      sec:"#7fcdff",
      unicodeChar:"\u{1f3d6}"
  },
  {
      name:"Spring",
      main:"#f68f3c",
      sec:"#5e8d5a",
      unicodeChar:"\u{1f33c}"
  },
  {
      name:"Summer",
      main:"#e2f4c7",
      sec:"#ff4e50",
      unicodeChar:"\u{1f33b}"
  },
  {
      name:"Autumn",
      main:"#f47b20",
      sec:"#9c5708",
      unicodeChar:"\u{1f342}"
  },
  {
      name:"Winter",
      main:"#230745",
      sec:"#b3e3f4",
      unicodeChar:"\u{2744}"
  },
]


var UISkin = function(ship){
  if(ship.custom.skin==null)
    ship.custom.skin = 0;
  return skins[ship.custom.skin];
}

//screens
var screens = [];

var drawDirectionMarker = function(ship, x, y, wrapV, wrapH, id, color, label){
  var sp = shortestPath(ship.x, ship.y, x, y, wrapV, wrapH);
  var dist = distance(sp[0],sp[1]);

  var x = sp[0]/dist;
  var y = sp[1]/dist;
  UISystem.autoClearUI.set(ship,{
  id:id,
  position:[47+x*20,49-y*20,6,2],
  clickable: false,
  visible: true,
  components: [
    { type:"box",position:[40,30,20,40],fill:color,stroke:color,width:2},
    { type: "text",position:[(x<0)?0:75,0,25,100],value:label,color:"#CDE"}
  ]
  },5);
};

var drawControlPointStatus = function(){
  for(var i=0;i<game.ships.length;i++){
    var ship = game.ships[i];
    var width = controlPoints.length*7;
    var startX = 50-width/2-2;
    for(p=0;p<controlPoints.length;p++){
      var cpCol = "#CCCCCC";
      var aCpCol = "#CCCCCC";
      var aCpPr = controlPoints[p].captureProgress;
      if(controlPoints[p].controlledBy!=-1)
        cpCol = teams[controlPoints[p].controlledBy].color;
      if(controlPoints[p].attemptedCaptureBy!=-1)
        aCpCol = teams[controlPoints[p].attemptedCaptureBy].color;
      UISystem.autoClearUI.set(ship,
        {id: "controlPointStatus"+p,
        position: [startX+9*p,8,5,5],
        visible: true,
        components: [
          { type:"box",position:[0,0,70,100],fill:cpCol+"33",stroke:cpCol,width:5},
        	{ type: "text",position:[10,10,50,80],value:String.fromCharCode(97+p).toUpperCase(),color:cpCol},
          { type:"box",position:[95,0,5,100],fill:cpCol+"33",stroke:cpCol,width:10},
          { type:"box",position:[95,100*(1-aCpPr),5,100*aCpPr],fill:aCpCol+"33",stroke:aCpCol,width:10}
          ]
        },2
      );
    }
  }
};

drawTeamLists = function(ship){
  var scoreboard = sp.core.lastScoreboard;

  if(!scoreboard.update) return;

  var tcomps = [];
  if(scoreboard.rendered == null){
    for(var t=0;t<2;t++){
      tcomps.push(
          { type:"box",position:[50*t,0,50,10],fill:teams[t].color,stroke:teams[t].color,width:2},
          { type: "text",position:[50*t,0,50,10],
          value:teams[t].name+"("+scoreboard.state[teams[t].name]+" points)",
          color:"#000000"}
        );
      for(p=0;p<9;p++){
        var pl = scoreboard.state[teams[t].name+"_p"+p];
        if(pl==null)continue;
        tcomps.push(
          { type: "text",value:pl,
          position:[t*50,10+p*10,50,10],color:teams[t].color,align:"left"});
        //tcomps.push(
        //  { type: "player",id:game.ships[teams[t].players[p]].id,
        //  position:[10+t*50,20+p*10,40,10]/*,align:"left"*/,color:"#FFFFFF"});
      }
      //TODO: add this back. maybe.
      /*if(teams[t].players.length>6)
      tcomps.push(
          { type: "text",position:[0+t*50,20+p*10,100,10],value:teams[t].players.length-6+" more...",color:teams[t].color}
        );*/
    }
    scoreboard.rendered = tcomps;
  }else{
    tcomps = scoreboard.rendered;
  }

  //apply
  ship.setUIComponent(
    {id: "scoreboard",
    //position: [80,35,10,30],
    visible: true,
    components: tcomps
    }
  );
};

var intoGlobalCoords = function(parentCoords, thisCoords){

  var result = [];

  result [0] = parentCoords[0] + thisCoords[0]*parentCoords[2]/100;
  result [1] = parentCoords[1] + thisCoords[1]*parentCoords[3]/100;
  result [2] = thisCoords[2]*parentCoords[2]/100;
  result [3] = thisCoords[3]*parentCoords[3]/100;

  return result;

}



var abilityStateColors = [
  "#22FF55",
  "#FFFF22",
  "#FF5522",
  "#666666",
  ]

var writeEffectsShip = function(ship, b){
    var ecomps = [];
    var w = 50;
    var h = 20;
    var columns = 2;
    if(ship.custom.effects!=null)
    for(e=0;e<durationEffectsPerShip;e++){
      if(ship.custom.effects[e]!=null){
        var edata = ship.custom.effects[e];
        var eFX = effectTypes[edata.type].FX;
        var column = Math.floor(e/(durationEffectsPerShip/columns))+1;
        /*
        FX: {
          colBkg: "#000055",
          colFrg: "#2222CC",
          char: "\u{1f6e1}",
          shortName: "ShCap"
        }
        */
        if(eFX!=null)
          ecomps.push(
            { type:"box",
            position:[100-column*w+0.1*w,e*h+h*0.1,w*0.8,h*0.8],
            fill:eFX.colBkg,stroke:"#00000000",width:2},
            { type: "text",
            position:[100-column*w+w*0.2,e*h+h*0.3,w*0.6,h*0.4],
            value:eFX.char,
            color:"#FFFFFF"},
            { type: "text",
            position:[100-column*w,e*h+h*0.7,w,h*0.2],
            value:eFX.shortName,
            color:"#FFFFFF"},
             { type: "text",
            position:[100-column*w,e*h+h*0.1,w,h*0.2],
            value:"x"+edata.strength+" "+edata.duration+"s",
            color:"#FFFFFF"}
          )


      }
    }
    if(UISystem.events.shouldRedraw(ship))
      ship.setUIComponent(
        {id: "effectslistTop",
        position: [70,0,10,5],
        visible: b,
        components: [
           { type:"box",position:[0,0,100,100],
          fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],
          value:"STATUS EFFECTS",color:UISkin(ship).main},
          ],

        }
      );
    ship.setUIComponent(
      {id: "effectslist",
      position: [70,5,10,25],
      visible: b,
      components: ecomps
      }
    );

  }

var drawShipState = function(ship, b){
  var data = sp.shipManager.getShipData(ship);
  var abil = sp.shipManager.getAbilities(ship);
  var currentStats = sp.shipManager.getCurrentStats(ship);

  if(UISystem.events.shouldRedraw(ship,["shipRespawn"])){
    var author = {};
    try{
    var shParsed = shipsByCode[sp.shipManager.getShipData(ship).configs[0]]
    if(shParsed.author!=null)
      author = { type: "text",position:[40,70,60,30],value:"by "+shParsed.author,color:UISkin(ship).main,align:"right"};
    }catch(e){}//TODO: empty catch
    ship.setUIComponent(
        {id: "shipInfo",
        position: [2,32,15,5],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:data.unicodeChar,color:data.color+"44"},
      	  { type: "text",position:[5,20,90,30],value:data.name,color:UISkin(ship).main},
      	  { type: "text",position:[5,50,90,30],value:data.cl,color:UISkin(ship).main},
      	  author
      	]
        }
      );
  }

    //i'll insert this here for now, but preferably into its own method in the future
    /*ship.setUIComponent(
      {id: "aliveBoosterStatus",
      position: [80,35,20,5],
      visible: b,
      components: [
          { type:"box",position:[0,47,100*ship.custom.aliveBooster.charge,6],fill:"#0044FF",stroke:"#0044FF",width:2},
          { type: "text",position:[0,0,100,40],value:ship.alive?"ALIVE":"KNOCKED OUT",color:ship.alive?"#00FF44":"#FF0000"},

          //ability reload boost
          { type: "text",position:[0,60,30,40],value:"\u{2756} x"+sp.systems.aliveBooster.getReloadBuff(ship).toFixed(2),color:"#0044FF"},
          //objective rate boost
          { type: "text",position:[33,60,30,40],value:"\u{1f6a9} x"+sp.systems.aliveBooster.getCaptureBuff(ship).toFixed(2),color:"#0044FF"},
          //booster charge rate
          { type: "text",position:[70,60,30,40],value:"+"+ship.custom.aliveBooster.lastChargeRate.toFixed(3),color:"#0044FF"}
        ]
      }
    );*/

  /*if(data.company!=null&&companies[data.company]!=null)
    ship.setUIComponent(
      {id: "companyLogo",
      position: [2,30,15,6],
      visible: b,
      components: companies[data.company].logo
      }
    );
  else ship.setUIComponent(
    {id: "companyLogo",
    position: [2,30,15,6],
    visible: false,
    //components: companies[data.company].logo
    }
  );*/
  if(ship.generator<0)
    UISystem.autoClearUI.set(ship,
          {id: "reactorBar",
          position: [3,14.5,18,3],
          visible: true,
          components: [
              { type:"box",position:[0,0,100,100],fill:"#615628",stroke:"#615628",width:2},
              { type: "text",position:[5,0,90,100],value:"\u{26a0} REACTOR STALLED \u{26a0}",color:"#CDE"}]
          },
          1
        );

  //TODO: maybe should make this into a func
  var postfix = "?";
  var value = 0;
  var stat = currentStats["shieldcap"].val;
  if(stat>998){

    if(ship.shield<1000000){
      postfix = "K";
      value = (ship.shield/1000).toFixed(2);
    }else if(ship.shield<1000000000){
      postfix = "M";
      value = (ship.shield/1000000).toFixed(2);
    }else{
      postfix = "WTF";
      value = "BRUH ";
    }
    var filled = ship.shield/stat;
    //TODO: autoClearUI
    UISystem.autoClearUI.set(ship,
        {id: "shieldBar",
        position: [3,10.5,18,3],
        visible: true,
        components: [
            { type:"box",position:[0,0,100,100],fill:"#305e56",stroke:"#305e56",width:2},
            { type:"box",position:[0,0,100*filled,100],fill:"#7ee3fd",stroke:"#7ee3fd",width:2},
            { type: "text",position:[80,0,20,100],value:value+postfix,color:"#222"}]
        },
        1
      );
  }
  var stat = currentStats["energycap"].val;
  if(stat>998){
    if(ship.generator<1000000){
      postfix = "K";
      value = (ship.generator/1000).toFixed(2);
    }else if(ship.generator<1000000000){
      postfix = "M";
      value = (ship.generator/1000000).toFixed(2);
    }else{
      postfix = "WTF";
      value = "BRUH ";
    }
    var filled = ship.generator/stat;
    //TODO: autoClearUI
    UISystem.autoClearUI.set(ship,
        {id: "reactorBar",
        position: [3,14.5,18,3],
        visible: true,
        components: [
            { type:"box",position:[0,0,100,100],fill:"#615628",stroke:"#615628",width:2},
            { type:"box",position:[0,0,100*filled,100],fill:"#fffc94",stroke:"#fffc94",width:2},
            { type: "text",position:[80,0,20,100],value:value+postfix,color:"#222"}]
        },
        1
      );
  }

  for(var a=1;a<8;a++){
    if(abil[a]!=null){

      var fill = "#FF00FF";
      if(abilityStateColors[abil[a].state]!=null)
        fill = abilityStateColors[abil[a].state];
      var ready = abil[a].ready;
      if(ready<0)ready=0
      if(ready>1)ready=1
      ship.setUIComponent(
        {id: "ability"+a,
        position: [2,37+(a-1)*6,15,10],
        clickable: b,
        shortcut: a+"",
        visible: b,
        components: [
      	{ type:"box",position:[5,5,20,30],fill:"#00000000",stroke:fill,width:4},
      	{ type:"box",position:[25,30,70*ready,5],fill:fill,stroke:fill,width:2},
      	]
        }
      );
      if(UISystem.events.shouldRedraw(ship,["shipRespawn","shipConfigChange"]))
      ship.setUIComponent(
        {id: "abilityInfo"+a,
        position: [2,37+(a-1)*6,15,10],
        clickable: b,
        visible: b,
        components: [
          { type: "text",position:[5,5,20,30],value:a,color:"#CDE"},
          { type: "text",position:[30,5,65,25],value:abil[a].name,color:"#CDE"},
          { type:"box",position:[5,35,90,1],fill:"#FFFFFF",stroke:UISkin(ship).main,width:2},
      	]
        }
      );

    }else if(UISystem.events.shouldRedraw(ship,["shipRespawn","shipConfigChange"])){
        ship.setUIComponent(
          {id: "ability"+a,
          position: [2,55+(a-1)*12,20,10],
          clickable: false,
          visible: false
          }
        );
        ship.setUIComponent(
          {id: "abilityInfo"+a,
          position: [2,55+(a-1)*12,20,10],
          clickable: false,
          visible: false
          }
        );
    }

  }

  //OPTIMIZE

  //OPTIMIZE: remove intoGlobalCoords calls where recal unnecessary
  var drawStatBackround = function(comps,name, pos, value, boostLevel, color, chars, charCol){

      comps.push({ type:"box",position:pos,fill:color,stroke:color,width:4})
      for(var i = 0; i<chars.length; i++){
        comps.push({ type: "text",position:intoGlobalCoords(pos,[5,0,30,100]),value:chars[i],color:charCol})
      }

  }

  var drawStatIndicator = function(comps,name, pos, value, boostLevel, color, chars, charCol){
    var vcol = "#CCC"
    if(boostLevel<0)
      vcol = "#C22"
    else if(boostLevel>0)
      vcol = "#2C2"



    comps.push(
    { type: "text",position:intoGlobalCoords(pos,[35,0,30,100]),value:value.toFixed(2),color:vcol},
    //{type: "text",position:[80,35,20,30],value:"\u29bf",color:"#F0F"}
  );
    //log(boostLevel)
    if(boostLevel==0){

      comps.push({type: "text",position:intoGlobalCoords(pos,[60,0,40,100]),value:"\u29bf",color:"#CCC"})
      log(intoGlobalCoords(pos,[60,0,40,100]));
    } else {

      if(boostLevel>3)boostLevel = 3
      if(boostLevel<-3)boostLevel = -3

      var grad = ["C","8","4"]
      var colStr = "#.00"
      var char = "\u{1f897}"
      var dir = 1
      var range = (Math.abs(boostLevel)-1)*20
      if(boostLevel>0){
        colStr = "#0.0"
        char = "\u{1f895}"
        dir = -1
      }

      for(var i = 0; i<Math.abs(boostLevel); i++){
        var col = colStr.replace(".",grad[i])
        comps.push({type: "text",position:
          intoGlobalCoords(pos,[60,(50-range+i*(range*2/Math.abs(boostLevel)))*dir,40,100]),
          value:char,color:col})

      }
    }

  }

  /*sc = cl(sdata.shieldcap+3,0,6);
  sr = cl(sdata.shieldregen+3,0,6);
  ec = cl(sdata.energycap+3,0,6);
  er = cl(sdata.energyregen+3,0,6);
  bd = cl(sdata.damage+3,0,6);
  bs = cl(sdata.bspeed+3,0,6);
  ss = cl(sdata.speed+3,0,6);
  sa = cl(sdata.agility+3,0,6);*/
  //OPTIMIZE

  var stats = [
    {id:"shieldcap",col:"#000055",chars:["\u{1f6e1}"],charCol:"#0022FF"},
    {id:"shieldregen",col:"#002255",chars:["\u{1f6e1}","\u{fe62}"],charCol:"#0066FF"},
    {id:"energycap",col:"#555500",chars:["\u{1f50b}"],charCol:"#CCCC00"},
    {id:"energyregen",col:"#554400",chars:["\u{26a1}"],charCol:"#CCAA00"},
    {id:"damage",col:"#552200",chars:["\u{1f4a5}"],charCol:"#CC5500"},
    {id:"bspeed",col:"#550033",chars:["\u{1f320}"],charCol:"#CC00CC"},
    {id:"speed",col:"#222222",chars:["\u{21f6}"],charCol:"#CCCCCC"},
    {id:"agility",col:"#220055",chars:["\u{1f680}"],charCol:"#5500CC"}
  ]

  var comps = [];
  var bkgComps = [];

  var statsChanged = false;
  if(ship.custom.mainScreen == null){
    ship.custom.mainScreen = {
      lastStats: {}
    };
    statsChanged = true;
  }else{
    for(var i = 0; i<stats.length; i++){
      if(ship.custom.mainScreen.lastStats[stats[i].id] != currentStats[stats[i].id].val){
        statsChanged = true;
        break;
      }
    }
  }

  if(statsChanged||UISystem.events.shouldRedraw(ship)){
    for(var i = 0; i<stats.length; i++){
      var stat = currentStats[stats[i].id].val;
      var boost = currentStats[stats[i].id].boost;
      drawStatIndicator(comps, stats[i].id, [i*10,95,10,5],
        stat,
      boost, stats[i].col, stats[i].chars, stats[i].charCol)

      //OPTIMIZE: don't call unless redrawing actually necessary
      drawStatBackround(bkgComps, stats[i].id, [i*10,95,10,5],
        stat,
      boost, stats[i].col, stats[i].chars, stats[i].charCol)

      ship.custom.mainScreen.lastStats[stats[i].id] = stat;
    }

    UISystem.autoClearUI.set(ship,{
      id: "stats",
      position: [0,0,100,100],
      clickable: false,
      visible: b,
      components: comps
    },1);
  }else if(b){
    UISystem.autoClearUI.delay(ship,"stats",1);
  }

  if(UISystem.events.shouldRedraw(ship)){
    ship.setUIComponent({
      id: "statsBkg",
      position: [0,0,100,100],
      clickable: false,
      visible: b,
      components: bkgComps
    });
  }

}

var tutorial = [
  {x:30,y:30,title:"Welcome!",texts:[
    "Welcome to STARBLAST PROTOTYPES! This quick",
    "tutorial should help you figure things out.",
    "Press [I] to proceed or [L] to skip the tutorial."
    ]
  },
  {x:30,y:30,title:"Zero mining. Pure combat.",texts:[
    "STARBLAST PROTOTYPES is built around the idea",
    "of no mining. Here, we don't mine: we fight.",
    "Don't waste your time shooting at rocks.",
    "Ships are small and agile, while bullets are",
    "somewhat slow, creating a very skillful and",
    "competitive environment. Have fun!"
    ]
  },
  {x:30,y:30,title:"Ships",texts:[
    "There's about a dozen of ships in this mod,",
    "and the amazing thing is, you may switch between",
    "them instantly, at any moment! Just visit your",
    "base and open the ship selection screen."
    ]
  },
  {x:25,y:50,title:"Abilities and such",texts:[
    "All ships feature unique, awesome abilities!",
    "Abilities are activated by pressing number keys",
    "(the keys you'd usually use to upgrade stats)",
    "Some abilities transform your ship, others",
    "apply buffs to teammates or nerfs to enemies.",
    "Some abilities require time to recharge."
    ],
    box:{x:1,y:28,w:20,h:60}
  },
  {x:50,y:20,title:"Status effects",texts:[
    "Some abilities, as previously mentioned, may",
    "apply buffs or nerfs to your or other ships.",
    "This UI piece shows all status effects currently",
    "affecting your ship."
    ],
    box:{x:68,y:0,w:14,h:30}
  },
  {x:25,y:60,title:"Ship 'upgrades'",texts:[
    "Ship upgrades are used as a way of applying",
    "said status effects(and also direct effects)",
    "to ships. All 'upgrades' have a nominal level,",
    "which represents your ship's normal state of",
    "operation - as of now, it is 3 bars for all stats."
    ],
    box:{x:0,y:95,w:80,h:5}
  },
  {x:50,y:40,title:"Teams and rounds",texts:[
    "In this mod, two teams fight for control",
    "over several(usually 3) points. Here you",
    "can see the composition of teams, and the",
    "state of the game."
    ],
    box:{x:80,y:0,w:20,h:40}
  },
  {x:30,y:30,title:"Victory condition",texts:[
    "The goal is to capture and hold the majority",
    "of points(>50%) and hold them for 5 minutes.",
    "If another team gains the majority, the timer",
    "is reset."
    ]
  },
  {x:30,y:30,title:"Good luck!",texts:[
    "This should be enough to get you started.",
    "No more mining holding you back. Spread",
    "your wings and fly!",
    "",
    "Have fun!"
    ]
  },
  ]

var drawTutorial = function(ship, b){
  //so apparently i broke the tutorial... lmfao
  //TODO: fix the frICKing tutorial
  return;
  if(ship.custom.tutorialStep==null){
    ship.custom.tutorialStep = 0;
  }

  if(ship.custom.tutorialStep>tutorial.length){
    return;
  }
  st = ship.custom.tutorialStep;

  if(ship.custom.tutorialStep==tutorial.length){
    ship.setUIComponent(
      {id: "tutorial",
      position: [30,30,40,40],
      visible: false
      }
    );
    drawButton(ship,30,80,"tutorialNext",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,false,"I","Next");
    drawButton(ship,40,80,"tutorialSkip",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,false,"L","Skip");
    ship.setUIComponent(
      {id: "tutorialBox",
      position: [0,0,10,10],
      visible: false
      }
    );
    ship.custom.tutorialStep++;
  }else if(UISystem.events.shouldRedraw(ship,["tutorialUpdate"])){
    lines = tutorial[st].texts.length+2;
    tcomps = [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
        { type:"box",position:[0,0,100,(10/(lines*5))*100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type: "text",position:[0,0,100,(10/(lines*5))*100],
        value:tutorial[st].title,color:UISkin(ship).sec},
      ];
    for(tt=0; tt<tutorial[st].texts.length; tt++){
      tcomps.push(
        { type: "text",
        position:[0,(tt+2)*5*100/(lines*5),100,5*100/(lines*5)],
        value:tutorial[st].texts[tt],color:UISkin(ship).main,align:"left"}
      )
    }
    ship.setUIComponent(
      {id: "tutorial",
      position: [tutorial[st].x,tutorial[st].y,40,(10+lines*5)/2],
      visible: b,
      components: tcomps
      }
    );
    drawButton(ship,tutorial[st].x,tutorial[st].y+(10+lines*5)/2,"tutorialNext",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I",st<tutorial.length-1?"Next":"Finish");
    drawButton(ship,tutorial[st].x+7,tutorial[st].y+(10+lines*5)/2,"tutorialSkip",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&st<tutorial.length-1,"L","Skip");
    if(tutorial[st].box!=null){
      ship.setUIComponent(
        {id: "tutorialBox",
        position: [tutorial[st].box.x,tutorial[st].box.y,tutorial[st].box.w,tutorial[st].box.h],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:"#FF0000",width:10}
        ]
        }
      );
    }else{
      ship.setUIComponent(
        {id: "tutorialBox",
        position: [0,0,10,10],
        visible: false
        }
      );
    }

  }
}

screens[0] = {
  name: "Main screen",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    if(ship.custom.objectiveStatusText==null)
      ship.custom.objectiveStatusText = "";
    if(
      ship.custom.objectiveStatusText!=ship.custom.objectiveStatusTextPrev||
      ship.custom.objectiveStatusTextTimeLeft==0||
      UISystem.events.shouldRedraw(ship)
    ){
      ship.setUIComponent(
        {id: "objectiveStatus",
        position: [32,5,37,3],
        visible: b&&ship.custom.objectiveStatusTextTimeLeft>0,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.objectiveStatusText,color:UISkin(ship).main}
        ]
      })
      ship.custom.objectiveStatusTextPrev = ship.custom.objectiveStatusText;
    }
    if(ship.custom.gameStatusText==null)
        ship.custom.gameStatusText = "";
    if(
      ship.custom.gameStatusText!=ship.custom.gameStatusTextPrev||
      UISystem.events.shouldRedraw(ship)
    ){
      ship.setUIComponent(
        {id: "gameStatus",
        position: [32,2,37,3],
        visible: b&&ship.custom.gameStatusText.length>0,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.gameStatusText,color:UISkin(ship).main}
        ]
      })
      ship.custom.gameStatusTextPrev = ship.custom.gameStatusText;
    }
    if(ship.custom.tip==null)
      ship.custom.tip = "";
    if(UISystem.events.shouldRedraw(ship,["bottomTipUpdate"]));
      ship.setUIComponent({
        id:"tip",
        position:[0,92,80,3],
        clickable: false,
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.tip,color:UISkin(ship).main}
        ]
        });

    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);


    drawButton(ship,24,10,"openShipSelector",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&!ship.custom.isInHangar&&(distance(sh[0],sh[1])<shipSelectRange),"L","Legacy ship selector");
    drawButton(ship,24,18,"dockHangar",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&!ship.custom.isInHangar&&(distance(sh[0],sh[1])<shipSelectRange),"I","Dock");
    drawButton(ship,24,10,"undockHangar",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&ship.custom.isInHangar,"I","Undock");

    drawShipState(ship,b)
    drawTutorial(ship,b)
    writeEffectsShip(ship,b)
    //draw2019(ship, b)
    if(UISystem.events.shouldRedraw(ship))
      drawButton(ship,24,2,"openMenu",
      UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Main menu");

    var data = sp.shipManager.getShipData(ship);
    if(data.augmentUI!=null) data.augmentUI(ship);
  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if (input=="tutorialSkip"){
      ship.custom.tutorialStep = tutorial.length;
      UISystem.events.pushEvent(ship,"tutorialUpdate");
    }
    if (input=="tutorialNext"){
      if(ship.custom.tutorialStep<tutorial.length)
        ship.custom.tutorialStep++;
      UISystem.events.pushEvent(ship,"tutorialUpdate");
    }
    if(input == "openMenu")
      switchScreen(ship,1);
    if(input == "openShipSelector")
      switchScreen(ship,3);
  }
}

var drawMainMenuButton = function(ship, xx, yy, id, b, text, color, unicodeChar, uCharCol, textCol, shortcut){
  ship.setUIComponent(
      {id: id,
      position: [xx,yy,30,5],
      clickable: b,
      shortcut: shortcut,
      visible: b,
      components: [
        { type:"box",position:[3,70,1,30],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[0,0,100,50],fill:color,stroke:color},
        { type:"box",position:[7,50,93,50],fill:color,stroke:color},
        { type: "text",position:[0,-30,50,160],value:unicodeChar,color:uCharCol},
        { type: "text",position:[20,0,70,50],value:text,color:textCol,align:"right"},
        { type: "text",position:[0,-10,7,70],value:"\u{2b22}",color:UISkin(ship).main},
        { type: "text",position:[0,0,7,50],value:shortcut,color:UISkin(ship).sec}
      ]
      }
    );
}

screens[1] = {
  name: "Main menu",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){
    var mainMenuDraw = {
      tutorial: false,
      shipSelect: false,
      switchTeams: false
    };
    var mmLength = 0;
    if(!sp.core.gameInProgress){
      mainMenuDraw.switchTeams = true;
      mmLength++;
    }
    if(ship.custom.tutorialStep>=tutorial.length){
      mainMenuDraw.tutorial = true;
      mmLength++;
    }

    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);

    if(distance(sh[0],sh[1])<shipSelectRange){
      mainMenuDraw.shipSelect = true;
      mmLength++;
    }

    mmLength+=4;//battle log, credits, close, skins

    ship.setUIComponent(
      {id: "mainMenuHeader",
      position: [35,35-mmLength*3,30,20],
      visible: b,
      components: [
        { type:"box",position:[3,0,1,100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[7,0,93,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
        { type: "text",position:[7,0,93,30],value:"STARBLAST",color:UISkin(ship).main},
      	{ type:"box",position:[7,30,93,30],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
      	{ type: "text",position:[7,30,93,30],value:"PROTOTYPES",color:UISkin(ship).sec},
    	{ type: "text",position:[7,60,93,40],value:"MAIN MENU",color:UISkin(ship).main},
    		]
      }
    );

    ship.setUIComponent(
      {id: "mainMenuConnect",
      position: [35,55-mmLength*3,30,5],
      visible: b,
      components: [
        { type:"box",position:[3,0,1,70],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[7,15,93,70],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[10,20,90,60],value:"Use the number keys to utilize the menu.",color:UISkin(ship).main},
    		]
      }
    );


    var bNum = 0;

    var offset = (40-mmLength*3+20)
    var otherTeam = ship.custom.team+1;
    if(otherTeam>=teams.length)
      otherTeam = 0;
    drawMainMenuButton(ship, 35, offset+bNum*6, "switchTeams", b&&mainMenuDraw.switchTeams, "Switch teams",
    teams[ship.custom.team].color, "\u{1f5d8}",teams[otherTeam].color,"#000000",""+(bNum+1))
    if(mainMenuDraw.switchTeams){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "shipSelect", b&&mainMenuDraw.shipSelect, "Select another ship",
    "#222222", "\u{1f680}","#FFFFFF","#FFFFFF",""+(bNum+1))
    if(mainMenuDraw.shipSelect){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "restartTutorial", b&&mainMenuDraw.tutorial, "Restart the tutorial",
    "#222222", "\u{2754}","#FFFFFF","#FFFFFF",""+(bNum+1))
    if(mainMenuDraw.tutorial){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "gameLog", b, "Rounds log",
    "#555500", "\u{1f3C6}","#777700","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "credits", b, "Credits",
    "#AA0000", "\u{1f496}","#FF0000","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "skins", b, "Skins",
    "#002277", "\u{2728}","#00FFFF","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "close", b, "Close",
    "#AA0000", "\u{274c}","#550000","#FFFFFF",""+(bNum+1))

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "skins")
      switchScreen(ship,2);
    if(input == "shipSelect")
      switchScreen(ship,3);
    if(input == "gameLog")
      switchScreen(ship,4);
    if(input == "restartTutorial"){
      ship.custom.tutorialStep = 0;
      switchScreen(ship,0);
    }
    if(input == "credits"){
      switchScreen(ship,5);
      ship.custom.SPPage = "credits";
    }
  }
}


var drawSkinButton = function(ship, xx, yy, id, b, text, color, unicodeChar, textCol, shortcut){
  ship.setUIComponent(
      {id: id,
      position: [xx,yy,50,5],
      clickable: b,
      shortcut: shortcut,
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:color,stroke:color},
        { type: "text",position:[0,-30,50,160],value:unicodeChar,color:textCol},
        { type: "text",position:[20,0,80,100],value:text,color:textCol,align:"right"},
        { type: "text",position:[0,0,7,100],value:"\u{2b22}",color:UISkin(ship).main},
        { type: "text",position:[0,0,7,100],value:shortcut,color:UISkin(ship).sec}
      ]
      }
    );
}

screens[2] = {
  name: "Skin selector",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){
    if(!UISystem.events.shouldRedraw(ship,["nextPage","selectSkin"]))return;
    ship.setUIComponent(
      {id: "skinSelectorHeader",
      position: [25,25,30,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"Skin selection",color:UISkin(ship).main},
    		]
      }
    );

    drawButton(ship,68,25,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,58,25,"nextPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Next page");

    for(var sn = 0; sn<8; sn++){
      if(ship.custom.skinsPage*8+sn<skins.length){
        var sk = skins[ship.custom.skinsPage*8+sn]
        drawSkinButton(ship, 25, 35+sn*5, "selectSkin"+sn, b, sk.name, sk.sec, sk.unicodeChar, sk.main, ""+(sn+1))
      }else
        drawSkinButton(ship, 25, 35+sn*5, "selectSkin"+sn, false, "", "", "","","")
    }


  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.skinsPage==null)
    ship.custom.skinsPage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "nextPage"){
      UISystem.events.pushEvent(ship,"nextPage");
      ship.custom.skinsPage++;
      if(ship.custom.skinsPage*8>skins.length)
        ship.custom.skinsPage = 0;
    }
    if(input.indexOf("selectSkin")!=-1){
      UISystem.events.pushEvent(ship,"selectSkin");
      ship.custom.skin = (+input[10])+ship.custom.skinsPage*8;
    }

  }
}

var drawShipButton = function(ship, x, y, id, fill, visible, shortcut, text, ch, cl){
  var components = [];
  var tcol = "#CDE"
  if(visible)
    var components = [
    { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:fill,width:10},
  	{ type:"box",position:[10,10,80,80],fill:"#000000",stroke:"#000000",width:2},
  	{ type: "text",position:[10,10,80,80],value:ch,color:fill},
  	{ type:"box",position:[10,10,80,80],fill:"#222222AA",stroke:"#00000000",width:2},
  	{ type: "text",position:[11,20,78,30],value:text,color:tcol},
  	{ type: "text",position:[20,40,60,40],value:"["+shortcut+"]",color:tcol},
  	{ type: "text",position:[11,11,78,10],value:cl,color:tcol}
  	]
  ship.setUIComponent(
    {id: id,
    position: [x,y,8,12],
    clickable: visible,
    shortcut: shortcut,
    visible: visible,
    components: components
    }
  );
}

screens[3] = {
  name: "Ship selector",
  tick: function(ship){
    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);
    if(distance(sh[0],sh[1])>shipSelectRange){
      switchScreen(ship, 0);
    }else
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

      if(!UISystem.events.shouldRedraw(ship,["legacyShipSelPage"]))return;

      var availableShips = getAvailableShips(ship)

      var p = ship.custom.shipChoosePage;
      for(var k=0;k<4&&p*8+k-1<availableShips.length;k++){
        var shipIndex = p*8+k-1
        if(shipIndex!=-1){
          var shipType = availableShips[shipIndex];
          drawShipButton(ship, 30+k*10, 30, "selectShip"+k,
            shipsData[shipType].color, b, ""+(k+1),
            shipsData[shipType].name,
            shipsData[shipType].unicodeChar,
            shipsData[shipType].cl
          );
        }else{
          drawShipButton(ship, 30+k*10, 30, "selectShip"+k,
            "#FFFFFF", b, ""+(k+1),
            "Random ship",
            "?",
            "Chance"
          );
        }
      }


      if(k==4)
      for(k=4;k<8&&p*8+k-1<availableShips.length;k++){
        var shipType = availableShips[p*8+k-1]
        drawShipButton(ship, 30+(k-4)*10, 60, "selectShip"+k,
          shipsData[shipType].color, b, ""+(k+1),
          shipsData[shipType].name,
          shipsData[shipType].unicodeChar,
          shipsData[shipType].cl
        );
      }

      if(k!=8)
      for(;k<8;k++)
      drawShipButton(ship, 30+(k-4)*10, 60, "selectShip"+k, "#555555", false, ""+(k+1),
      "k","","","");


      drawButton(ship,30,80,"nextPage",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Next page ");
      drawButton(ship,40,80,"close",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Hide");

      ship.setUIComponent(
        {id: "shipSelectHeader",
        position: [30,20,40,5],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[10,30,80,50],value:"Select a ship",color:UISkin(ship).main}
        ]
        }
      );
  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.shipChoosePage==null)
      ship.custom.shipChoosePage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    availableShips = getAvailableShips(ship)
    if(input == "nextPage"){
      UISystem.events.pushEvent(ship,"legacyShipSelPage");
      ship.custom.shipChoosePage++;
      if(ship.custom.shipChoosePage*8>availableShips.length)
        ship.custom.shipChoosePage = 0;
    }

  }
}

var drawRoundLog = function(ship, xx, yy, id, b, col, tcol, text, stTime, rLength){

  ship.setUIComponent(
      {id: id,
      position: [xx,yy,50,5],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec},
        { type:"box",position:[30,0,30,100],fill:col,stroke:col},
        { type: "text",position:[5,0,20,100],value:stTime,color:UISkin(ship).main,align:"left"},
        { type: "text",position:[35,0,20,100],value:text,color:tcol,align:"left"},
        { type: "text",position:[65,0,20,100],value:rLength+" seconds",color:UISkin(ship).main,align:"right"},
      ]
      }
    );
}

screens[4] = {
  name: "Round Log",
  roundsPerPage: 14,
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    ship.setUIComponent(
      {id: "roundLogHeader",
      position: [25,15,20,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"Rounds log",color:UISkin(ship).main},
    		]
      }
    );

    drawButton(ship,68,15,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,58,15,"nextPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Next page");
    drawButton(ship,48,15,"prevPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Previous page");



    for(var sn = 0; sn<this.roundsPerPage; sn++){
      var col = "#AAAAAA"
      var tcol = "#000000"
      var text = "In progress"
      var stTime = "";
      var rLength = "";
      var roundId = roundsLog.length-1-(ship.custom.roundLogPage*this.roundsPerPage+sn);
      if(roundsLog[roundId]!=null){
        if(roundsLog[roundId].winner==-1){
          col = "#222222"
          tcol = "#FFFFFF"
          text = "Draw"
        }else if(teams[roundsLog[roundId].winner]!=null){
          col = teams[roundsLog[roundId].winner].color
          tcol = "#FFFFFF"
          text = teams[roundsLog[roundId].winner].name+" won"
        }
        stTime = roundsLog[roundId].startTime;
        rLength = roundsLog[roundId].roundLength;
        drawRoundLog(ship, 25, 25+sn*5, "roundLog"+sn, b, col, tcol, text, stTime, rLength)
      }else
        drawRoundLog(ship, 25, 25+sn*5, "roundLog"+sn, false, col, tcol, text, stTime, rLength)
    }


  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.roundLogPage==null)
    ship.custom.roundLogPage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "nextPage"){
      ship.custom.roundLogPage++;
      if(ship.custom.roundLogPage*this.roundsPerPage>roundsLog.length)
        ship.custom.roundLogPage = 0;
    }
    if(input == "prevPage"){
      ship.custom.roundLogPage--;
      if(ship.custom.roundLogPage*this.roundsPerPage<0)
        ship.custom.roundLogPage = roundsLog.length/this.roundsPerPage;
    }
  }
}


var maxPTextLength = 80
var maxFewerCharactersNewline = 10
var SPPBDrawParagraph = function(comps, data, offsets, links){

  offsets.element+=3;

  var j = data.search(/%%/)
  while(j!=-1){
    data = data.replace(/%%/,"")
  }

  j = data.search(/%[^%]+%/)
  while(j!=-1){
    s = data.substring(j+1);
    links.push(s.substring(0,s.indexOf("%")));
    //log(s.substring(0,s.indexOf("%")))
    data = data.replace(/%[^%]+%/,"["+(offsets.linkNum+1)+"]")
    offsets.linkNum++;
    j = data.search(/%[^%]+%/)
  }

  var s = []
  var dataLeft = data;
  j = 0;
  while(dataLeft.length>0&&j<500){
    lastSpacePos = dataLeft.substring(0,maxPTextLength).lastIndexOf(" ")
    if(maxPTextLength-lastSpacePos<maxFewerCharactersNewline){
      s.push(dataLeft.substring(0,lastSpacePos))
      dataLeft = dataLeft.substring(lastSpacePos)
    }else{
      s.push(dataLeft.substring(0,maxPTextLength))
      dataLeft = dataLeft.substring(maxPTextLength)
    }
    j++
  }


  if(j>500)log("yeet alert")
  //for(j=0;j<s.length;j++)
  //  log(s[j]);

  for(j=0;j<s.length;j++){
    	comps.push({ type: "text",position:[5,offsets.element,90,5],value:s[j],color:UISkin(ship).main,align:"left"})
      offsets.element+=5;
  }

}

var SPPBDrawTitle = function(comps, data, offsets){
  comps.push(
    { type:"box",position:[0,offsets.element,100,7],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
    { type: "text",position:[0,offsets.element,100,7],value:data,color:UISkin(ship).sec}
  )
  offsets.element+=7;
}

var SPPBDrawSeparator = function(comps, data, offsets){
  comps.push(
    { type:"box",position:[0,offsets.element+1,100,1],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
  )
  offsets.element+=5;
}

var SPPBDrawColumns = function(comps, data, offsets, widths){
  leftShift = 0;
  for(j=0; j<widths.length;j++){
    if(j%2==0){
      colF = UISkin(ship).main
      colB = UISkin(ship).sec
    }else{
      colB = UISkin(ship).main
      colF = UISkin(ship).sec
    }
    comps.push(
      { type:"box",position:[leftShift,offsets.element,widths[j],7],fill:colB,stroke:colB,width:2},
      { type: "text",position:[leftShift,offsets.element,widths[j],7],value:data[j],color:colF}
    )
    leftShift+=widths[j]
  }
  offsets.element+=7;
}

screens[5] = {
  name: "SP Pages Browser",
  maxScroll: 200,
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    ship.setUIComponent(
      {id: "SPPBHeader",
      position: [25,25,30,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"SP Pages Browser",color:UISkin(ship).main},
    		]
      }
    );

    if(ship.custom.SPPB.redrawPage||!b){
      log("hey")
      log(SPPages);
      for(var i = 0; i<ship.custom.SPPB.chunksAmount; i++){
        ship.setUIComponent(
          {id: "SPPBChunk"+i,
          position: [25,35,50,40],
          visible: false,
          }
        );
      }
      /*ship.setUIComponent(
        {id: "SPPBPageBkg",
        position: [25,35,50,40],
        visible: false,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2}
        ]
        }
      );*/
      ship.custom.SPPB.redrawPage = false;
      ship.custom.SPPB.pageLoaded = false;
      ship.custom.SPPB.pageElementsLoaded = 0;
      ship.custom.SPPB.loadingOffset = 5;
      ship.custom.SPPB.chunksAmount = 0;
    }
    var chunkSize = 25;

    if(!ship.custom.SPPB.pageLoaded){
      var page = SPPages[ship.custom.SPPB.SPPage];

      var offsets = {linkNum: 0, element:ship.custom.SPPB.loadingOffset}

      var links = [];
      var comps = [];

      if(page!=null){
        for(var el = ship.custom.SPPB.scroll+ship.custom.SPPB.pageElementsLoaded; /*checked within the loop*/; el++){
          if(el<0)continue;
          if(offsets.element>100||el>=page.length){
            ship.custom.SPPB.pageLoaded = true;
            break;
          }
          if(comps.length>chunkSize){
            break;
          }
          switch(page[el].type){
            case 0:
              SPPBDrawParagraph(comps, page[el].data, offsets, links);
              break;
            case 1:
              SPPBDrawTitle(comps, page[el].data, offsets);
              break;
            case 2:
              SPPBDrawSeparator(comps, page[el].data, offsets);
              break;
            case 3:
              SPPBDrawColumns(comps, page[el].data, offsets, page[el].widths);
              break;
            default:
              log("wtf")
          }
        }
        ship.custom.SPPB.pageElementsLoaded = el-1;
        ship.custom.SPPB.loadingOffset = offsets.element;
        ship.custom.SPPB.chunksAmount++;
      }else{
        ship.custom.SPPB.pageLoaded = true;
      }

      ship.setUIComponent(
        {id: "SPPB404",
        position: [25,35,50,40],
        visible: b&&(page==null),
        components: [
      	   { type: "text",position:[0,10,100,10],value:"What? Where? When?",color:UISkin(ship).main},
           { type: "text",position:[0,20,100,20],value:"ERROR 404",color:UISkin(ship).main},
           { type: "text",position:[0,40,100,5],value:"So... this is awkward, but SPPB couldn't find the requested page",color:UISkin(ship).main},
      		]
        }
      );

      ship.custom.SPPBLinks = links;

      for(j=0;j<8;j++){
        if(j<links.length){
          ship.setUIComponent(
            {id: "SPPBLink"+j,
            position: [25+(j%4)*(50/4),75+Math.floor(j/4-1)*5,(50/4),5],
            visible: b,
            clickable: b,
            shortcut: ""+(j+1),
            components: [
              { type:"box",position:[0,0,100,100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
          	   { type: "text",position:[0,30,100,40],value:"["+(j+1)+"] "+links[j],color:UISkin(ship).sec},
          		]
            }
          );
        }else{
          ship.setUIComponent(
            {id: "SPPBLink"+j,
            position: [25+(j%4)*(50/4),50,(50/4),5],
            visible: false
            }
          );
        }
      }

      ship.setUIComponent(
        {id: "SPPBChunk"+(ship.custom.SPPB.chunksAmount-1),
        position: [25,35,50,40],
        visible: b&&page!=null,
        components: comps
        }
      );

      //TODO: figure out this layering bullshit
      /*if(ship.custom.SPPB.chunksAmount==1){
        ship.setUIComponent(
          {id: "SPPBPageBkg",
          position: [25,35,50,40],
          visible: b&&page!=null,
          components: [
            { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2}
          ]
          }
        );
      }*/


    }

    drawButton(ship,58,25,"SPPBHomepage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Homepage");
    drawButton(ship,68,25,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,78,25,"scrollUp",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I","Scroll up");
    drawButton(ship,78,68,"scrollDown",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"L","Scroll down");

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.SPPB==null){
      ship.custom.SPPB = {
        SPPage: null,
        scroll: 0,
        redrawPage: true,
        pageLoaded: false,
        pageElementsLoaded: 0,
        loadingOffset: 0,
        chunksAmount: 0
      };
    }
    ship.custom.SPPB.SPPage = "credits";
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "SPPBHomepage"){
      ship.custom.SPPB.scroll = 0;
      ship.custom.SPPB.SPPage = "credits";
      ship.custom.SPPB.redrawPage = true;
    }
    if(SPPages[ship.custom.SPPB.SPPage]!=null){
      if(input == "scrollUp"){
        ship.custom.SPPB.scroll--;
        if(ship.custom.SPPB.scroll<0)
        ship.custom.SPPB.scroll=0;
        ship.custom.SPPB.redrawPage = true;
      }
      if(input == "scrollDown"){
        ship.custom.SPPB.scroll++;
        if(ship.custom.SPPB.scroll>=SPPages[ship.custom.SPPB.SPPage].length)
        ship.custom.SPPB.scroll=SPPages[ship.custom.SPPB.SPPage].length-1;
        ship.custom.SPPB.redrawPage = true;
      }
    }
    if(input.includes("SPPBLink")){
      try{
        ship.custom.SPPB.SPPage = ship.custom.SPPBLinks[+input[8]];
        ship.custom.SPPB.scroll = 0;
        ship.custom.SPPB.redrawPage = true;
      }catch(e){

      }
    }
  }
}

screens[6] = {
  name: "Intro Sequence",

  introPhrases: [
    "Mining? We don't do that here.",
    "Zero mining. Pure combat.",
    "Putting 'blast' in 'Starblast'!",
    "Powerminers' worst nightmare!",
    "Warning: entering mining-free zone.",
    "Powerminers not welcome!",
    "Powerminers beware!",
    "Outplay, outsmart, outmaneuver.",
    "What Starblast should've always been.",
    "Let our skills decide the outcome.",
    "Join, select a ship, engage.",
    "Wow, this game is actually fun!",
    "Locked and loaded.",
    "Ready to blast.",
    "Mining?! Not even once!",
    "I'm here to blast ships to bits!",
    "We aren't born to mine. We are born to fight!",
    "Hundreds of ships destroyed, not a single gem mined.",
    "Starblast can be fun!",
    "loading engagingGameplay.js...",
    "Win by skill, not by tier",
    "Mining is boring. Literally.",
    "Mining enslaves. Fighting is freedom."//Anonymous
  ],
  loadingConsoleLog: [
    "POWER ON",
    "initializing systems...",
    "all systems nominal, proceeding to boot up PROTOTYPES.sc",
    "",
    "boot complete",
    "",
    "STARBLAST PROTOTYPES v0.31.5",
    "Checking access keys...",
    "Access granted.",
    "Loading IO protocols...",
    "Loading ship characteristics...",
    "Loading abilities...",
    "Initializing controls...",
    "",
    "MAIN SCREEN TURN ON"
  ],

  consoleText : function(txt,i){
      var t = { type: "text",position:[5,2+i*5,90,3],value:txt,color:"#CDE",align:"left"}
      return t;
  },

  consoleComps: [],
  introLength: 10,

  prepare: function(){
    for(i=0;i<this.loadingConsoleLog.length;i++){
      this.consoleComps.push(this.consoleText(this.loadingConsoleLog[i],i));
    }
  },
  tick: function(ship){
    this.redraw(ship, true);
    ship.custom.introSequence++;
  },
  redraw: function(ship, b){
    if(ship.custom.introSequence>this.introLength&&b){
      switchScreen(ship,0);
    }
    if(ship.custom.introSequence==null){
      ship.custom.introSequence = 0;
      ship.custom.introMotto = Math.floor(Math.random()*this.introPhrases.length);
    }else ship.custom.introSequence++;

    var showLines = 2;

    if(ship.custom.introSequence>this.introLength*0.1)
    showLines = 3;

    if(ship.custom.introSequence>this.introLength*0.25)
    showLines = 8;

    if(ship.custom.introSequence>this.introLength*0.3)
    showLines = 10;

    if(ship.custom.introSequence>this.introLength*0.4)
    showLines = 12;

    if(ship.custom.introSequence>this.introLength*0.45)
    showLines = 14;

    if(ship.custom.introSequence>this.introLength*0.5)
    showLines = 15;

    var showComps = [
      { type:"box",position:[0,0,100,100],fill:"#000",stroke:"#000",width:2},
          ];

    showComps = showComps.concat(this.consoleComps.slice(0,showLines));

    if(ship.custom.introSequence<this.introLength*0.7){
      ship.setUIComponent(
        {id: "console",
        position: [0,0,100,100],
        visible: true,
        components: showComps
        }
      );

    }else{
      ship.setUIComponent(
        {id: "console",
        position: [0,0,100,100],
        visible: false,
        components: [
         ]
        }
      );
      ship.setUIComponent(
        {id: "introLogo",
        position: [30,30,40,40],
        visible: ship.custom.introSequence<this.introLength,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#222",stroke:"#222",width:2},
          { type: "text",position:[0,0,100,40],value:"STARBLAST",color:"#CDE"},
        	{ type:"box",position:[0,40,100,40],fill:"#CDE",stroke:"#CDE",width:2},
        	{ type: "text",position:[0,40,100,40],value:"PROTOTYPES",color:"#222"},
      	{ type: "text",position:[0,80,100,20],value:this.introPhrases[ship.custom.introMotto],color:"#CDE"},
      		]
        }
      );
      if(ship.custom.introSequence == this.introLength)
        ship.setUIComponent(
          {id: "gemBar",
          position: [3,18.5,16,3],
          visible: true,
          components: [
              { type:"box",position:[0,0,100,100],fill:"#593332",stroke:"#593332",width:2},
              { type: "text",position:[5,0,90,100],value:"We don't mine here.",color:"#CDE"}]
          }
        );
    }

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){

  }
}

//TODO: refactor, add to all screens, rename to init
screens[6].prepare();

screens[7] = {
  name: "Ship selector 2.0",
  tick: function(ship){
    this.redraw(ship, true);
  },
  hangarsPerTeam: {},
  resolvePath: function(root, path){

    var getPropRecusive = function(obj, tokenPath){
      if(tokenPath.length==1){
        return obj.items[tokenPath[0]];
      }else{
        if(obj!=null)
          return getPropRecusive(obj.items[tokenPath[0]], tokenPath.slice(1))
        return null;
      }
    }

    var tokens = path.split(".");

    if(tokens.length == 0) return root;

    return getPropRecusive(root, tokens.slice(1));

  },
  drawItem: function(ship,x,y,id,visible,item){
    var components = [];
    /*
    text: text,
    type: type,//0 - ship, 1 - category, 2 - special
    unicodeSymbol: symbol,
    data: data,
    items: {}
    */
    var typeSymbol = ["\u{1f680}","\u{1f5ca}","\u{2b9a}"][item.type];
    if(visible)
      components = [
      { type:"box",position:[0,0,100,100],fill:item.color,stroke:item.color,width:10},
    	{ type: "text",position:[0,0,10,100],value:"["+(id+1)+"] "+typeSymbol,color:"#FFFFFF"},
      { type: "text",position:[10,0,10,100],value:item.unicodeSymbol,color:"#FFFFFF"},
      { type: "text",position:[25,0,60,100],value:item.text,color:"#FFFFFF"},
    	]
    ship.setUIComponent(
      {id: "option"+id,
      position: [x,y,32,3],
      clickable: visible,
      shortcut: ""+(id+1),
      visible: visible,
      components: components
      }
    );

  },
  redraw: function(ship, b){

    if(UISystem.events.shouldRedraw(ship))
      ship.setUIComponent(
        {id: "shipSelectHeader",
        position: [50,30,50,5],
        visible: b,
        components: [
          { type:"box",position:[20,20,80,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type:"box",position:[0,85,100,5],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
          { type: "text",position:[9,-1,90,70],value:"STARBLAST PROTOTYPES HANGARS",color:UISkin(ship).sec},
          { type: "text",position:[10,0,90,70],value:"STARBLAST PROTOTYPES HANGARS",color:UISkin(ship).main}
        ]
        }
      );

    if(ship.custom.shipHangarScreen==null){
      ship.custom.shipHangarScreen = {
        path: "",
        scroll: 0
      }
    }

    var path = ship.custom.shipHangarScreen.path;
    var scroll = ship.custom.shipHangarScreen.scroll;

    if(path==null)
      path = "";

    var resolve = this.resolvePath(root, path);

    if(resolve==null){
      resolve = root;
      path = "";
    }

    if(UISystem.events.shouldRedraw(ship,["redrawPage"])){
      ship.setUIComponent(
        {id: "shipSelectPath",
        position: [55,36,45,3],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[10,10,90,90],value:path,color:UISkin(ship).main}
        ]
        }
      );

      ship.custom.shipHangarScreen.path = path;

      ship.custom.shipHangarScreen.currentLinks = []
      ship.custom.shipHangarScreen.itemsAmount = Object.keys(resolve.items).length;

      var ypos = 0;
      var counter = 0;
      var offset = 0;
      for(var k in resolve.items){
        if(counter>=8)break;
        offset++;
        if(offset<scroll*8)continue;
        ship.custom.shipHangarScreen.currentLinks.push({
          path:k,
          item:resolve.items[k]
        });
        this.drawItem(ship,60,40+ypos,counter,b,resolve.items[k])
        ypos += 3;
        counter++;
      }
      for(var k = counter; k<8; k++){
        ship.setUIComponent(
          {id: "option"+k,
          position: [0,0,40,5],
          visible: false,
          }
        );
      }
    }

    if(UISystem.events.shouldRedraw(ship)){
      drawButton(ship,90,40,"scrollUp",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Scroll up");
      drawButton(ship,90,65,"scrollDown",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Scroll down");

      drawButton(ship,55,65,"undockHangar",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I","Launch");
      drawButton(ship,65,65,"back",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Go back");
    }

    if(UISystem.events.shouldRedraw(ship,["switchedShip"])){
      var curShip = sp.shipManager.getShipData(ship);
      ship.setUIComponent(
        {id: "shipDataTop",
        position: [2,30,30,15],
        visible: b,
        components: [
          { type: "text",position:[0.5,-0.5,90,50],value:curShip.name,color:UISkin(ship).sec,align:"left"},
          { type: "text",position:[1,0,90,50],value:curShip.name,color:UISkin(ship).main,align:"left"},
          { type:"box",position:[0,50,70,20],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,50,70,20],value:curShip.cl + " by " +companies[curShip.company].name,color:UISkin(ship).main},
          { type: "text",position:[0,80,100,20],value:" Author: " +shipsByCode[curShip.configs[0]].author,color:"#FFFFFF"},
        ]
        }
      );
      try{
        var shStats = shipsByCode[curShip.configs[0]].info.stats;
        var massToTonnes = 0.1;
        ship.setUIComponent(
          {id: "shipDataBottom",
          position: [2,52,30,7],
          visible: b,
          components: [
            { type:"box",position:[0,0,100,100],fill:"#222222",stroke:"#222222",width:2},
            { type: "text",position:[0,0,30,50],
            value:"\u{1f6e1}"+shStats.nominalStats.shieldcap.toFixed(1)+
            " ("+shStats.nominalStats.shieldregen.toFixed(1)+")",color:"#0055FF"},
            { type: "text",position:[33,0,30,50],
            value:"\u{26a1}"+shStats.nominalStats.shieldcap.toFixed(1)+
            " ("+shStats.nominalStats.shieldregen.toFixed(1)+")",color:"#FF5500"},
            { type: "text",position:[66,0,30,50],
            value:"\u{1f529}"+(shStats.mass*massToTonnes).toFixed(1)+"t",color:"#444444"},

            { type: "text",position:[0,50,30,50],
            value:"\u{1f5d8}"+shStats.nominalStats.rotation.toFixed(1),color:"#2200FF"},
            { type: "text",position:[33,50,30,50],
            value:"\u{1f680}"+shStats.nominalStats.agility.toFixed(1),color:"#FF00FF"},
          ]
          }
        );
      }catch(e){log(e)}
    }
  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.shipChoosePage==null)
      ship.custom.shipChoosePage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    //if(input == "close")
    //  switchScreen(ship,0);
    if(input.startsWith("option")){
      var id = input[6];
      var current = ship.custom.shipHangarScreen.currentLinks[id];
      if(current.item.type == 1){
        ship.custom.shipHangarScreen.path += "."+current.path;
        ship.custom.shipHangarScreen.scroll = 0;
      }else if(current.item.type == 0){
        ship.custom.selectedShip = current.item.data;
        sp.shipManager.respawn(ship,true);
      }else if(current.item.type == 2){
        current.item.data(ship);
      }
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "back"){
      var path = ship.custom.shipHangarScreen.path;
      ship.custom.shipHangarScreen.path = path.substring(0,path.lastIndexOf("."));
      ship.custom.shipHangarScreen.scroll = 0;
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "scrollUp"){
      var iam = ship.custom.shipHangarScreen.itemsAmount;
      ship.custom.shipHangarScreen.scroll--;
      if(ship.custom.shipHangarScreen.scroll<0)
        ship.custom.shipHangarScreen.scroll = Math.floor(iam/8);
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "scrollDown"){
      var iam = ship.custom.shipHangarScreen.itemsAmount;
      ship.custom.shipHangarScreen.scroll++;
      if(ship.custom.shipHangarScreen.scroll>Math.floor(iam/8))
        ship.custom.shipHangarScreen.scroll = 0;
      UISystem.events.pushEvent(ship,"redrawPage");
    }
  },
  root: {}
}


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

var tipDuration = 5;
var tipTimer = 0;

var globalTips = [
  "Capture control points to win the game.",
  "Whichever team holds the majority of points for 5 minutes, wins.",
  "Prioritize the objective, don't fight in the middle of nowhere.",
  "Use in-game chat to improve cooperation.",
  "Don't chase other players - all ships have the same speed.",
  "Being chased is the key to winning a battle.",
  "Killing enemies is fun, but the objective is more important.",
  "Don't forget to utilize your unique abilities - use number keys!",
  "Join my discord! discord.gg/qgbCM8c",
  "Found a bug? Report it to me! discord.gg/qgbCM8c",
  "Want to suggest an improvement? discord.gg/qgbCM8c",
  "Please report all bugs to the developer via Reddit or Discord.",
  "Feedback is highly appreciated. discord.gg/qgbCM8c",
  "Best played with 8+ players!",
  //"Use web version for a better gameplay experience.", //no dont
  //"Web version is more suited for modded games.", //well kinda not anymore
  "Don't mine the rocks. Just... don't."
];

var randomizeTip = function(){

  for(i=0;i<game.ships.length;i++){
    var ship = game.ships[i];
    UISystem.events.pushEvent(ship,"bottomTipUpdate");
    var data = null;

    try{
      data = shipsData[ship.custom.selectedShip];
    }catch(e){}
    var tip = "";
    if(Math.random()<0.5&&data!=null){
      tip = data.name + ": " + data.tips[Math.floor(data.tips.length*Math.random())];
    }
    if(tip=="")
      tip = globalTips[Math.floor(globalTips.length*Math.random())];
    if(tip=="")
      tip = "Could not select a valid tip.";
    ship.custom.tip = tip;
  }
};

sp.hangarsManager = {

  hangars: [],

  init:function(ship){
    //TODO: each ship should be provided with a global unique identifier
    ship.custom.hangarSys = {
      hangar: null,
    }
  },

  validateHangar:function(ship){
    if(ship.custom.hangarSys!=null){
        var h = ship.custom.hangarSys.hangar;
        var data = ship.custom.hangarSys;
        if(
          h>=0 &&
          h<this.hangars.length &&
          this.hangars[h] != null &&
          this.hangars[h].occupiedBy == null
        )
          return true;
    }

    //if the hangar is invalid(e.g. in use) - we just reset everything for the ship
    this.init(ship);
    return false;

  },

  tick:function(){

    //update all hangars occupiedBy
    //clear
    var emptyHangars = {};
    for(var i = 0; i<this.hangars.length; i++){
      this.hangars[i].occupiedBy = null;
      emptyHangars[i] = this.hangars[i];
    }
    //iterate and assign
    for(var i = 0; i<game.ships.length; i++){
      var ship = game.ships[i];

      if(!ship.custom.isInHangar)continue;

      //if this ship is assigned a valid hangar
      if(this.validateHangar(ship)){
        var h = ship.custom.hangarSys.hangar;
        this.hangars[h].occupiedBy = i;
        emptyHangars[h] = null;
      }
    }

    //now all hangars are occupiedBy, except for ones that aren't being used
    //iterate over all ships again, and assign those that aren't to empty hangars
    for(var i = 0; i<game.ships.length; i++){
      var ship = game.ships[i];

      if(!ship.custom.isInHangar)continue; //TODO: fill own ships list?

      var data = ship.custom.hangarSys;

      //if this ship hasn't been assigned yet,
      if(data.hangar==null) {

        var h = null;
        for(var h in emptyHangars){//there's gotta be a better way
          if(emptyHangars[h]!=null){

            break;
          }
        }

        if(h==null){//no hangars available
          //fucking panic
          //TODO: don't panic
        }

        data.hangar = h;

      }

      //by now, hopefully, all ships are properly set up. handle them:
      var hangar = this.hangars[data.hangar];
      ship.set({x:hangar.x, y:hangar.y, vx: 0, vy: 0, stats: 33333333,
        //type: 400+(ship.custom.selectedShip+1),
        idle: true
      });

    }

  },
  tickHook: function(){
    sp.hangarsManager.tick();
  }
}

var hangarsXPos = ms*4.7;
var hangarsSideWallXPos = hangarsXPos-155

for(var x = 0; x<3; x++){
  for(var y = 0; y<16; y++){
    var xx = (hangarsXPos-90)+70*x;
    var yy = -240+(y/16)*480;
    sp.hangarsManager.hangars.push({
      GPO:GPOTypes[5].create(xx,yy,0),
      occupiedBy: -1,
      x:xx+4,
      y:yy-4
    });
  }
}

var barrier = {
  id: "cube",
  physics: {
    mass: 650,
    shape: [2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.308,3.048,2.878,2.759,2.697,2.697,2.759,2.878,3.048,3.308,3.672,3.678,3.474,3.169,2.958,2.806,2.723,2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.307,3.054,2.878,2.761,2.698,2.698,2.761,2.878,3.054,3.307,3.672,3.678,3.474,3.169,2.958,2.806,2.723],
    fixed: true
  }
} ;

GPOTypes[6].create(hangarsSideWallXPos,0,1,240)
GPOTypes[6].create(-hangarsSideWallXPos,0,1,240)

//GPOTypes[6].create(hangarsXPos,240,115/2,1)
//GPOTypes[6].create(hangarsXPos,-240,115/2,1)

var step = 20
for(var y = -ms*5; y<ms*5; y+=step){
  var yy = y//-240+(y/16)*480;
  game.setObject({
    id:"barrierL"+y,
    type:barrier,
    position:{x:hangarsSideWallXPos,y:yy,z:-3},
    scale:{x:1,y:6,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

for(var y = -ms*5; y<ms*5; y+=step){
  var yy = y//-240+(y/16)*480;
  game.setObject({
    id:"barrierR"+y,
    type:barrier,
    position:{x:-hangarsSideWallXPos,y:yy,z:-3},
    scale:{x:1,y:6,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

/*
for(var x = -1; x<=1; x++){
  var xx = hangarsXPos+x*70;
  game.setObject({
    id:"barrierT"+x,
    type:barrier,
    position:{x:xx,y:280,z:-3},
    scale:{x:6,y:1,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

for(var x = -1; x<=1; x++){
  var xx = hangarsXPos+x*70;
  game.setObject({
    id:"barrierB"+x,
    type:barrier,
    position:{x:xx,y:-280,z:-3},
    scale:{x:6,y:1,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}*/

sp.systems.celebration = {
  celebrationTimer: 0,
  celebrationLength: 10,
  celebWonColors: ["#FFFF00","#FFAA00","#00FFFF","#FF00FF","#7777FF"],
  celebLostColors: ["#AAAAAA","#555555","#444444","#777777","#222222"]
};

sp.systems.celebration.tick = function(){
  this.celebrationTimer++;
  if(this.celebrationTimer<this.celebrationLength)
    this.drawCelebration();
}

sp.systems.celebration.celebrate = function(){
  this.celebrationTimer = 0;

}

sp.systems.celebration.drawCelebration = function(){

  if(this.celebrationTimer>this.celebrationLength)
    return;

  var compsWon = [];
  var compsLost = [];

  if(this.celebrationTimer<this.celebrationLength){

    for(j=0;j<5;j++){
      compsWon.push(
        { type: "text",position:[5*Math.random(),5*Math.random(),95,95],value:"ＶＩＣＴＯＲＹ",
        color:this.celebWonColors[Math.round(Math.random()*this.celebWonColors.length)]}
      )
    }

    for(j=0;j<10;j++){
      compsLost.push(
        { type:"box",position:[Math.random()*80,Math.random()*80,20,20],
        fill:this.celebLostColors[Math.round(Math.random()*this.celebLostColors.length)],stroke:"#CDE",width:2}
      )
    }

    compsLost.push({ type: "text",position:[10,10,80,80],value:"𝐃𝐄𝐅𝐄𝐀𝐓",color:"#000000"})

  }

  wonUI = {id: "celebration",
    position: [30,30,40,40],
    visible: this.celebrationTimer<this.celebrationLength,
    components: compsWon
    }

  lostUI =
    {id: "celebration",
    position: [30,30,40,40],
    visible: this.celebrationTimer<this.celebrationLength,
    components: compsLost
    }

  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];
    if(ship.custom.wonLastGame == null)
      continue;
    if(ship.custom.wonLastGame){
      UISystem.autoClearUI.set(ship,wonUI,1)
    }else{
      UISystem.autoClearUI.set(ship,lostUI,1);
    }
  }
}

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

var maps = []
maps[0] =
  {
    name: "2-Crystal",//Formerly 3-crystal
    cp:[
      {x:0,y:170},
      {x:0,y:-170},
      //{x:0,y:0}
    ],
    teams:[
      {x:170,y:0},
      {x:-170,y:0}
      ]
  }
maps[0].asteroids =
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                        999999999   99    99   999999999                        \n"+
"                                    9      9                                    \n"+
"                                      9  9                                      \n"+
"                     9            9          9            9                     \n"+
"                     9           9            9           9                     \n"+
"                     9          9     9  9     9          9                     \n"+
"                     9         9    9      9    9         9                     \n"+
"                     9        9     99    99     9        9                     \n"+
"                     9       9                    9       9                     \n"+
"                     9      9     9          9     9      9                     \n"+
"                     9     9     99          99     9     9                     \n"+
"                     9    9     99            99     9    9                     \n"+
"                     9   9            9999            9   9                     \n"+
"                     9  9             9  9             9  9                     \n"+
"                     9                                    9                     \n"+
"                     9                                    9                     \n"+
"                     9                                    9                     \n"+
"                            99999999   99   99999999                            \n"+
"                                                                                \n"+
"                     9  9            9    9            9  9                     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                     9  9            9    9            9  9                     \n"+
"                                                                                \n"+
"                            99999999   99   99999999                            \n"+
"                     9                                    9                     \n"+
"                     9                                    9                     \n"+
"                     9                                    9                     \n"+
"                     9  9             9  9             9  9                     \n"+
"                     9   9            9999            9   9                     \n"+
"                     9    9     99            99     9    9                     \n"+
"                     9     9     99          99     9     9                     \n"+
"                     9      9     9          9     9      9                     \n"+
"                     9       9                    9       9                     \n"+
"                     9        9     99    99     9        9                     \n"+
"                     9         9    9      9    9         9                     \n"+
"                     9          9     9  9     9          9                     \n"+
"                     9           9            9           9                     \n"+
"                     9            9          9            9                     \n"+
"                                      9  9                                      \n"+
"                                    9      9                                    \n"+
"                        999999999   99    99   999999999                        \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"//+
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999"

maps[1] =
  {
    name: "Liftoff",//Formerly unnamed
    cp:[
      {x:65,y:-65},
      {x:-65,y:-65},
      //{x:0,y:0},
      {x:0,y:115}
    ],
    teams:[
      {x:180,y:0},
      {x:-180,y:0}
      ]
  }
maps[1].asteroids =
//"9999999999999999999999999999999999999999999999999999999999999999999999999999999 \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                  999      999                                  \n"+
"                                 9   99  99   9                                 \n"+
"                                9    9    9    9                                \n"+
"                               9                9                               \n"+
"                              9   9          9   9                              \n"+
"                             9    99  9  9  99    9                             \n"+
"                            9        99  99        9                            \n"+
"                           9   99   99    99   99   9                           \n"+
"                          9     9  99      99  9     9                          \n"+
"                         9        99        99        9                         \n"+
"                        9        99 9      9 99        9                        \n"+
"                       9         9   9    9   9         9                       \n"+
"                       9              9  9              9                       \n"+
"                    9  9         9     99     9         9  9                    \n"+
"                                      9  9                                      \n"+
"                           99    9    9  9    9    99                           \n"+
"                    9  9  99           99           99  9  9                    \n"+
"                         99             9            99                         \n"+
"                        99    99   99   9  99   99    99                        \n"+
"                       99     9     9  99  9     9     99                       \n"+
"                       9        9 9    9     9 9        9                       \n"+
"                                       99                                       \n"+
"                                9 9     9    9 9                                \n"+
"                              9     9  99  9     9                              \n"+
"                              99   99  9   99   99                              \n"+
"                                       99                                       \n"+
"                       9                9               9                       \n"+
"                       9               99               9                       \n"+
"                       9               99               9                       \n"+
"                       9              9  9              9                       \n"+
"                        9            9    9            9                        \n"+
"                         9999       9      9       9999                         \n"+
"                                   9   99   9                                   \n"+
"                                  9   9  9   9                                  \n"+
"                                 9   9    9   9                                 \n"+
"                                9   9  99  9   9                                \n"+
"                               9   9  9999  9   9                               \n"+
"                              9   9  99  99  9   9                              \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"

maps[2] =
  {
    name: "Bearded Spacebeast",
    cp:[
      {x:0,y:70}
    ],
    teams:[
      {x:170,y:0},
      {x:-170,y:0}
      ]
  }
maps[2].asteroids =
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                     99999999999999999999999999999999999999                     \n"+
"                    99                                    99                    \n"+
"                   99                                      99                   \n"+
"                  99   99999999  99999999999999  99999999   99                  \n"+
"                  9   99          9          9          99   9                  \n"+
"                  9  99     9                      9     99  9                  \n"+
"                  9  9     99 9 9   9      9   9 9 99     9  9                  \n"+
"                  9                                          9                  \n"+
"                  9         99                    99         9                  \n"+
"                  9  9       99                  99       9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9               99  99               9  9                  \n"+
"                  9       9                          9       9                  \n"+
"                  9                  9    9                  9                  \n"+
"                  9  9  9                              9  9  9                  \n"+
"                  9  9               99  99               9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                            99                    99                            \n"+
"                            9      99      99      9                            \n"+
"                     9  9           99    99           9  9                     \n"+
"                                  9          9                                  \n"+
"                             9  999    99    999  9                             \n"+
"                     9  9    9       9    9       9    9  9                     \n"+
"                             9    9          9    9                             \n"+
"                            99999 99   99   99 99999                            \n"+
"                     9    9    9  9          9  9    9    9                     \n"+
"                     99   9    9     99  99     9    9   99                     \n"+
"                      99    99                    99    99                      \n"+
"                       99    999  99  9  9  99  999    99                       \n"+
"                        99            9999            99                        \n"+
"                         99     99            99     99                         \n"+
"                          99     99          99     99                          \n"+
"                           99     9          9     99                           \n"+
"                            99                    99                            \n"+
"                             9999999999999999999999                             \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"//+

maps[3] =
  {
    name: "2-Crystal",//Formerly 3-crystal
    cp:[
      {x:0,y:50}
      //{x:0,y:0}
    ],
    teams:[
      {x:170,y:0},
      {x:-170,y:0}
      ]
  }
maps[3].asteroids =
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                        999999999   99    99   999999999                        \n"+
"                                                                                \n"+
"                               9               9                                \n"+
"                               99             99                                \n"+
"                                                                                \n"+
"              9                                                  9              \n"+
"              9                 9              9                 9              \n"+
"              9            9        99    99        9            9              \n"+
"              9            9                        9            9              \n"+
"              9                                                  9              \n"+
"              9                                                  9              \n"+
"              9                                                  9              \n"+
"              9            9        99 99 99        9            9              \n"+
"              9            99       9      9       99            9              \n"+
"              9                                                  9              \n"+
"              9                     9      9                     9              \n"+
"              9             9       9      9       9             9              \n"+
"                                                                                \n"+
"                                    9      9                                    \n"+
"                     9  9           99 99 99           9  9                     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                     9  9   99       9    9       99   9  9                     \n"+
"                             99                  99                             \n"+
"                              99  99   99   99  99                              \n"+
"              9      9                                    9      9              \n"+
"              9      99                                  99      9              \n"+
"              9       999999999  99  99  99  99  999999999       9              \n"+
"              9            9     9    9  9    9     9            9              \n"+
"              9    99   9                              9   99    9              \n"+
"              9    9    9  99  9      9999      9  99  9    9    9              \n"+
"              9         9  9   99    99  99    99   9  9         9              \n"+
"              99        99                            99        99              \n"+
"               99   99   99999999999999  99999999999999   99   99               \n"+
"                99                  9      9                  99                \n"+
"                 99       999  9 9            9 9  999       99                 \n"+
"                  99             9  9      9  9             99                  \n"+
"                   999999999999999999999999999999999999999999                   \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"//+

maps[4] =
  {
    name: "Binary Point",
    cp:[
      {x:0,y:50},
      {x:0,y:-50}
    ],
    teams:[
      {x:170,y:0},
      {x:-170,y:0}
      ]
  }
maps[4].asteroids =
//"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                     99999999999999999999999999999999999999                     \n"+
"                    99                                    99                    \n"+
"                   99                                      99                   \n"+
"                  99   99999999  99999999999999  99999999   99                  \n"+
"                  9   99          9          9          99   9                  \n"+
"                  9  99     9                      9     99  9                  \n"+
"                  9  9     99 9 9   9      9   9 9 99     9  9                  \n"+
"                  9                                          9                  \n"+
"                  9         99                    99         9                  \n"+
"                  9  9       99                  99       9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9       9                          9       9                  \n"+
"                  9                  99  99                  9                  \n"+
"                  9  9  9                              9  9  9                  \n"+
"                  9  9               9    9               9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9               99  99               9  9                  \n"+
"                            99                    99                            \n"+
"                            9      99      99      9                            \n"+
"                     9  9           99    99           9  9                     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                     9  9           99    99           9  9                     \n"+
"                            9      99      99      9                            \n"+
"                            99                    99                            \n"+
"                  9  9               99  99               9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9               9    9               9  9                  \n"+
"                  9  9  9                              9  9  9                  \n"+
"                  9                  99  99                  9                  \n"+
"                  9       9                          9       9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9                                    9  9                  \n"+
"                  9  9       99                  99       9  9                  \n"+
"                  9         99                    99         9                  \n"+
"                  9                                          9                  \n"+
"                  9  9     99 9 9   9      9   9 9 99     9  9                  \n"+
"                  9  99     9                      9     99  9                  \n"+
"                  9   99          9          9          99   9                  \n"+
"                  99   99999999  99999999999999  99999999   99                  \n"+
"                   99                                      99                   \n"+
"                    99                                    99                    \n"+
"                     99999999999999999999999999999999999999                     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"//+

sp.shipManager = {

  //check if sprototype.type points to a valid ship, if not - respawn
  validate: function(ship){
    if(
      ship.custom.sprototype == null||
      ship.custom.sprototype.type == null||
      //ship.custom.sprototype.type < 0|| //redundant
      shipsData[ship.custom.sprototype.type] == null
    ){
      log("Ship is invalid - respawning!");
      this.respawn(ship,ship.custom.isInHangar);
      log("Respawned?");
    }
  },

  //respawn the ship, restoring it's known init state
  respawn: function(ship,dockHangar = false){

    log("sp.shipManager.respawn(ship["+ship.name+"], "+dockHangar+")");

    //check if the player has selected a ship and if that ship is valid
    var type = 0;
    if(
      ship.custom.selectedShip!=null&&
      //ship.custom.selectedShip>=0&& //redundant
      shipsData[ship.custom.selectedShip] != null
    ){
      //ship is valid, use it
      type = +ship.custom.selectedShip;
      log("type = "+type)
    }else{
      //fill an array with all possible ships, choose a random one
      var options = [];
      for(var sh in shipsData){
        options.push(sh);
      }
      type = +options[Math.floor(Math.random()*options.length)];
      log("recalc type = "+type)
    }

    ship.custom.sprototype = {
      type: type
    };

    var p = ship.custom.sprototype;
    var sh = shipsInGameData[ship.custom.index];
    //TODO: this probably should be refactored somehow. move to hangars.js?
    if(!dockHangar){
      ship.set({shield:20000,generator:20000/*,score:0*/})
      shipsData[type].respawn(ship, sh, p);
      ship.custom.isInHangar = false;//no longer in hangar
      ship.custom.needsLaunch = true;//request the ship to be launched from the base
    }else{
      log("type = "+type)
      log("typeAdd = "+(type+401))
      shipsData[type].respawn(ship, sh, p);
      ship.set({shield:20000,generator:20000,type:type+401})
      ship.custom.isInHangar = true;
    }

    sp.systems.aliveBooster.reset(ship);
    UISystem.events.pushEvent(ship,"switchedShip");
  },

  tick: function(ship){
    this.validate(ship);

    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].tick!=null&&!ship.custom.isInHangar)
      shipsData[type].tick(ship,sh,p);
  },

  getAbilities: function(ship){
    this.validate(ship);
    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].getAbilities!=null)
      return shipsData[type].getAbilities(ship,sh,p);
    else return [];
  },

  useAbility: function(ship, id){
    this.validate(ship);
    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].useAbility!=null&&!ship.custom.isInHangar)
      shipsData[type].useAbility(ship,id,sh,p);
  },

  getShipType: function(ship){
    this.validate(ship);
    return ship.custom.sprototype.type;
  },

  getShipData: function(ship){
    return shipsData[this.getShipType(ship)];
  },

  statsList: [
    {id:"shieldcap",col:"#000055"},
    {id:"shieldregen",col:"#002255"},
    {id:"energycap",col:"#555500"},
    {id:"energyregen",col:"#554400"},
    {id:"damage",col:"#552200"},
    {id:"bspeed",col:"#550033"},
    {id:"speed",col:"#222222"},
    {id:"agility",col:"#220055"}
  ],
  getCurrentStats: function(ship){
    var result = {};
    //TODO:WARN: if u gonna use negative model ships, make sure to change
    if(Math.floor(ship.type/100)==6 &&
      lastshipsInGameData!=null &&
      lastshipsInGameData[ship.custom.index]!=null){
      for(var i = 0; i<this.statsList.length; i++){
        var boost = lastshipsInGameData[ship.custom.index/*TODO:fix*/][this.statsList[i].id]
        var stat = shipsByCode[ship.type].info.stats[this.statsList[i].id][0]*(1-(boost+3)/6)+
        shipsByCode[ship.type].info.stats[this.statsList[i].id][1]*((boost+3)/6)
        result[this.statsList[i].id] = {
          val: stat,
          boost: boost
        };
      }
    }else{
      for(var i = 0; i<this.statsList.length; i++){
        result[this.statsList[i].id] = {
          val: 0,
          boost: 0
        };
      }
    }
    return result;
  }

};

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