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
//$fileTape setWriting false

var burstchargerMk1 = '{"name":"Burstcharger Mk1","level":6,"scaleUp":1.2,"model":2,"size":1,"zoom":1,"circularHitbox":1,"specs":{"shield":{"capacity":[250,250],"reload":[4,4]},"generator":{"capacity":[100,100],"reload":[30,30]},"ship":{"mass":110,"speed":[150,150],"rotation":[30,30],"acceleration":[45,45]}},"bodies":{"main":{"section_segments":6,"offset":{"x":10,"y":-50,"z":20},"position":{"x":[-10,-10,0,0,0,0,-10,-10,0,0],"y":[-46,-45,-30,10,50,80,100,105],"z":[0,0,0,0,-20,-20,-20,-20]},"width":[0,10,10,10,10,10,10,0],"height":[0,10,10,10,10,10,10,0],"texture":[0.9]},"reactor":{"section_segments":12,"offset":{"x":0,"y":10,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-20,-10,10,20,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15,15,15,0],"height":[0,15,15,15,15,0],"texture":[4,8,17,8,4]},"reactorTop":{"section_segments":6,"offset":{"x":0,"y":10,"z":25},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-12,-10,10,22,27,40,43],"z":[0,0,0,0,-5,-15,-15,-15,0,0,0]},"width":[8,8,10,10,10,10,10,0],"height":[5,5,5,5,10,20,15,0],"texture":[2.8,2.8,3.8,3.8,3.8]},"reactorHeatSink1":{"section_segments":6,"offset":{"x":-12,"y":15,"z":11},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-6,-5,10],"z":[-7,0,0,0,0,0,0,0,0]},"width":[0,4,4],"height":[0,10,10],"texture":[16.8,16.8],"angle":90},"reactorHeatSink2":{"section_segments":6,"offset":{"x":-12,"y":5,"z":11},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-6,-5,10],"z":[-7,0,0,0,0,0,0,0,0]},"width":[0,4,4],"height":[0,10,10],"texture":[16.8,16.8],"angle":90},"cockpit":{"section_segments":6,"offset":{"x":0,"y":-45,"z":28},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-50,-35,-15,5,18,50],"z":[0,-2,0,0,-7,-20,0,0,0]},"width":[0,11,10,10,10,10],"height":[0,5,8,10,15,10],"texture":[12,9,9,4,3]},"cockpitUnderside":{"section_segments":6,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-55,-40,0,40,70,90],"z":[0,0,0,-20,-20,-20,0,0]},"width":[0,11,11,11,11,0],"height":[0,0,0,0,0,0],"texture":[12]},"wingConnectorsTop":{"section_segments":6,"offset":{"x":1,"y":25,"z":28},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-40,-18,-18,-13,-1],"z":[-6,0,0,0,0,0,0,0,0]},"width":[3,3,6,15,18],"height":[3,3,4,4,4,4,0],"texture":[8,3.8,3.8,3.8,3.8],"angle":90},"wingConnectorsBottom":{"section_segments":6,"offset":{"x":1,"y":25,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[6,0,0,0,0,0,0,0,0]},"width":[3,3],"height":[3,3],"texture":[8,3.8,3.8,3.8,3.8],"angle":90},"engines":{"section_segments":6,"offset":{"x":35,"y":13,"z":14},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-35,-30,-10,0,5,20,30,50,30],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,9,9,7,7,9,7,0],"height":[0,5,7,9,9,7,7,9,7,0],"texture":[16.8,1,10.1,63,3,3,8,13,16.8],"propeller":true},"engineConnectors":{"section_segments":6,"offset":{"x":40,"y":25,"z":14},"position":{"x":[-5,-3,0,0,-3,-5,0,0,0,0],"y":[-25,-20,-12,5,20,25],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,7,7,7,7,0],"height":[0,10,12,12,8,0],"texture":[63,63,2.8,3.8,3.8]},"gun":{"section_segments":8,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-60,-80,-40,-10,30,50],"z":[0,0,0,5,5,-5,0,0,0]},"width":[0,6,8,10,10,5],"height":[0,6,8,15,15,0],"texture":[17,4,1,10,4],"laser":{"damage":[10,10],"rate":1,"type":1,"speed":[50,50],"number":5,"angle":10,"error":3}},"gunSides":{"section_segments":6,"offset":{"x":10,"y":-50,"z":7},"position":{"x":[-7,-5,0,0,-1,0,0,0,0,0],"y":[-70,-40,-10,10,30,50],"z":[-5,-3,-1,-1,0,0,0,0,0]},"width":[0,10,10,10,10,0],"height":[0,3,3,3,3,3,0],"texture":[4,4,16.8,3,4]},"gunPipes":{"section_segments":6,"offset":{"x":14,"y":-20,"z":-5},"position":{"x":[-12,-2,0,0,0,0,0,0,0,0,0],"y":[-60,-50,-40,0,30],"z":[3,1,0,0,10,0,0,0,0]},"width":[3,3,3,3,3],"height":[3,3,3,3,3],"texture":[63]},"cross1":{"section_segments":4,"offset":{"x":0,"y":25,"z":32},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-12,0],"z":[-1,0,0,0,0,0,0,0,0]},"width":[3,3],"height":[0,0],"texture":[17]},"cross2":{"section_segments":4,"offset":{"x":0,"y":25,"z":32},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-12,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[3,3],"height":[0,0],"texture":[17],"angle":90},"cross3":{"section_segments":4,"offset":{"x":0,"y":25,"z":32},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-12,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[3,3],"height":[0,0],"texture":[17],"angle":270},"cross4":{"section_segments":4,"offset":{"x":0,"y":25,"z":32},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-12,0],"z":[-1,0,0,0,0,0,0,0,0]},"width":[3,3],"height":[0,0],"texture":[17],"angle":180}},'+
'"typespec":{"name":"Burstcharger Mk1","level":1,"model":2,"code":102,'+
'"specs":{"shield":{"capacity":[250,250],"reload":[4,4]},"generator":{"capacity":[100,100],"reload":[30,30]},"ship":{"mass":110,"speed":[150,150],"rotation":[70,70],"acceleration":[90,60]}},"shape":[2.4983999999999997,2.124,1.6403999999999999,1.1592,0.84,0.6648000000000001,0.5592,0.4872,0.8652,0.864,0.8483999999999999,0.8244,0.8160000000000001,0.8363999999999999,0.9024,0.9504,1.008,1.0788,1.1543999999999999,1.2672,1.4436,1.4327999999999999,1.3368,0.9504,1.0211999999999999,1.056,1.0211999999999999,0.9504,1.3368,1.4327999999999999,1.4436,1.2672,1.1543999999999999,1.0788,1.008,0.9504,0.9024,0.8363999999999999,0.8172,0.8244,0.8483999999999999,0.864,0.8652,0.4872,0.5592,0.6648000000000001,0.84,1.1592,1.6403999999999999,2.124],"lasers":[{"x":0,"y":-2.08,"z":0,"angle":0,"damage":[10,10],"rate":1,"type":1,"speed":[50,50],"number":5,"spread":10,"error":3,"recoil":0}],"radius":2.082}}';

gameplayShips.burstchargerMk1 = burstchargerMk1;
showcaseShips[1] = burstchargerMk1;

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
