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
//$fileTape setWriting false

var GA_Lobster = '{"name":"Lobster","author":"Goldman","level":6,"model":29,"size":0.7,"zoom":1.35,"specs":{"shield":{"capacity":[175,225],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[65,80]},"ship":{"mass":175,"speed":[95,110],"rotation":[80,100],"acceleration":[75,100]}},"bodies":{"detail":{"section_segments":10,"offset":{"x":0,"y":50,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-125,-130,-125,-115,-90,-70,-45,-20,10,30,50,150,155],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,5,6,25,35,45,50,50,42,20,15,0],"height":[0,3,5,6,13,17,19,20,20,15,4,4,0],"texture":[6,63,3,2,2,2,10,2,4,63],"laser":{"damage":[10,15],"rate":3,"type":1,"speed":[140,160],"recoil":0,"number":1,"error":0}},"detail2":{"section_segments":6,"angle":90,"offset":{"x":0,"y":110,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-41,-40,-25,25,40,41],"z":[0,0,0,0,0,0]},"width":[0,7,15,15,7,0],"height":[0,7,15,15,7,0],"texture":[3.9,3.9,8.25,3.9,3.9]},"detail3":{"section_segments":6,"angle":90,"offset":{"x":0,"y":140,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-41,-40,-25,25,40,41],"z":[0,0,0,0,0,0]},"width":[0,7,15,15,7,0],"height":[0,7,15,15,7,0],"texture":[3.9,3.9,8.25,3.9,3.9]},"detail4":{"section_segments":6,"angle":90,"offset":{"x":0,"y":170,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-41,-40,-25,25,40,41],"z":[0,0,0,0,0,0]},"width":[0,7,15,15,7,0],"height":[0,7,15,15,7,0],"texture":[3.9,3.9,8.25,3.9,3.9]},"detail5":{"section_segments":6,"angle":90,"offset":{"x":0,"y":125,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-36,-35,-25,25,35,36],"z":[0,0,0,0,0,0]},"width":[0,4,15,15,4,0],"height":[0,4,4,5,4,0],"texture":[63]},"detail6":{"section_segments":6,"angle":90,"offset":{"x":0,"y":155,"z":2},"position":{"x":[0,0,0,0,0,0],"y":[-36,-35,-25,25,35,36],"z":[0,0,0,0,0,0]},"width":[0,4,15,15,4,0],"height":[0,4,4,5,4,0],"texture":[63]},"detail7":{"section_segments":6,"angle":15,"offset":{"x":82,"y":-150,"z":-2},"position":{"x":[5,5,5,0,0,0,0],"y":[-132,-130,-40,-25,35,50,51],"z":[6,6,10,0,0,0,0]},"width":[0,6,10,21,21,15,0],"height":[0,4,7,20,20,13,0],"texture":[2.9,2.9,3.9,8,3.9]},"detail8":{"section_segments":6,"angle":10,"offset":{"x":60,"y":-210,"z":-7},"position":{"x":[0,0,0,0,0],"y":[-70,-75,-70,45,45],"z":[4,4,4,0,0]},"width":[0,3,6,10,0],"height":[0,2,4,7,0],"texture":[2,63,1.9],"laser":{"damage":[7,10],"rate":6,"type":1,"speed":[170,190],"recoil":0,"number":1,"error":0}},"detail9":{"section_segments":8,"angle":0,"offset":{"x":95,"y":-80,"z":-2},"position":{"x":[0,0,1,5,3,3],"y":[-28,-25,-10,10,25,28],"z":[0,0,0,0,0,0]},"width":[0,12,16,10,5,0],"height":[0,10,12,10,5,0],"texture":[3,3,3,63]},"detail10":{"section_segments":6,"angle":-30,"offset":{"x":85,"y":-37,"z":-2},"position":{"x":[0,0,0,-5,-15,-30],"y":[-28,-25,-10,20,45,58],"z":[0,0,0,0,0,0]},"width":[0,12,16,13,10,10],"height":[0,10,12,12,11,10],"texture":[3.9,3.9,2.9,2.9,63]},"detail11":{"section_segments":6,"angle":-45,"offset":{"x":75,"y":6,"z":-8},"position":{"x":[-4,-4,0,-4,-15,-30],"y":[-45,-44,-20,20,45,58],"z":[-15,-15,-5,0,0,0]},"width":[0,3,5,6,6,0],"height":[0,3,5,6,6,0],"texture":[63]},"detail12":{"section_segments":6,"angle":-60,"offset":{"x":75,"y":30,"z":-8},"position":{"x":[-25,-25,0,-4,-15,-30],"y":[-65,-64,-25,20,45,58],"z":[-15,-15,-5,0,0,0]},"width":[0,3,5,6,6,0],"height":[0,3,5,6,6,0],"texture":[63]},"detail13":{"section_segments":6,"angle":100,"offset":{"x":-65,"y":50,"z":-8},"position":{"x":[-27,-27,-3,-5,-15,-30],"y":[-61,-60,-23,20,45,58],"z":[-15,-15,-5,0,0,0]},"width":[0,3,5,6,6,0],"height":[0,3,5,6,6,0],"texture":[63]},"detail14":{"section_segments":6,"angle":110,"offset":{"x":-70,"y":70,"z":-7},"position":{"x":[-15,-15,-3,-4,-15,-30],"y":[-45,-44,-20,20,45,58],"z":[-15,-15,-5,0,0,0]},"width":[0,3,5,6,6,0],"height":[0,3,5,6,6,0],"texture":[63]},"detail15":{"section_segments":4,"angle":0,"offset":{"x":20,"y":-140,"z":-5},"position":{"x":[-10,-10,1,2,-8,-8],"y":[-100,-100,-23,20,105,108],"z":[-15,-15,-5,0,0,0]},"width":[0,2,3,4,5,0],"height":[0,2,3,4,5,0],"texture":[3.9]},"detail16":{"section_segments":6,"angle":0,"offset":{"x":0,"y":190,"z":0},"position":{"x":[0,0,0,0,0],"y":[-20,-20,15,25,25],"z":[0,0,0,0,0]},"width":[0,20,20,15,0],"height":[0,6,6,3,0],"texture":[15,15,1.9]},"detail17":{"section_segments":6,"angle":30,"offset":{"x":30,"y":185,"z":-5},"position":{"x":[0,0,0,0,0],"y":[-40,-40,15,25,25],"z":[0,0,0,0,0]},"width":[0,20,20,15,0],"height":[0,6,6,3,0],"texture":[15,15,1.9]},"detail18":{"section_segments":8,"offset":{"x":0,"y":-5,"z":8},"position":{"x":[0,0,0,0,0],"y":[-30,-20,25,65,60],"z":[-1,-1,0,2,0]},"width":[0,17,26,26,0],"height":[0,12,16,10,0],"propeller":false,"texture":[7,9,15]},"detail19":{"section_segments":6,"offset":{"x":45,"y":40,"z":-7},"position":{"x":[-22,-22,-7,0,0,-7,-22,-22],"y":[-60,-60,-45,-30,30,45,60,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,13,16,16,13,10,0],"height":[0,4,10,12,12,11,10,0],"propeller":false,"texture":[3.9,3.9,3.9,8,3.9]},"detail20":{"section_segments":6,"offset":{"x":0,"y":150,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-60,-60,-40,45,60,50],"z":[0,0,0,0,0,0]},"width":[0,15,28,28,20,0],"height":[0,10,20,20,15,0],"propeller":true,"texture":[3.9,3.9,8,63,16.9]},"detail21":{"section_segments":6,"angle":90,"offset":{"x":51,"y":60,"z":14},"position":{"x":[0,33],"y":[-15.4,5.1],"z":[0,-20]},"width":[0,38],"height":[0,0],"texture":[3.9]},"detail22":{"section_segments":6,"offset":{"x":0,"y":40,"z":21},"position":{"x":[0,0,0,0,0,0],"y":[-20,-20,-15,15,20,20],"z":[0,0,-0.5,-2.5,-3,-3]},"width":[0,10,10,10,10,0],"height":[0,3,3,3,3,0],"texture":[3.9,3.9,8.2,3.9,3.9]}},"typespec":{"name":"Lobster","level":4,"model":4,"code":404,"specs":{"shield":{"capacity":[175,225],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[145,80]},"ship":{"mass":175,"speed":[95,110],"rotation":[80,100],"acceleration":[125,100]}},"shape":[5.287,6.349,6.253,5.261,4.547,4.062,3.672,3.264,3.019,2.622,2.425,2.667,2.571,2.394,2.278,2.116,1.859,3.27,3.276,3.219,2.179,2.203,2.706,4.664,4.739,4.739,4.739,4.664,2.706,2.203,2.179,3.219,3.276,3.27,1.859,2.116,2.278,2.394,2.571,2.667,2.425,2.622,3.019,3.264,3.672,4.062,4.547,5.261,6.253,6.349],"lasers":[],"radius":6.349}}';
var GA_Lobster_scoot = "";
var GA_Lobster_showcase = GA_Lobster;

  var jship = JSON.parse(GA_Lobster)

  jship.typespec.specs = {
    "shield":{
      "capacity":[350,225],
      "reload":[1,1]
    },
    "generator":{
      "capacity":[200,250],
      "reload":[65,80]
    },
    "ship":{
      "mass":135,
      "speed":[150,150],
      "rotation":[30,100],
      "acceleration":[55,100]
    }
  }
  jship.lockBulletSpeed = 1
  var dmg = 120
  var xoff = 1.5
  var ang = 10

  jship.typespec.lasers[0] =
  {x:xoff,y:-15,z:0,angle:ang,damage:[dmg,15],rate:2,type:1,speed:[10,160],number:1,spread:0,error:0,recoil:0}
  jship.typespec.lasers[1] =
  {x:-xoff,y:-15,z:0,angle:-ang,damage:[dmg,15],rate:2,type:1,speed:[10,160],number:1,spread:0,error:0,recoil:0}

  jship.bodies["weaponMarker"] = {
     section_segments: 4,
     offset: {
       x: 1,
       y: -1300,
       z: 0,
     },
     position: {
       x: [0,-80,0,0,0,0,0,0],
       y: [-40,-1],
       z: [0,0,0,0,0,0,0,0,0]
     },
     width: [0,60,0],
     height: [0,0,0],
     texture: [17],
     angle: -90
  }

  GA_Lobster = JSON.stringify(jship)

  jship.lasers = []

  var xoff = 1
  var ang = 30
  for(var i=0;i<3;i++){
    ang += i*10
    jship.typespec.lasers[i*2] =
    {x:-xoff,y:-1.5+i*0.5,z:0,angle:ang,damage:[4,15],rate:5,type:1,speed:[10,160],number:1,spread:0,error:0,recoil:40}
    jship.typespec.lasers[i*2+1] =
    {x:xoff,y:-1.5+i*0.5,z:0,angle:-ang,damage:[4,15],rate:5,type:1,speed:[10,160],number:1,spread:0,error:0,recoil:40}
  }
  jship.model = 30

  GA_Lobster_scoot = jship//JSON.stringify(jship);


gameplayShips.GA_Lobster = GA_Lobster;
gameplayShips.GA_Lobster_scoot = GA_Lobster_scoot;
showcaseShips[16] = GA_Lobster_showcase;

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
