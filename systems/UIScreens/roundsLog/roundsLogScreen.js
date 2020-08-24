var drawRoundLog = function(ship, xx, yy, id, b, col, tcol, text, stTime, rLength){

  ship.setUIComponent(
      {id: id,
      position: [xx,yy,50,5],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec},
        { type:"box",position:[30,0,30,100],fill:col,stroke:col},
        { type: "text",position:[5,0,20,100],value:stTime,color:UISkin(ship).main,align:"left"},
        { type: "text",position:[35,0,20,100],value:text,color:tcol,align:"left"},
        { type: "text",position:[65,0,20,100],value:rLength+" seconds",color:UISkin(ship).main,align:"right"},
      ]
      }
    );
}

screens[4] = {
  name: "Round Log",
  roundsPerPage: 14,
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    ship.setUIComponent(
      {id: "roundLogHeader",
      position: [25,15,20,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"Rounds log",color:UISkin(ship).main},
    		]
      }
    );

    drawButton(ship,68,15,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,58,15,"nextPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Next page");
    drawButton(ship,48,15,"prevPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Previous page");



    for(var sn = 0; sn<this.roundsPerPage; sn++){
      var col = "#AAAAAA"
      var tcol = "#000000"
      var text = "In progress"
      var stTime = "";
      var rLength = "";
      var roundId = roundsLog.length-1-(ship.custom.roundLogPage*this.roundsPerPage+sn);
      if(roundsLog[roundId]!=null){
        if(roundsLog[roundId].winner==-1){
          col = "#222222"
          tcol = "#FFFFFF"
          text = "Draw"
        }else if(teams[roundsLog[roundId].winner]!=null){
          col = teams[roundsLog[roundId].winner].color
          tcol = "#FFFFFF"
          text = teams[roundsLog[roundId].winner].name+" won"
        }
        stTime = roundsLog[roundId].startTime;
        rLength = roundsLog[roundId].roundLength;
        drawRoundLog(ship, 25, 25+sn*5, "roundLog"+sn, b, col, tcol, text, stTime, rLength)
      }else
        drawRoundLog(ship, 25, 25+sn*5, "roundLog"+sn, false, col, tcol, text, stTime, rLength)
    }


  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.roundLogPage==null)
    ship.custom.roundLogPage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "nextPage"){
      ship.custom.roundLogPage++;
      if(ship.custom.roundLogPage*this.roundsPerPage>roundsLog.length)
        ship.custom.roundLogPage = 0;
    }
    if(input == "prevPage"){
      ship.custom.roundLogPage--;
      if(ship.custom.roundLogPage*this.roundsPerPage<0)
        ship.custom.roundLogPage = roundsLog.length/this.roundsPerPage;
    }
  }
}
