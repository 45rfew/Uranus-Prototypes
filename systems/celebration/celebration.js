sp.systems.celebration = {
  celebrationTimer: 0,
  celebrationLength: 10,
  celebWonColors: ["#FFFF00","#FFAA00","#00FFFF","#FF00FF","#7777FF"],
  celebLostColors: ["#AAAAAA","#555555","#444444","#777777","#222222"]
};

sp.systems.celebration.tick = function(){
  this.celebrationTimer++;
  if(this.celebrationTimer<this.celebrationLength)
    this.drawCelebration();
}

sp.systems.celebration.celebrate = function(){
  this.celebrationTimer = 0;

}

sp.systems.celebration.drawCelebration = function(){

  if(this.celebrationTimer>this.celebrationLength)
    return;

  var compsWon = [];
  var compsLost = [];

  if(this.celebrationTimer<this.celebrationLength){

    for(j=0;j<5;j++){
      compsWon.push(
        { type: "text",position:[5*Math.random(),5*Math.random(),95,95],value:"ＶＩＣＴＯＲＹ",
        color:this.celebWonColors[Math.round(Math.random()*this.celebWonColors.length)]}
      )
    }

    for(j=0;j<10;j++){
      compsLost.push(
        { type:"box",position:[Math.random()*80,Math.random()*80,20,20],
        fill:this.celebLostColors[Math.round(Math.random()*this.celebLostColors.length)],stroke:"#CDE",width:2}
      )
    }

    compsLost.push({ type: "text",position:[10,10,80,80],value:"𝐃𝐄𝐅𝐄𝐀𝐓",color:"#000000"})

  }

  wonUI = {id: "celebration",
    position: [30,30,40,40],
    visible: this.celebrationTimer<this.celebrationLength,
    components: compsWon
    }

  lostUI =
    {id: "celebration",
    position: [30,30,40,40],
    visible: this.celebrationTimer<this.celebrationLength,
    components: compsLost
    }

  for(i=0;i<game.ships.length;i++){
    ship = game.ships[i];
    if(ship.custom.wonLastGame == null)
      continue;
    if(ship.custom.wonLastGame){
      UISystem.autoClearUI.set(ship,wonUI,1)
    }else{
      UISystem.autoClearUI.set(ship,lostUI,1);
    }
  }
}
