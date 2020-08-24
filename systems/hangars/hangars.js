sp.hangarsManager = {

  hangars: [],

  init:function(ship){
    //TODO: each ship should be provided with a global unique identifier
    ship.custom.hangarSys = {
      hangar: null,
    }
  },

  validateHangar:function(ship){
    if(ship.custom.hangarSys!=null){
        var h = ship.custom.hangarSys.hangar;
        var data = ship.custom.hangarSys;
        if(
          h>=0 &&
          h<this.hangars.length &&
          this.hangars[h] != null &&
          this.hangars[h].occupiedBy == null
        )
          return true;
    }

    //if the hangar is invalid(e.g. in use) - we just reset everything for the ship
    this.init(ship);
    return false;

  },

  tick:function(){

    //update all hangars occupiedBy
    //clear
    var emptyHangars = {};
    for(var i = 0; i<this.hangars.length; i++){
      this.hangars[i].occupiedBy = null;
      emptyHangars[i] = this.hangars[i];
    }
    //iterate and assign
    for(var i = 0; i<game.ships.length; i++){
      var ship = game.ships[i];

      if(!ship.custom.isInHangar)continue;

      //if this ship is assigned a valid hangar
      if(this.validateHangar(ship)){
        var h = ship.custom.hangarSys.hangar;
        this.hangars[h].occupiedBy = i;
        emptyHangars[h] = null;
      }
    }

    //now all hangars are occupiedBy, except for ones that aren't being used
    //iterate over all ships again, and assign those that aren't to empty hangars
    for(var i = 0; i<game.ships.length; i++){
      var ship = game.ships[i];

      if(!ship.custom.isInHangar)continue; //TODO: fill own ships list?

      var data = ship.custom.hangarSys;

      //if this ship hasn't been assigned yet,
      if(data.hangar==null) {

        var h = null;
        for(var h in emptyHangars){//there's gotta be a better way
          if(emptyHangars[h]!=null){

            break;
          }
        }

        if(h==null){//no hangars available
          //fucking panic
          //TODO: don't panic
        }

        data.hangar = h;

      }

      //by now, hopefully, all ships are properly set up. handle them:
      var hangar = this.hangars[data.hangar];
      ship.set({x:hangar.x, y:hangar.y, vx: 0, vy: 0, stats: 33333333,
        //type: 400+(ship.custom.selectedShip+1),
        idle: true
      });

    }

  },
  tickHook: function(){
    sp.hangarsManager.tick();
  }
}

var hangarsXPos = ms*4.7;
var hangarsSideWallXPos = hangarsXPos-155

for(var x = 0; x<3; x++){
  for(var y = 0; y<16; y++){
    var xx = (hangarsXPos-90)+70*x;
    var yy = -240+(y/16)*480;
    sp.hangarsManager.hangars.push({
      GPO:GPOTypes[5].create(xx,yy,0),
      occupiedBy: -1,
      x:xx+4,
      y:yy-4
    });
  }
}

var barrier = {
  id: "cube",
  physics: {
    mass: 650,
    shape: [2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.308,3.048,2.878,2.759,2.697,2.697,2.759,2.878,3.048,3.308,3.672,3.678,3.474,3.169,2.958,2.806,2.723,2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.307,3.054,2.878,2.761,2.698,2.698,2.761,2.878,3.054,3.307,3.672,3.678,3.474,3.169,2.958,2.806,2.723],
    fixed: true
  }
} ;

GPOTypes[6].create(hangarsSideWallXPos,0,1,240)
GPOTypes[6].create(-hangarsSideWallXPos,0,1,240)

//GPOTypes[6].create(hangarsXPos,240,115/2,1)
//GPOTypes[6].create(hangarsXPos,-240,115/2,1)

var step = 20
for(var y = -ms*5; y<ms*5; y+=step){
  var yy = y//-240+(y/16)*480;
  game.setObject({
    id:"barrierL"+y,
    type:barrier,
    position:{x:hangarsSideWallXPos,y:yy,z:-3},
    scale:{x:1,y:6,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

for(var y = -ms*5; y<ms*5; y+=step){
  var yy = y//-240+(y/16)*480;
  game.setObject({
    id:"barrierR"+y,
    type:barrier,
    position:{x:-hangarsSideWallXPos,y:yy,z:-3},
    scale:{x:1,y:6,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

/*
for(var x = -1; x<=1; x++){
  var xx = hangarsXPos+x*70;
  game.setObject({
    id:"barrierT"+x,
    type:barrier,
    position:{x:xx,y:280,z:-3},
    scale:{x:6,y:1,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}

for(var x = -1; x<=1; x++){
  var xx = hangarsXPos+x*70;
  game.setObject({
    id:"barrierB"+x,
    type:barrier,
    position:{x:xx,y:-280,z:-3},
    scale:{x:6,y:1,z:10},
    rotation: {x:0,y:0,z:0}
  }) ;
}*/
