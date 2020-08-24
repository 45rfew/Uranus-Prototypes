var drawMainMenuButton = function(ship, xx, yy, id, b, text, color, unicodeChar, uCharCol, textCol, shortcut){
  ship.setUIComponent(
      {id: id,
      position: [xx,yy,30,5],
      clickable: b,
      shortcut: shortcut,
      visible: b,
      components: [
        { type:"box",position:[3,70,1,30],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[0,0,100,50],fill:color,stroke:color},
        { type:"box",position:[7,50,93,50],fill:color,stroke:color},
        { type: "text",position:[0,-30,50,160],value:unicodeChar,color:uCharCol},
        { type: "text",position:[20,0,70,50],value:text,color:textCol,align:"right"},
        { type: "text",position:[0,-10,7,70],value:"\u{2b22}",color:UISkin(ship).main},
        { type: "text",position:[0,0,7,50],value:shortcut,color:UISkin(ship).sec}
      ]
      }
    );
}

screens[1] = {
  name: "Main menu",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){
    var mainMenuDraw = {
      tutorial: false,
      shipSelect: false,
      switchTeams: false
    };
    var mmLength = 0;
    if(!sp.core.gameInProgress){
      mainMenuDraw.switchTeams = true;
      mmLength++;
    }
    if(ship.custom.tutorialStep>=tutorial.length){
      mainMenuDraw.tutorial = true;
      mmLength++;
    }

    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);

    if(distance(sh[0],sh[1])<shipSelectRange){
      mainMenuDraw.shipSelect = true;
      mmLength++;
    }

    mmLength+=4;//battle log, credits, close, skins

    ship.setUIComponent(
      {id: "mainMenuHeader",
      position: [35,35-mmLength*3,30,20],
      visible: b,
      components: [
        { type:"box",position:[3,0,1,100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[7,0,93,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
        { type: "text",position:[7,0,93,30],value:"STARBLAST",color:UISkin(ship).main},
      	{ type:"box",position:[7,30,93,30],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
      	{ type: "text",position:[7,30,93,30],value:"PROTOTYPES",color:UISkin(ship).sec},
    	{ type: "text",position:[7,60,93,40],value:"MAIN MENU",color:UISkin(ship).main},
    		]
      }
    );

    ship.setUIComponent(
      {id: "mainMenuConnect",
      position: [35,55-mmLength*3,30,5],
      visible: b,
      components: [
        { type:"box",position:[3,0,1,70],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type:"box",position:[7,15,93,70],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[10,20,90,60],value:"Use the number keys to utilize the menu.",color:UISkin(ship).main},
    		]
      }
    );


    var bNum = 0;

    var offset = (40-mmLength*3+20)
    var otherTeam = ship.custom.team+1;
    if(otherTeam>=teams.length)
      otherTeam = 0;
    drawMainMenuButton(ship, 35, offset+bNum*6, "switchTeams", b&&mainMenuDraw.switchTeams, "Switch teams",
    teams[ship.custom.team].color, "\u{1f5d8}",teams[otherTeam].color,"#000000",""+(bNum+1))
    if(mainMenuDraw.switchTeams){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "shipSelect", b&&mainMenuDraw.shipSelect, "Select another ship",
    "#222222", "\u{1f680}","#FFFFFF","#FFFFFF",""+(bNum+1))
    if(mainMenuDraw.shipSelect){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "restartTutorial", b&&mainMenuDraw.tutorial, "Restart the tutorial",
    "#222222", "\u{2754}","#FFFFFF","#FFFFFF",""+(bNum+1))
    if(mainMenuDraw.tutorial){
      bNum++;
    }

    drawMainMenuButton(ship, 35, offset+bNum*6, "gameLog", b, "Rounds log",
    "#555500", "\u{1f3C6}","#777700","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "credits", b, "Credits",
    "#AA0000", "\u{1f496}","#FF0000","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "skins", b, "Skins",
    "#002277", "\u{2728}","#00FFFF","#FFFFFF",""+(bNum+1))
    bNum++;
    drawMainMenuButton(ship, 35, offset+bNum*6, "close", b, "Close",
    "#AA0000", "\u{274c}","#550000","#FFFFFF",""+(bNum+1))

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "skins")
      switchScreen(ship,2);
    if(input == "shipSelect")
      switchScreen(ship,3);
    if(input == "gameLog")
      switchScreen(ship,4);
    if(input == "restartTutorial"){
      ship.custom.tutorialStep = 0;
      switchScreen(ship,0);
    }
    if(input == "credits"){
      switchScreen(ship,5);
      ship.custom.SPPage = "credits";
    }
  }
}
