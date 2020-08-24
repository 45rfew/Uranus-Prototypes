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
//$fileTape setWriting false

var vanillaShips = {};
vanillaShips.pulseFighter = '{"name":"Pulse-Fighter","level":6,"model":1,"size":1.3,"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[60,90],"reload":[20,30]},"ship":{"mass":120,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-75,-50,0,50,105,90],"z":[0,0,0,0,0,0,0]},"width":[0,15,25,30,35,20,0],"height":[0,10,15,25,25,20,0],"propeller":true,"texture":[63,1,1,10,2,12]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,10,30,60],"z":[0,0,0,0,0]},"width":[0,10,15,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":9},"cannon":{"section_segments":6,"offset":{"x":0,"y":-40,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,15,0],"height":[0,5,15,15,10,0],"angle":0,"laser":{"damage":[15,30],"rate":1,"type":2,"speed":[150,175],"number":1,"error":0},"propeller":false,"texture":3},"deco":{"section_segments":8,"offset":{"x":50,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0,0],"y":[-52,-50,-20,0,20,40,42],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,5,5,0],"height":[0,5,10,15,10,5,0],"angle":0,"laser":{"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0},"propeller":false,"texture":4}},"wings":{"main":{"length":[80,20],"width":[120,50,40],"angle":[-10,20],"position":[30,50,30],"doubleside":true,"bump":{"position":30,"size":10},"texture":[11,63],"offset":{"x":0,"y":0,"z":0}},"winglets":{"length":[40],"width":[40,20,30],"angle":[10,-10],"position":[-40,-60,-55],"bump":{"position":0,"size":30},"texture":63,"offset":{"x":0,"y":0,"z":0}},"stab":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Pulse-Fighter","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[150,200],"reload":[3,5]},"generator":{"capacity":[60,90],"reload":[20,30]},"ship":{"mass":120,"speed":[105,120],"rotation":[60,80],"acceleration":[80,100]}},"shape":[2.343,2.204,1.998,1.955,2.088,1.91,1.085,0.974,0.895,0.842,0.829,0.95,1.429,2.556,2.618,2.726,2.851,2.837,2.825,2.828,2.667,2.742,2.553,2.766,2.779,2.735,2.779,2.766,2.553,2.742,2.667,2.828,2.825,2.837,2.851,2.726,2.618,2.556,1.43,0.95,0.829,0.842,0.895,0.974,1.085,1.91,2.088,1.955,1.998,2.204],"lasers":[{"x":0,"y":-2.34,"z":-0.26,"angle":0,"damage":[15,30],"rate":1,"type":2,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.851}}';

vanillaShips.furyStar = '{"name":"FuryStar","level":6,"model":2,"size":1.5,"specs":{"shield":{"capacity":[200,275],"reload":[6,7]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":200,"speed":[70,100],"rotation":[120,180],"acceleration":[150,180]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-45,0,10,15,35,55,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,20,25,17,25,20,15,0],"height":[0,15,15,15,20,20,15,0],"texture":[1,4,63,4,2,12,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-43,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-4,10],"z":[-5,0,0]},"width":[1,18,20],"height":[1,15,10],"texture":[9]},"missiles":{"section_segments":12,"offset":{"x":35,"y":-5,"z":10},"position":{"x":[0,0,0,0,0],"y":[-30,-23,0,23,30],"z":[0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,5,5,5,0],"texture":[6,4,4,10],"angle":0,"laser":{"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":15,"y":-10,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"error":0},"propeller":false,"texture":[3,3,10,3]},"top_propulsors":{"section_segments":10,"offset":{"x":75,"y":45,"z":40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"propeller":true,"texture":[4,4,2,2,5,63,5,63,17]},"bottom_propulsors":{"section_segments":10,"offset":{"x":100,"y":0,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,17]}},"wings":{"rooftop":{"doubleside":true,"offset":{"x":0,"y":-20,"z":20},"length":[20,15,25,25,5],"width":[50,40,35,35,35,30],"angle":[0,-20,30,30,30],"position":[0,10,20,50,80,100],"texture":[8,63,3,3],"bump":{"position":-40,"size":5}},"bottom":{"doubleside":true,"offset":{"x":10,"y":-20,"z":0},"length":[30,30,30],"width":[60,50,50,50],"angle":[-27,-27,-27],"position":[0,10,30,40],"texture":[1],"bump":{"position":-40,"size":5}},"topwinglets":{"doubleside":true,"offset":{"x":80,"y":87,"z":45},"length":[20],"width":[40,30],"angle":[60],"position":[0,50],"texture":[63],"bump":{"position":10,"size":10}},"bottomwinglets":{"doubleside":true,"offset":{"x":100,"y":50,"z":-45},"length":[20],"width":[40,30],"angle":[-60],"position":[0,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"FuryStar","level":5,"model":2,"code":502,"specs":{"shield":{"capacity":[200,275],"reload":[6,7]},"generator":{"capacity":[100,150],"reload":[30,40]},"ship":{"mass":200,"speed":[70,100],"rotation":[120,180],"acceleration":[150,180]}},"shape":[1.59,1.832,1.891,1.874,1.458,1.479,1.524,1.571,1.645,1.757,1.925,3.322,3.427,3.455,3.48,3.666,3.822,4.057,4.521,4.774,5.039,5.299,1.577,1.71,1.679,1.653,1.679,1.71,1.577,5.299,5.039,4.774,4.521,4.057,3.822,3.666,3.48,3.455,3.428,3.322,1.925,1.757,1.645,1.571,1.524,1.479,1.458,1.874,1.891,1.832],"lasers":[{"x":1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.299}}';

vanillaShips.USniper = '{"name":"U-Sniper","level":6,"model":1,"size":1.8,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[80,160],"reload":[40,60]},"ship":{"mass":200,"speed":[70,90],"rotation":[50,70],"acceleration":[60,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,-10,40,100,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,23,10,0],"height":[0,5,23,10,0],"texture":[12,1,10,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":30},"position":{"x":[0,0,0,0],"y":[20,40,80],"z":[-4,0,-6]},"width":[5,10,5],"height":[0,8,0],"texture":[9]},"uwings":{"section_segments":8,"offset":{"x":50,"y":-20,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-90,-100,40,80,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,25,20,0],"height":[0,5,25,20,0],"texture":[12,2,3,4]},"cannons":{"section_segments":12,"offset":{"x":70,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-70,-20,0,20,50,45],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,10,15,5,0],"height":[0,5,5,10,10,5,0],"angle":0,"laser":{"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"recoil":200,"number":1,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]},"side_propulsors":{"section_segments":10,"offset":{"x":30,"y":30,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,13,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,10,5,5,10,5,0],"height":[0,5,10,10,10,5,5,10,5,0],"propeller":true,"texture":[5,2,11,2,63,11,12]}},"typespec":{"name":"U-Sniper","level":5,"model":1,"code":501,"specs":{"shield":{"capacity":[200,300],"reload":[4,6]},"generator":{"capacity":[80,160],"reload":[40,60]},"ship":{"mass":200,"speed":[70,90],"rotation":[50,70],"acceleration":[60,110]}},"shape":[0.361,0.366,0.378,4.774,4.83,4.17,3.608,3.248,3.245,3.083,2.915,2.807,2.751,2.829,2.976,3.22,3.412,3.521,3.693,3.681,3.138,2.937,3.473,3.407,3.618,3.607,3.618,3.407,3.473,2.937,3.138,3.681,3.693,3.521,3.412,3.22,2.976,2.829,2.751,2.807,2.915,3.083,3.245,3.248,3.608,4.17,4.83,4.774,0.378,0.366],"lasers":[{"x":2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200},{"x":-2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200}],"radius":4.83}}';

vanillaShips.fly = '{"name":"Fly","level":6,"model":6,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}';

for(var sh in vanillaShips){
  var parsed = JSON.parse(vanillaShips[sh]);

  parsed.scaleUp = 0.75;

  vanillaShips[sh] = JSON.stringify(parsed);
}

gameplayShips.pulseFighter = vanillaShips.pulseFighter;
gameplayShips.furyStar = vanillaShips.furyStar;
gameplayShips.USniper = vanillaShips.USniper;
gameplayShips.fly = vanillaShips.fly;
showcaseShips[29] = vanillaShips.pulseFighter;
showcaseShips[30] = vanillaShips.furyStar;
showcaseShips[31] = vanillaShips.USniper;
showcaseShips[32] = vanillaShips.fly;

//$fileTape setWriting true

shipsData[29] = {name:"Pulse Fighter",cl:"Vanilla Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["pulseFighter"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Literally can't do s",id:1,
      explanation:"I mean...",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};

shipsData[30] = {name:"Furystar",cl:"Vanilla Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["furyStar"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Literally can't do s",id:1,
      explanation:"I mean...",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};

shipsData[31] = {name:"U-Sniper",cl:"Vanilla Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["USniper"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Literally can't do s",id:1,
      explanation:"I mean...",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};

shipsData[32] = {name:"Fly",cl:"Vanilla Ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["fly"];
  },
  respawn:function(ship,sh,p){
    ship.set({type:this.configs[0],stats:66666666,healing:false});
  },
  tick:function(ship, sh, p){
  },
  useAbility:function(ship, abId, sh, p){
    switch(abId){
      case 1:
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){
    k = [];
    k[1] = {name:"Literally can't do s",id:1,
      explanation:"I mean...",
      ready: 0,
      state: 2
    }
    return k;
  },
  tips: [
    "Try mining. I bet that'll work."
  ],
  unicodeChar: ".",
  color: "#222222"
};
