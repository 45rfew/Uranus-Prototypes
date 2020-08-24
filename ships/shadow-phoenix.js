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

var shadowPhoenix_main = '{"name":"Shadow Phoenix MK-II","author":"Interdictor SD","teamMarkerSize":1.9,"scaleUp":0.6,"level":6,"model":4,"size":1.4,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[0.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[120,120],"acceleration":[90,105]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-47,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-184,-160,-108,100,105,110,137,130],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,20,30,20,20,10,0],"height":[0,10,20,20,20,24,12,0],"texture":[5,4,18,4,63,4,63]},"engines1":{"section_segments":12,"offset":{"x":183,"y":-165,"z":-92},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"engines2":{"section_segments":12,"offset":{"x":140,"y":-120,"z":-60},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"engines3":{"section_segments":12,"offset":{"x":100,"y":-110,"z":-34},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":-180,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,18,36,44,49],"z":[0,5,10,5,0]},"width":[10,15,15,5,0],"height":[5,5,5,3,0],"texture":[9],"propeller":false},"join":{"section_segments":8,"offset":{"x":40,"y":-60,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,56,56,56,56,56,56,56],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,15,0],"height":[0,5,5,0],"texture":[18]}},"wings":{"outer":{"offset":{"x":50,"y":-30,"z":10},"length":[0,22,25,50,10,65],"width":[0,120,170,100,80,75,15],"angle":[-15,-15,-50,-30,-30,-40],"position":[0,0,0,0,0,-15,-100],"texture":[63,4,63,4,63,4],"doubleside":true,"bump":{"position":30,"size":10}},"inner":{"offset":{"x":35,"y":-40,"z":10},"length":[0,7,14,21,28,35],"width":[140,120,100,80,60,40,20],"angle":[60,60,60,60,60,60],"position":[0,0,0,0,0,10,60],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"top":{"offset":{"x":20,"y":-40,"z":10},"length":[0,4,8,12,16,20],"width":[140,120,100,80,60,40,20],"angle":[90,90,90,90,90,90],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"side":{"offset":{"x":0,"y":-140,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}},"wingtop":{"offset":{"x":0,"y":100,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[63],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"Shadow Phoenix MK-II","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[0.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[120,120],"acceleration":[90,105]}},"shape":[6.468,6.251,4.929,4.558,3.788,3.758,4.219,6.962,6.594,6.153,5.762,5.493,4.171,4.116,3.162,2.59,2.461,2.504,2.52,1.259,3.132,3.508,3.561,4.088,5.331,5.319,5.331,4.088,3.561,3.508,3.132,1.259,2.52,2.504,2.461,2.59,3.162,3.796,4.171,5.493,5.762,6.153,6.594,6.962,4.219,3.758,3.788,4.558,4.929,6.251],"lasers":[{"x":5.124,"y":-4.62,"z":-2.576,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.124,"y":-4.62,"z":-2.576,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.92,"y":-3.36,"z":-1.68,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.92,"y":-3.36,"z":-1.68,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.8,"y":-3.08,"z":-0.952,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":-3.08,"z":-0.952,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.962}}';

var shadowPhoenix_glow = '{"name":"Shadow Phoenix MK-II","author":"Interdictor SD","teamMarkerSize":1.9,"scaleUp":0.6,"level":6,"model":4,"size":1.4,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[700.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[20,120],"acceleration":[10,105]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-47,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-184,-160,-108,100,105,110,137,130],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,20,30,20,20,10,0],"height":[0,10,20,20,20,24,12,0],"texture":[5,4,18,4,17,4,17]},"engines1":{"section_segments":12,"offset":{"x":183,"y":-165,"z":-92},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"engines2":{"section_segments":12,"offset":{"x":140,"y":-120,"z":-60},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"engines3":{"section_segments":12,"offset":{"x":100,"y":-110,"z":-34},"position":{"x":[0,0,0,0,0,0],"y":[10,0,20,55,120,115],"z":[0,0,0,0,0,0]},"width":[0,3,7,10,7,0],"height":[0,3,7,10,7,0],"texture":[17,13,18,4],"propeller":true,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"error":0}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":-180,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,18,36,44,49],"z":[0,5,10,5,0]},"width":[10,15,15,5,0],"height":[5,5,5,3,0],"texture":[9],"propeller":false},"join":{"section_segments":8,"offset":{"x":40,"y":-60,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,56,56,56,56,56,56,56],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,15,0],"height":[0,5,5,0],"texture":[18]}},"wings":{"outer":{"offset":{"x":50,"y":-30,"z":10},"length":[0,22,25,50,10,65],"width":[0,120,170,100,80,75,15],"angle":[-15,-15,-50,-30,-30,-40],"position":[0,0,0,0,0,-15,-100],"texture":[17,4,17,4,17,4],"doubleside":true,"bump":{"position":30,"size":10}},"inner":{"offset":{"x":35,"y":-40,"z":10},"length":[0,7,14,21,28,35],"width":[140,120,100,80,60,40,20],"angle":[60,60,60,60,60,60],"position":[0,0,0,0,0,10,60],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"top":{"offset":{"x":20,"y":-40,"z":10},"length":[0,4,8,12,16,20],"width":[140,120,100,80,60,40,20],"angle":[90,90,90,90,90,90],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"side":{"offset":{"x":0,"y":-140,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}},"wingtop":{"offset":{"x":0,"y":100,"z":0},"length":[0,4,8,12,16,20],"width":[140,120,100,180,100,40,20],"angle":[0,0,0,0,0,0],"position":[0,0,0,0,0,0,0],"texture":[17],"doubleside":true,"bump":{"position":30,"size":4}}},"typespec":{"name":"Shadow Phoenix MK-II","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[250,315],"reload":[2,2]},"generator":{"capacity":[700.01,380],"reload":[0.01,75]},"ship":{"mass":140,"speed":[100,140],"rotation":[20,120],"acceleration":[10,105]}},"shape":[6.468,6.251,4.929,4.558,3.788,3.758,4.219,6.962,6.594,6.153,5.762,5.493,4.171,4.116,3.162,2.59,2.461,2.504,2.52,1.259,3.132,3.508,3.561,4.088,5.331,5.319,5.331,4.088,3.561,3.508,3.132,1.259,2.52,2.504,2.461,2.59,3.162,3.796,4.171,5.493,5.762,6.153,6.594,6.962,4.219,3.758,3.788,4.558,4.929,6.251],"lasers":[{"x":5.124,"y":-4.62,"z":-2.576,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.124,"y":-4.62,"z":-2.576,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.92,"y":-3.36,"z":-1.68,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.92,"y":-3.36,"z":-1.68,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.8,"y":-3.08,"z":-0.952,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":-3.08,"z":-0.952,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[150,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.962}}';


jship = JSON.parse(shadowPhoenix_glow)

jship.typespec.specs.generator.capacity = [1000,1000];
var lasers = jship.typespec.lasers;
for(var i = 0; i<lasers.length; i++){
  lasers[i].damage = [15,15];
}
jship.lockShipAccel = 1;
jship.typespec.specs.ship.acceleration = [0.001,0.001];
jship.typespec.specs.ship.rotation = [10,10];
shadowPhoenix_glow = JSON.stringify(jship)//JSON.stringify(jship);

gameplayShips.shadowPhoenix_main = shadowPhoenix_main;
gameplayShips.shadowPhoenix_glow = shadowPhoenix_glow;
showcaseShips[28] = shadowPhoenix_glow;


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
