var drawShipButton = function(ship, x, y, id, fill, visible, shortcut, text, ch, cl){
  var components = [];
  var tcol = "#CDE"
  if(visible)
    var components = [
    { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:fill,width:10},
  	{ type:"box",position:[10,10,80,80],fill:"#000000",stroke:"#000000",width:2},
  	{ type: "text",position:[10,10,80,80],value:ch,color:fill},
  	{ type:"box",position:[10,10,80,80],fill:"#222222AA",stroke:"#00000000",width:2},
  	{ type: "text",position:[11,20,78,30],value:text,color:tcol},
  	{ type: "text",position:[20,40,60,40],value:"["+shortcut+"]",color:tcol},
  	{ type: "text",position:[11,11,78,10],value:cl,color:tcol}
  	]
  ship.setUIComponent(
    {id: id,
    position: [x,y,8,12],
    clickable: visible,
    shortcut: shortcut,
    visible: visible,
    components: components
    }
  );
}

screens[3] = {
  name: "Ship selector",
  tick: function(ship){
    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);
    if(distance(sh[0],sh[1])>shipSelectRange){
      switchScreen(ship, 0);
    }else
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

      if(!UISystem.events.shouldRedraw(ship,["legacyShipSelPage"]))return;

      var availableShips = getAvailableShips(ship)

      var p = ship.custom.shipChoosePage;
      for(var k=0;k<4&&p*8+k-1<availableShips.length;k++){
        var shipIndex = p*8+k-1
        if(shipIndex!=-1){
          var shipType = availableShips[shipIndex];
          drawShipButton(ship, 30+k*10, 30, "selectShip"+k,
            shipsData[shipType].color, b, ""+(k+1),
            shipsData[shipType].name,
            shipsData[shipType].unicodeChar,
            shipsData[shipType].cl
          );
        }else{
          drawShipButton(ship, 30+k*10, 30, "selectShip"+k,
            "#FFFFFF", b, ""+(k+1),
            "Random ship",
            "?",
            "Chance"
          );
        }
      }


      if(k==4)
      for(k=4;k<8&&p*8+k-1<availableShips.length;k++){
        var shipType = availableShips[p*8+k-1]
        drawShipButton(ship, 30+(k-4)*10, 60, "selectShip"+k,
          shipsData[shipType].color, b, ""+(k+1),
          shipsData[shipType].name,
          shipsData[shipType].unicodeChar,
          shipsData[shipType].cl
        );
      }

      if(k!=8)
      for(;k<8;k++)
      drawShipButton(ship, 30+(k-4)*10, 60, "selectShip"+k, "#555555", false, ""+(k+1),
      "k","","","");


      drawButton(ship,30,80,"nextPage",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Next page ");
      drawButton(ship,40,80,"close",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Hide");

      ship.setUIComponent(
        {id: "shipSelectHeader",
        position: [30,20,40,5],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[10,30,80,50],value:"Select a ship",color:UISkin(ship).main}
        ]
        }
      );
  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.shipChoosePage==null)
      ship.custom.shipChoosePage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    availableShips = getAvailableShips(ship)
    if(input == "nextPage"){
      UISystem.events.pushEvent(ship,"legacyShipSelPage");
      ship.custom.shipChoosePage++;
      if(ship.custom.shipChoosePage*8>availableShips.length)
        ship.custom.shipChoosePage = 0;
    }

  }
}
