var drawDirectionMarker = function(ship, x, y, wrapV, wrapH, id, color, label){
  var sp = shortestPath(ship.x, ship.y, x, y, wrapV, wrapH);
  var dist = distance(sp[0],sp[1]);

  var x = sp[0]/dist;
  var y = sp[1]/dist;
  UISystem.autoClearUI.set(ship,{
  id:id,
  position:[47+x*20,49-y*20,6,2],
  clickable: false,
  visible: true,
  components: [
    { type:"box",position:[40,30,20,40],fill:color,stroke:color,width:2},
    { type: "text",position:[(x<0)?0:75,0,25,100],value:label,color:"#CDE"}
  ]
  },5);
};

var drawControlPointStatus = function(){
  for(var i=0;i<game.ships.length;i++){
    var ship = game.ships[i];
    var width = controlPoints.length*7;
    var startX = 50-width/2-2;
    for(p=0;p<controlPoints.length;p++){
      var cpCol = "#CCCCCC";
      var aCpCol = "#CCCCCC";
      var aCpPr = controlPoints[p].captureProgress;
      if(controlPoints[p].controlledBy!=-1)
        cpCol = teams[controlPoints[p].controlledBy].color;
      if(controlPoints[p].attemptedCaptureBy!=-1)
        aCpCol = teams[controlPoints[p].attemptedCaptureBy].color;
      UISystem.autoClearUI.set(ship,
        {id: "controlPointStatus"+p,
        position: [startX+9*p,8,5,5],
        visible: true,
        components: [
          { type:"box",position:[0,0,70,100],fill:cpCol+"33",stroke:cpCol,width:5},
        	{ type: "text",position:[10,10,50,80],value:String.fromCharCode(97+p).toUpperCase(),color:cpCol},
          { type:"box",position:[95,0,5,100],fill:cpCol+"33",stroke:cpCol,width:10},
          { type:"box",position:[95,100*(1-aCpPr),5,100*aCpPr],fill:aCpCol+"33",stroke:aCpCol,width:10}
          ]
        },2
      );
    }
  }
};

drawTeamLists = function(ship){
  var scoreboard = sp.core.lastScoreboard;

  if(!scoreboard.update) return;

  var tcomps = [];
  if(scoreboard.rendered == null){
    for(var t=0;t<2;t++){
      tcomps.push(
          { type:"box",position:[50*t,0,50,10],fill:teams[t].color,stroke:teams[t].color,width:2},
          { type: "text",position:[50*t,0,50,10],
          value:teams[t].name+"("+scoreboard.state[teams[t].name]+" points)",
          color:"#000000"}
        );
      for(p=0;p<9;p++){
        var pl = scoreboard.state[teams[t].name+"_p"+p];
        if(pl==null)continue;
        tcomps.push(
          { type: "text",value:pl,
          position:[t*50,10+p*10,50,10],color:teams[t].color,align:"left"});
        //tcomps.push(
        //  { type: "player",id:game.ships[teams[t].players[p]].id,
        //  position:[10+t*50,20+p*10,40,10]/*,align:"left"*/,color:"#FFFFFF"});
      }
      //TODO: add this back. maybe.
      /*if(teams[t].players.length>6)
      tcomps.push(
          { type: "text",position:[0+t*50,20+p*10,100,10],value:teams[t].players.length-6+" more...",color:teams[t].color}
        );*/
    }
    scoreboard.rendered = tcomps;
  }else{
    tcomps = scoreboard.rendered;
  }

  //apply
  ship.setUIComponent(
    {id: "scoreboard",
    //position: [80,35,10,30],
    visible: true,
    components: tcomps
    }
  );
};

var intoGlobalCoords = function(parentCoords, thisCoords){

  var result = [];

  result [0] = parentCoords[0] + thisCoords[0]*parentCoords[2]/100;
  result [1] = parentCoords[1] + thisCoords[1]*parentCoords[3]/100;
  result [2] = thisCoords[2]*parentCoords[2]/100;
  result [3] = thisCoords[3]*parentCoords[3]/100;

  return result;

}
