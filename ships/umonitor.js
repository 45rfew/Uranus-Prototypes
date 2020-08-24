/*U-Monitor
Long Range Broadside Artillery

The initial concept of U-Monitor wasn't nothing too exciting, and didn't go too
far. However, after a couple of years, Finalizer gathered his engineers together
to rework this machine.

Although the ship inherited it's predecessor's name, it is a completely different
beast. And it is a beast, indeed. A flammable mixture of a LRA and a broadside
fighter, the new U-Monitor is foe to be feared.

Oh, and as an added bonus, it looks absolutely amazing.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var UMonitor_main = '{"name":"U-Monitor","level":6,"author":"Finalizer","teamMarkerSize":2.3,"scaleUp":0.75,"model":41,"size":2.7,"specs":{"shield":{"capacity":[350,500],"reload":[2,2]},"generator":{"capacity":[250,700],"reload":[50,450]},"ship":{"mass":240,"speed":[150,150],"rotation":[30,30],"acceleration":[50,90]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-60,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,-15,30,40,110,140,145,140],"z":[-5,-5,5,10,10,0,0,0]},"width":[0,8,15,17,25,10,10,0],"height":[0,5,30,25,25,20,20,0],"texture":[12,63,63,63,18,17,18],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":25},"position":{"x":[0,0,0,0,0],"y":[0,30,70,100],"z":[-13,5,-4,-6]},"width":[3,8,12,12],"height":[0,10,20,20],"texture":[9,9,4]},"uwing1":{"section_segments":[180,240,300,360],"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[35,35,35,35,35,35],"y":[-90,-100,130,200,215],"z":[0,0,0,0,0,0]},"width":[0,5,35,20,0],"height":[0,15,25,20,0],"texture":[12,2,3,4]},"uwing2":{"angle":180,"section_segments":[180,240,300,360],"offset":{"x":0,"y":130,"z":-5},"position":{"x":[35,35,35,35,35,35],"y":[-30,-40,100,140,155],"z":[0,0,0,0,0,0]},"width":[0,10,35,25,0],"height":[0,15,25,20,0],"texture":[12,3,2,4]},"lights1":{"angle":180,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[-35,-35,-35,-35,-35,-35],"y":[-100,-100,30,100,100],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,5,5,5,0],"texture":[4,17,4,4]},"lights2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[-35,-35,-35,-35,-35,-35],"y":[150,150,230,280,280],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,5,5,5,0],"texture":[4,17,4]},"frontprong":{"section_segments":[180,240,300,360],"offset":{"x":0,"y":-90,"z":-5},"position":{"x":[34,34,34,34,34,0],"y":[-90,-110,-40,-40],"z":[0,0,0,0,0,0]},"width":[0,10,25,0],"height":[0,20,25,0],"texture":[4,63]},"rearprong":{"section_segments":[180,240,300,360],"offset":{"x":0,"y":190,"z":-5},"position":{"x":[34,34,34,34,34,0],"y":[-110,-110,-60,-70],"z":[0,0,0,0,0,0]},"width":[0,35,10,0],"height":[0,25,20,0],"texture":[4,63]},"frontprong2":{"section_segments":[0,60,120,180],"offset":{"x":0,"y":40,"z":-5},"position":{"x":[-34,-34,-34,-34,-34],"y":[-90,-110,-40,-40],"z":[0,0,0,0,0,0]},"width":[0,10,31,0],"height":[0,10,25,0],"texture":[4,63]},"rearprong2":{"section_segments":[0,60,120,180],"offset":{"x":0,"y":240,"z":-5},"position":{"x":[-34,-34,-34,-34,-34],"y":[-110,-110,-60,-70],"z":[0,0,0,0,0,0]},"width":[0,20,10,0],"height":[0,20,15,0],"texture":[4,63]},"sideconnectors":{"section_segments":[0,60,120,180],"offset":{"x":-33,"y":28.5,"z":-5},"position":{"x":[0,0,0,0,0,0],"y":[0,0,5,5],"z":[0,0,0,0,0,0]},"width":[0,35,35,0],"height":[0,29,29,0],"texture":[4]},"box":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[44,44,62,53,53],"y":[-30,-30,130,180,180],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,15,25,20,0],"texture":[4]},"box2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-100,"z":-5},"position":{"x":[-54,-54,-62,-46,-46],"y":[90,90,130,230,230],"z":[0,0,0,0,0,0]},"width":[0,5,5,5,0],"height":[0,15,25,20,0],"texture":[4]},"box3":{"vertical":true,"angle":30,"section_segments":[45,135,225,315],"offset":{"x":30,"y":8,"z":-31},"position":{"x":[0,0,0,0,0],"y":[0,15,19,19],"z":[0,0,0,0]},"width":[0,20,20,20],"height":[0,50,35,0],"texture":[4,17.95,8]},"intake":{"section_segments":12,"offset":{"x":0,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-40,0,25,50,55],"z":[0,0,0,0,0,0,0]},"width":[20,20,25,30,20,0],"height":[0,8,10,10,10,0],"texture":[4,1,10,11,12]},"engine1":{"section_segments":12,"offset":{"x":25,"y":70,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-80,-70,-30,-20,0,5,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,15,15,15,15,10,10,0],"height":[0,15,25,25,25,25,20,20,0],"texture":[12,4,13,8,13,18,17,18],"propeller":true},"cannons1":{"section_segments":12,"offset":{"x":0,"y":-60,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-60,-70,-60,-58,-55,-55,-35,0,20,40,120,130,125],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,5,4,4,4,30,30,30,10,0],"height":[0,5,5,5,5,4,4,4,15,15,15,4,0],"texture":[4,4,17,4,4,18,13,18,13,8,11,17],"angle":0,"laser":{"damage":[70,90],"rate":0.5,"type":2,"speed":[190,240],"recoil":50,"number":1,"error":0},"propeller":false},"cannons2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":20,"y":40,"z":35},"position":{"x":[0,0,0,0,0,0,0,0,-3,-20,-20,-20,0],"y":[-60,-70,-60,-58,-55,-55,-35,0,20,20,30,30],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,5,5,4,4,4,4,26,10,0],"height":[0,5,5,5,5,4,4,4,4,4,4,0],"texture":[4,4,17,4,4,18,13,8,63],"angle":0,"laser":{"damage":[60,80],"rate":1,"type":2,"speed":[190,240],"recoil":50,"number":1,"error":0},"propeller":false},"cannons12":{"section_segments":12,"offset":{"x":0,"y":-110,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-54,-64,-62,-59,-53,-44,-39],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons11":{"section_segments":12,"offset":{"x":0,"y":-90,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-56,-66,-64,-61,-55,-46,-41],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons10":{"section_segments":12,"offset":{"x":0,"y":-70,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-58,-68,-66,-63,-57,-48,-43],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons9":{"section_segments":12,"offset":{"x":0,"y":-50,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-60.5,-70.5,-68.5,-65.5,-59.5,-50.5,-45.5],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons8":{"section_segments":12,"offset":{"x":0,"y":-30,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-62.5,-72.5,-70.5,-67.5,-61.5,-52.5,-47.5],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons3":{"section_segments":12,"offset":{"x":0,"y":-10,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-65,-75,-73,-70,-64,-55,-50],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons4":{"section_segments":12,"offset":{"x":0,"y":10,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-67.5,-77.5,-75.5,-72.5,-66.5,-57.5,-52.5],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons5":{"section_segments":12,"offset":{"x":0,"y":30,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-69.5,-79.5,-77.5,-74.5,-68.5,-59.5,-54.5],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons6":{"section_segments":12,"offset":{"x":0,"y":30,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-68.5,-78.5,-76.5,-73.5,-67.5,-58.5,-53.5],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"cannons7":{"section_segments":12,"offset":{"x":0,"y":50,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-65,-75,-73,-70,-64,-55,-50],"z":[0,0,0,0,0,0,0]},"width":[0,5,5,5,5,12,0],"height":[0,5,5,5,5,12,0],"angle":-90,"laser":{"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"recoil":10,"number":1,"error":0},"texture":[4,4,17,18,63,4]},"hub1":{"angle":-80,"section_segments":20,"offset":{"x":0,"y":40,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[63,70,68,68,72,73],"z":[0,0,0,0,0,0,0]},"width":[12,10,8,7,5,0],"height":[12,10,8,7,5,0],"texture":[18,18,17,17,18]},"hub2":{"angle":-80,"section_segments":20,"offset":{"x":0,"y":70,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[58,65,63,63,67,68],"z":[0,0,0,0,0,0,0]},"width":[12,10,8,7,5,0],"height":[12,10,8,7,5,0],"texture":[18,18,17,17,18]},"hub3":{"angle":-80,"section_segments":20,"offset":{"x":0,"y":100,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[53,60,58,58,62,63],"z":[0,0,0,0,0,0,0]},"width":[12,10,8,7,5,0],"height":[12,10,8,7,5,0],"texture":[18,18,17,17,18]},"hub4":{"angle":-105,"section_segments":20,"offset":{"x":0,"y":33,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[64,71,69,69,73,74],"z":[0,0,0,0,0,0,0]},"width":[12,10,8,7,5,0],"height":[12,10,8,7,5,0],"texture":[18,18,17,17,18]},"disc1":{"section_segments":16,"offset":{"x":44,"y":15,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,12,12,12,12,12,10,10],"height":[10,10,10,12,12,12,12,12,10,10],"texture":[4,4,4,4,4,17,4]},"disc2":{"section_segments":16,"offset":{"x":44,"y":40,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,12,12,12,12,12,10,10],"height":[10,10,10,12,12,12,12,12,10,10],"texture":[4,4,4,4,4,17,4]},"turret":{"vertical":true,"section_segments":20,"offset":{"x":0,"y":35,"z":-45},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,6,5,5,10,13],"z":[0,0,0,0,0,0,0]},"width":[25,19,12,10,7,0],"height":[25,19,12,10,7,0],"texture":[11,18,17,9,9]}},"typespec":{"name":"U-Monitor","level":6,"model":41,"code":641,"specs":{"shield":{"capacity":[950,500],"reload":[2,2]},"generator":{"capacity":[250,700],"reload":[50,450]},"ship":{"mass":720,"speed":[150,150],"rotation":[7,30],"acceleration":[10,90]}},"shape":[7.025,10.995,11.043,8.855,7.107,6.247,5.467,4.828,4.705,4.347,4.211,4.13,4.082,4.218,4.263,4.617,4.691,5.006,5.022,4.948,5.922,6.535,7.388,7.381,4.622,4.599,9.895,9.989,8.405,7.195,5.961,5.67,4.937,4.798,3.988,4.061,4.001,3.643,3.286,3.205,3.203,3.273,3.415,3.612,3.901,4.346,4.427,2.863,3.11,4.073],"lasers":[{"x":0,"y":-7.02,"z":-0.27,"angle":0,"damage":[140,90],"rate":0.5,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.08,"y":-1.62,"z":1.89,"angle":0,"damage":[20,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":50},{"x":-1.08,"y":-1.62,"z":1.89,"angle":0,"damage":[20,80],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":50},{"x":3.456,"y":-5.94,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":3.564,"y":-4.86,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":3.672,"y":-3.78,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":3.807,"y":-2.7,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":3.915,"y":-1.62,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":4.05,"y":-0.54,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":4.185,"y":0.54,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":4.293,"y":1.62,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":4.239,"y":1.62,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10},{"x":4.05,"y":2.7,"z":-0.27,"angle":-90,"damage":[40,50],"rate":2,"type":2,"speed":[200,270],"number":1,"spread":0,"error":0,"recoil":10}],"radius":11.043}}';

var UMonitor_showcase = UMonitor_main;
var UMonitor_broadside = JSON.parse(UMonitor_main)
UMonitor_main = JSON.parse(UMonitor_main)

UMonitor_main.zoom = 0.6;
UMonitor_main.typespec.specs.generator.reload = [50,50]
var las = UMonitor_main.typespec.lasers;
var nlas = [];
for(var i = 0; i<las.length; i++){
  if(las[i].angle!=-90)
    nlas.push(las[i]);
}
UMonitor_main.typespec.lasers = nlas;

//UMonitor_main = JSON.stringify(UMonitor_main);

UMonitor_broadside.typespec.specs.generator.reload = [250,250]
var las = UMonitor_broadside.typespec.lasers;
var nlas = []
for(var i = 0; i<las.length; i++){
  if(las[i].angle==-90){
    las[i].damage = [70,70];
    las[i].speed = [30,30];
    las[i].recoil = 0;
    nlas.push(las[i])
  }
}
UMonitor_broadside.typespec.lasers = nlas;
UMonitor_broadside.model = 42;

//UMonitor_broadside = JSON.stringify(UMonitor_broadside);

gameplayShips.UMonitor_main = UMonitor_main;
gameplayShips.UMonitor_broadside = UMonitor_broadside;
showcaseShips[22] = UMonitor_showcase;

//$fileTape setWriting true

shipsData[22] = {name:"U-Monitor",cl:"Broadside LRA",company: 7,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["UMonitor_main"];
    this.configs[1] = shipIdsToCodes["UMonitor_broadside"];
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
    config = "Broadside";
    expl = "Switch into Sniper for long range combat";
    if(ship.type == this.configs[0]){
      config = "Sniper";
      expl = "Switch into Broadside for sustained combat";
    }
    k[1] = {name:config,id:1,explanation:expl,
      ready: ship.type == this.configs[0],
      state: 0
    }
    return k;
  },
  tips:[
    "Broadside has higher DPS"
    ],
  unicodeChar: "\u{1f4fa}",
  color: "#CCCCCC"
};
