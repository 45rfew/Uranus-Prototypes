sp.shipManager = {

  //check if sprototype.type points to a valid ship, if not - respawn
  validate: function(ship){
    if(
      ship.custom.sprototype == null||
      ship.custom.sprototype.type == null||
      //ship.custom.sprototype.type < 0|| //redundant
      shipsData[ship.custom.sprototype.type] == null
    ){
      log("Ship is invalid - respawning!");
      this.respawn(ship,ship.custom.isInHangar);
      log("Respawned?");
    }
  },

  //respawn the ship, restoring it's known init state
  respawn: function(ship,dockHangar = false){

    log("sp.shipManager.respawn(ship["+ship.name+"], "+dockHangar+")");

    //check if the player has selected a ship and if that ship is valid
    var type = 0;
    if(
      ship.custom.selectedShip!=null&&
      //ship.custom.selectedShip>=0&& //redundant
      shipsData[ship.custom.selectedShip] != null
    ){
      //ship is valid, use it
      type = +ship.custom.selectedShip;
      log("type = "+type)
    }else{
      //fill an array with all possible ships, choose a random one
      var options = [];
      for(var sh in shipsData){
        options.push(sh);
      }
      type = +options[Math.floor(Math.random()*options.length)];
      log("recalc type = "+type)
    }

    ship.custom.sprototype = {
      type: type
    };

    var p = ship.custom.sprototype;
    var sh = shipsInGameData[ship.custom.index];
    //TODO: this probably should be refactored somehow. move to hangars.js?
    if(!dockHangar){
      ship.set({shield:20000,generator:20000/*,score:0*/})
      shipsData[type].respawn(ship, sh, p);
      ship.custom.isInHangar = false;//no longer in hangar
      ship.custom.needsLaunch = true;//request the ship to be launched from the base
    }else{
      log("type = "+type)
      log("typeAdd = "+(type+401))
      shipsData[type].respawn(ship, sh, p);
      ship.set({shield:20000,generator:20000,type:type+401})
      ship.custom.isInHangar = true;
    }

    sp.systems.aliveBooster.reset(ship);
    UISystem.events.pushEvent(ship,"switchedShip");
  },

  tick: function(ship){
    this.validate(ship);

    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].tick!=null&&!ship.custom.isInHangar)
      shipsData[type].tick(ship,sh,p);
  },

  getAbilities: function(ship){
    this.validate(ship);
    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].getAbilities!=null)
      return shipsData[type].getAbilities(ship,sh,p);
    else return [];
  },

  useAbility: function(ship, id){
    this.validate(ship);
    var p = ship.custom.sprototype;
    var type = p.type;
    var sh = shipsInGameData[ship.custom.index];
    if(shipsData[type].useAbility!=null&&!ship.custom.isInHangar)
      shipsData[type].useAbility(ship,id,sh,p);
  },

  getShipType: function(ship){
    this.validate(ship);
    return ship.custom.sprototype.type;
  },

  getShipData: function(ship){
    return shipsData[this.getShipType(ship)];
  },

  statsList: [
    {id:"shieldcap",col:"#000055"},
    {id:"shieldregen",col:"#002255"},
    {id:"energycap",col:"#555500"},
    {id:"energyregen",col:"#554400"},
    {id:"damage",col:"#552200"},
    {id:"bspeed",col:"#550033"},
    {id:"speed",col:"#222222"},
    {id:"agility",col:"#220055"}
  ],
  getCurrentStats: function(ship){
    var result = {};
    //TODO:WARN: if u gonna use negative model ships, make sure to change
    if(Math.floor(ship.type/100)==6 &&
      lastshipsInGameData!=null &&
      lastshipsInGameData[ship.custom.index]!=null){
      for(var i = 0; i<this.statsList.length; i++){
        var boost = lastshipsInGameData[ship.custom.index/*TODO:fix*/][this.statsList[i].id]
        var stat = shipsByCode[ship.type].info.stats[this.statsList[i].id][0]*(1-(boost+3)/6)+
        shipsByCode[ship.type].info.stats[this.statsList[i].id][1]*((boost+3)/6)
        result[this.statsList[i].id] = {
          val: stat,
          boost: boost
        };
      }
    }else{
      for(var i = 0; i<this.statsList.length; i++){
        result[this.statsList[i].id] = {
          val: 0,
          boost: 0
        };
      }
    }
    return result;
  }

};
