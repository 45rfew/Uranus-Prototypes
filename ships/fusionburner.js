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

var fusionburner_main = '{"name":"Fly","level":6,"author":"Goldman","scaleUp":2,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"detail":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":0,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-40,-32,-30,-10,-8,-0.5,0,10,10,9,9,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,20,20,15,12,10,10,9,9,7,6.6,5,0],"height":[0,10,15,20,20,15,12,10,10,9,9,7,6.6,5,0],"vertical":true,"texture":[-1,-1,-1,-1,-1,-1,18.5,0.55,63,63,17,4,4,63]},"detail2":{"section_segments":[-10,10,115,135,225,245],"offset":{"x":0,"y":30,"z":27},"position":{"x":[8,8,8,8,8],"y":[-2,2,2,-2,-2],"z":[0,0,0,0,0]},"width":[10,10,8,8,10],"height":[10,10,8,8,10],"texture":[63],"angle":0},"detail3":{"section_segments":[-10,10,115,135,225,245],"offset":{"x":0,"y":30,"z":27},"position":{"x":[8,8,8,8,8],"y":[-2,2,2,-2,-2],"z":[0,0,0,0,0]},"width":[10,10,8,8,10],"height":[10,10,8,8,10],"texture":[63],"angle":90},"detail4":{"section_segments":[-10,10,115,135,225,245],"offset":{"x":0,"y":30,"z":27},"position":{"x":[8,8,8,8,8],"y":[-2,2,2,-2,-2],"z":[0,0,0,0,0]},"width":[10,10,8,8,10],"height":[10,10,8,8,10],"texture":[63],"angle":-90},"detail5":{"section_segments":[-10,10,115,135,225,245],"offset":{"x":0,"y":30,"z":27},"position":{"x":[8,8,8,8,8],"y":[-2,2,2,-2,-2],"z":[0,0,0,0,0]},"width":[10,10,8,8,10],"height":[10,10,8,8,10],"texture":[63],"angle":180},"detail6":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":16,"y":10,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-8,-8,6,6,4,4,7,7],"z":[0,0,0,0,0,0,0,0]},"width":[0,8,8,7,7,5,5,0],"height":[0,8,8,7,7,5,5,0],"vertical":true,"texture":[1,1,4,4,17,4,63]},"detail7":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":0,"y":10,"z":-46},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-8,-8,6,6,4,4,7,7],"z":[0,0,0,0,0,0,0,0]},"width":[0,8,8,7,7,5,5,0],"height":[0,8,8,7,7,5,5,0],"vertical":true,"texture":[1,1,4,4,17,4,63]},"detail8":{"section_segments":[45,90,135,225,-90,315],"offset":{"x":0,"y":5,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,-5,-11,-10,15,15],"z":[0,0,0,0,0,0,0]},"width":[0,10,14,16.2,16.2,0],"height":[0,7,12,14.2,14.2,0],"texture":[2,2,63,1]},"detail9":{"section_segments":[30,60,115,150,210,240,300,330],"offset":{"x":0,"y":6,"z":-4},"position":{"x":[0,0,0,0,0,0],"y":[-30,-30,-25,25,30,30],"z":[0,0,0,0,0,0]},"width":[0,10,14,14,10,0],"height":[0,5,8,8,5,0],"texture":[63],"angle":90},"detail10":{"section_segments":8,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0],"y":[-10,0],"z":[0,0]},"width":[10,15],"height":[0,0],"texture":[17],"vertical":true},"detail11":{"section_segments":8,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0],"y":[-10,0],"z":[0,0]},"width":[10,15],"height":[0,0],"texture":[17],"vertical":true,"angle":180},"detail12":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":10,"z":21},"position":{"x":[0,0,0,0,0],"y":[-15.1,-15.1,-10,5,5],"z":[-1.7,-1.7,0,0,0]},"width":[0,2.8,2.8,2.8,0],"height":[0,1,2.8,2.8,0],"texture":[63]},"detail13":{"section_segments":[45,135,225,315],"offset":{"x":12,"y":10,"z":12},"position":{"x":[0,0,0,0,0],"y":[-12,-12,5,12,12],"z":[0,0,0,-10,-10]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[3.9],"angle":90},"detail14":{"section_segments":[45,135,225,315],"offset":{"x":12,"y":2,"z":12},"position":{"x":[0,0,0,0,0],"y":[-12,-12,5,12,12],"z":[0,0,0,-10,-10]},"width":[0,2,2,2,0],"height":[0,2,2,2,0],"texture":[3.9],"angle":90},"detail15":{"section_segments":[45,135,225,315],"offset":{"x":22,"y":6,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-12,-12,-7,7,12,12],"z":[-4,-4,0,0,-4,-4]},"width":[0,2,3.5,3.5,2,0],"height":[0,2,2,2,2,0],"texture":[3.9]},"detail16":{"section_segments":6,"offset":{"x":6.5,"y":7.5,"z":19.9},"position":{"x":[0,0,0,0,0],"y":[-12,-12,-6,6,6],"z":[0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,1,1,1,0],"texture":[3.9,11,10.25,3.9]},"detail17":{"section_segments":6,"offset":{"x":20,"y":40,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-35,-30,-2,2,15,25,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,10,10,10,7,0],"height":[0,5,8,8,8,8,5,0],"texture":[3.9,3.9,11,63,18,3.9,16.9],"propeller":true},"detail18":{"section_segments":[45,105,225,315],"offset":{"x":0,"y":-27,"z":-5},"position":{"x":[30,30,10,0,0,10,30,30],"y":[-22,-22,-13,-5,5,13,22,22],"z":[-10,-10,-4,-2.8,-2.8,-4,-10,-10]},"width":[0,4,35,40,40,35,4,0],"height":[0,1,1,1,1,1,1,0],"texture":[1.9],"angle":-90},"detail19":{"section_segments":[45,105,225,315],"offset":{"x":0,"y":-27,"z":-15},"position":{"x":[30,30,10,0,0,10,30,30],"y":[-22,-22,-13,-5,5,13,22,22],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,55,60,60,55,4,0],"height":[0,1,3,5,5,3,1,0],"texture":[1.9],"angle":-90},"detail20":{"section_segments":[45,90,225,315],"offset":{"x":0,"y":-27.5,"z":-12},"position":{"x":[30,30,13,0,0,13,30,30],"y":[-21,-21,-13,-5,5,13,21,21],"z":[-3,-3,-1,-1.5,-1.5,-1,-3,-3]},"width":[0,4,45,50,50,45,4,0],"height":[0,1,5,8,8,5,1,0],"texture":[63,63,9,9,9,63,63],"angle":-90},"detail21":{"section_segments":[45,135,225,315],"offset":{"x":30,"y":10,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-45,-40,20,25,45,50,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,2.5,3,5,8,8,5,0],"height":[0,1.5,2,3,5,5,3,0],"texture":[3.9,63,3.9,2.9,15,2.9]},"detail22":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-30,"z":-22},"position":{"x":[0,0,0,0,0,0],"y":[-55,-55,-40,35,75,75],"z":[0,0,0,1,13,13]},"width":[0,7,18.5,32,32,0],"height":[0,7,8,10,10,0],"texture":[3.9]},"detail23":{"section_segments":6,"offset":{"x":0,"y":-30,"z":-9},"position":{"x":[0,0,0,0,0,0,0],"y":[-35,-35,-30,-15,15,20,30],"z":[0,0,0,0,0,0,0]},"width":[0,5.9,6,6,6,10,10],"height":[0,2,4,4,4,4,4],"texture":[3.9,3.9,10,2.9]},"detail24":{"section_segments":6,"offset":{"x":10,"y":-35,"z":-7},"position":{"x":[0,0,0,0,0,0],"y":[-8,-5,-2,2,5,8],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,5,0],"height":[0,5,5,5,5,0],"texture":[3.9,3.9,16.9,3.9,17.9],"angle":90},"detail25":{"section_segments":6,"offset":{"x":10,"y":-25,"z":-7},"position":{"x":[0,0,0,0,0,0],"y":[-8,-5,-2,2,5,8],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,5,0],"height":[0,5,5,5,5,0],"texture":[3.9,3.9,16.9,3.9,17.9],"angle":90},"detail26":{"section_segments":[-10,10,115,135,225,245],"offset":{"x":0,"y":5,"z":-5},"position":{"x":[8,8,8,8,8],"y":[-2,2,2,-2,-2],"z":[0,0,0,0,0]},"width":[18,18,16,16,18],"height":[18,18,16,16,18],"texture":[4],"angle":90},"detail27":{"section_segments":6,"offset":{"x":4,"y":-17,"z":-1},"position":{"x":[7,7,0,0,7,7],"y":[-20,-20,-12,12,20,20],"z":[-5,-5,0,0,-5,-5]},"width":[0,2,2,2,2,0],"height":[0,2,2,2,2,0],"texture":[63]},"detail28":{"section_segments":6,"offset":{"x":4,"y":-17,"z":-1},"position":{"x":[7,7,0,0,7,7],"y":[-10,-10,-2,12,20,20],"z":[-5,-5,0,0,-5,-5]},"width":[0,2,2,2,2,0],"height":[0,2,2,2,2,0],"texture":[63]},"detail29":{"section_segments":6,"offset":{"x":15,"y":-15,"z":-7},"position":{"x":[0,0,0,0,0,0],"y":[-8,-5,-2,2,5,8],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,5,0],"height":[0,5,5,5,5,0],"texture":[3.9,3.9,16.9,3.9,17.9],"angle":90},"detail30":{"section_segments":6,"offset":{"x":21,"y":-7,"z":-1},"position":{"x":[-7,-7,0,0,-7,-7],"y":[-10,-10,-2,12,20,20],"z":[-5,-5,0,0,-5,-5]},"width":[0,2,2,2,2,0],"height":[0,2,2,2,2,0],"texture":[63]},"detail31":{"section_segments":6,"offset":{"x":45,"y":25,"z":-11},"position":{"x":[0,20,-5,-5,-5],"y":[-30,-30,10,20,20],"z":[0,0,0,0,0]},"width":[0,30,15,12,0],"height":[0,2.5,2,1,0],"texture":[1.9],"angle":90},"detail32":{"section_segments":6,"offset":{"x":0,"y":30,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-35,-30,-2,2,15,25,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,10,10,10,7,0],"height":[0,5,8,8,8,8,5,0],"texture":[3.9,3.9,11,63,18,3.9,16.9],"propeller":true},"detail33":{"section_segments":6,"offset":{"x":45,"y":30,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,-25,-20,-2,2,15,25,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,6,9,9,7,7,5,0],"height":[0,4,7,7,6,6,4,0],"texture":[3.9,3.9,10.25,63,15,3.9,16.9],"propeller":true}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[300,100],"reload":[2,3]},"generator":{"capacity":[80,60],"reload":[30,15]},"ship":{"mass":230,"speed":[125,145],"rotation":[70,130],"acceleration":[70,120]}},"shape":[1.788,1.775,1.47,1.067,0.844,0.954,0.993,0.925,0.837,0.773,0.733,0.705,0.777,1.078,1.144,1.467,1.557,1.607,1.506,1.552,1.499,1.443,1.471,1.435,1.162,1.157,1.162,1.435,1.471,1.443,1.499,1.552,1.506,1.607,1.557,1.467,1.144,1.078,0.777,0.705,0.733,0.773,0.837,0.925,0.993,0.954,0.846,1.068,1.47,1.775],"lasers":[],"radius":1.788}}';
var fusionburner_burst = fusionburner_main;

jship = JSON.parse(fusionburner_main)

var xoff = 0.7;

jship.typespec.lasers[0] = {
  "x":-xoff,"y":-1,"z":-0.2,
  "angle":0,"damage":[10,5],"rate":2,
  "type":2,"speed":[90,0.001],"number":1,
  "spread":0,"error":0,"recoil":10
}

jship.typespec.lasers[1] = {
  "x":xoff,"y":-2,"z":-0.2,
  "angle":0,"damage":[10,5],"rate":2,
  "type":2,"speed":[90,0.001],"number":1,
  "spread":0,"error":0,"recoil":10
}


fusionburner_main = JSON.stringify(jship);

jship = JSON.parse(fusionburner_burst)

var lasers = jship.typespec.lasers;
lasers[0] = {
  "x":0,"y":-1,"z":-0,
  "angle":0,"damage":[60,5],"rate":0.4,
  "type":2,"speed":[90,40],"number":10,
  "spread":0,"error":40,"recoil":10
}
jship.lockBulletSpeed = 1;
jship.typespec.specs.generator.reload = [0.001,0.001];
jship.typespec.specs.generator.capacity = [1200,1200];

fusionburner_burst = JSON.stringify(jship);

gameplayShips.fusionburner_main = fusionburner_main;
gameplayShips.fusionburner_burst = fusionburner_burst;
showcaseShips[30] = fusionburner_main;


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
