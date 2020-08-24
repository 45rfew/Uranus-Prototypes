/*Burst Inferno 3
Medium Superiority Fighter

Pulses are cool and all, but sometimes you just want to spray the hell out of your
enemies. Inferno allows you to do just that.

Inferno also allows you to dispatch HELL to confined regions of space. Some call
it a HELL DELIVERY SERVICE, a DEVIL'S FIGHTER, or also a MOBILE HELL PLATFORM.

Inferno has giant capacitors. Truly remarkable for its size. Its recharge rate is
somewhat low, but that's secondary. What truly matters is the amazing amount of
damage it can output within just a few seconds.

Damage stun. Shields are good at preventing direct damage, but a lot of damage
in a short period of time tends to interfere with electronics. Inferno is built
to really abuse that fact.

Firewall is a secondary weapon, or, if you want, an ability, that allows Inferno
to launch shield-disrupting pods in a wall pattern. Said pods can really change
the course of a battle. They badly interfere with enemy shield capacitors, and
also drain the shields further with a lingering disruption efect.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false
var firewallHGS3 = '{"name":"Firewall HGS-3","level":6,"model":1,"size":0.8,"zoom":1,"scaleUp":1.2,"circularHitbox":1,"specs":{"shield":{"capacity":[350,350],"reload":[2,2]},"generator":{"capacity":[500,500],"reload":[20,20]},"ship":{"mass":130,"speed":[150,150],"rotation":[70,70],"acceleration":[100,100]}},"bodies":{"frontCapacitorsStructure":{"section_segments":6,"offset":{"x":0,"y":-70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-70,-65,30,40,60,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,10,15,15,10],"height":[0,7,7,7,7,0],"texture":[2.8,2.8,1.8,1.8,4]},"frontThingy":{"section_segments":6,"offset":{"x":0,"y":-145,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-15,-10,10,20],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15,5],"height":[0,10,10,5],"texture":[1.8,10,1.8]},"frontDeflectors":{"section_segments":6,"offset":{"x":12,"y":-140,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-15,10,10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,0],"height":[5,5,0],"texture":[0.8]},"pipes1":{"section_segments":6,"offset":{"x":-4,"y":-70,"z":10},"position":{"x":[-7,0,0,-5,0,0,0,0,0,0],"y":[0,15,40,60],"z":[-5,0,0,-10,0,0,0,0,0]},"width":[3,3,3,3,3,3,0],"height":[3,3,3,3,3,3,0],"texture":[63]},"pipes2":{"section_segments":6,"offset":{"x":-4,"y":-105,"z":10},"position":{"x":[-7,0,0,0,0,0,0,0,0,0],"y":[0,15,50],"z":[-5,0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,0],"height":[3,3,3,3,3,3,0],"texture":[63]},"frontCap1":{"section_segments":6,"offset":{"x":2,"y":-110,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-35,-30,-25,-15,-7,-2],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,20,20,20,20,0],"height":[0,10,10,10,10,5,0],"texture":[18,4,16.8,4,4],"angle":90},"frontCap2":{"section_segments":6,"offset":{"x":2,"y":-70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-35,-30,-25,-15,-7,-2],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,20,20,20,20,0],"height":[0,10,10,10,10,5,0],"texture":[18,4,16.8,4,4],"angle":90},"capConnectors":{"section_segments":6,"offset":{"x":20,"y":-20,"z":0},"position":{"x":[6,8,8,0,0,0,0,0,0,0],"y":[-50,-33,-30,10,15,50],"z":[0,0,0,0,0,0,0,0,0]},"width":[6,6,4,4,6,6],"height":[6,6,4,4,6,6],"texture":[4,3,4,3,4]},"wingConnectors":{"section_segments":6,"offset":{"x":7,"y":20,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,5,25,30,50,55,65,70,68],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[15,28,28,15,13,30,30,10,0],"height":[0,12,12,10,8,10,10,8,0],"texture":[3.8,18,3.8,13,3.8,8,3.8,16.8],"angle":90},"wingGunsTop":{"section_segments":6,"offset":{"x":67,"y":-20,"z":3},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-80,-90,-75,-60,10,30,50,60,62,85,90,93],"z":[0,0,0,0,0,3,3,3,3,3,3,3,3]},"width":[0,3,5,4,7,10,10,4,4,4,4,0],"height":[0,3,5,4,7,5,5,4,4,4,4,0],"texture":[16.8,18,8,4,1,10,1,1,16.8,1,1],"laser":{"damage":[12,12],"rate":6,"type":1,"speed":[50,50],"number":2,"error":0.5}},"wingGunsBottom":{"section_segments":6,"offset":{"x":67,"y":-20,"z":-7},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-80,-90,-75,-60,10,30,50,60,62,85,90,93],"z":[0,0,0,0,0,-3,-3,-3,-3,-3,-3,-3,-3]},"width":[0,3,5,4,7,10,10,4,4,4,4,0],"height":[0,3,5,4,7,5,5,4,4,4,4,0],"texture":[16.8,18,8,4,1,10,1,1,16.8,1,1]},"engineWings":{"section_segments":6,"offset":{"x":62,"y":60,"z":-2},"position":{"x":[2,2,0,0,0,0,0,0,0],"y":[-30,-10,-5,20,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[10,10,5,3,0],"height":[5,5,5,3,0],"texture":[3,4,13],"propeller":true},"cockpitBottom":{"section_segments":6,"offset":{"x":0,"y":-20,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,20,30,60,63,80,82],"z":[0,0,0,0,0,5,5,5]},"width":[0,20,20,30,30,20,20,0],"height":[0,5,5,5,5,10,10,0],"texture":[2.8,2.8,2.8,1.8,2.8,3.8,3.8]},"cockpit":{"section_segments":6,"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-60,-30,-10,10,30,40],"z":[3,0,5,6,3,10,0,0,0]},"width":[0,9,10,11,10,8],"height":[0,10,10,10,10,0],"texture":[12,9,9,9,4]},"enginesMainSides":{"section_segments":6,"offset":{"x":22,"y":60,"z":0},"position":{"x":[0,0,-3,-3,-3,0,0,0,0,0],"y":[-40,-10,-5,20,40,30],"z":[0,0,0,0,0,0,0,0,0]},"width":[5,8,10,10,8,0],"height":[8,10,10,10,8,0],"texture":[4,4,18,13,16.8],"propeller":true},"mainEngine":{"section_segments":8,"offset":{"x":0,"y":90,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-50,-30,-25,0,5,10,15,20,40,10],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15,15,15,12,12,15,10,0],"height":[0,15,15,15,15,12,12,15,10,0],"texture":[4,18,17,8,4,17,4,4,17],"propeller":true},"pipes3":{"section_segments":6,"offset":{"x":-8,"y":15,"z":7},"position":{"x":[-25,-7,1,0,0,0,0,0,0,0],"y":[-10,25,50],"z":[-8,0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,0],"height":[3,3,3,3,3,3,0],"texture":[63]}},'+
'"typespec":{"name":"Firewall HGS-3","level":1,"model":1,"code":101,'+
'"specs":{"shield":{"capacity":[350,350],"reload":[2,2]},"generator":{"capacity":[750,750],"reload":[30,30]},"ship":{"mass":130,"speed":[150,150],"rotation":[70,70],"acceleration":[120,100]}},"shape":[2.56,2.504,2.122,1.458,2.083,2.079,1.777,1.551,1.408,1.313,1.243,1.201,1.189,1.234,1.272,1.317,1.344,1.411,1.546,1.622,1.645,1.039,1.413,1.653,2.086,2.084,2.086,1.653,1.413,1.039,1.645,1.622,1.546,1.411,1.344,1.317,1.272,1.234,1.19,1.201,1.243,1.313,1.408,1.551,1.777,2.079,2.083,1.458,2.122,2.504],"lasers":[{"x":1.072,"y":-1.76,"z":0.048,"angle":0,"damage":[12,12],"rate":6,"type":1,"speed":[50,50],"number":2,"spread":0,"error":0.5,"recoil":0},{"x":-1.072,"y":-1.76,"z":0.048,"angle":0,"damage":[12,12],"rate":6,"type":1,"speed":[50,50],"number":2,"spread":0,"error":0.5,"recoil":0}],"radius":2.56}}';

gameplayShips.firewallHGS3 = firewallHGS3;
showcaseShips[0] = firewallHGS3;

//$fileTape setWriting true

shipsData[0] = {name:"Burst Inferno MSF-3",cl:"Attack ship",company: 0,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["firewallHGS3"];
  },
  firewallCooldownTime: 25,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.firewallCooldown = 0;
    ship.set({type:this.configs[0],stats:66666666,healing:false});

  },
  tick:function(ship, sh, p){


    p.firewallCooldown-=sp.systems.aliveBooster.getReloadBuff(ship);
  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        if(p.firewallCooldown<0){
          p.firewallCooldown = this.firewallCooldownTime;
          //spawn the firewall;
          dist = 15;
          width = 20;
          randomRange = 4;
          for(fp=0;fp<10;fp++){
            xf = Math.cos(ship.r);
            yf = Math.sin(ship.r);
            xs = -yf;
            ys = xf;
            xf*=dist; yf*=dist;
            xs*=width; ys*=width;
            xr = Math.random()*randomRange*2-randomRange;
            yr = Math.random()*randomRange*2-randomRange;
            GPOTypes[1].create(ship.x+xf-xs*0.5+xs*(fp/9)+xr,ship.y+yf-ys*0.5+ys*(fp/9)+yr,ship.custom.team)
          }
        }
        break;
      default:
      log("unknown ability "+abId);
    }
  },
  getAbilities:function(ship, sh, p){

    k = [];
    FWState = 0;
    if(p.firewallCooldown>=0){
      FWState = 2;
    }
    k[1] = {name:"Firewall",id:1,
      explanation:"A wall of pods disrupting enemy shields",
      ready: 1-p.firewallCooldown/this.firewallCooldownTime,
      state: FWState
    }

    return k;
  },
  tips:[
    "Burst is life. Try to engage enemies only when your capacitor is full.",
    "Don't spam shots; let your capacitor refill.",
    "Retreat when empty, let your capacitor refill, then engage into battle.",
    "Deploy your Firewall onto enemies to soften their shields.",
    "Most ships won't survive your entire burst."
    ],
  unicodeChar: "\u{1f525}",
  color: "#FFAA00"
};
