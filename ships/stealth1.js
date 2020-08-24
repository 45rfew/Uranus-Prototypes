/*Avalache
Heavy Attack Ship

Every once in a while an organization producing spaceships just goes wild
and pours billions of credits into creating a single, amazing, hi-tech design.

Meet the Avalanche, by Goldman Aerospace. Truly beautiful, truly deadly, truly
complex. A heavy pulse fighter with a large cockpit, which almost bumps it into
fregate territory. Enhanced with cutting-edge technology, and

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

 var stealth1_main = '{"name":"Stealth Vehicle Type 1","author":"Goldman","level":6,"circularHitbox":1,"scaleUp":1.7,"teamMarkerSize":0.8,"model":1,"size":1.05,"specs":{"shield":{"capacity":[240,100],"reload":[2,2]},"generator":{"capacity":[150,60],"reload":[40,15]},"ship":{"mass":120,"speed":[150,145],"rotation":[40,130],"acceleration":[120,120]}},"bodies":{"detail":{"section_segments":6,"offset":{"x":0,"y":0,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-78,-78,-72,-70,-50,-30,-15,10,25,42,45,57,60,75,85,75,75,90,80],"z":[-3,-3,-3,-5,-5,-5,-5,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,7,8,12,13,20,17,26,26,33,33,26,26,17,16,14,10,0],"height":[0,2,3,6,10,10,15,15,18,18,18,18,18,18,12,11,9,7,0],"texture":[63,63,3.9,3.9,3.9,3.9,3.9,3.9,3.9,2.9,3.9,2.9,3.9,3.9,2.9,2.9,2.9,16.9],"propeller":true},"detail2":{"section_segments":6,"offset":{"x":0,"y":10,"z":25},"position":{"x":[0,0,0,0,0],"y":[-5,-5,0,5,5],"z":[0,0,0,0,0]},"width":[0,10,10,5,0],"height":[0,20,20,10,0],"texture":[3,3,63,3.9],"vertical":true},"detail3":{"section_segments":4,"offset":{"x":0,"y":10,"z":34.8},"position":{"x":[0,0,0,0],"y":[0,0,5,5],"z":[10,10,0,0]},"width":[0,0.225,0.225,0],"height":[0,0.25,0.25,0],"texture":[1,1,4],"vertical":true},"detail4":{"section_segments":4,"offset":{"x":4,"y":10,"z":30.15},"position":{"x":[4.4,4.4,0,0],"y":[0,0,5,5],"z":[5,5,0,0]},"width":[0,0.225,0.225,0],"height":[0,0.25,0.25,0],"texture":[1,1,4],"vertical":true},"detail5":{"section_segments":4,"offset":{"x":4,"y":10,"z":19.85},"position":{"x":[4.4,4.4,0,0],"y":[0,0,5,5],"z":[-5,-5,0,0]},"width":[0,0.225,0.225,0],"height":[0,0.25,0.25,0],"texture":[1,1,4],"vertical":true},"detail6":{"section_segments":14,"offset":{"x":0,"y":11,"z":28},"position":{"x":[0,0,0,0,0,0,0],"y":[-5,-5,5,6,-10,8,8],"z":[0,0,0,0,0,0,0]},"width":[0,3,3,2,1.7,1,0],"height":[0,3,3,2,1.7,1,0],"texture":[3,8,15,1,17,17],"vertical":true},"detail7":{"section_segments":4,"offset":{"x":0,"y":10,"z":23},"position":{"x":[-2,-2,-2,-2],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,0.2,0.2,0],"height":[0,0.2,0.2,0],"texture":[2],"vertical":true},"detail8":{"section_segments":6,"offset":{"x":0,"y":10,"z":4},"position":{"x":[-15,-15,-15,-15,-15,-15],"y":[-15,-15,-10,10,15,15],"z":[0,0,0,0,0,0]},"width":[0,5,8,8,5,0],"height":[0,3,5,5,3,0],"texture":[3.9]},"gunLeft":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-1,"z":0.5},"position":{"x":[-20,-20,-20,-20,-20,-20,-20,-20],"y":[0,-51,-50,-10,-5,5,10,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,1.5,2,2,5,5,3,0],"height":[0,1,1.4,1.4,3,3,2,0],"texture":[3.9,63,3.9,2.9,15,2.9],"laser":{"damage":[80,40],"rate":1,"type":2,"speed":[120,200],"recoil":70,"number":1,"error":0}},"detail10":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":33,"z":8},"position":{"x":[-22,-22,-22,-22,-22,-22],"y":[-6,-6,0,0,6,6],"z":[0,0,0,0,0,0]},"width":[0,5,5,2,2,0],"height":[0,10,10,10,10,0],"texture":[4,4,4,11,4]},"detail11":{"section_segments":6,"offset":{"x":0,"y":0,"z":10.9},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-15,-15,-16,-16,20,20],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,9,10,10,0],"height":[0,7,9,10,10,0],"texture":[16.9,3.9]},"guns":{"section_segments":[45,135,225,315],"offset":{"x":10,"y":-5,"z":12},"position":{"x":[0,0,0,0,0,0,0,0],"y":[0,-26,-25,-10,-5,25,25],"z":[0,0,0,0,0,0,0,0]},"width":[0,1.5,2,2,5,5,0],"height":[0,1,1.4,1.4,5,5,0],"texture":[3.9,63,15,2.9,4],"laser":{"damage":[10,25],"rate":2,"type":2,"speed":[80,200],"recoil":0,"number":1,"error":2}},"detail13":{"section_segments":4,"angle":180,"offset":{"x":0,"y":8,"z":16.3},"position":{"x":[1,1,1,1],"y":[-50,-50,20,20],"z":[0,0,0,0]},"width":[0,7,7,0],"height":[0,4.05,4.05,0],"texture":[4,17,4]},"detail14":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":-7,"z":16.3},"position":{"x":[0,0,0,0],"y":[-7,-7,-2,-2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,5.3,0],"texture":[4]},"detail15":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":5,"z":16.3},"position":{"x":[0,0,0,0],"y":[-7,-7,-2,-2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,5.3,0],"texture":[4]},"detail16":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":2,"z":16.3},"position":{"x":[2,2,-3,-3],"y":[-7,-7,-2,-2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,5.3,0],"texture":[4]},"detail17":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":-4.95,"z":18.9},"position":{"x":[0,0,0,0],"y":[-3,-3,-1.95,-1.95],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,0.4,1.4,0],"texture":[4]},"detail18":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":-4.95,"z":16.7},"position":{"x":[0,0,0,0],"y":[-7,-7,-6,-6],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,0.4,1.4,0],"texture":[4]},"detail19":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":-3.5,"z":17.5},"position":{"x":[0,0,0.5,0.5],"y":[-5.5,-5.5,-4.5,-4.5],"z":[0,0,0,0]},"width":[0,2,1.5,0],"height":[0,0.4,1.4,0],"texture":[4]},"detail20":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":3.85,"z":17.5},"position":{"x":[0.5,0.5,0,0],"y":[-5.5,-5.5,-4.5,-4.5],"z":[0,0,0.1,0.1]},"width":[0,1,0.2,0],"height":[0,0.4,1.4,0],"texture":[4]},"detail21":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":43,"z":-3},"position":{"x":[-30,-30,-10,0,0,-10,-30,-30],"y":[-45,-45,-30,-25,25,30,45,45],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,20,45,45,20,10,0],"height":[0,1,2,4,4,2,1,0],"texture":[63,63,4,4,4,63,63]},"detail22":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":15,"z":0},"position":{"x":[-10,-10,20,-10,-10],"y":[-30,-30,0,30,30],"z":[0,0,0,0,0]},"width":[0,10,50,10,0],"height":[0,2,5,2,0],"texture":[3]},"detail23":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":17,"z":12},"position":{"x":[0,0,0,0],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,21,21,0],"height":[0,15,15,0],"texture":[4]},"detail24":{"section_segments":6,"offset":{"x":0,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-2,-2,-5,-5,5,5],"z":[0,0,0,0,0,0]},"width":[0,19,20,21,21,0],"height":[0,13,14,15,15,0],"texture":[16.9,4]},"detail25":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":33,"z":12},"position":{"x":[10,10,10,10],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"texture":[2]},"detail26":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":33,"z":19},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,-30,-20,-15,-5,0,0],"z":[0,0,0,0,0,0,0]},"width":[0,1.5,2,5,5,2,0],"height":[0,1.5,2,5,5,2,0],"texture":[3.9,63,3.9,15,63]},"detail27":{"section_segments":6,"offset":{"x":15,"y":52,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-40,-20,10,30,20],"z":[0,0,0,0,0,0]},"width":[0,10,14,14,10,0],"height":[0,7,9,9,7,0],"texture":[3.9,3.9,3.9,3.9,16.9],"propeller":true}},"typespec":{"name":"Stealth Vehicle Type 1","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[240,100],"reload":[2,2]},"generator":{"capacity":[150,60],"reload":[40,15]},"ship":{"mass":120,"speed":[150,145],"rotation":[40,130],"acceleration":[120,120]}},"shape":[1.639,1.564,1.116,0.751,0.62,0.56,0.517,0.488,0.441,0.398,0.397,0.413,0.435,0.47,0.512,0.579,0.688,0.778,0.863,0.969,1.763,1.929,1.678,1.792,1.899,1.894,1.899,1.792,1.678,1.929,1.763,0.969,0.863,0.778,0.688,0.579,0.512,0.498,0.498,0.51,0.51,0.509,0.554,0.612,0.704,0.833,1.054,1.178,1.116,1.564],"lasers":[{"x":-0.42,"y":-1.092,"z":0.011,"angle":0,"damage":[80,40],"rate":1,"type":2,"speed":[120,200],"number":1,"spread":0,"error":0,"recoil":70},{"x":0.21,"y":-0.651,"z":0.252,"angle":0,"damage":[10,25],"rate":2,"type":2,"speed":[80,200],"number":1,"spread":0,"error":2,"recoil":0},{"x":-0.21,"y":-0.651,"z":0.252,"angle":0,"damage":[10,25],"rate":2,"type":2,"speed":[80,200],"number":1,"spread":0,"error":2,"recoil":0}],"radius":1.929}}';

var stealth1_cloaked = "";
var stealth1_showcase = stealth1_main;

//stealth1_main = JSON.parse(stealth1_main)
stealth1_cloaked = JSON.parse(stealth1_main);
stealth1_cloaked.bodies = {}

stealth1_cloaked.typespec.specs.ship.acceleration = [20,20];
//stealth1_cloaked.typespec.specs.ship.rotation = [30,30];
stealth1_cloaked.teamMarkerSize = 0.001;
stealth1_cloaked.typespec.lasers = [];

/*var stealth1_semicloaked = ;
stealth1_semicloaked.bodies = {
  "detail":{
    "section_segments":6,
    "offset":{"x":0,"y":0,"z":5},
    "position":{"x":[0,0],"y":[90,90],"z":[0,0]},
    "width":[10,10],
    "height":[7,7],
    "texture":[16.9],
    "propeller":true
  },
  "detail27":{
    "section_segments":6,
    "offset":{"x":15,"y":52,"z":-10},
    "position":{"x":[0,0],"y":[30,30],"z":[0,0]},
    "width":[10,10],
    "height":[7,7],
    "texture":[3.9,3.9,3.9,3.9,16.9],
    "propeller":true
  };*/

gameplayShips.stealth1_main = stealth1_main;
gameplayShips.stealth1_cloaked = stealth1_cloaked;
showcaseShips[25] = stealth1_showcase;

//$fileTape setWriting true

shipsData[25] = {name:"Stealth Vehicle Type 1",cl:"Stealth fighter",company: 4,
  barrageCooldownTime: 10,
  barragePrepareTime: 2,
  cloakBurstVelocity: 0.4,
  //barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["stealth1_main"];
    this.configs[1] = shipIdsToCodes["stealth1_cloaked"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 10
    ship.custom.sprototype.barragePrepare = 0
    ship.custom.sprototype.engines = false;
  },
  tick:function(ship, sh, p){


    p.barrageCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
    p.barragePrepare--;
    if(ship.type == this.configs[1]){
      /*if(p.barragePrepare <= 1 && !p.decloaking){
        sh.idle = true;
      }*/
      if(!p.engines){
        sh.idle = true;
      }
      if(ship.type == this.configs[1] && p.barragePrepare == 0){
        ship.set({vx:Math.cos(ship.r)*this.cloakBurstVelocity+ship.vx,vy:Math.sin(ship.r)*this.cloakBurstVelocity+ship.vy});
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
        }else{
          ship.set({type:this.configs[0],stats:ship.custom.lastStats,generator:10000});
          UISystem.events.pushEvent(ship,"shipConfigChange");
          p.barrageCooldown = this.barrageCooldownTime
        }
        break;
      case 2:
        if(ship.type != this.configs[1]) return;
        p.engines = !p.engines;
        UISystem.events.pushEvent(ship,"shipConfigChange");
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship,sh,p){

    k = [];
    config = "Cloak";
    expl = "They will never see it coming";
    if(ship.type == this.configs[1]){
      config = "Cloaked";
      expl = "Lurking among the shadows.";

      k[2] = {name:p.engines?"Semi-cloak":"Full cloak",id:1,explanation:"Toggle engines to maneuver",
        ready: p.engines?0:1,
        state: p.engines?2:0
      }
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
    "Engines sadly can't be used while cloaked.",
    "When cloaking, choose a direction to dash in.",
    "Cloaking doesn't remove you from the radar."
    ],
  unicodeChar: "\u{2666}",
  color: "#555555",
  augmentUI: function(ship){
    //TODO: optimize. Events might work, alternatively maybe some kind of a
    //simple ACUI extention that optimizes UI elements with a finite number of
    //states
    if(ship.type==this.configs[1]){
      if(ship.custom.sprototype.engines)
        UISystem.autoClearUI.set(ship,
          {id: "selfShipMarker",
          position: [41,47,18,6],
          visible: true,
          components: [
              { type: "text",position:[33,0,33,100],value:"+",color:"#FF0"},
              { type: "text",position:[0,20,40,60],value:"your name",align:"left",color:"#FF0"},
              { type: "text",position:[60,20,40,60],value:"is visible",align:"right",color:"#FF0"},
            ]
          },
          1
        );
      else
        UISystem.autoClearUI.set(ship,
          {id: "selfShipMarker",
          position: [41,47,18,6],
          visible: true,
          components: [
              { type: "text",position:[0,0,100,100],value:"+",color:"#FFF"},
              { type: "text",position:[0,20,40,60],value:"visible on",align:"left",color:"#FFF"},
              { type: "text",position:[60,20,40,60],value:"radar only",align:"right",color:"#FFF"},
            ]
          },
          1
        );
    }
  }
};
