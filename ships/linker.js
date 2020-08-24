/*Linker

Attaching more reactors to your fighter will make it heavier, less agile and easier
to hit.

That's why you build another fighter, whose sole purpose is to act as an additional
reactor, one that is piloted by a good pilot, is able to dodge enemy fire and
even fire back.

Meet the Linker by Goldman Aerospace. A medium-light fighter with a shitty weapon
and low DPS, yet capable of sharing its reactor's power with nearby teammates.

Said reactor power doesn't have to be directed into teammate's weapons. The ship
can also act as a mediocre healer, sharing its reactor for recharging teammate
shields.

*/

//$fileTape ifFlag prerender
//$fileTape setWriting false

var GA_Linker = '{"name":"GA Linker","author":"Goldman","level":6,"model":15,"size":1.2,"scaleUp":1.3,"specs":{"shield":{"capacity":[200,100],"reload":[2,3]},"generator":{"capacity":[150,60],"reload":[15,15]},"ship":{"mass":100,"speed":[150,145],"rotation":[40,130],"acceleration":[70,120]}},"bodies":{"main":{"section_segments":6,"offset":{"x":0,"y":-20,"z":4},"position":{"x":[0,0,0,0,0,0,0],"y":[-53,-53,-50,-20,35,40,40],"z":[0,0,0,0,0,0,0]},"width":[0,4,10,20,20,15,0],"height":[0,3,6,8,8,8,0],"texture":[3,3,11,0.9]},"cockpit":{"section_segments":6,"angle":0,"offset":{"x":0,"y":-25,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-27,-25,-20,-10,0,12,15],"z":[0,0,0,0,0,0,0]},"width":[0,6,10,12,12,12,0],"height":[0,3,4,5,5,4,0],"texture":[7,7,9,9,12,4]},"mainBottom":{"section_segments":6,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-63,-63,-50,-30,-20,15,40,70,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,13,20,30,30,20,12,7,0],"height":[0,3,6,6,6,6,6,6,6,0],"texture":[12,18,15,3.9,3.9,3.9,18,3.9,17],"propeller":true},"gunBody":{"section_segments":6,"angle":0,"offset":{"x":0,"y":-55,"z":-4},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-29,-12,12,25],"z":[0,0,0,6]},"width":[0,9,14,14,14],"height":[0,6,8,8,8],"texture":[1.9,1.9,1.9,4]},"gun":{"section_segments":6,"angle":0,"offset":{"x":0,"y":-55,"z":-4},"position":{"x":[-4,-4,-4,-4,-4,-4,-4,null],"y":[-60,-70,-25],"z":[0,0,0,0,0]},"width":[0,2,4],"height":[0,2,4],"texture":[16.9,2],"laser":{"damage":[40,5],"rate":3,"type":1,"speed":[60,120],"number":1,"angle":0,"error":0}},"gunFrontPart1":{"section_segments":6,"offset":{"x":0,"y":-85,"z":-3},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-8,-8,2,2,7,7],"z":[0,0,0,3,3,3,0,0,0]},"width":[0,10,10,10,10,0],"height":[0,5,5,2,2,0],"texture":[0.8,10.1,3.8],"angle":-90},"back":{"section_segments":6,"offset":{"x":0,"y":40,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-10,10,11],"z":[0,0,0,0]},"width":[0,18,12,0],"height":[0,7.5,7.5,0],"texture":[1,1,3.9]},"enginesBackSide":{"section_segments":6,"angle":0,"offset":{"x":15,"y":30,"z":-8},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,-25,-22,0,5,25,30,20],"z":[0,0,0,0,0,0,0,0]},"width":[0,6,11,11,8,8,6,0],"height":[0,6,11,11,8,8,6,0],"texture":[63,63,3.9,0.9,15,63,17],"propeller":true},"enginesSides":{"section_segments":6,"angle":0,"offset":{"x":46,"y":22,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,-35,-32,0,5,25,30,20],"z":[0,0,0,0,0,0,0,0]},"width":[0,6,11,11,8,8,6,0],"height":[0,6,11,11,8,8,6,0],"texture":[63,63,3.9,0.9,15,63,17],"propeller":true},"flowFrontWinglets":{"section_segments":8,"angle":5,"offset":{"x":12,"y":-50,"z":0},"position":{"x":[-9,-9,0,-1,-1],"y":[-20,-20,0,15,15],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,3,3,3,0],"texture":[63]},"engineSidesTubes":{"section_segments":6,"offset":{"x":57,"y":6,"z":0},"position":{"x":[-5,-5,1,1,-5,-5],"y":[-15,-15,-10,10,15,15],"z":[0,0,0,0,0,0]},"width":[0,2.5,2.5,2.5,2.5,0],"height":[0,2.5,2.5,2.5,2.5,0],"texture":[63]},"bottomFront":{"section_segments":6,"offset":{"x":0,"y":-20,"z":-5},"position":{"x":[0,0,0,0,0,0,0],"y":[-53,-53,-50,-20,25,40,40],"z":[0,0,0,-2,-5,0,0]},"width":[0,4,10,20,20,10,0],"height":[0,3,6,8,8,5,0],"texture":[2.9]},"wings":{"section_segments":6,"offset":{"x":20,"y":0,"z":-5},"position":{"x":[10,10,-10,-10,0,0,0,0],"y":[-10,6,10,25,30],"z":[0,0,0,10,10,0,0,0,0]},"width":[40,40,30,15,0],"height":[8,8,8,4,0],"texture":[4,63,4],"angle":90},"cap1":{"section_segments":4,"offset":{"x":8,"y":-7,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-5,5,10],"z":[-5,0,2,-1]},"width":[0,3,3,0],"height":[0,1,1,0],"texture":[18,17,18],"angle":-70},"cap2":{"section_segments":4,"offset":{"x":8,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-5,5,10],"z":[-5,0,2,-1]},"width":[0,3,3,0],"height":[0,1,1,0],"texture":[18,17,18],"angle":-70},"cap3":{"section_segments":4,"offset":{"x":8,"y":7,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-5,5,10],"z":[-5,0,2,-1]},"width":[0,3,3,0],"height":[0,1,1,0],"texture":[18,17,18],"angle":-70},"backReactor":{"section_segments":8,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-10,2,12,14,12,12,14,15,30],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,17,17,16,12,5,5,2,1],"height":[0,17,17,16,12,5,5,2,1],"texture":[1,1,8,18,17,13,18,4],"vertical":true},"reactorBall":{"section_segments":12,"offset":{"x":0,"y":30,"z":-30},"position":{"x":[0,0,0,0,0,0,0],"y":[-5,-4.330127018922194,-2.5000000000000004,-3.061616997868383e-16,2.499999999999999,4.330127018922194,5],"z":[0,0,0,0,0,0,0]},"width":[0,2.4999999999999996,4.330127018922193,5,4.330127018922194,2.4999999999999996,6.123233995736766e-16],"height":[0,2.4999999999999996,4.330127018922193,5,4.330127018922194,2.4999999999999996,6.123233995736766e-16],"texture":[4,17,18,17,18,17,18,17],"vertical":true},"reactorBallHolders":{"section_segments":4,"offset":{"x":0,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,10,12,15,16],"z":[5,0,-2,-3,-3,0,0,0,0,0]},"width":[1,2,4,4,0],"height":[1,1,2,2,0],"texture":[4,63,4],"angle":45},"reactorSideArms":{"section_segments":6,"offset":{"x":0,"y":8,"z":-12},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,2,5,6,15,17,20],"z":[-5,-3,-1,1,8,8,8,0,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"vertical":true,"propeller":false,"angle":0},"bottomdsides":{"section_segments":4,"offset":{"x":0.01,"y":-55,"z":-10},"position":{"x":[-2,-10,-10,-15,-15,-7,null,null,null,null],"y":[-25,20,40,50,80,100],"z":[10,0,0,0,0,10]},"width":[2,2,2,2,2,2,2],"height":[2,5,5,7,7,2],"texture":[1],"angle":0},"bottomt":{"section_segments":4,"offset":{"x":0,"y":-55,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,20,40,50,80,100],"z":[12,5,5,7,7,12,null]},"width":[2,10,10,15,15,7],"height":[2,2,2,2,2,2,2],"texture":[1],"angle":0},"bottomb":{"section_segments":4,"offset":{"x":0,"y":-55,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-25,20,40,50,80,100],"z":[8,-5,-5,-7,-7,8,null]},"width":[2,10,10,15,15,7],"height":[2,2,2,2,2,2,2],"texture":[1],"angle":0},"bottomsides":{"section_segments":4,"offset":{"x":0.01,"y":-55,"z":-10},"position":{"x":[2,10,10,15,15,7,null,null,null],"y":[-25,20,40,50,80,100],"z":[10,0,0,0,0,10]},"width":[2,2,2,2,2,2,2],"height":[2,5,5,7,7,2],"texture":[1],"angle":0},"cockpitdsides":{"section_segments":4,"offset":{"x":0.01,"y":-65,"z":10},"position":{"x":[-2,-4,-7,-7,-7,-5,null,null,null,null],"y":[-5,5,20,40,50,60],"z":[-7,-1,0,0,0,-6]},"width":[1,1,1,1,1,1,1],"height":[2,3,5,5,4,3],"texture":[4,9,4],"angle":0},"cockpitt":{"section_segments":4,"offset":{"x":0,"y":-65,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,5,20,40,50,60],"z":[-5,2,5,5,4,-3,null]},"width":[2,4,7,7,7,5],"height":[1,1,1,1,1,1,1],"texture":[4,9,9,9,18],"angle":0},"cockpitb":{"section_segments":4,"offset":{"x":0,"y":-65,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-5,5,20,40,50,60],"z":[-9,-4,-5,-5,-4,-9,null]},"width":[2,4,7,7,7,5],"height":[1,1,1,1,1,1,1],"texture":[9],"angle":0},"cockpitsides":{"section_segments":4,"offset":{"x":0.01,"y":-65,"z":10},"position":{"x":[2,4,7,7,7,5,null,null,null],"y":[-5,5,20,40,50,60],"z":[-7,-1,0,0,0,-6]},"width":[1,1,1,1,1,1,1],"height":[2,3,5,5,4,3],"texture":[4,9,4],"angle":0},"reactorBallHoldersstar1":{"section_segments":4,"offset":{"x":0,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,10,12,15,16],"z":[5,0,-2,-3,-3,0,0,0,0,0]},"width":[1,2,4,4,0],"height":[1,1,2,2,0],"texture":[4,63,4],"angle":135},"reactorBallHoldersstar2":{"section_segments":4,"offset":{"x":0,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,10,12,15,16],"z":[5,0,-2,-3,-3,0,0,0,0,0]},"width":[1,2,4,4,0],"height":[1,1,2,2,0],"texture":[4,63,4],"angle":225},"reactorBallHoldersstar3":{"section_segments":4,"offset":{"x":0,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,10,12,15,16],"z":[5,0,-2,-3,-3,0,0,0,0,0]},"width":[1,2,4,4,0],"height":[1,1,2,2,0],"texture":[4,63,4],"angle":315},"reactorSideArmsstar1":{"section_segments":6,"offset":{"x":-15.588461307348947,"y":8,"z":-21.000006996153566},"position":{"x":[4.330128140930263,2.5980768845581577,0.8660256281860526,-0.8660256281860526,-6.92820502548842,-6.92820502548842,-6.92820502548842,0,0],"y":[0,2,5,6,15,17,20],"z":[-2.4999980566240096,-1.4999988339744057,-0.4999996113248019,0.4999996113248019,3.9999968905984153,3.9999968905984153,3.9999968905984153,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"angle":0,"propeller":false,"vertical":true},"reactorSideArmsstar2":{"section_segments":6,"offset":{"x":-15.588449189652374,"y":8,"z":-39.00001399230169},"position":{"x":[4.330124774903437,2.5980748649420624,0.8660249549806874,-0.8660249549806874,-6.9281996398454995,-6.9281996398454995,-6.9281996398454995,0,0],"y":[0,2,5,6,15,17,20],"z":[2.5000038867504704,1.5000023320502822,0.5000007773500941,-0.5000007773500941,-4.000006218800753,-4.000006218800753,-4.000006218800753,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"angle":0,"propeller":false,"vertical":true},"reactorSideArmsstar3":{"section_segments":6,"offset":{"x":0.000024235383729651496,"y":8,"z":-47.999999999983686},"position":{"x":[-0.000006732051036014304,-0.000004039230621608582,-0.0000013464102072028608,0.0000013464102072028608,0.000010771281657622886,0.000010771281657622886,0.000010771281657622886,0,0],"y":[0,2,5,6,15,17,20],"z":[4.9999999999954685,2.999999999997281,0.9999999999990936,-0.9999999999990936,-7.999999999992749,-7.999999999992749,-7.999999999992749,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"angle":0,"propeller":false,"vertical":true},"reactorSideArmsstar4":{"section_segments":6,"offset":{"x":15.588473425017261,"y":8,"z":-38.999972015374865},"position":{"x":[-4.330131506949239,-2.5980789041695433,-0.8660263013898478,0.8660263013898478,6.9282104111187826,6.9282104111187826,6.9282104111187826,0,0],"y":[0,2,5,6,15,17,20],"z":[2.499992226493017,1.4999953358958102,0.49999844529860343,-0.49999844529860343,-3.9999875623888275,-3.9999875623888275,-3.9999875623888275,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"angle":0,"propeller":false,"vertical":true},"reactorSideArmsstar5":{"section_segments":6,"offset":{"x":15.588437071927544,"y":8,"z":-20.99996501925937},"position":{"x":[-4.330121408868762,-2.5980728453212576,-0.8660242817737525,0.8660242817737525,6.92819425419002,6.92819425419002,6.92819425419002,0,0],"y":[0,2,5,6,15,17,20],"z":[-2.5000097168723974,-1.5000058301234382,-0.5000019433744795,0.5000019433744795,4.000015546995836,4.000015546995836,4.000015546995836,0,0]},"width":[0,4,4,1,1,2,0],"height":[0,4,4,1,1,2,0],"texture":[4,18,4,3,17],"angle":0,"propeller":false,"vertical":true}},"typespec":{"name":"GA Linker","level":6,"model":15,"code":615,"specs":{"shield":{"capacity":[200,100],"reload":[2,3]},"generator":{"capacity":[150,60],"reload":[25,15]},"ship":{"mass":100,"speed":[150,145],"rotation":[40,130],"acceleration":[70,120]}},"shape":[3.003,2.256,1.641,1.438,1.242,1.181,1.036,0.936,0.867,0.857,1.254,1.364,1.447,1.455,1.491,1.494,1.448,1.569,1.719,1.751,1.619,1.232,1.519,1.514,1.466,1.443,1.466,1.514,1.519,1.232,1.619,1.751,1.719,1.569,1.448,1.494,1.491,1.455,1.447,1.364,1.254,0.857,0.867,0.936,1.036,1.181,1.242,1.438,1.641,2.497],"lasers":[{"x":-0.096,"y":-3,"z":-0.096,"angle":0,"damage":[40,5],"rate":3,"type":1,"speed":[60,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.003}}';

gameplayShips.GA_Linker = GA_Linker;
showcaseShips[9] = GA_Linker;

//$fileTape setWriting true

shipsData[9] = {name:"❰𝐆𝐀❱ Linker",cl:"Support",company: 4,
  configs: [],
  init: function(){
    this.configs[0] = shipIdsToCodes["GA_Linker"];
  },
  linkerRange: 25,
  respawn:function(ship,sh,p){


    ship.custom.sprototype.linkerMode = 0;
    ship.custom.sprototype.linkerTarget = -1;
    ship.set({type:this.configs[0],stats:66666666,healing:false});
    ship.custom.sprototype.linkerStreamKey = Math.floor(Math.random()*1000000)
    ship.custom.sprototype.linkerStream = GPOTypes[3].create(ship.custom.sprototype.linkerStreamKey);
  },
  randomizeTarget:function(ship){
    possibleLinkerTargets = [];
    for(ss=0;ss<game.ships.length;ss++){
      sh = game.ships[ss];
      if(this.checkIfAValidTarget(ship, sh))
        possibleLinkerTargets.push(ss);
    }
    UISystem.events.pushEvent(ship,"shipConfigChange");
    if(possibleLinkerTargets.length>0)
      return possibleLinkerTargets[Math.floor(Math.random()*possibleLinkerTargets.length)]
    else return -1

  },
  checkIfAValidTarget:function(ship,checkShipAsTarget){
    return checkShipAsTarget.alive&&
    ship!=checkShipAsTarget&&
    checkShipAsTarget.custom.team == ship.custom.team&&
    distance(checkShipAsTarget.x-ship.x,checkShipAsTarget.y-ship.y)<this.linkerRange
  },
  validateTarget:function(ship, p){
    if(p.linkerTarget>=0&&p.linkerTarget<game.ships.length&&
      this.checkIfAValidTarget(ship, game.ships[p.linkerTarget])
    ){
      return true
    }else{
      p.linkerTarget = this.randomizeTarget(ship)
      return false
    }
  },
  tryShowStream:function(ship,show,p){
    try{
      if(GPO[p.linkerStream]==null){
        p.linkerStreamKey = Math.floor(Math.random()*1000000)
        p.linkerStream = GPOTypes[3].create(p.linkerStreamKey);
      }
      GPOTypes[GPO[p.linkerStream].type].update(
        p.linkerStreamKey,GPO[p.linkerStream],ship,show?game.ships[p.linkerTarget]:null,p.linkerMode
      )
    }catch(e){log("Failed to spawn steam")}
  },
  tick:function(ship, sh, p){

    if(p.linkerMode!=0&&this.validateTarget(ship,p)){
      switch(p.linkerMode){
        case 1: shipsInGameData[p.linkerTarget].shieldregen+=3; break;
        case 2: shipsInGameData[p.linkerTarget].energyregen+=1; break;
      }
      sh.energyregen-=1;
      sh.shieldregen-=1;
      this.tryShowStream(ship,true,p)
    }else{
       this.tryShowStream(ship,false,p);
    }

  },
  useAbility:function(ship, abId, sh, p){


    switch(abId){
      case 1:
        p.linkerMode = 1;
        break;
      case 2:
        p.linkerMode = 2;
        break;
      case 3:
        p.linkerMode = 0;
        break;
      case 4:
        p.linkerTarget = this.randomizeTarget(ship);
        break;
      default:
      log("unknown ability "+abId);
    }
    UISystem.events.pushEvent(ship,"shipConfigChange");
  },
  getAbilities:function(ship,sh,p){
    k = [];


    buffState = 0;
    if(p.buffCooldown>=0){
      buffState = 2;
    }
    //k.push({name:"Defcon",id:1})
    k[1] = {name:"Auxiliary Shield Generator",id:1,
      explanation:"Boost one teammate's shieldregen +5",
      ready: p.linkerMode==1?1:0,
      state: p.linkerMode==0?2:(p.linkerMode==1?0:1)
    }
    k[2] = {name:"Auxiliary Reactor",id:2,
      explanation:"Boost one teammate's energy regen +5",
      ready: p.linkerMode==2?1:0,
      state: p.linkerMode==0?2:(p.linkerMode==2?0:1)
    }
    k[3] = {name:p.linkerMode!=0?"Disable":"Disabled",id:3,
      explanation:"Disable Auxiliary Reactor activity",
      ready: p.linkerMode==0?1:0,
      state: p.linkerMode==0?0:2
    }
    targetname = p.linkerTarget>=0&&p.linkerTarget<game.ships.length?game.ships[p.linkerTarget].name:"error"
    k[4] = {name:p.linkerTarget==-1?"No target":"Switch targets: "+targetname,id:4,
      explanation:"Switch to a different target",
      ready: p.linkerMode!=0?1:0,
      state: p.linkerMode==0?3:0
    }
    return k;
  },
  tips:[
    "The perfect pocket healer - link up with a teammate, and stay close.",
    "Link up with damaged teammates and use ASG to speed up their recovery.",
    "Link up with high-DPS ships and share your reactor to deal a lot of damage.",
    "This ship's fighting capabilities are extremely limited - better than nothing.",
    "Shoot at the enemies if you can, but remember your main purpose"
    ],
  unicodeChar: "\u{26d3}",
  color: "#999999"
};
