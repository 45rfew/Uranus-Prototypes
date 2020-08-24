var tipDuration = 5;
var tipTimer = 0;

var globalTips = [
  "Capture control points to win the game.",
  "Whichever team holds the majority of points for 5 minutes, wins.",
  "Prioritize the objective, don't fight in the middle of nowhere.",
  "Use in-game chat to improve cooperation.",
  "Don't chase other players - all ships have the same speed.",
  "Being chased is the key to winning a battle.",
  "Killing enemies is fun, but the objective is more important.",
  "Don't forget to utilize your unique abilities - use number keys!",
  "Join my discord! discord.gg/qgbCM8c",
  "Found a bug? Report it to me! discord.gg/qgbCM8c",
  "Want to suggest an improvement? discord.gg/qgbCM8c",
  "Please report all bugs to the developer via Reddit or Discord.",
  "Feedback is highly appreciated. discord.gg/qgbCM8c",
  "Best played with 8+ players!",
  //"Use web version for a better gameplay experience.", //no dont
  //"Web version is more suited for modded games.", //well kinda not anymore
  "Don't mine the rocks. Just... don't."
];

var randomizeTip = function(){

  for(i=0;i<game.ships.length;i++){
    var ship = game.ships[i];
    UISystem.events.pushEvent(ship,"bottomTipUpdate");
    var data = null;

    try{
      data = shipsData[ship.custom.selectedShip];
    }catch(e){}
    var tip = "";
    if(Math.random()<0.5&&data!=null){
      tip = data.name + ": " + data.tips[Math.floor(data.tips.length*Math.random())];
    }
    if(tip=="")
      tip = globalTips[Math.floor(globalTips.length*Math.random())];
    if(tip=="")
      tip = "Could not select a valid tip.";
    ship.custom.tip = tip;
  }
};
