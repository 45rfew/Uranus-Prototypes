var killFeed = [];

var killFeedLength = 5;

var killFeedStartFadeAtSeconds = 5;
var killFeedFadeSeconds = 10;

for(var i=0; i<killFeedLength; i++)
killFeed.push({killer:"",kcol:"",cause:-1,victim:"",vcol:"",time:killFeedFadeSeconds});

var specialKillCauses = [];
specialKillCauses[-2] = "\u{1f4e1}"
specialKillCauses[-3] = "\u{1f5d8}"
specialKillCauses[-4] = "\u{1f5d8}"

var secondPassedKillFeed = function(){
  comps = [];
  for(l=0;l<killFeedLength;l++){
    /*if(ship.custom["plog"+l]==null){
      ship.custom["plog"+l]="";
      ship.custom["plogt"+l]=0;*/
    //}else{
      killFeed[l].time++;
      var fade =
        1.0-
        (killFeed[l].time-killFeedStartFadeAtSeconds)/
        (killFeedFadeSeconds-killFeedStartFadeAtSeconds);
      fade = Math.min(fade,1.0);
      fade = Math.max(fade,0.0);

      //log(fade);
      if(fade<0.1)continue;

      var cause = killFeed[l].cause;

      var causeChar = "?";
      var causeCol = "#FFFFFF";
      if(cause<0){
        if(specialKillCauses[cause]!=null)
          causeChar = specialKillCauses[cause];
      }
      if(cause>=0&&shipsData[cause]!=null){
        causeChar = shipsData[cause].unicodeChar;
        causeCol = shipsData[cause].color;
      }

      comps.push({ type: "text",
      position: [0,l*(100/killFeedLength),40,100/killFeedLength],
      color: killFeed[l].kcol,
      value: killFeed[l].killer})
      comps.push({ type: "text",
      position: [60,l*(100/killFeedLength),40,100/killFeedLength],
      color: killFeed[l].vcol,
      value: killFeed[l].victim})
      comps.push({ type: "text",
      position: [40,l*(100/killFeedLength),20,100/killFeedLength],
      color: causeCol,
      value: causeChar})
    //}
  }

  for(var s=0;s<game.ships.length;s++){
    var ship = game.ships[s];
    ship.setUIComponent({
    id:"killFeed",
    position:[60,75,15,20],
    clickable: false,
    visible: true,
    components:comps
    });
  }
}

var specialKillCausesVerbose = [];
specialKillCausesVerbose[-3] = " chose another ship";
specialKillCausesVerbose[-2] = " got blasted by the base";
specialKillCausesVerbose[-1] = " died for unknown reasons";
specialKillCausesVerbose[-4] = " switched teams";

var pushKillFeed = function(killer, kcol, cause, victim, vcol){
  for(var j=killFeedLength-1;j>0;j--){
    killFeed[j]=killFeed[j-1];
  }
  killFeed[0] = {};
  killFeed[0].killer = killer;
  killFeed[0].cause = cause;
  killFeed[0].victim = victim;
  killFeed[0].kcol = kcol;
  killFeed[0].vcol = vcol;
  killFeed[0].time = 0;
  if(cause>-1){
    log("KF ["+getTime()+"] "+victim+" was killed by "+killer+" using "+shipsData[cause].name);
  }else{
    var s = " what the?!";
    if(specialKillCausesVerbose[cause]!=null){
      s = specialKillCausesVerbose[cause];
    }
    log("KF ["+getTime()+"] "+victim+specialKillCausesVerbose[cause]);
  }
}
