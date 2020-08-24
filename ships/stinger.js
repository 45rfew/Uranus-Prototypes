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
//$fileTape setWriting false

var stingerLMT = '{"name":"Stinger LMT","level":6,"model":4,"size":1,"scaleUp":1.4,"circularHitbox":1,"zoom":1,"specs":{"shield":{"capacity":[450,450],"reload":[3,3]},"generator":{"capacity":[300,300],"reload":[65,65]},"ship":{"mass":100,"speed":[150,150],"rotation":[105,105],"acceleration":[30,30]}},"bodies":{"main":{"section_segments":6,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-10,0,30,35,70,120,122],"z":[0,0,0,0,0,0,0,0,0]},"width":[15,20,20,25,25,20,0],"height":[0,10,10,10,10,10,0],"texture":[11,10,3,10,11.6,0.8]},"cockpit":{"section_segments":6,"offset":{"x":0,"y":-49,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-10,-7,0,10,30,40,60,80],"z":[-7,-3,0,0,0,0,0,-6,0,0]},"width":[6,8,10,10,10,15,15,15],"height":[0,5,6,8,10,10,10,5],"texture":[9,9,9,9,9,18,18]},"underside":{"section_segments":6,"offset":{"x":0,"y":0,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-57,-50,-30,10,50,70],"z":[2,1,0,0,0,0,0,0,0]},"width":[17,21,23,30,20,0],"height":[0,6,7,7,5,0],"texture":[3.8]},"reactorHeatSinks":{"section_segments":6,"offset":{"x":8,"y":46,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-10,0,17,20,22],"z":[-6,0,0,-1,-5,0,0,0,0]},"width":[5,5,5,5,5,5,5,5],"height":[0,5,5,5,0],"texture":[3.8,16.8,3.8,3.8]},"reactorEngine":{"section_segments":6,"offset":{"x":0,"y":46,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-15,-10,-5,18,23,28,28,25],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,8,8,8,8,6,5,0],"height":[6,6,8,8,8,8,6,5,0],"texture":[3.8,18,13,16,13,18,3.8,16.8],"propeller":true},"bottomEngines":{"section_segments":6,"offset":{"x":10,"y":43,"z":-6},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,20,25,30,35,30],"z":[3,0,0,0,0,0,0,0,0]},"width":[10,10,10,7,7,5,0],"height":[7,7,7,7,7,5,0],"texture":[2.8,2.8,2.8,3.8,18,16.8],"propeller":true},"wingConnectorsF":{"section_segments":6,"offset":{"x":28,"y":0,"z":-3},"position":{"x":[0,0,0,-5,-5,-5,-5,-5,0,0],"y":[-10,0,3,20,25,35,37],"z":[0,0,0,10,10,10,10,10,10]},"width":[10,10,5,5,10,10,0],"height":[5,5,3,3,5,5,0],"texture":[18,13,8,13,18,11],"angle":90},"wingConnectorsTM":{"section_segments":6,"offset":{"x":28,"y":25,"z":7},"position":{"x":[0,0,0,5,5,5,5,5,0,0],"y":[-25,-15,-12,20],"z":[0,0,0,-1,0,0,0,0,0]},"width":[8,8,5,5,10,10,0],"height":[5,5,3,3,5,5,0],"texture":[18,13,11],"angle":90},"wingConnectorsB":{"section_segments":6,"offset":{"x":25,"y":30,"z":-3},"position":{"x":[0,0,0,10,10,10,10,10,0,0],"y":[-10,0,3,23,28,38,40],"z":[0,0,0,10,10,10,10,10,10]},"width":[10,10,5,5,10,10,0],"height":[5,5,3,3,5,5,0],"texture":[18,13,8,13,18,11],"angle":90},"weaponsBottom":{"section_segments":6,"offset":{"x":58,"y":12,"z":-3},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-30,-20,-20,-10,10,30,31],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,6,6,0],"height":[0,4,5,8,10,10,8,0],"texture":[16.8,13,11,11,1,10,0.8],"laser":{"damage":[100,100],"rate":1,"type":2,"speed":[70,70],"number":1,"error":0}},"enginesSideB":{"section_segments":6,"offset":{"x":69,"y":-3,"z":6},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10,20,25,30,35,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,7,7,5,0],"height":[7,7,7,7,5,0],"texture":[8,2.8,3.8,18,16.8],"propeller":true},"enginesSideF":{"section_segments":6,"offset":{"x":69,"y":27,"z":6},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[20,25,30,35,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,7,7,5,0],"height":[7,7,7,5,0],"texture":[2.8,3.8,18,16.8],"angle":180},"sideTopGunsInner":{"section_segments":6,"offset":{"x":55,"y":0,"z":11},"position":{"x":[0,0,0,0,4,4,4,4,0,0],"y":[-40,-50,-20,0,5,25,28],"z":[0,0,0,0,0,0,-3,0,0]},"width":[0,2,3,3,7,7,7],"height":[0,2,3,3,3,3,0],"texture":[16.8,1,12,3,18,3.8],"laser":{"damage":[7,7],"rate":3,"type":1,"speed":[40,40],"number":2,"error":2}},"sideTopGunsOuter":{"section_segments":6,"offset":{"x":62,"y":0,"z":11},"position":{"x":[0,0,0,0,-3,2,2,2,0,0],"y":[-40,-50,-20,0,5],"z":[0,0,0,0,0,0,-3,0,0]},"width":[0,2,3,3,7,5,5],"height":[0,2,3,3,3,3,0],"texture":[16.8,1,12,3,10,1]}},"wings":{"cockpitCorners":{"length":[7],"width":[20,10],"angle":[-12],"position":[-3,0],"doubleside":true,"offset":{"x":8,"y":-15,"z":8},"bump":{"position":50,"size":35},"texture":[9]},"weaponsBottomShieldTop":{"length":[0,4,7,7,4,0],"width":[0,60,50,50,50,60,0],"angle":[90,90,30,-30,-90,-90],"position":[-10,-10,0,5,0,-10,-10],"doubleside":true,"offset":{"x":52,"y":-15,"z":0},"bump":{"position":10,"size":3},"texture":[1]},"weaponsBottomShieldBottom":{"length":[0,4,7,7,4,0],"width":[0,60,50,50,50,60,0],"angle":[-90,-90,-30,30,90,90],"position":[-10,-10,0,5,0,-10,-10],"doubleside":true,"offset":{"x":52,"y":-15,"z":-7},"bump":{"position":10,"size":3},"texture":[1]}},'+
'"typespec":{"name":"Stinger LMT","level":1,"model":4,"code":104,'+
'"specs":{"shield":{"capacity":[250,450],"reload":[3,3]},"generator":{"capacity":[300,300],"reload":[50,65]},"ship":{"mass":100,"speed":[150,150],"rotation":[105,105],"acceleration":[30,30]}},"shape":[1.202,1.222,1.228,1.1,0.893,0.739,1.514,1.69,1.593,1.484,1.41,1.359,1.502,1.566,1.59,1.597,1.6,1.518,1.457,0.92,0.921,0.92,1.205,1.567,1.586,1.509,1.586,1.567,1.205,0.92,0.921,0.92,1.457,1.518,1.6,1.597,1.59,1.566,1.502,1.359,1.41,1.484,1.593,1.69,1.514,0.739,0.893,1.1,1.228,1.222],"lasers":[{"x":1.16,"y":-0.36,"z":-0.06,"angle":0,"damage":[100,100],"rate":1,"type":2,"speed":[70,70],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.16,"y":-0.36,"z":-0.06,"angle":0,"damage":[100,100],"rate":1,"type":2,"speed":[70,70],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.1,"y":-1,"z":0.22,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[40,40],"number":2,"spread":0,"error":2,"recoil":0},{"x":-1.1,"y":-1,"z":0.22,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[40,40],"number":2,"spread":0,"error":2,"recoil":0}],"radius":1.69}}';


gameplayShips.stingerLMT = stingerLMT;
showcaseShips[3] = stingerLMT;

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
