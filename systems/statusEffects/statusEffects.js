var addEffectToShip = function(ship, type, duration, strength, priority, debug = false){
  if(ship.custom.effects!=null){
    var lowerPriority = -1;
    for(var e=0;e<durationEffectsPerShip;e++){
      if(ship.custom.effects[e]==null){
        ship.custom.effects[e] = {};
        ship.custom.effects[e].duration = duration;
        ship.custom.effects[e].strength = strength;
        ship.custom.effects[e].type = type;
        ship.custom.effects[e].priority = priority;
        if(debug)log("added effect as "+e);
        return;
      }else
      if(ship.custom.effects[e].type == type){
        var d = ship.custom.effects[e].duration;
        var s = ship.custom.effects[e].strength;
        if(d*s<duration*strength){
          if(duration>d){
            ship.custom.effects[e].duration = duration;
            ship.custom.effects[e].strength = strength;
            ship.custom.effects[e].type = type;
            ship.custom.effects[e].priority = priority;
            if(debug)log("updated effect "+e+", increasing duration");
            return;

          }else{
            var s = duration*strength/d
            ship.custom.effects[e].strength = s;
            ship.custom.effects[e].type = type;
            ship.custom.effects[e].priority = priority;
            if(debug)log("updated effect "+e+", recalculating strength");
            return;
          }
        }else return;
      }else if(ship.custom.effects[e].priority<priority&&ship.custom.effects[e].priority<ship.custom.effects[lowerPriority].priority){
        lowerPriority = e;
      }
    }
    if(lowerPriority!=-1){
      var e = lowerPriority;
      ship.custom.effects[e].duration = duration;
      ship.custom.effects[e].strength = strength;
      ship.custom.effects[e].type = type;
      ship.custom.effects[e].priority = priority;
      if(debug)log("overridden lower priority effect "+e);
      return;
    }

  }else{
    if(debug)log("effects array init");
    ship.custom.effects = [];
    ship.custom.effects.push({type:type, duration:duration, strength:strength, priority:priority});
  }
}

var effectTypes = [];

effectTypes[0] = {
  name:"Dummy",
  apply:function(shipdata, effectdata){
    //why not?
    return shipdata;
  },
  FX: {
    colBkg: "#000000",
    colFrg: "#AAAAAA",
    char: "#",
    shortName: "DUM"
  }
};

effectTypes[1] = {
  name:"Shield Capacity Boost",
  apply:function(shipdata, effectdata){
    shipdata.shieldcap += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#000055",
    colFrg: "#2222CC",
    char: "\u{1f6e1}",
    shortName: "ShCap"
  }
};

effectTypes[2] = {
  name:"Energy Capacity Boost",
  apply:function(shipdata, effectdata){
    shipdata.energycap += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#333388",
    colFrg: "#CCCC00",
    char: "\u{1f50b}",
    shortName: "ECap"
  }
};

effectTypes[3] = {
  name:"Shield Regen Boost",
  apply:function(shipdata, effectdata){
    shipdata.shieldregen += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#000055",
    colFrg: "#2222CC",
    char: "\u{1f6e1}+",
    shortName: "ShRg"
  }
};

effectTypes[4] = {
  name:"Energy Regen Boost",
  apply:function(shipdata, effectdata){
    shipdata.energyregen += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#555500",
    colFrg: "#FFFF33",
    char: "\u{26a1}",
    shortName: "ERg"
  }
};

effectTypes[5] = {
  name:"Shield Disruption",
  apply:function(shipdata, effectdata){
    shipdata.shieldcap -= effectdata.strength;
    shipdata.shieldregen -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550000",
    colFrg: "#FFFF33",
    char: "\u{1f6e1}",
    shortName: "ShDrp"
  }
};

effectTypes[6] = {
  name:"Electronics Shutdown",
  apply:function(shipdata, effectdata){
    shipdata.idle = true;
    return shipdata;
  },
  FX: {
    colBkg: "#002255",
    colFrg: "#2222AA",
    char: "\u{2745}",
    shortName: "EShut"
  }
};

effectTypes[7] = {
  name:"Bullet Speed Boost",
  apply:function(shipdata, effectdata){
    shipdata.bspeed += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#552200",
    colFrg: "#FFAA00",
    char: "\u{27b6}",
    shortName: "BSpd"
  }
};

effectTypes[8] = {
  name:"Damage Boost",
  apply:function(shipdata, effectdata){
    shipdata.damage += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550000",
    colFrg: "#FF3333",
    char: "\u{1f4a5}",
    shortName: "Dmg"
  }
};

effectTypes[9] = {
  name:"Agility Boost",
  apply:function(shipdata, effectdata){
    shipdata.agility += effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#550055",
    colFrg: "#FF00FF",
    char: "\u{1f680}",
    shortName: "Agi"
  }
};

effectTypes[10] = {
  name:"Reactor Disruption",
  apply:function(shipdata, effectdata){
    shipdata.energyregen -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#BB0000",
    colFrg: "#440000",
    char: "\u{2622}",
    shortName: "EDrp"
  }
};

effectTypes[11] = {
  name:"Agility Disruption",
  apply:function(shipdata, effectdata){
    shipdata.agility -= effectdata.strength;
    return shipdata;
  },
  FX: {
    colBkg: "#220022",
    colFrg: "#FF0055",
    char: "\u{1f680}",
    shortName: "AgDrp"
  }
};
