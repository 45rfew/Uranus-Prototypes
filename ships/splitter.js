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
//$fileTape setWriting false

var splitter = '{"name":"Splitter","level":6,"model":17,"size":1,"lockBulletSpeed":true,"specs":{"shield":{"capacity":[300,100],"reload":[3,3]},"generator":{"capacity":[220,60],"reload":[80,100]},"ship":{"mass":130,"speed":[150,150],"rotation":[30,60],"acceleration":[50,100]}},"bodies":{"front":{"section_segments":4,"offset":{"x":0,"y":-170,"z":-3},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-10,10,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,0],"height":[0,10,15,0],"texture":[2]},"frontCapacitor":{"section_segments":6,"offset":{"x":0,"y":-30,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-10,-8,8,10,15],"z":[-5,0,0,0,0,-5,0,0,0,0,0]},"width":[10,10,10,10,10,10],"height":[0,5,5,5,5,0],"texture":[0.8,3.8,16.8,3.8,3.8]},"frontCapacitor2":{"section_segments":6,"offset":{"x":12,"y":-30,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-15,-10,-8,8,10,15],"z":[-5,0,0,0,0,-5,0,0,0,0,0]},"width":[2,2,2,2,2,2],"height":[0,2,2,2,2,0],"texture":[3.8,3.8,16.8,3.8,3.8]},"frontCapacitorStr":{"section_segments":6,"offset":{"x":0,"y":-30,"z":17},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-15,-13,13,15,20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[10,12,17,17,12,10],"height":[0,4,4,4,4,0],"texture":[0.8,63,3.8,63,0.8]},"launchers":{"section_segments":6,"offset":{"x":1,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,30,60,61,50,50,40,40],"z":[0,0,0,0,0,0,0,0,0]},"width":[50,50,30,25,23,20,15,0],"height":[20,20,15,10,8,6,5,0],"texture":[0.8,0.8,0.8,12.8,3.8,16.8],"angle":90,"laser":{"damage":[200,150],"rate":1,"type":2,"speed":[50,240],"number":1,"recoil":50,"error":0}},"reactor":{"section_segments":8,"offset":{"x":0,"y":0,"z":-25},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-30,-25,-10,-10,10,20,23,20,20,23,23,20,20],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,19.5,32.5,39,45.5,45.5,39,28.6,28.6,19.5,16.900000000000002,13,10.4,0,null],"height":[0,19.5,32.5,39,45.5,45.5,39,28.6,28.6,19.5,16.900000000000002,13,10.4,0,null],"texture":[3,4,3,3,3,4,18,13,17,8,4,8,17],"vertical":true},"tubeFront1":{"section_segments":8,"offset":{"x":40,"y":-50,"z":14},"position":{"x":[5,0,0,0,0,10,12,15,25],"y":[-30,-20,0,0,40,60,90,100,110],"z":[-5,0,0,0,0,-5,-5,-10,-20]},"width":[5,5,5,3,3,3,3,3,3],"height":[5,5,5,3,3,3,3,3,3],"texture":[2,2,2,4,63,4,4,2],"angle":180},"tubeFront2":{"section_segments":8,"offset":{"x":30,"y":-40,"z":18},"position":{"x":[5,0,0,0,0,0,0,0,0,0],"y":[-30,-20,0,0,35,45,70],"z":[-5,0,0,0,0,-3,-20]},"width":[5,5,5,3,3,3,3,3,3],"height":[5,5,5,3,3,3,3,3,3],"texture":[2,2,2,4,4,2,2],"angle":180},"enginesBackConnect":{"section_segments":6,"offset":{"x":50,"y":60,"z":0},"position":{"x":[-12,0,0,0,0,0,0,0],"y":[-50,-20,-19,8,8],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,12,12,12,0],"height":[10,10,15,15,0],"texture":[0.8],"angle":90},"reactorSidesDeco":{"section_segments":6,"offset":{"x":47,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-28,-7,-3,11],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,10,10],"height":[15,15,15,15],"texture":[18,17,18]},"prop1":{"section_segments":4,"offset":{"x":0,"y":160,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[30,30,0],"height":[30,30,0],"texture":[4,63,4],"propeller":true},"prop2":{"section_segments":4,"offset":{"x":10,"y":160,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[30,30,0],"height":[30,30,0],"texture":[4,63,4],"propeller":true},"pipes1":{"section_segments":4,"offset":{"x":65,"y":0,"z":-25},"position":{"x":[-15,0,0,-15,0,0,0,0],"y":[-15,-5,5,15],"z":[0,0,0,0,0,0,0,0]},"width":[4,4,4,4],"height":[4,4,4,4],"texture":[63],"angle":0,"vertical":true},"pipes2":{"section_segments":4,"offset":{"x":65,"y":0,"z":-35},"position":{"x":[-15,0,0,-15,0,0,0,0],"y":[-15,-5,5,15],"z":[0,0,0,0,0,0,0,0]},"width":[4,4,4,4],"height":[4,4,4,4],"texture":[63],"angle":0,"vertical":true},"pipes3":{"section_segments":4,"offset":{"x":65,"y":0,"z":-45},"position":{"x":[-15,0,0,-15,0,0,0,0],"y":[-15,-5,5,15],"z":[0,0,0,0,0,0,0,0]},"width":[4,4,4,4],"height":[4,4,4,4],"texture":[63],"angle":0,"vertical":true},"inj1":{"section_segments":6,"offset":{"x":0,"y":70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,2,5,5,10,5],"z":[0,0,0,0,0,0,0,0]},"width":[6,6,6,4,3,0],"height":[4,4,4,3,2,0],"texture":[1,63,63,13,17],"angle":0},"inj2":{"section_segments":6,"offset":{"x":8,"y":70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,2,5,5,10,5],"z":[0,0,0,0,0,0,0,0]},"width":[6,6,6,4,3,0],"height":[4,4,4,3,2,0],"texture":[1,63,63,13,17],"angle":0},"inj3":{"section_segments":6,"offset":{"x":16,"y":70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,2,5,5,10,5],"z":[0,0,0,0,0,0,0,0]},"width":[6,6,6,4,3,0],"height":[4,4,4,3,2,0],"texture":[1,63,63,13,17],"angle":0},"topBackStructureTubes":{"section_segments":6,"offset":{"x":25,"y":80,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-10,-8,50,55],"z":[0,0,0,0,0,0,0,0,0]},"width":[6,6,4,4,0],"height":[4,4,3,3,0],"texture":[2.8,2.8,3.8]},"bottomBackStructureTubes":{"section_segments":6,"offset":{"x":25,"y":80,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-10,-8,50,55],"z":[0,0,0,0,0,0,0,0,0]},"width":[6,6,4,4,0],"height":[4,4,3,3,0],"texture":[2.8,2.8,3.8]},"exhAccSides1":{"section_segments":4,"offset":{"x":33,"y":0,"z":-100},"position":{"x":[-10,-10,0,0,0,0,0,0,-10,-10,0,0],"y":[-16,-15,-10,-5,-4,4,5,10,15,16],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,2,2,2,2,2,2,2,0],"height":[0,10,10,10,6,6,10,10,10,0],"texture":[3,3,18,3,17,3,18,3,3],"vertical":true},"exhAccTop1":{"section_segments":6,"offset":{"x":1,"y":100,"z":14},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,10,12,25,26],"z":[0,0,0,0,-3,0,0,0,0]},"width":[4,4,10,10,8],"height":[2,2,3,3,0],"texture":[18,63,3.8],"angle":90},"exhAccBottom1":{"section_segments":6,"offset":{"x":1,"y":100,"z":-14},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,10,12,25,26],"z":[0,0,0,0,3,0,0,0,0]},"width":[4,4,10,10,8],"height":[2,2,3,3,0],"texture":[18,63,3.8],"angle":90},"exhAccSides2":{"section_segments":4,"offset":{"x":33,"y":0,"z":-125},"position":{"x":[-10,-10,0,0,0,0,0,0,-10,-10,0,0],"y":[-16,-15,-10,-5,-4,4,5,10,15,16],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,2,2,2,2,2,2,2,0],"height":[0,10,10,10,6,6,10,10,10,0],"texture":[3,3,18,3,17,3,18,3,3],"vertical":true},"exhAccTop2":{"section_segments":6,"offset":{"x":1,"y":125,"z":14},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,10,12,25,26],"z":[0,0,0,0,-3,0,0,0,0]},"width":[4,4,10,10,8],"height":[2,2,3,3,0],"texture":[18,63,3.8],"angle":90},"exhAccBottom2":{"section_segments":6,"offset":{"x":1,"y":125,"z":-14},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-1,10,12,25,26],"z":[0,0,0,0,3,0,0,0,0]},"width":[4,4,10,10,8],"height":[2,2,3,3,0],"texture":[18,63,3.8],"angle":90},"cockpitBottomdsides":{"section_segments":4,"offset":{"x":0.01,"y":-165,"z":8},"position":{"x":[-6,-12,-13,-13,-13,-13,-15,-28,null,null,null],"y":[-10,20,50,70,80,90,100,165],"z":[-10,-3,-3,-3,-2,-1,0,0]},"width":[8,8,8,8,8,8,8,8,8],"height":[3,7,10,10,14,14,13,2],"texture":[1],"angle":0},"cockpitBottomt":{"section_segments":4,"offset":{"x":0,"y":-165,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-10,20,50,70,80,90,100,165],"z":[-7,4,7,7,12,13,13,2,null]},"width":[6,12,13,13,13,13,15,28],"height":[4,4,4,4,4,4,4,4,4],"texture":[1],"angle":0},"cockpitBottomb":{"section_segments":4,"offset":{"x":0,"y":-165,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-10,20,50,70,80,90,100,165],"z":[-13,-10,-13,-13,-16,-15,-13,-2,null]},"width":[6,12,13,13,13,13,15,28],"height":[4,4,4,4,4,4,4,4,4],"texture":[1],"angle":0},"cockpitBottomsides":{"section_segments":4,"offset":{"x":0.01,"y":-165,"z":8},"position":{"x":[6,12,13,13,13,13,15,28,null,null],"y":[-10,20,50,70,80,90,100,165],"z":[-10,-3,-3,-3,-2,-1,0,0]},"width":[8,8,8,8,8,8,8,8,8],"height":[3,7,10,10,14,14,13,2],"texture":[1],"angle":0},"cockpitdsides":{"section_segments":4,"offset":{"x":0.01,"y":-165,"z":13},"position":{"x":[-5,-8,-9,-9,-6,null,null,null,null,null,null],"y":[20,30,50,70,97],"z":[-8,1,3,3,0,0,0,0]},"width":[2,2,2,2,2,2],"height":[5,3,5,6,7],"texture":[1,9,9,1],"angle":0},"cockpitt":{"section_segments":4,"offset":{"x":0,"y":-165,"z":13},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[20,30,50,70,97],"z":[-3,4,8,9,7,null,null,null,null]},"width":[5,8,9,9,6],"height":[2,2,2,2,2,2],"texture":[1,9,9,1],"angle":0},"cockpitb":{"section_segments":4,"offset":{"x":0,"y":-165,"z":13},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[20,30,50,70,97],"z":[-13,-2,-2,-3,-7,null,null,null,null]},"width":[5,8,9,9,6],"height":[2,2,2,2,2,2],"texture":[1],"angle":0},"cockpitsides":{"section_segments":4,"offset":{"x":0.01,"y":-165,"z":13},"position":{"x":[5,8,9,9,6,null,null,null,null,null],"y":[20,30,50,70,97],"z":[-8,1,3,3,0,0,0,0]},"width":[2,2,2,2,2,2],"height":[5,3,5,6,7],"texture":[1,9,9,1],"angle":0},"frontMaindsides":{"section_segments":4,"offset":{"x":0.01,"y":-185,"z":0},"position":{"x":[-6,-22,-28,-35,-43,null,null,null],"y":[0,20,50,100,150],"z":[-3,-3,-3,-3,0,0,0,0]},"width":[4,4,4,4,4,4],"height":[3,5,7,7,10],"texture":[1],"angle":0},"frontMaint":{"section_segments":4,"offset":{"x":0,"y":-185,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[0,20,50,100,150],"z":[0,2,4,4,10,null,null,null,null]},"width":[6,22,28,35,43],"height":[4,4,4,4,4,4],"texture":[1],"angle":0},"frontMainb":{"section_segments":4,"offset":{"x":0,"y":-185,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[0,20,50,100,150],"z":[-6,-8,-10,-10,-10,null,null,null,null]},"width":[6,22,28,35,43],"height":[4,4,4,4,4,4],"texture":[1],"angle":0},"frontMainsides":{"section_segments":4,"offset":{"x":0.01,"y":-185,"z":0},"position":{"x":[6,22,28,35,43,null,null],"y":[0,20,50,100,150],"z":[-3,-3,-3,-3,0,0,0,0]},"width":[4,4,4,4,4,4],"height":[3,5,7,7,10],"texture":[1],"angle":0},"reactorSideTopdsides":{"section_segments":4,"offset":{"x":50.01,"y":-10,"z":11},"position":{"x":[-22,-8,-19,-19,null,null],"y":[0,35,60,70],"z":[2,0,0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[2,5,5,3],"texture":[1],"angle":0},"reactorSideTopt":{"section_segments":4,"offset":{"x":50,"y":-10,"z":11},"position":{"x":[-7,0,-6,-6],"y":[0,35,60,70],"z":[4,5,5,3,null,null,null,null,null]},"width":[15,8,13,13],"height":[1,1,1,1,1],"texture":[1],"angle":0},"reactorSideTopb":{"section_segments":4,"offset":{"x":50,"y":-10,"z":11},"position":{"x":[-7,0,-6,-6],"y":[0,35,60,70],"z":[0,-5,-5,-3,null,null,null,null,null]},"width":[15,8,13,13],"height":[1,1,1,1,1],"texture":[1],"angle":0},"reactorSideTopsides":{"section_segments":4,"offset":{"x":50.01,"y":-10,"z":11},"position":{"x":[8,8,7,7,null],"y":[0,35,60,70],"z":[2,0,0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[2,5,5,3],"texture":[1],"angle":0},"reactorSideBottomdsides":{"section_segments":4,"offset":{"x":50.01,"y":-10,"z":-11},"position":{"x":[-22,-8,-19,-19,null,null],"y":[0,35,60,70],"z":[-2,0,0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[2,5,5,3],"texture":[1],"angle":0},"reactorSideBottomt":{"section_segments":4,"offset":{"x":50,"y":-10,"z":-11},"position":{"x":[-7,0,-6,-6],"y":[0,35,60,70],"z":[0,5,5,3,null,null,null,null,null]},"width":[15,8,13,13],"height":[1,1,1,1,1],"texture":[1],"angle":0},"reactorSideBottomb":{"section_segments":4,"offset":{"x":50,"y":-10,"z":-11},"position":{"x":[-7,0,-6,-6],"y":[0,35,60,70],"z":[-4,-5,-5,-3,null,null,null,null,null]},"width":[15,8,13,13],"height":[1,1,1,1,1],"texture":[1],"angle":0},"reactorSideBottomsides":{"section_segments":4,"offset":{"x":50.01,"y":-10,"z":-11},"position":{"x":[8,8,7,7,null],"y":[0,35,60,70],"z":[-2,0,0,0,0,0,0,0]},"width":[0,0,0,0,0],"height":[2,5,5,3],"texture":[1],"angle":0},"backSidesdsides":{"section_segments":4,"offset":{"x":49.01,"y":70,"z":0.1},"position":{"x":[-17,-8,-8,null,null],"y":[0,35,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,0,0,0],"height":[6,6,6],"texture":[1],"angle":0},"backSidest":{"section_segments":4,"offset":{"x":49,"y":70,"z":0.1},"position":{"x":[-4,0,-8],"y":[0,35,60],"z":[6,6,6,null,null,null,null,null,null]},"width":[13,8,0],"height":[0,0,0,0],"texture":[1],"angle":0},"backSidesb":{"section_segments":4,"offset":{"x":49,"y":70,"z":0.1},"position":{"x":[-4,0,-8],"y":[0,35,60],"z":[-6,-6,-6,null,null,null,null,null,null]},"width":[13,8,0],"height":[0,0,0,0],"texture":[1],"angle":0},"backSidessides":{"section_segments":4,"offset":{"x":49.01,"y":70,"z":0.1},"position":{"x":[9,8,-8,null],"y":[0,35,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,0,0,0],"height":[6,6,6],"texture":[1],"angle":0}},"typespec":{"name":"Splitter","level":6,"model":17,"code":617,"specs":{"shield":{"capacity":[300,100],"reload":[3,3]},"generator":{"capacity":[220,60],"reload":[80,100]},"ship":{"mass":130,"speed":[150,150],"rotation":[30,60],"acceleration":[180,100]}},"shape":[4,3.768,3.073,2.303,2.003,1.602,1.379,1.348,1.416,1.403,1.333,1.28,1.249,1.25,1.262,1.468,1.547,1.648,1.632,1.819,2.14,2.471,2.704,3.298,3.257,3.206,3.257,3.298,2.704,2.471,2.14,1.819,1.632,1.648,1.547,1.468,1.262,1.25,1.249,1.28,1.333,1.403,1.416,1.348,1.379,1.602,2.003,2.303,3.073,3.768],"lasers":[{"x":0,"y":-0.2,"z":0,"angle":90,"damage":[200,150],"rate":1,"type":2,"speed":[30,240],"number":1,"spread":0,"error":0,"recoil":500},{"x":0,"y":-0.2,"z":0,"angle":-90,"damage":[200,150],"rate":1,"type":2,"speed":[30,240],"number":1,"spread":0,"error":0,"recoil":500}],"radius":4}}';

gameplayShips.splitter = splitter;
showcaseShips[11] = splitter;

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
