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
//$fileTape setWriting false

var harbinger_deployed = '{"name":"Harbinger","level":6,"model":10,"size":1,"author":"MALEFOR","specs":{"shield":{"capacity":[330,300],"reload":[2,3]},"generator":{"capacity":[120,200],"reload":[30,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[70,80],"acceleration":[120,120]}},"tori":{"engine_ring1":{"segments":16,"radius":35,"section_segments":12,"offset":{"x":0,"y":80,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[18]},"engine_ring2":{"segments":16,"radius":25,"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[8]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-180,-135,-140,-130,-120,-110,-65,-10,20,55,100,95],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,15,18,14,20,30,27,35,30,0],"height":[0,5,8,15,18,12,15,20,25,35,30,0],"texture":[17,17,3,3,3,3,3,3,8,17],"propeller":true,"laser":{"damage":[50,25],"rate":1.2,"type":1,"speed":[80,-80],"number":1}},"front":{"section_segments":4,"offset":{"x":10,"y":-200,"z":0},"position":{"x":[0,0,-20],"y":[0,80,130],"z":[0,0,0]},"width":[0,10,0],"height":[0,15,0],"texture":[3],"angle":10},"cockpit":{"section_segments":12,"offset":{"x":0,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-120,-95,-70,-40,40,40],"z":[-8,-6,-3,0,0,0]},"width":[0,10,15,15,15,0],"height":[0,10,12,12,12,0],"texture":[9,9,3,8,17]},"sides_inner":{"section_segments":12,"offset":{"x":60,"y":20,"z":-20},"position":{"x":[0,0,0,0,0,0,0],"y":[-120,-80,-90,0,73,80,70],"z":[0,0,0,0,0,0,0]},"width":[0,5,8,15,10,8,0],"height":[0,5,8,15,10,8,0],"texture":[6,6,3,8,4,17],"propeller":true,"laser":{"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1}},"sides_outer":{"section_segments":12,"offset":{"x":95,"y":20,"z":-35},"position":{"x":[0,0,0,0,0,0],"y":[-90,-50,-60,0,40,80],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,10,0],"height":[0,5,8,12,10,0],"texture":[6,6,2,3,2],"laser":{"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1}},"inner_supports":{"section_segments":8,"offset":{"x":22,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,60],"z":[0,0]},"width":[4,4],"height":[4,4],"texture":[3]},"wires":{"section_segments":8,"offset":{"x":10,"y":-100,"z":10},"position":{"x":[4,6,0,1,2,4,8],"y":[-20,-11,0,11,20,50,140],"z":[-5,-3,0,0,0,3,7]},"width":[4,4,4,4,4,4,4],"height":[4,4,4,4,4,4,4],"texture":[63]}},"wings":{"side_plates_inner":{"doubleside":true,"offset":{"x":70,"y":10,"z":10},"length":[20,20,20,20],"width":[70,80,80,70,60],"angle":[-75,-100,-155,-190],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"side_plates_outer":{"doubleside":true,"offset":{"x":110,"y":10,"z":-15},"length":[10,15,15,10],"width":[50,75,90,75,50],"angle":[-65,-95,-125,-155],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_main":{"doubleside":true,"offset":{"x":12,"y":0,"z":50},"length":[20,20,25],"width":[65,75,75,65],"angle":[-30,-50,-70],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_narrow":{"doubleside":true,"offset":{"x":15,"y":-20,"z":40},"length":[10,10,15],"width":[85,145,145,105],"angle":[-30,-50,-70],"position":[20,0,0,10],"texture":[4],"bump":{"position":10,"size":5}},"top_joins1":{"doubleside":true,"offset":{"x":0,"y":20,"z":0},"length":[90],"width":[8,2],"angle":[45],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"top_joins2":{"doubleside":true,"offset":{"x":0,"y":-20,"z":0},"length":[70],"width":[8,2],"angle":[45],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_front":{"doubleside":true,"offset":{"x":0,"y":-15,"z":0},"length":[125],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_mid":{"doubleside":true,"offset":{"x":0,"y":10,"z":0},"length":[140],"width":[30,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_back":{"doubleside":true,"offset":{"x":0,"y":35,"z":0},"length":[125],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"engine_decor_main":{"doubleside":true,"offset":{"x":29,"y":120,"z":12},"length":[10,10,10],"width":[50,50,50,50],"angle":[-65,-90,-115],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_upper":{"doubleside":true,"offset":{"x":12,"y":120,"z":30},"length":[4,6,4],"width":[50,50,50,50],"angle":[-15,-40,-65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_lower":{"doubleside":true,"offset":{"x":12,"y":120,"z":-30},"length":[4,6,4],"width":[50,50,50,50],"angle":[15,40,65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"front_decor1":{"doubleside":true,"offset":{"x":8,"y":-180,"z":8},"length":[6,6],"width":[90,90,90],"angle":[-55,-90],"position":[0,60,0],"texture":[4],"bump":{"position":10,"size":2}}},"typespec":{"name":"Harbinger","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[330,300],"reload":[2,3]},"generator":{"capacity":[120,200],"reload":[35,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[70,80],"acceleration":[120,120]}},"shape":[4.506,3.854,2.912,1.945,2.332,2.257,1.974,2.36,2.348,2.214,2.364,2.375,2.368,2.643,2.404,2.466,2.512,2.509,2.666,2.759,2.419,2.369,2.149,2.975,2.934,2.405,2.934,2.975,2.149,2.369,2.419,2.759,2.666,2.509,2.512,2.466,2.404,2.643,2.368,2.375,2.364,2.214,2.348,2.36,1.974,2.257,2.332,1.945,2.912,3.854],"lasers":[{"x":0,"y":-3.6,"z":0,"angle":0,"damage":[50,25],"rate":1.2,"type":1,"speed":[80,-80],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.2,"y":-2,"z":-0.4,"angle":0,"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-2,"z":-0.4,"angle":0,"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.9,"y":-1.4,"z":-0.7,"angle":0,"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.9,"y":-1.4,"z":-0.7,"angle":0,"damage":[5,25],"rate":3,"type":1,"speed":[60,-80],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.506}}';
var harbinger_retracted = '{"name":"Harbinger","level":6,"model":11,"size":1,"author":"MALEFOR","specs":{"shield":{"capacity":[330,300],"reload":[4,4]},"generator":{"capacity":[290,200],"reload":[80,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[20,80],"acceleration":[30,120]}},"tori":{"engine_ring1":{"segments":16,"radius":35,"section_segments":12,"offset":{"x":0,"y":80,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[18]},"engine_ring2":{"segments":16,"radius":25,"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[8]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-180,-135,-140,-130,-120,-110,-65,-10,20,55,100,95],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,15,18,14,20,30,27,35,30,0],"height":[0,5,8,15,18,12,15,20,25,35,30,0],"texture":[49,17,3,3,3,3,3,3,8,17],"propeller":true,"laser":{"damage":[50,80],"rate":2,"type":1,"speed":[150,20],"number":1}},"front":{"section_segments":4,"offset":{"x":10,"y":-200,"z":0},"position":{"x":[0,0,-20],"y":[0,80,130],"z":[0,0,0]},"width":[0,10,0],"height":[0,15,0],"texture":[3],"angle":10},"cockpit":{"section_segments":12,"offset":{"x":0,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-120,-95,-70,-40,40,40],"z":[-8,-6,-3,0,0,0]},"width":[0,10,15,15,15,0],"height":[0,10,12,12,12,0],"texture":[9,9,3,8,17]},"sides_inner":{"section_segments":12,"offset":{"x":40,"y":20,"z":-15},"position":{"x":[0,0,0,0,0,0,0],"y":[-120,-80,-90,0,73,80,70],"z":[0,0,0,0,0,0,0]},"width":[0,5,8,15,10,8,0],"height":[0,5,8,15,10,8,0],"texture":[49,6,3,8,4,17],"propeller":false,"laser":{"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1}},"sides_outer":{"section_segments":12,"offset":{"x":70,"y":20,"z":-25},"position":{"x":[0,0,0,0,0,0],"y":[-90,-50,-60,0,40,80],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,10,0],"height":[0,5,8,12,10,0],"texture":[49,6,2,3,2],"laser":{"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1}},"inner_supports":{"section_segments":8,"offset":{"x":22,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,60],"z":[0,0]},"width":[4,4],"height":[4,4],"texture":[3]},"wires":{"section_segments":8,"offset":{"x":10,"y":-100,"z":10},"position":{"x":[4,6,0,1,2,4,8],"y":[-20,-11,0,11,20,50,140],"z":[-5,-3,0,0,0,3,7]},"width":[4,4,4,4,4,4,4],"height":[4,4,4,4,4,4,4],"texture":[63]},"propulsors":{"section_segments":8,"offset":{"x":0,"y":190,"z":0},"position":{"x":[0,0],"y":[0,0],"z":[0,0]},"width":[35,35],"height":[35,35],"propeller":true,"texture":[17]}},"wings":{"side_plates_inner":{"doubleside":true,"offset":{"x":50,"y":10,"z":15},"length":[20,20,20,20],"width":[70,80,80,70,60],"angle":[-75,-100,-155,-190],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"side_plates_outer":{"doubleside":true,"offset":{"x":80,"y":10,"z":-5},"length":[10,15,15,10],"width":[50,75,90,75,50],"angle":[-65,-95,-125,-155],"position":[0,0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_main":{"doubleside":true,"offset":{"x":0,"y":0,"z":50},"length":[20,20,25],"width":[65,75,75,65],"angle":[-30,-50,-70],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":5}},"top_plates_narrow":{"doubleside":true,"offset":{"x":3,"y":-20,"z":40},"length":[10,10,15],"width":[85,145,145,105],"angle":[-30,-50,-70],"position":[20,0,0,10],"texture":[4],"bump":{"position":10,"size":5}},"top_joins1":{"doubleside":true,"offset":{"x":0,"y":20,"z":0},"length":[90],"width":[8,2],"angle":[60],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"top_joins2":{"doubleside":true,"offset":{"x":0,"y":-20,"z":0},"length":[70],"width":[8,2],"angle":[60],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_front":{"doubleside":true,"offset":{"x":0,"y":-15,"z":0},"length":[105],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_mid":{"doubleside":true,"offset":{"x":0,"y":10,"z":0},"length":[120],"width":[30,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"side_joins_back":{"doubleside":true,"offset":{"x":0,"y":35,"z":0},"length":[105],"width":[20,5],"angle":[-20],"position":[0,0],"texture":[63],"bump":{"position":10,"size":10}},"engine_decor_main":{"doubleside":true,"offset":{"x":29,"y":120,"z":12},"length":[10,10,10],"width":[50,50,50,50],"angle":[-65,-90,-115],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_upper":{"doubleside":true,"offset":{"x":12,"y":120,"z":30},"length":[4,6,4],"width":[50,50,50,50],"angle":[-15,-40,-65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"engine_decor_lower":{"doubleside":true,"offset":{"x":12,"y":120,"z":-30},"length":[4,6,4],"width":[50,50,50,50],"angle":[15,40,65],"position":[0,0,0,0],"texture":[2],"bump":{"position":10,"size":0}},"front_decor":{"doubleside":true,"offset":{"x":8,"y":-180,"z":8},"length":[6,6],"width":[90,90,90],"angle":[-55,-90],"position":[0,60,0],"texture":[49],"bump":{"position":10,"size":2}}},"typespec":{"name":"Harbinger","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[330,300],"reload":[4,4]},"generator":{"capacity":[290,200],"reload":[90,35]},"ship":{"mass":170,"speed":[150,140],"rotation":[20,80],"acceleration":[30,120]}},"shape":[4.506,3.854,2.912,2.154,1.946,1.698,1.98,1.931,1.784,1.8,1.791,2.004,1.73,2.269,2.114,2.111,2.04,1.99,2.108,2.287,2.441,2.218,2.21,2.975,3.864,3.807,3.864,2.975,2.21,2.218,2.441,2.287,2.108,1.99,2.04,2.111,2.114,2.269,1.73,2.004,1.791,1.8,1.784,1.931,1.98,1.698,1.946,2.154,2.912,3.854],"lasers":[{"x":0,"y":-3.6,"z":0,"angle":0,"damage":[50,80],"rate":2,"type":1,"speed":[150,20],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.8,"y":-2,"z":-0.3,"angle":0,"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-2,"z":-0.3,"angle":0,"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.4,"y":-1.4,"z":-0.5,"angle":0,"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.4,"y":-1.4,"z":-0.5,"angle":0,"damage":[20,80],"rate":2,"type":1,"speed":[150,20],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.506}}';

gameplayShips.harbinger_deployed = harbinger_deployed;
gameplayShips.harbinger_retracted = harbinger_retracted;
showcaseShips[26] = harbinger_deployed;

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
