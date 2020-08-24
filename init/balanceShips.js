//code that runs upon startup, parsing ship JSONs and altering stats
//should probably compile these changes someday, but not now.

var extractShipStats = function(ship){
  var stats = {name:ship.name};
  stats.shieldcap = ship.typespec.specs.shield.capacity[0];
  stats.shieldregen = ship.typespec.specs.shield.reload[0];
  stats.energycap = ship.typespec.specs.generator.capacity[0];
  stats.energyregen = ship.typespec.specs.generator.reload[0];
  stats.rotation = ship.typespec.specs.ship.rotation[0];
  stats.acceleration = ship.typespec.specs.ship.acceleration[0];
  stats.mass = ship.typespec.specs.ship.mass;
  if(ship.typespec.specs.ship.dash){
    stats.dashbspeed = ship.typespec.specs.ship.dash.burst_speed[0];
    stats.dashspeed = ship.typespec.specs.ship.dash.speed[0];
  }
  return stats;
}

var writeShipStats = function(stats){
  s = "Stats report of "+stats.name+"\n"
  s += "Rotate:"+stats.rotation+"|"
  s += "Accel:"+stats.acceleration+"|"
  s += "Mass:"+stats.mass+"\n"
  s += "ShCap:"+stats.shieldcap+"|"
  s += "ShReg:"+stats.shieldregen+"|"
  s += "EnCap:"+stats.energycap+"|"
  s += "EnReg:"+stats.energyregen+""
  if(stats.dashbspeed){
    s += "\nDashBSpeed:"+stats.dashbspeed;
    s += "\nDashSpeed:"+stats.dashspeed;
  }
  return s;
}

var simplifyShip = function(ship, weight){
  log("Simplifying "+ship.name+" - weights "+(weight/1000).toFixed(2)+"KB approx.")
  var bodies = ship.bodies
  var keys = Object.keys(bodies)
  var origLength = keys.length;
  var simplifyFactor = 0.5;
  var noInfinite = 0;
  var currentlyDeleting = 0;

  var calcBodyImportance = function(k){
    var body = bodies[k]
    var length = Math.abs(body.position.y[0]-body.position.y[body.position.y.length-1])
    var maxWidthHeight = Math.max(Math.max.apply(null,body.width),Math.max.apply(null,body.height))

    if(body.propeller)maxWidthHeight = 1000000000;

    if(length != +length)length = 1;
    if(maxWidthHeight != +maxWidthHeight) maxWidthHeight = 1;

    return maxWidthHeight*length;
  }

  keys.sort(function(a,b){

    return calcBodyImportance(a)-calcBodyImportance(b);

  })

  while(currentlyDeleting<simplifyFactor*origLength&&noInfinite<1000){
    noInfinite++;

    delete bodies[keys[currentlyDeleting]]
    currentlyDeleting++;

  }

  log("Simplified. Now weights "+(JSON.stringify(ship).length/1000).toFixed(2)+"KB approx.")

  return ship;
}

sp.origParsedShips = [];
sp.parsedShips = [];

var origParsedShips = sp.origParsedShips
var parsedShips = sp.parsedShips;

var bSpeedReferencePoint = 230
for(i=0;i<ships.length;i++){
  var parsed = ensureParsed(ships[i]);
  if(parsed.lockBulletSpeed!=null){log(parsed.name+": bullet speed preserved.");continue;}
  for(j=0;j<parsed.typespec.lasers.length;j++){
    var orig = parsed.typespec.lasers[j].speed[0]
    if(orig>10){
      var diff = orig-bSpeedReferencePoint;
      diff *= 0.5;
      parsed.typespec.lasers[j].speed[0] = bSpeedReferencePoint + diff;
      //log(jship.name+": bullet speed increased from "+orig+" to "+(bSpeedReferencePoint + diff));
    }
  }
  //ships[i] = JSON.stringify(parsed);

  ships[i] = parsed;
}

//iterating over ships and rebalancing them
for(i=0;i<ships.length;i++){
  //parse the current ship
  jship = ensureParsed(ships[i]);

  //log(writeShipStats(extractShipStats(jship)));
  var report = jship.name+", rebalanced: ";

  var tMarkerSize = 1;
  if(jship.teamMarkerSize!=null)
    tMarkerSize = jship.teamMarkerSize;
  var tMarkerDepthMult = 1;
  if(jship.teamMarkerDepth!=null)
    tMarkerDepthMult = jship.teamMarkerDepth;
  var teamMarkerDepth = -60

  jship = simplifyShip(jship, ensureStringified(ships[i]).length);

  jship.bodies.teamMarker=
  {
    section_segments: 32,
    offset:{
      x: 0,
      y: teamMarkerDepth*tMarkerDepthMult/jship.size,
      z: 0,
    },
    position:{
      x: [0,0,0,0,0,0,0,0],
      y: [0,0],
      z: [0,0,0,0,0,0,0,0,0],
    },
    width: [170/jship.size*tMarkerSize,150/jship.size*tMarkerSize],
    height: [170/jship.size*tMarkerSize,150/jship.size*tMarkerSize],
    texture: [63] ,
    vertical:true
  }
  jship.bodies.teamMarkerOuter=
  {
    section_segments: 32,
    offset:{
      x: 0,
      y: teamMarkerDepth*tMarkerDepthMult/jship.size,
      z: 0,
    },
    position:{
      x: [0,0,0,0,0,0,0,0],
      y: [0,0],
      z: [0,0,0,0,0,0,0,0,0],
    },
    width: [180/jship.size*tMarkerSize,175/jship.size*tMarkerSize],
    height: [180/jship.size*tMarkerSize,175/jship.size*tMarkerSize],
    texture: [17] ,
    vertical:true
  }

  var specsship = jship.typespec.specs.ship;
  var shield = jship.typespec.specs.shield;
  var generator = jship.typespec.specs.generator;

  /*if(specsship.acceleration[0]<80)
    if(!jship.acceptLowAccel&&!jship.acceptMediocreAccel)
      game.modding.terminal.error("Low acceleration - please investigate: "+
      jship.name + " - " + specsship.acceleration[0])
  else if(specsship.acceleration[0]<120)
    if(!jship.acceptLowAccel)
      game.modding.terminal.error("Mediocre acceleration - please investigate: "+
      jship.name + " - " + specsship.acceleration[0])*/

  specsship.speed[0] = 140;
  specsship.speed[1] = 140;

  var visionRangeMult = 0.33;
  var shipSizeMult = 0.5;
  var shipShieldAndDmgMult = 0.5;
  var shipShieldOnlyMult = 1.5;
  var massMult = 0.5;
  var accelRecoilMult = 1;

  jship.typespec.radius *= visionRangeMult;
  //YOLO
  specsship.acceleration[0] *= accelRecoilMult * 2;//should probably extract this magic number out later
  specsship.rotation[0]*=1.5;

  var thisShipSizeMult = jship.scaleUp == null?1:jship.scaleUp;
  jship.size *= shipSizeMult * thisShipSizeMult;
  specsship.mass *= massMult;
  for(j=0;j<jship.typespec.shape.length;j++){

    jship.typespec.shape[j] *= shipSizeMult * thisShipSizeMult;
  }

  if(jship.circularHitbox!=null){
    var max = 0
    for(j=0;j<jship.typespec.shape.length;j++){
      if(jship.typespec.shape[j] > max)
        max = jship.typespec.shape[j];
    }
    for(j=0;j<jship.typespec.shape.length;j++){
      jship.typespec.shape[j] = max;
    }
  }

  for(j=0;j<jship.typespec.lasers.length;j++){
    laser = jship.typespec.lasers[j];
    laser.damage[0] *= shipShieldAndDmgMult;
    laser.x *= shipSizeMult * thisShipSizeMult;
    laser.y *= shipSizeMult * thisShipSizeMult;
    laser.recoil *= accelRecoilMult;
    laser.speed[0] *= shipSizeMult;
  }

  shield.reload[0] *= shipShieldAndDmgMult*shipShieldOnlyMult;
  shield.capacity[0] *= shipShieldAndDmgMult*shipShieldOnlyMult;
  generator.reload[0] *= shipShieldAndDmgMult;
  generator.capacity[0] *= shipShieldAndDmgMult;

  /*
  if(specsship.dash!=null){
    dash = specsship.dash;
    dash.energy[0] *= shipShieldAndDmgMult;
    dash.initial_energy[0] *= shipShieldAndDmgMult;
    dash.acceleration[0] *= accelRecoilMult;
    dash.burst_speed[0] *= accelRecoilMult;
  }*/

  if(specsship.dash!=null){
    var dash = specsship.dash;
    dash.energy[0] = 0;
    dash.initial_energy[0] = 100000;
    dash.acceleration[0] *= specsship.acceleration[0];
    dash.burst_speed[0] *= specsship.speed[0];
  }

  //TODO: OPTIMIZE: there's gotta be a better way!
  origParsedShips[i] = JSON.parse(JSON.stringify(jship));
  var pship = origParsedShips[i];

  base = jship.typespec.specs.shield.reload[0];
  shield.reload[0] = -base*2;
  shield.reload[1] = base*4;//base+base+base/2;
  report += "shield reload ["+shield.reload[0]+","+shield.reload[1]+"]; ";

  base = jship.typespec.specs.shield.capacity[0];
  shield.capacity[0] = base*0.25;
  shield.capacity[1] = base*1.75;
  report += "shield cap ["+shield.capacity[0]+","+jship.typespec.specs.shield.capacity[1]+"]; ";

  base = generator.reload[0];
  generator.reload[0] = -base*2;
  generator.reload[1] = base*4;//base+base+base/2;
  report += "energy reload ["+generator.reload[0]+","+generator.reload[1]+"]; ";

  base = generator.capacity[0];
  generator.capacity[0] = base*0.25;
  generator.capacity[1] = base*1.75;
  report += "energy cap ["+generator.capacity[0]+","+generator.capacity[1]+"]; ";

  var base = 0;
  var maxDmgId = 0;
  var maxDmg = 0;
  for(l=0;l<jship.typespec.lasers.length;l++){
    laser = jship.typespec.lasers[l];
    base = laser.damage[0];
    laser.damage[0] = base*0.5;
    laser.damage[1] = base*1.5;

    if(base>maxDmg){
      maxDmg = base;
      maxDmgId = l;
    }

    base = laser.speed[0];
    laser.speed[0] = base*0.5;
    laser.speed[1] = base*1.5;
    report += "bspeed ["+laser.speed[0]+","+laser.speed[1]+"]; ";
  }

  if(jship.typespec.lasers.length>0){
    var laser = jship.typespec.lasers[maxDmgId];
    var dmgOne = laser.damage;
    var number = laser.number;
    if( number == null )
      number = 1
    jship.typespec.lasers.push({
      "x":0,
      "y":0,
      "z":0,
      "angle":0,
      "damage":[dmgOne[0]*number,dmgOne[1]*number],
      "rate":1,
      "type":2,
      "speed":[15,180],
      "number":20000,
      "spread":0,
      "error":360,
      "recoil":0
    })
  }

  if(jship.typespec.specs.ship.dash!=null){
    dash = jship.typespec.specs.ship.dash;
    dash.speed[0] = specsship.speed[0];
    dash.speed[1] = dash.speed[0];

    base = dash.burst_speed[0];
    dash.burst_speed[0] = base//*0.5;
    dash.burst_speed[1] = base//*1.5;

    base = dash.acceleration[0];
    dash.acceleration[0] = base//*0.5;
    dash.acceleration[1] = base//*1.5;

    base = dash.initial_energy[0];
    dash.initial_energy[0] = base//*0.5;
    dash.initial_energy[1] = base//*1.5;

    base = dash.energy[0];
    dash.energy[0] = base//*0.5;
    dash.energy[1] = base//*1.5;
  }

  //speed out of gameplay for now

  if(!jship.lockShipAccel){
    base = specsship.acceleration[0];
    //lmfao fkn idiot, mixed up min and max
    //this is like the fifth time my balance goes to shit because my ship balancing
    //algo had a flaw in it. man, i am such a great programmer! /s
    //:joy::gun:

    specsship.acceleration[0] = Math.min(10,base-30);
    specsship.acceleration[1] = Math.max(100,base+30);
  }

  base = specsship.rotation[0];
  specsship.rotation[0] = base*0.15;//WTF?!?!?
  specsship.rotation[1] = base*1.5;

  //what the fuck even?!
  //var pship = JSON.parse(JSON.stringify(jship));//TODO:fix refactor
  //pship.bodies = {};
  //parsedShips.push(pship);

  //ships[i] = JSON.stringify(jship);
  ships[i] = jship;

  //log(report);

}
