var GPOTypes = [];

GPOTypes[0] = {
  name:"AOERange",
  create:function(x, y, team, range, duration){
    data = {};
    data.type = 0;
    data.team = team;
    data.destroyTimer = duration;
    data.range = range;
    data.x = x;
    data.y = y;
    addGPO(data);

  },
  spawn:function(data){
    marker ={
      id: "AOEMarkerGeneric"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true
    } ;
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-10+2*Math.random()},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:data.range*2,y:data.range*2,z:data.range*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoAOE"+data.objId);
  },
  tick:function(data){

  }
}

GPOTypes[1] = {
  name:"Firewall Pod",
  AOERange: 5,
  create:function(x, y, team){
    data = {};
    data.type = 1;
    data.team = team;
    data.destroyTimer = 10;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){

    asset = {
      id: "firewallPod"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/starblast-1532455530031.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFF8040
    } ;
    marker ={
      id: "bchgHealingStationAOE"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true
    } ;
    /*asset = {
      id: "firewallPod"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/present.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFF8040
    } ;

    asset.specularColor = teams[data.team].color;*/
    asset.emissiveColor = teams[data.team].color;
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoFWPod"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:-3},
      rotation: {x:Math.PI*2*Math.random(),y:Math.PI*2*Math.random(),z:Math.PI*2*Math.random()},
      scale: {x:1,y:1,z:1}
    }) ;
    game.setObject({
      id: "gpoFWPodAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-7+Math.random()*2},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:this.AOERange*2,y:this.AOERange*2,z:this.AOERange*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoFWPod"+data.objId);
    game.removeObject("gpoFWPodAOE"+data.objId);
  },
  tick:function(data){
    range = this.AOERange;

    range = range*range;
    for(ss=0;ss<game.ships.length;ss++){
      sh = game.ships[ss];
      xx = sh.x-data.x;
      yy = sh.y-data.y;
      xx = xx*xx;
      yy = yy*yy;
      if(xx+yy<range&&data.team!=sh.custom.team){
        addEffectToShip(sh, 5, 5, 2, 3);
      }

    }

  }
}

GPOTypes[2] = {
  name:"Burstcharger Healing Station",
  AOERange: 25,
  create:function(x, y, team){
    data = {};
    data.type = 2;
    data.team = team;
    data.destroyTimer = 15;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){
    possibleLightsColors = [0xFF0000,0xFFFF00,0xFF00FF,0x00FFFF,0xFFCC00,0xFF22CC]
    asset = {
      id: "bchgHealingStation"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/starblast-1532575075281.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0x00CC00
    } ;
    /*star = {
      id: "pineTreeStar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreestar.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFFFF00
    } ;
    lights = []
    for(var i = 0; i<possibleLightsColors.length; i++)
    lights[i] = {
      id: "pineTreeLights"+i+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreelights.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: possibleLightsColors[i],
      emissiveColor: possibleLightsColors[i]
    } ;*/
    marker ={
      id: "bchgHealingStationAOE"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
      transparent: true

    } ;
    asset.emissiveColor = teams[data.team].color;
    /*game.setObject({
      id: "gpoHealStation"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:Math.PI/2,z:0},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    game.setObject({
      id: "gpoHealStationStar"+data.objId,
      type: star,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:Math.PI/2,z:0},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    for(var i = 0; i<4; i++)
    game.setObject({
      id: "gpoHealStationLights"+i+data.objId,
      type: lights[Math.floor(Math.random()*lights.length)],
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:0,z:Math.random()*2*Math.PI},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;*/
    marker.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "gpoHealStation"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:0,z:Math.PI*2*Math.random()},
      scale: {x:2.5,y:2.5,z:2.5}
    }) ;
    game.setObject({
      id: "gpoHealStationAOE"+data.objId,
      type: marker,
      position: {x:data.x,y:data.y,z:-3},
      rotation: {x:Math.PI/2,y:0,z:0},
      scale: {x:this.AOERange*2,y:this.AOERange*2,z:this.AOERange*2}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoHealStation"+data.objId);
    //game.removeObject("gpoHealStationStar"+data.objId);
    //for(var i = 0; i<4; i++)
    //game.removeObject("gpoHealStationLights"+i+data.objId);
    game.removeObject("gpoHealStationAOE"+data.objId);
  },
  tick:function(data){

    range = this.AOERange;

    range = range*range;
    for(ss=0;ss<shipsInGameData.length;ss++){
      sh = shipsInGameData[ss];
      xx = sh.x-data.x;
      yy = sh.y-data.y;
      xx = xx*xx;
      yy = yy*yy;
      if(xx+yy<range&&data.team==sh.team){
        sh.shieldregen += 3;
      }

    }


  }
}

GPOTypes[3] = {
  name:"LinkerStream",
  create:function(key){
    data = {};
    data.type = 3;
    //data.team = 0;
    data.destroyTimer = 10;
    data.key = key;
    //data.x = x;
    //data.y = y;
    return addGPO(data);
  },
  spawn:function(data){
    if(!data.updated)return
    linkerStreamEn = {
      id: "linkerTestEn",
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/linkerStream.png",
      emissiveColor: 0xFFCC00,
    } ;
    linkerStreamSh = {
      id: "linkerTestSh",
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/linkerStream.png",
      emissiveColor: 0x00CCCC,
    } ;
    dist = distance(data.source.x-data.target.x,data.source.y-data.target.y)
    ang = Math.atan2(data.source.x-data.target.x,data.source.y-data.target.y)
    game.setObject({
      id: "gpoLinker"+data.objId,
      type: data.mode==2?linkerStreamEn:linkerStreamSh,
      position: {x:(data.source.x+data.target.x)/2,y:(data.source.y+data.target.y)/2,z:0},
      rotation: {x:Math.PI/2,y:-ang+Math.PI/2,z:0},
      scale: {x:dist/2,y:1,z:1}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoLinker"+data.objId);
  },
  tick:function(data){
    if(data.updated&&data.target!=null){
      if(data.mode!=data.lastMode)
        this.removeObj(data)
      this.spawn(data)
    }else{
      this.removeObj(data)
    }
    data.updated = false
    data.lastMode = data.mode
  },
  update:function(key,data,source,target,mode){
    if(key!=data.key){log("wrong key!");return}
    data.destroyTimer = 10;
    data.updated = true
    data.source = source
    data.target = target
    data.mode = mode
  }
}

GPOTypes[4] = {
  name:"Decorated pine tree in the middle of the map",
  lightsChangeTimer: 10,
  create:function(x, y, team){
    data = {};
    data.type = 4;
    data.team = team;
    data.destroyTimer = 15;
    data.changeTimer = 0
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  spawn:function(data){
    possibleLightsColors = [0xFF0000,0xFFFF00,0xFF00FF,0x00FFFF,0xFFCC00,0xFF22CC]
    asset = {
      id: "bchgHealingStation"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetree.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0x00CC00
    } ;
    star = {
      id: "pineTreeStar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreestar.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: 0xFFFF00
    } ;
    this.lights = []
    for(var i = 0; i<possibleLightsColors.length; i++)
    this.lights[i] = {
      id: "pineTreeLights"+i+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/pinetreelights.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      specularColor: possibleLightsColors[i],
      emissiveColor: possibleLightsColors[i]
    };
    asset.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "pineTree"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:10},
      rotation: {x:0/*Math.PI*2*Math.random()*/,y:Math.PI/2,z:0},
      scale: {x:7.5,y:7.5,z:7.5}
    }) ;
    game.setObject({
      id: "pineTreeStar"+data.objId,
      type: star,
      position: {x:data.x,y:data.y,z:10},
      rotation: {x:0/*Math.PI*2*Math.random()*/,y:Math.PI/2,z:0},
      scale: {x:7.5,y:7.5,z:7.5}
    }) ;
    data.changeTimer = 10000;
    this.tick(data);
  },
  removeObj:function(data){
    game.removeObject("pineTree"+data.objId);
    game.removeObject("pineTreeStar"+data.objId);
    for(var i = 0; i<7; i++)
    game.removeObject("pineTreeLights"+i+data.objId);
    //game.removeObject("gpoHealStationAOE"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
    data.changeTimer++;
    if(data.changeTimer>this.lightsChangeTimer){
      for(var i = 0; i<7; i++)
      game.removeObject("pineTreeLights"+i+data.objId);
      data.changeTimer = 0;
      for(var i = 0; i<7; i++)
      game.setObject({
        id: "pineTreeLights"+i+data.objId,
        type: this.lights[Math.floor(Math.random()*lights.length)],
        position: {x:data.x,y:data.y,z:10},
        rotation: {x:0/*Math.PI*2*Math.random()*/,y:0,z:(i/7)*2*Math.PI},
        scale: {x:7.5,y:7.5,z:7.5}
      }) ;
    }
  }
}

//TODO: really should refactor this shit
GPOTypes[5] = {
  name:"Ship hangar",
  create:function(x, y, team){
    data = {};
    data.type = 5;
    data.team = team;
    data.destroyTimer = 15;
    data.x = x;
    data.y = y;
    return addGPO(data);
  },
  spawn:function(data){
    var asset = {
      id: "hangar"+teams[data.team].name,
      obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/sprototypes-hangar-concept.obj",
      diffuse: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png",
      emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_emissive_texture.png",
      bump: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/ship_lambert_texture.png"
      //specularColor: 0x00CC00
    } ;
    asset.emissiveColor = teams[data.team].color;
    game.setObject({
      id: "hangar"+data.objId,
      type: asset,
      position: {x:data.x,y:data.y,z:-2},
      rotation: {x:0,y:0,z:data.x<0?0:Math.PI},
      scale: {x:5,y:5,z:5}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("hangar"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
  }
}

GPOTypes[6] = {
  name:"cube",
  create:function(x, y, xsize, ysize, angle = 0){
    data = {};
    data.type = 6;
    data.xsize = xsize;
    data.ysize = ysize;
    data.destroyTimer = 5;
    data.angle = angle;
    data.x = x;
    data.y = y;
    addGPO(data);
  },
  asset: {
    id: "cube",
    obj: "https://starblast.data.neuronality.com/mods/objects/cube/cube.obj",
    diffuse: "https://starblast.data.neuronality.com/mods/objects/cube/diffuse.jpg",
    emissive: "https://starblast.data.neuronality.com/mods/objects/cube/emissive.jpg",
    bump: "https://starblast.data.neuronality.com/mods/objects/cube/bump.jpg",
    emissiveColor: 0x80FFFF,
    specularColor: 0x805010,
    diffuseColor:0xFF8080,
  },
  spawn:function(data){
    game.setObject({
      id: "gpoCube"+data.objId,
      type: this.asset,
      position: {x:data.x,y:data.y,z:0},
      rotation: {x:0,y:data.angle,z:0},
      scale: {x:data.xsize,y:data.ysize,z:1}
    }) ;
  },
  removeObj:function(data){
    game.removeObject("gpoCube"+data.objId);
  },
  tick:function(data){
    data.destroyTimer = 5;
  }
}

var GPO = [];
var GPOUniqueId = 0;

var removeGPO = function(id){
  if(GPO[id]!=null){
    if(GPOTypes[GPO[id].type])
      GPOTypes[GPO[id].type].removeObj(GPO[id]);
    else log("ERROR ["+getTime()+"] Unknown GPO type: "+GPO[id].type)
    delete GPO[id];
  }else log("ERROR ["+getTime()+"] GPO does not exist - tried to remove GPO["+GPO[id].type+"]")
}

var respawnGPO = function(id){
  if(GPO[id])
  if(GPOTypes[GPO[id].type]){
    GPOTypes[GPO[id].type].removeObj(GPO[id]);
    GPOTypes[GPO[id].type].spawn(GPO[id]);
  } else log("ERROR ["+getTime()+"] Unknown GPO type: "+GPO[id].type)
}

var addGPO = function(data){
  data.objId = GPOUniqueId;
  GPOUniqueId++;
  GPO[data.objId] = data;
  GPOTypes[data.type].spawn(data);
  return data.objId;
}

var distance = function(x, y){
  return Math.sqrt(x*x+y*y);
};
