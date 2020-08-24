
var drawSkinButton = function(ship, xx, yy, id, b, text, color, unicodeChar, textCol, shortcut){
  ship.setUIComponent(
      {id: id,
      position: [xx,yy,50,5],
      clickable: b,
      shortcut: shortcut,
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:color,stroke:color},
        { type: "text",position:[0,-30,50,160],value:unicodeChar,color:textCol},
        { type: "text",position:[20,0,80,100],value:text,color:textCol,align:"right"},
        { type: "text",position:[0,0,7,100],value:"\u{2b22}",color:UISkin(ship).main},
        { type: "text",position:[0,0,7,100],value:shortcut,color:UISkin(ship).sec}
      ]
      }
    );
}

screens[2] = {
  name: "Skin selector",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){
    if(!UISystem.events.shouldRedraw(ship,["nextPage","selectSkin"]))return;
    ship.setUIComponent(
      {id: "skinSelectorHeader",
      position: [25,25,30,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"Skin selection",color:UISkin(ship).main},
    		]
      }
    );

    drawButton(ship,68,25,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,58,25,"nextPage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Next page");

    for(var sn = 0; sn<8; sn++){
      if(ship.custom.skinsPage*8+sn<skins.length){
        var sk = skins[ship.custom.skinsPage*8+sn]
        drawSkinButton(ship, 25, 35+sn*5, "selectSkin"+sn, b, sk.name, sk.sec, sk.unicodeChar, sk.main, ""+(sn+1))
      }else
        drawSkinButton(ship, 25, 35+sn*5, "selectSkin"+sn, false, "", "", "","","")
    }


  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.skinsPage==null)
    ship.custom.skinsPage = 0;
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "nextPage"){
      UISystem.events.pushEvent(ship,"nextPage");
      ship.custom.skinsPage++;
      if(ship.custom.skinsPage*8>skins.length)
        ship.custom.skinsPage = 0;
    }
    if(input.indexOf("selectSkin")!=-1){
      UISystem.events.pushEvent(ship,"selectSkin");
      ship.custom.skin = (+input[10])+ship.custom.skinsPage*8;
    }

  }
}
