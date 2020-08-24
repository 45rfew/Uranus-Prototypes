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

 var fivestars_pulse = '{"name":"5STARS","level":6,"author":"\u{2605}\u{2605}\u{2605}\u{2605}\u{2605}","model":2,"size":2,"teamMarkerSize":1.5,"scaleUp":0.63,"specs":{"shield":{"capacity":[350,400],"reload":[2,2]},"generator":{"capacity":[120,175],"reload":[40,50]},"ship":{"mass":180,"speed":[150,150],"rotation":[40,70],"acceleration":[90,100]}},"bodies":{"main":{"section_segments":6,"offset":{"x":0,"y":-40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-97,-97,-97,-100,-85,20,50,130,150,160,150],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[16,16,18,20,30,30,20,20,20,15,0],"height":[0,4,6,8,13,13,10,7,7,5,0],"texture":[15,16.9,3.9,63,0.9,1.9,1.9,13,63,16.9],"propeller":true},"propulsors":{"section_segments":8,"offset":{"x":60,"y":80,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-35,-35,-35,-35,-40,-30,-5,5,30,40,20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,5,6,9,13,13,13,13,9,0],"height":[0,1,5,6,9,13,13,13,13,9,0],"texture":[63,4,17,18,4,63,3,63,4,17],"propeller":true,"angle":0},"cockpit":{"section_segments":6,"offset":{"x":0,"y":-20,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-10,0,30,40,80,100],"z":[0,0,0,0,0,0,-5]},"width":[0,10,15,15,8,8,8],"height":[0,10,12,7,5,5,5],"texture":[7,9,9,4],"propeller":false},"star":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-115,"z":13},"position":{"x":[-12,-12,-12,-12],"y":[-3,3,6,8],"z":[0,0,0,0]},"width":[0,3,5,0],"height":[2,2,2,2],"texture":4},"star2":{"section_segments":[45,135,225,315],"angle":-72,"offset":{"x":0,"y":-101,"z":13},"position":{"x":[-12,-12,-12],"y":[0,6,6],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star3":{"section_segments":[45,135,225,315],"angle":72,"offset":{"x":0,"y":-117,"z":13},"position":{"x":[-11,-11,-11],"y":[-18,-12,-12],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star4":{"section_segments":[45,135,225,315],"angle":147,"offset":{"x":0,"y":-121,"z":13},"position":{"x":[4,4,4],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star5":{"section_segments":[45,135,225,315],"angle":-144,"offset":{"x":0,"y":-138,"z":13},"position":{"x":[26.2,26.2,26.2],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star2_1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-100,"z":13},"position":{"x":[-12,-12,-12,-12],"y":[-3,3,6,8],"z":[0,0,0,0]},"width":[0,3,5,0],"height":[2,2,2,2],"texture":4},"star2_2":{"section_segments":[45,135,225,315],"angle":-72,"offset":{"x":0,"y":-86,"z":13},"position":{"x":[-12,-12,-12],"y":[0,6,6],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star2_3":{"section_segments":[45,135,225,315],"angle":72,"offset":{"x":0,"y":-102,"z":13},"position":{"x":[-11,-11,-11],"y":[-18,-12,-12],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star2_4":{"section_segments":[45,135,225,315],"angle":147,"offset":{"x":0,"y":-106,"z":13},"position":{"x":[4,4,4],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star2_5":{"section_segments":[45,135,225,315],"angle":-144,"offset":{"x":0,"y":-123,"z":13},"position":{"x":[26.2,26.2,26.2],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star3_1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-85,"z":13},"position":{"x":[-12,-12,-12,-12],"y":[-3,3,6,8],"z":[0,0,0,0]},"width":[0,3,5,0],"height":[2,2,2,2],"texture":4},"star3_2":{"section_segments":[45,135,225,315],"angle":-72,"offset":{"x":0,"y":-71,"z":13},"position":{"x":[-12,-12,-12],"y":[0,6,6],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star3_3":{"section_segments":[45,135,225,315],"angle":72,"offset":{"x":0,"y":-87,"z":13},"position":{"x":[-11,-11,-11],"y":[-18,-12,-12],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star3_4":{"section_segments":[45,135,225,315],"angle":147,"offset":{"x":0,"y":-91,"z":13},"position":{"x":[4,4,4],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star3_5":{"section_segments":[45,135,225,315],"angle":-144,"offset":{"x":0,"y":-108,"z":13},"position":{"x":[26.2,26.2,26.2],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star4_1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-70,"z":13},"position":{"x":[-12,-12,-12,-12],"y":[-3,3,6,8],"z":[0,0,0,0]},"width":[0,3,5,0],"height":[2,2,2,2],"texture":4},"star4_2":{"section_segments":[45,135,225,315],"angle":-72,"offset":{"x":0,"y":-56,"z":13},"position":{"x":[-12,-12,-12],"y":[0,6,6],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star4_3":{"section_segments":[45,135,225,315],"angle":72,"offset":{"x":0,"y":-72,"z":13},"position":{"x":[-11,-11,-11],"y":[-18,-12,-12],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star4_4":{"section_segments":[45,135,225,315],"angle":147,"offset":{"x":0,"y":-76,"z":13},"position":{"x":[4,4,4],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star4_5":{"section_segments":[45,135,225,315],"angle":-144,"offset":{"x":0,"y":-93,"z":13},"position":{"x":[26.2,26.2,26.2],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star5_1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-55,"z":13},"position":{"x":[-12,-12,-12,-12],"y":[-3,3,6,8],"z":[0,0,0,0]},"width":[0,3,5,0],"height":[2,2,2,2],"texture":4},"star5_2":{"section_segments":[45,135,225,315],"angle":-72,"offset":{"x":0,"y":-41,"z":13},"position":{"x":[-12,-12,-12],"y":[0,6,6],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star5_3":{"section_segments":[45,135,225,315],"angle":72,"offset":{"x":0,"y":-57,"z":13},"position":{"x":[-11,-11,-11],"y":[-18,-12,-12],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star5_4":{"section_segments":[45,135,225,315],"angle":147,"offset":{"x":0,"y":-61,"z":13},"position":{"x":[4,4,4],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"star5_5":{"section_segments":[45,135,225,315],"angle":-144,"offset":{"x":0,"y":-78,"z":13},"position":{"x":[26.2,26.2,26.2],"y":[-24,-18,-18],"z":[0,0,0]},"width":[0,3,0],"height":[2,2,0],"texture":4},"_":{"section_segments":4,"offset":{"x":0,"y":-78,"z":10.5},"position":{"x":[6,6,6,6],"y":[-47,-47,60,60],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,1.1,1.1,0],"texture":4},"_2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-80,"z":10},"position":{"x":[-12,-12,-12,-12,-12,-12],"y":[-45,-45,-40,40,45,45],"z":[0,0,0,0,0,0]},"width":[0,10,10,10,10,0],"height":[0,3,3,3,3,0],"texture":[63,63,1,63]},"_3":{"section_segments":4,"offset":{"x":0,"y":-58,"z":8},"position":{"x":[13,13,13,13],"y":[-20,-20,20,20],"z":[0,0,0,0]},"width":[0,8,8,0],"height":[0,2.2,2.2,0],"texture":11},"tank":{"section_segments":12,"offset":{"x":0,"y":-100,"z":8},"position":{"x":[15,15,15,15,15,15,15,15],"y":[-17,-17,-20,-17,17,20,17,17],"z":[0,0,0,0,0,0,0,0]},"width":[0,3,4,6,6,4,3,0],"height":[0,3,4,6,6,4,3,0],"texture":[4,17,63,15,63,17,4]},"tank2":{"section_segments":12,"offset":{"x":22,"y":80,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-37,-37,-40,-35,-5,5,35,40,37,37],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,8,12,12,12,12,8,6,0],"height":[0,6,8,12,12,12,12,8,6,0],"texture":[4,17,63,4,8,4,63,17,4]},"gunConn1F":{"section_segments":[30,90,150,210,270,330],"offset":{"x":70,"y":70,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-10,10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15],"height":[0,12,14],"texture":[63],"angle":-90},"gunConn1B":{"section_segments":[30,90,150,210,270,330],"offset":{"x":70,"y":85,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-10,10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15],"height":[0,12,14],"texture":[63],"angle":-90},"gunConn2":{"section_segments":[45,135,225,315],"offset":{"x":70,"y":105,"z":-4},"position":{"x":[0,0,0,-10,-10,0,0,0,0,0,0],"y":[-18,-18,-20,-20,-10,-10,3],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,10,30,30,15,15],"height":[0,4,4,5,9,10,10],"texture":[17,4,4,18,63],"angle":-90},"gun":{"section_segments":6,"offset":{"x":82,"y":70,"z":-4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-80,-90,-80,-20,-10,20,22,22],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,3,5,5,7,7,5,0],"height":[0,3,5,5,7,7,5,0],"texture":[16.8,4,63,13,10.25],"laser":{"damage":[50,5],"rate":0.75,"type":1,"speed":[140,160],"number":1,"error":5}}},"wings":{"main":{"length":[60],"width":[60,35],"angle":[-10],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[10.13],"offset":{"x":0,"y":80,"z":4}},"main2":{"length":[30],"width":[60,30],"angle":[0],"position":[0,0],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":0,"y":10,"z":0}},"winglets":{"length":[20],"width":[80,50],"angle":[-10],"position":[0,30],"doubleside":true,"bump":{"position":30,"size":5},"texture":[63],"offset":{"x":20,"y":-80,"z":0}},"wings1":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings2":{"doubleside":true,"offset":{"x":30,"y":0,"z":0},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings3":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[90,90,145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}},"wings4":{"doubleside":true,"offset":{"x":75,"y":50,"z":-4},"length":[0,10,25],"width":[0,50,60,80],"angle":[-90,-90,-145],"position":[0,0,10,60],"texture":4,"bump":{"position":5,"size":5}}},"typespec":{"name":"5STARS","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[350,400],"reload":[2,2]},"generator":{"capacity":[290,175],"reload":[40,50]},"ship":{"mass":280,"speed":[150,150],"rotation":[40,70],"acceleration":[120,100]}},"shape":[5.611,5.643,5.201,3.99,3.52,2.962,2.476,2.171,1.955,1.401,1.337,3.477,3.476,3.478,3.562,3.708,3.932,4.352,4.938,5.644,5.88,5.756,6.384,4.948,4.886,4.809,4.886,4.948,6.384,5.756,5.88,5.644,4.938,4.352,3.932,3.708,3.562,3.478,3.476,3.477,1.337,1.401,1.955,2.171,2.476,2.962,3.52,3.99,5.201,5.643],"lasers":[{"x":3.28,"y":-0.8,"z":-0.16,"angle":0,"damage":[50,5],"rate":1.2,"type":1,"speed":[140,160],"number":1,"spread":0,"error":5,"recoil":50},{"x":-3.28,"y":-0.8,"z":-0.16,"angle":0,"damage":[50,5],"rate":1.2,"type":1,"speed":[140,160],"number":1,"spread":0,"error":5,"recoil":50}],"radius":6.384}}';

var fivestars_barrage = "";
var fivestars_showcase = fivestars_pulse;

fivestars_barrage = JSON.parse(fivestars_pulse)
fivestars_pulse = JSON.parse(fivestars_pulse)

fivestars_pulse.zoom = 1;
fivestars_barrage.zoom = 0.7;

/*fivestars_pulse.typespec.specs.generator.capacity = [150,150]
fivestars_pulse.typespec.lasers.push({
  "x":0,"y":-2,"z":0,"angle":0,
  "damage":[80,8],"rate":1.2,"type":2,
  "speed":[70,180],"number":1,"spread":0,
  "error":0,"recoil":80
})*/

fivestars_barrage.typespec.lasers = [];

var num = 5
var dist = 45
for(var i = 0; i<num; i++){
  fivestars_barrage.typespec.lasers.push({
    "x":Math.sin(Math.PI*2*(i/num))*dist,
    "y":Math.cos(Math.PI*2*(i/num))*-dist,
    "z":0,"angle":-(i/num)*360+180+5,"damage":[200,8],
    "rate":1,"type":2,"speed":[20,180],
    "number":2,"spread":0,"error":0,
    "recoil":0
  })
  fivestars_barrage.typespec.lasers.push({
    "x":Math.sin(Math.PI*2*(i/num))*dist,
    "y":Math.cos(Math.PI*2*(i/num))*-dist,
    "z":0,"angle":-(i/num)*360+180-5,"damage":[200,8],
    "rate":1,"type":2,"speed":[20,180],
    "number":2,"spread":0,"error":0,
    "recoil":0
  })
  fivestars_barrage.typespec.lasers.push({
    "x":0,
    "y":0,
    "z":0,"angle":-(i/num)*360,"damage":[200,8],
    "rate":1,"type":2,"speed":[20,180],
    "number":2,"spread":0,"error":0,
    "recoil":0
  })
  fivestars_barrage.bodies["weaponMarker"+i] = {
     section_segments: 4,
     offset: {
       x: 0,
       y: 0,
       z: 0,
     },
     position: {
       x: [500,1000,500,0,0,0,0,0],
       y: [-80,0,80],
       z: [0,0,0,0,0,0,0,0,0]
     },
     width: [10,10,10],
     height: [0,0,0],
     texture: [17],
     angle: (i/num)*360+90
  }
  /*
  avalanche_barrage.bodies["weaponMarker"+i] = {
     section_segments: 4,
     offset: {
       x: (i/num)*2000,
       y: 0,
       z: 0,
     },
     position: {
       x: [0,-40,0,0,0,0,0,0],
       y: [-30,-1],
       z: [0,0,0,0,0,0,0,0,0]
     },
     width: [0,30,0],
     height: [0,0,0],
     texture: [17],
     angle: (i/num)*20
  }*/
}
fivestars_barrage.typespec.specs.generator.capacity = [40000,40000];
fivestars_barrage.typespec.specs.generator.reload = [0.000001,0.000001];
fivestars_barrage.typespec.specs.ship.acceleration = [0.000001,0.000001];
fivestars_barrage.typespec.specs.ship.rotation = [0.000001,0.000001];
fivestars_barrage.model = 44
fivestars_barrage.lockBulletSpeed = true
fivestars_barrage.lockShipAccel = true


//avalanche_barrage = JSON.stringify(avalanche_barrage)
//avalanche_pulse = JSON.stringify(avalanche_pulse)



gameplayShips.fivestars_pulse = fivestars_pulse;
gameplayShips.fivestars_barrage = fivestars_barrage;
showcaseShips[24] = fivestars_showcase;


//$fileTape setWriting true

shipsData[24] = {name:"LMT 5STARS",cl:"Attack ship",company: 8,
  barrageCooldownTime: 20,
  barragePrepareTime: 3,
  barrageDuration: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["fivestars_pulse"];
    this.configs[1] = shipIdsToCodes["fivestars_barrage"];
  },
  respawn:function(ship,sh,p){


    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.hasTransformed = false
    ship.custom.sprototype.barrageCooldown = 20
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
    config = "Starfire";
    expl = "Preparing to strike!";
    if(ship.type == this.configs[1]){
      config = "Starfire Ready!";
      expl = "Avalanche in progress!";
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
    "A decent twin-pulse fighter. With a twist.",
    "You are the rockstar of this show.",
    "Twinkle, twinkle, little star - press [1] to show them who you are!"
    ],
  unicodeChar: "\u{2606}",
  color: "#FFFFFF",
  augmentUI: function(ship){
    if(ship.type==this.configs[1])
      barrageExplain(ship);
  }
};
