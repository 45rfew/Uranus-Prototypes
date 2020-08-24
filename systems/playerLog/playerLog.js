var playerLog = {
  length: 6,
  fadeSeconds: 10,
  startFadeAtSeconds: 5,
  playerLogLength: 6,

  secondPassedPlayerLog: function(ship){

    if(ship.custom.plog==null){
      ship.custom.plog = {messages:[]}
    }
    for(var l=0;l<this.playerLogLength;l++){
      if(ship.custom.plog.messages[l]==null){
        ship.custom.plog.messages[l] = {content: "", time: 0}
      }else{
        var msg = ship.custom.plog.messages[l];
        msg.time++
        var comps = [];

        /*var fade =
          1.0-
          (ship.custom["plogt"+l]-this.startFadeAtSeconds)/
          (this.fadeSeconds-this.startFadeAtSeconds);
        fade = Math.min(fade,1.0);
        fade = Math.max(fade,0.0);

        if(fade<0.1)continue;
        */
        //var col = "#FFFFFF"+Math.floor(fade*255).toString(16).toUpperCase();
        var col = "#FFFFFF"
        var updateChat = false;
        if(typeof msg.content == "string") {
          comps.push({ type: "text",position: [0,0,100,100],color: col,value: msg.content})
        }else{
          var msgData = sp.systems.globalChat.getMsg(msg.content.id)
          /*if(msg.updated){
            updateChat = true;
          }*/
          updateChat = true;
          comps.push({ type: "text",position: [0,0,20,100],color:msgData.color,
          value: msgData.sender})
          for(var i = 0; i<msgData.render.length; i++){
            comps.push({ type: "text",position: [30+(70/8)*i,0,70/8,60],color:msgData.color,
            value: msgData.render[i].symbol})
            comps.push({ type: "text",position: [30+(70/8)*i,60,70/8,40],color:msgData.color,
            value: msgData.render[i].text})
          }

        }

        if(updateChat||UISystem.events.shouldRedraw(ship,["playerLogUpdate"]))
          ship.setUIComponent({
          id:"playerLog"+l,
          position:[2,85-l*(25/this.playerLogLength),25,25/this.playerLogLength],
          clickable: false,
          visible: true,
          components:comps
          });
      }
    }


  },

  pushPlayerLog: function(ship, content, logToConsole = true){
    if(ship.custom.plog==null)
      return;
    for(j=this.playerLogLength-1;j>0;j--){
      ship.custom.plog.messages[j]=ship.custom.plog.messages[j-1];
    }
    ship.custom.plog.messages[j] = {content: content, time: 0}
    if(logToConsole&&typeof content == 'string')
      log("MSG ["+getTime()+"] @"+ship.name+": "+content);
    UISystem.events.pushEvent(ship,"playerLogUpdate");
    //should maybe handle somehow?
    //else
      //log("CHAT ["+getTime()+"] "+ship.name+": "+content);
  },

  pushPlayerLogTeam: function(content, tt){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      if(ship.custom.team!=tt)continue;

     playerLog.pushPlayerLog(ship, content, false);

    }
    if(typeof content == 'string')
      log("MSG-TEAM ["+getTime()+"] @"+teams[tt].name+": "+content);
  },

  pushPlayerLogTeamOrProximity: function(content, tt, x, y){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      /*if(ship.custom.team==tt)
        content.source = "TEAM"
      else if(distance(ship.x-x,ship.y-y)<100)
        content.source = "PROXIMITY"
      else continue;*/
      if(ship.custom.team!=tt&&distance(ship.x-x,ship.y-y)>100)continue;

      playerLog.pushPlayerLog(ship, content, false);

    }
    if(typeof content == 'string')
      log("MSG-TEAM ["+getTime()+"] @"+teams[tt].name+": "+content);
  },

  pushPlayerLogAll : function(content){
    for(var i=0;i<game.ships.length;i++){
      ship = game.ships[i];

      playerLog.pushPlayerLog(ship, content, false);

    }

    if(typeof content == 'string')
      log("MSG-ALL ["+getTime()+"] "+content);
  }
}
