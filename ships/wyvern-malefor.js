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

var wyvernMk2_main = '{"name":"Wyvern MK II","author":"Malefor","level":6,"scaleUp":1.2,"teamMarkerSize":1.6,"model":1,"size":1,"specs":{"shield":{"capacity":[450,180],"reload":[3,3]},"generator":{"capacity":[350,350],"reload":[35,35]},"ship":{"mass":480,"speed":[150,135],"rotation":[80,120],"acceleration":[90,90]}},"bodies":{"main":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-200,-165,-170,-160,-150,-140,-105,-40,-20,-8,-8],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,15,18,14,20,40,40,40,0],"height":[0,5,8,15,18,12,15,20,20,20,0],"texture":[49,17,3,3,3,3,3,3,3,4,16,4,4,4,4,4,4,4,4,4,17]},"core":{"section_segments":30,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-25,-24.863047384206833,-24.453690018345142,-23.776412907378838,-22.83863644106502,-21.65063509461097,-20.225424859373685,-18.578620636934858,-16.728265158971457,-14.694631307311829,-12.500000000000004,-10.16841607689501,-7.725424859373686,-5.197792270443981,-2.6132115816913366,-1.5308084989341915e-15,2.6132115816913335,5.197792270443978,7.725424859373684,10.168416076895003,12.499999999999995,14.694631307311825,16.728265158971446,18.578620636934858,20.225424859373682,21.65063509461097,22.838636441065024,23.776412907378838,24.453690018345142,24.863047384206833,25],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2.6132115816913366,5.1977922704439825,7.7254248593736845,10.168416076895003,12.499999999999998,14.694631307311829,16.728265158971457,18.578620636934858,20.225424859373685,21.650635094610966,22.83863644106502,23.776412907378838,24.453690018345142,24.863047384206833,25,24.863047384206833,24.453690018345142,23.77641290737884,22.838636441065024,21.65063509461097,20.225424859373685,18.57862063693486,16.72826515897145,14.69463130731183,12.499999999999998,10.168416076895001,7.725424859373688,5.1977922704439825,2.6132115816913433,3.061616997868383e-15],"height":[0,2.6132115816913366,5.1977922704439825,7.7254248593736845,10.168416076895003,12.499999999999998,14.694631307311829,16.728265158971457,18.578620636934858,20.225424859373685,21.650635094610966,22.83863644106502,23.776412907378838,24.453690018345142,24.863047384206833,25,24.863047384206833,24.453690018345142,23.77641290737884,22.838636441065024,21.65063509461097,20.225424859373685,18.57862063693486,16.72826515897145,14.69463130731183,12.499999999999998,10.168416076895001,7.725424859373688,5.1977922704439825,2.6132115816913433,3.061616997868383e-15],"texture":17,"vertical":true,"angle":0},"emitter_core":{"section_segments":12,"offset":{"x":0,"y":45,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-8,-7.7274066103125465,-6.92820323027551,-5.656854249492381,-4.000000000000001,-2.070552360820166,-4.898587196589413e-16,2.070552360820167,3.9999999999999982,5.65685424949238,6.92820323027551,7.727406610312546,8],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2.070552360820166,3.9999999999999996,5.65685424949238,6.928203230275509,7.7274066103125465,8,7.7274066103125465,6.92820323027551,5.656854249492381,3.9999999999999996,2.070552360820168,9.797174393178826e-16],"height":[0,2.070552360820166,3.9999999999999996,5.65685424949238,6.928203230275509,7.7274066103125465,8,7.7274066103125465,6.92820323027551,5.656854249492381,3.9999999999999996,2.070552360820168,9.797174393178826e-16],"texture":49,"vertical":true,"angle":0},"emitter":{"section_segments":0,"offset":{"x":0,"y":0,"z":45},"position":{"x":[0,0],"y":[0,0],"z":[0,0]},"width":[0,1],"height":[0,1],"texture":[0],"laser":{"damage":[35,35],"rate":0.5,"speed":[0.1,0.1],"number":8,"angle":360}},"column_main":{"section_segments":8,"offset":{"x":0,"y":32,"z":0},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"width":[4,4],"height":[4,4],"texture":[16],"vertical":true},"column_sides":{"section_segments":8,"offset":{"x":5.5,"y":32,"z":0},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"width":[1,1],"height":[1,1],"texture":[16],"vertical":true},"column_front":{"section_segments":8,"offset":{"x":0,"y":32,"z":5.5},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"width":[1,1],"height":[1,1],"texture":[16],"vertical":true},"column_back":{"section_segments":8,"offset":{"x":0,"y":32,"z":-5.5},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"width":[1,1],"height":[1,1],"texture":[16],"vertical":true},"ring":{"section_segments":[30,60,120,150,210,240,300,330],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,-20,-30,-30,-20,20,30,30,20,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[40,40,48,60,68,68,60,48,40,40],"height":[40,40,48,60,68,68,60,48,40,40],"texture":[3.3],"vertical":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-155,"z":9},"position":{"x":[0,0,0,0,0],"y":[-8,8,37,60,110],"z":[4,3,2,5,5]},"width":[0,11,15,20,22],"height":[0,10,15,15,15],"texture":[9,9,10,4]},"back1":{"section_segments":12,"offset":{"x":0,"y":90,"z":10},"position":{"x":[0,0,0,0],"y":[-40,-40,40,40],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,20,20,0],"texture":[16]},"back2":{"section_segments":12,"offset":{"x":25,"y":90,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,40,40],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,20,20,0],"texture":[18]},"sides":{"section_segments":[45,135,225,315],"offset":{"x":58,"y":0,"z":0},"position":{"x":[-40,0,0,-14],"y":[-120,-40,90,130],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,20,20,0],"texture":[3,8,3]},"attach":{"section_segments":[45,135,225,315],"offset":{"x":80,"y":20,"z":5},"position":{"x":[0,0,0,0,10,0],"y":[-30,-30,0,0,10,0],"z":[0,0,0,0,0,0]},"width":[0,10,40,60,80],"height":[0,5,5,10,10],"texture":[3],"angle":-90},"back":{"section_segments":[0,45,60,135,225,300,315],"offset":{"x":0,"y":120,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,70,70,0],"height":[0,35,35,0],"texture":[4]},"engine_cover":{"section_segments":[0,45,60,135,225,300,315],"offset":{"x":0,"y":160,"z":0},"position":{"x":[0,0],"y":[10,10],"z":[0,0,0,0]},"width":[60,0],"height":[30,0],"texture":[16.9]},"engine":{"section_segments":[0,45,60,135,225,300,315],"offset":{"x":0,"y":125,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,10,20,30,40,50,60,60,50,40,30,20,10,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[65,75,80,83,85,83,80,75,65,60,57,55,57,60,65],"height":[30,40,45,48,50,48,45,40,30,25,22,20,22,25,30],"texture":[3]},"decor":{"section_segments":6,"offset":{"x":25,"y":-90,"z":12},"position":{"x":[0,0,0],"y":[-80,-70,50],"z":[0,0,0]},"width":[0,5,5],"height":[0,5,5],"texture":[2]},"decor1":{"section_segments":6,"offset":{"x":37,"y":-90,"z":10},"position":{"x":[0,0,0],"y":[-60,-50,50],"z":[0,0,0]},"width":[0,5,5],"height":[0,5,5],"texture":[2]},"decor2":{"section_segments":6,"offset":{"x":50,"y":-90,"z":8},"position":{"x":[0,0,0],"y":[-40,-30,50],"z":[0,0,0]},"width":[0,5,5],"height":[0,5,5],"texture":[2]},"propulsors":{"section_segments":8,"offset":{"x":0,"y":265,"z":10},"position":{"x":[0],"y":[0],"z":[0]},"width":[35],"height":[35],"propeller":true,"texture":[17]},"propulsors1":{"section_segments":8,"offset":{"x":30,"y":220,"z":0},"position":{"x":[0],"y":[0],"z":[0]},"width":[28],"height":[28],"propeller":true,"texture":[17]},"wing_joints":{"section_segments":8,"offset":{"x":100,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-20,-15,-8,-8,0,5,8,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,20,20,15,15,30,25,0],"height":[0,20,20,15,15,30,25,0],"texture":[4,4,4,4,63,4,17],"vertical":true},"feather1":{"section_segments":8,"offset":{"x":100,"y":20,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,30,67.5,120,150],"z":[0,0,0,0,0]},"width":[12,15,18,10,0],"height":[4,4,4,2,0],"texture":[1],"angle":60},"feather2":{"section_segments":8,"offset":{"x":100,"y":20,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,30,77.5,135,180],"z":[0,0,0,0,0]},"width":[12,15,18,10,0],"height":[4,4,4,2,0],"texture":[4],"angle":0},"feather3":{"section_segments":8,"offset":{"x":100,"y":20,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,30,87.5,150,190],"z":[0,0,0,0,0]},"width":[12,15,18,10,0],"height":[4,4,4,2,0],"texture":[3],"angle":20},"feather4":{"section_segments":8,"offset":{"x":100,"y":20,"z":10},"position":{"x":[0,0,0,0,0],"y":[0,30,77.5,130,170],"z":[0,0,0,0,0]},"width":[12,15,18,10,0],"height":[4,4,4,2,0],"texture":[2],"angle":40},"circle_centre1":{"section_segments":8,"offset":{"x":0,"y":23,"z":75},"position":{"x":[0,0,0,0],"y":[0,5,8,10],"z":[0,0,0,0]},"width":[10,15,12,0],"height":[10,15,12,0],"texture":[63,4,17],"vertical":true,"angle":0},"back_feather1":{"section_segments":8,"offset":{"x":40,"y":150,"z":34},"position":{"x":[0,0,0,0,0],"y":[0,30,77.5,130,165],"z":[0,0,0,0,0]},"width":[10,13,18,10,0],"height":[4,4,4,2,0],"texture":[3],"angle":12},"back_feather2":{"section_segments":8,"offset":{"x":55,"y":150,"z":26},"position":{"x":[0,0,0,0,0],"y":[0,30,57.5,90,120],"z":[0,0,0,0,0]},"width":[10,13,16,10,0],"height":[4,4,4,2,0],"texture":[2],"angle":20},"back_feather3":{"section_segments":8,"offset":{"x":25,"y":150,"z":38},"position":{"x":[0,0,0,0,0],"y":[0,30,57.5,90,120],"z":[0,0,0,0,0]},"width":[10,13,16,10,0],"height":[4,4,4,2,0],"texture":[4],"angle":5}},"typespec":{"name":"Wyvern MK II","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[600,180],"reload":[3,3]},"generator":{"capacity":[150,350],"reload":[40,35]},"ship":{"mass":480,"speed":[150,135],"rotation":[20,120],"acceleration":[60,90]}},"shape":[4.6,3.709,3.112,2.786,2.547,2.028,1.71,1.664,1.65,1.637,1.662,1.651,2.433,2.589,3.637,4.828,4.975,5.152,4.354,5.163,3.992,4.472,5.595,6.403,5.437,3.707,5.437,6.403,5.595,4.472,3.992,5.163,4.354,5.152,4.975,4.828,3.637,2.589,2.433,1.651,1.662,1.637,1.65,1.664,1.71,2.028,2.547,2.786,3.112,3.709],"lasers":[],"radius":6.403}}';


var wyvernMk2_pulse = JSON.parse(wyvernMk2_main);
var wyvernMk2_emitter = JSON.parse(wyvernMk2_main);
var wyvernMk2_main = JSON.parse(wyvernMk2_main);

wyvernMk2_pulse.zoom = 0.7
wyvernMk2_pulse.lockShipAccel = 1;
wyvernMk2_pulse.typespec.specs.generator.reload = [120,120];
wyvernMk2_pulse.typespec.specs.generator.capacity = [700,700];
wyvernMk2_pulse.typespec.lasers.push({
  "x":0,
  "y":-1,
  "z":0,"angle":0,"damage":[100,8],
  "rate":0.5,"type":2,"speed":[90,180],
  "number":1,"spread":0,"error":0,
  "recoil":0
})

wyvernMk2_emitter.zoom = 1.5;
wyvernMk2_emitter.lockBulletSpeed = 1;
wyvernMk2_emitter.lockShipAccel = 1;
wyvernMk2_emitter.typespec.specs.ship.acceleration = [0.001,0.001]
wyvernMk2_emitter.typespec.specs.ship.rotation = [0.1,0.1]
wyvernMk2_emitter.typespec.specs.generator.reload = [1000,1000];
wyvernMk2_emitter.typespec.specs.generator.capacity = [1000,1000];
wyvernMk2_emitter.typespec.lasers.push({
  "x":0,
  "y":0,
  "z":0,"angle":0,"damage":[70,8],
  "rate":2,"type":2,"speed":[40,180],
  "number":8,"spread":360-360/5,"error":40,
  "recoil":0
})

wyvernMk2_main.typespec.specs.generator.reload = [120,120];
wyvernMk2_main.typespec.specs.generator.capacity = [700,700];
wyvernMk2_main.lockBulletSpeed = 1;
wyvernMk2_main.lockShipAccel = 1;
wyvernMk2_main.typespec.lasers.push({
  "x":0,
  "y":-1,
  "z":0,"angle":0,"damage":[55,8],
  "rate":1,"type":2,"speed":[10,180],
  "number":12,"spread":360-360/12,"error":0,
  "recoil":0
})

gameplayShips.wyvernMk2_pulse = wyvernMk2_pulse;
gameplayShips.wyvernMk2_emitter = wyvernMk2_emitter;
gameplayShips.wyvernMk2_main = wyvernMk2_main;
showcaseShips[27] = JSON.stringify(wyvernMk2_main);

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
