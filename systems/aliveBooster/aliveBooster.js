sp.systems.aliveBooster = {
  boost:{
    objectiveRateMin: 1,
    objectiveRateMax: 2.5,
    abilityReloadMin: 0.5,
    abilityReloadMax: 1,
  },
  chargeSettings:{
    nominalChargeRate: 1/120,

    chargeEnemyConsiderSqrRange: 100,
    chargeNearEnemyBuff: 0.2,
    chargeMaxEnemies: 3,

    objectiveNearBuff: 0.5,
    doingObjectiveBuff: 1
  },

  initShip: function(ship){
    ship.custom.aliveBooster = {
      charge: 0,
      lastChargeRate: 0
    }
  },

  //just for clarity
  reset: function(ship){
    //don't reinvent the wheel
    this.initShip(ship);
  },

  tick: function(ship){
    if(ship.custom.state.isInBase)return;
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);

    var chSet = this.chargeSettings;
    var deltaCharge = 1;

    var enemiesConsidered = 0
    for(var i = 0; i<game.ships.length; i++){
      var other = game.ships[i]
      if(other==ship)continue;
      if(
        ship.custom.team!=other.custom.team &&
        sqrDist(ship.x-other.x,ship.y-other.y)<chSet.chargeEnemyConsiderSqrRange
      ){
        enemiesConsidered++;
        deltaCharge += chSet.chargeNearEnemyBuff;
      }
      if(enemiesConsidered>chSet.chargeMaxEnemies)break;
    }

    if(ship.custom.state.doingObjective){
      deltaCharge += chSet.doingObjectiveBuff;
    }else if(ship.custom.state.nearObjective){
      deltaCharge += chSet.objectiveNearBuff;
    }

    deltaCharge *= chSet.nominalChargeRate;

    ship.custom.aliveBooster.lastChargeRate = deltaCharge;
    ship.custom.aliveBooster.charge += deltaCharge;

    if(ship.custom.aliveBooster.charge > 1)
      ship.custom.aliveBooster.charge = 1
    if(ship.custom.aliveBooster.charge < 0)
      ship.custom.aliveBooster.charge = 0


  },

  getReloadBuff: function(ship){
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);
    return this.boost.abilityReloadMin+ship.custom.aliveBooster.charge*(this.boost.abilityReloadMax-this.boost.abilityReloadMin);
  },

  getCaptureBuff: function(ship){
    if(ship.custom.aliveBooster==null)
      this.initShip(ship);
    return this.boost.objectiveRateMin+ship.custom.aliveBooster.charge*(this.boost.objectiveRateMax-this.boost.objectiveRateMin);
  }

}
