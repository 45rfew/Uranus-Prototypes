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
//$fileTape setWriting false

var GA_Turtle = '{"name":"Turtle","level":6,"author":"Goldman","model":31,"teamMarkerSize":1.3,"size":1.4,"scaleUp":1.3,"zoom":1.25,"specs":{"shield":{"capacity":[150,200],"reload":[5,7]},"generator":{"capacity":[125,175],"reload":[45,60]},"ship":{"mass":175,"speed":[90,105],"rotation":[75,95],"acceleration":[75,100]}},"bodies":{"detail":{"section_segments":10,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-97,-103,-100,-97,-84,-55,-40,-10,30,70,100,110,135,136],"z":[-2,-2,-2,-2,-2,0,0,0,0,0,0,1,1,1]},"width":[0,3,5,15,22,27,25,57,67,57,30,8,2,0],"height":[0,3,5,10,15,18,15,20,25,25,15,11,2,0],"texture":[4,63,3,3,10,4,3,3,3,3,3,4],"laser":{"damage":[30,35],"rate":2,"type":1,"speed":[120,155],"number":1,"error":0}},"detail2":{"section_segments":6,"offset":{"x":0,"y":10,"z":17},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-74,-74,-60,-40,-20,0,20,40,60,72,72],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,34,48,62,72,75,70,58,37,22,0],"height":[0,5,8,10,11,12,11,10,8,5,0],"texture":[63]},"detail3":{"section_segments":8,"offset":{"x":0,"y":10,"z":14},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-77,-77,-63,-42,-21,0,21,42,63,75,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,35,48,62,72,75,70,58,37,22,0],"height":[0,5,8,10,11,12,11,10,8,5,0],"texture":[4]},"detail4":{"section_segments":6,"offset":{"x":0,"y":-5,"z":26},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-56,-56,-42,-28,-14,0,14,28,42,56,70,84,84],"z":[-6,-6,-3,-1,-1,0,0,0,-1,-1,-4,-6,-7]},"width":[0,17,30,17,30,17,30,17,30,17,30,17,0],"height":[0,5,8,5,8,5,8,5,8,5,8,5,0],"texture":[3.9]},"detail5":{"section_segments":6,"angle":90,"offset":{"x":30,"y":23,"z":26},"position":{"x":[0,0,0,1.75,10,10],"y":[-12,0,18,27,32,32],"z":[1,-1,-3,-3,-3,-3]},"width":[0,15,15,13,3,0],"height":[0,5,5,5,4,0],"texture":[3.9]},"detail6":{"section_segments":6,"angle":90,"offset":{"x":30,"y":-5,"z":26},"position":{"x":[0,0,0,-1.75,-10,-10],"y":[-12,0,18,27,32,32],"z":[1,-1,-3,-3,-3,-3]},"width":[0,15,15,13,3,0],"height":[0,5,5,5,4,0],"texture":[3.9]},"detail7":{"section_segments":6,"angle":90,"offset":{"x":30,"y":-33,"z":26},"position":{"x":[0,0,0,-10,-10],"y":[-12,0,12,23,23],"z":[1,-3,-3,-3,-3]},"width":[0,15,14,3,0],"height":[0,5,5,4,0],"texture":[3.9]},"detail8":{"section_segments":6,"angle":90,"offset":{"x":30,"y":51,"z":26},"position":{"x":[0,0,1,10,10],"y":[-12,0,7,21,21],"z":[1,-3,-3,-3,-3]},"width":[0,15,13,3,0],"height":[0,5,5,4,0],"texture":[3.9]},"detail9":{"section_segments":6,"angle":0,"offset":{"x":34,"y":-53,"z":21},"position":{"x":[-8,-8,0,0],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[3.9]},"detail10":{"section_segments":6,"angle":0,"offset":{"x":0,"y":-33,"z":25.4},"position":{"x":[0,0,0,0],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,21,21,0],"height":[0,5,5,0],"texture":[63]},"detail11":{"section_segments":6,"angle":0,"offset":{"x":0,"y":-5,"z":26.4},"position":{"x":[0,0,0,0],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,21,21,0],"height":[0,5,5,0],"texture":[63]},"detail12":{"section_segments":6,"angle":0,"offset":{"x":0,"y":23,"z":26.4},"position":{"x":[0,0,0,0],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,21,21,0],"height":[0,5,5,0],"texture":[63]},"detail13":{"section_segments":6,"angle":0,"offset":{"x":0,"y":51,"z":25.4},"position":{"x":[0,0,0,0],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,21,21,0],"height":[0,5,5,0],"texture":[63]},"detail14":{"section_segments":6,"angle":-40,"offset":{"x":48,"y":-52,"z":0},"position":{"x":[12,12,0,0,0],"y":[-50,-50,-15,25,25],"z":[-5,-5,0,0,0]},"width":[0,10,15,15,0],"height":[0,2,4,6,0],"texture":[3.9,8,63]},"detail15":{"section_segments":6,"angle":-150,"offset":{"x":35,"y":48,"z":1},"position":{"x":[12,12,0,0,0],"y":[-50,-50,-30,25,25],"z":[-10,-10,-3,0,0]},"width":[0,10,15,15,0],"height":[0,2,4,6,0],"texture":[3.9,15,63]},"detail16":{"section_segments":6,"offset":{"x":20,"y":50,"z":-20},"position":{"x":[0,0,0,0,0,0,0],"y":[-70,-65,-20,-10,35,25],"z":[0,0,0,0,0,0,0]},"width":[0,20,20,15,15,0],"height":[0,10,10,7,7,0],"angle":0,"propeller":true,"texture":[63,63,63,3.9,16.9]},"detail17":{"section_segments":8,"offset":{"x":0,"y":-81,"z":11},"position":{"x":[0,0,0,0,0,0],"y":[-17,-15,5,40,70,70],"z":[-2,-2,0,0,0,0]},"width":[4,12,15,15,10,0],"height":[4,6,8,5,5,0],"propeller":false,"texture":[7,9,15,4]},"detail18":{"section_segments":6,"offset":{"x":47,"y":50,"z":-11},"position":{"x":[0,0,0,0,0,0],"y":[-50,-55,-10,0,20,25],"z":[0,0,0,0,0,0]},"width":[0,3,8,11,9,0],"height":[0,3,8,11,9,0],"angle":180,"laser":{"damage":[6,9],"rate":4,"type":1,"speed":[150,175],"recoil":70,"number":1,"error":0},"propeller":false,"texture":[3.9,63,63,3.9]}},"typespec":{"name":"G_303_G","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[600,200],"reload":[4,7]},"generator":{"capacity":[170,175],"reload":[45,60]},"ship":{"mass":440,"speed":[150,150],"rotation":[60,95],"acceleration":[105,100]}},"shape":[3.937,3.82,3.435,2.612,2.419,3.347,3.889,3.938,2.226,2.236,2.273,2.331,2.354,2.416,2.421,2.433,2.45,2.451,2.493,3.028,3.429,3.716,3.713,2.859,3.094,3.712,3.094,2.859,3.713,3.716,3.429,3.028,2.493,2.451,2.45,2.433,2.421,2.416,2.354,2.331,2.273,2.236,2.226,3.938,3.889,3.347,2.419,2.612,3.435,3.82],"lasers":[{"x":1.504,"y":3.36,"z":-0.352,"angle":180,"damage":[15,9],"rate":4,"type":1,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":70},{"x":-1.504,"y":3.36,"z":-0.352,"angle":-180,"damage":[15,9],"rate":4,"type":1,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":150}],"radius":3.938}}';

var GA_Turtle_tucked = ""


jship = JSON.parse(GA_Turtle)
jship.bodies.detail14.angle = -120
jship.bodies.detail14.offset.y = -30

jship.bodies.detail17.offset.y += 20
for(var i = 0; i<6; i++)
  jship.bodies.detail.position.y[i] += 20

jship.bodies.detail2.texture = [17]

jship.model = 32
jship.typespec.specs.shield.capacity[0] += 2000
jship.typespec.specs.shield.reload[0] = 0.001
jship.typespec.lasers = [];
GA_Turtle_tucked = JSON.stringify(jship)//JSON.stringify(jship);

gameplayShips.GA_Turtle = GA_Turtle;
gameplayShips.GA_Turtle_tucked = GA_Turtle_tucked;
showcaseShips[17] = GA_Turtle_tucked;

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
