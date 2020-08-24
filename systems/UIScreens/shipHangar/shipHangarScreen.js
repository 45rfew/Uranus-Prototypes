screens[7] = {
  name: "Ship selector 2.0",
  tick: function(ship){
    this.redraw(ship, true);
  },
  hangarsPerTeam: {},
  resolvePath: function(root, path){

    var getPropRecusive = function(obj, tokenPath){
      if(tokenPath.length==1){
        return obj.items[tokenPath[0]];
      }else{
        if(obj!=null)
          return getPropRecusive(obj.items[tokenPath[0]], tokenPath.slice(1))
        return null;
      }
    }

    var tokens = path.split(".");

    if(tokens.length == 0) return root;

    return getPropRecusive(root, tokens.slice(1));

  },
  drawItem: function(ship,x,y,id,visible,item){
    var components = [];
    /*
    text: text,
    type: type,//0 - ship, 1 - category, 2 - special
    unicodeSymbol: symbol,
    data: data,
    items: {}
    */
    var typeSymbol = ["\u{1f680}","\u{1f5ca}","\u{2b9a}"][item.type];
    if(visible)
      components = [
      { type:"box",position:[0,0,100,100],fill:item.color,stroke:item.color,width:10},
    	{ type: "text",position:[0,0,10,100],value:"["+(id+1)+"] "+typeSymbol,color:"#FFFFFF"},
      { type: "text",position:[10,0,10,100],value:item.unicodeSymbol,color:"#FFFFFF"},
      { type: "text",position:[25,0,60,100],value:item.text,color:"#FFFFFF"},
    	]
    ship.setUIComponent(
      {id: "option"+id,
      position: [x,y,32,3],
      clickable: visible,
      shortcut: ""+(id+1),
      visible: visible,
      components: components
      }
    );

  },
  redraw: function(ship, b){

    if(UISystem.events.shouldRedraw(ship))
      ship.setUIComponent(
        {id: "shipSelectHeader",
        position: [50,30,50,5],
        visible: b,
        components: [
          { type:"box",position:[20,20,80,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type:"box",position:[0,85,100,5],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
          { type: "text",position:[9,-1,90,70],value:"STARBLAST PROTOTYPES HANGARS",color:UISkin(ship).sec},
          { type: "text",position:[10,0,90,70],value:"STARBLAST PROTOTYPES HANGARS",color:UISkin(ship).main}
        ]
        }
      );

    if(ship.custom.shipHangarScreen==null){
      ship.custom.shipHangarScreen = {
        path: "",
        scroll: 0
      }
    }

    var path = ship.custom.shipHangarScreen.path;
    var scroll = ship.custom.shipHangarScreen.scroll;

    if(path==null)
      path = "";

    var resolve = this.resolvePath(root, path);

    if(resolve==null){
      resolve = root;
      path = "";
    }

    if(UISystem.events.shouldRedraw(ship,["redrawPage"])){
      ship.setUIComponent(
        {id: "shipSelectPath",
        position: [55,36,45,3],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[10,10,90,90],value:path,color:UISkin(ship).main}
        ]
        }
      );

      ship.custom.shipHangarScreen.path = path;

      ship.custom.shipHangarScreen.currentLinks = []
      ship.custom.shipHangarScreen.itemsAmount = Object.keys(resolve.items).length;

      var ypos = 0;
      var counter = 0;
      var offset = 0;
      for(var k in resolve.items){
        if(counter>=8)break;
        offset++;
        if(offset<scroll*8)continue;
        ship.custom.shipHangarScreen.currentLinks.push({
          path:k,
          item:resolve.items[k]
        });
        this.drawItem(ship,60,40+ypos,counter,b,resolve.items[k])
        ypos += 3;
        counter++;
      }
      for(var k = counter; k<8; k++){
        ship.setUIComponent(
          {id: "option"+k,
          position: [0,0,40,5],
          visible: false,
          }
        );
      }
    }

    if(UISystem.events.shouldRedraw(ship)){
      drawButton(ship,90,40,"scrollUp",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"9","Scroll up");
      drawButton(ship,90,65,"scrollDown",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Scroll down");

      drawButton(ship,55,65,"undockHangar",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I","Launch");
      drawButton(ship,65,65,"back",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Go back");
    }

    if(UISystem.events.shouldRedraw(ship,["switchedShip"])){
      var curShip = sp.shipManager.getShipData(ship);
      ship.setUIComponent(
        {id: "shipDataTop",
        position: [2,30,30,15],
        visible: b,
        components: [
          { type: "text",position:[0.5,-0.5,90,50],value:curShip.name,color:UISkin(ship).sec,align:"left"},
          { type: "text",position:[1,0,90,50],value:curShip.name,color:UISkin(ship).main,align:"left"},
          { type:"box",position:[0,50,70,20],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,50,70,20],value:curShip.cl + " by " +companies[curShip.company].name,color:UISkin(ship).main},
          { type: "text",position:[0,80,100,20],value:" Author: " +shipsByCode[curShip.configs[0]].author,color:"#FFFFFF"},
        ]
        }
      );
      try{
        var shStats = shipsByCode[curShip.configs[0]].info.stats;
        var massToTonnes = 0.1;
        ship.setUIComponent(
          {id: "shipDataBottom",
          position: [2,52,30,7],
          visible: b,
          components: [
            { type:"box",position:[0,0,100,100],fill:"#222222",stroke:"#222222",width:2},
            { type: "text",position:[0,0,30,50],
            value:"\u{1f6e1}"+shStats.nominalStats.shieldcap.toFixed(1)+
            " ("+shStats.nominalStats.shieldregen.toFixed(1)+")",color:"#0055FF"},
            { type: "text",position:[33,0,30,50],
            value:"\u{26a1}"+shStats.nominalStats.shieldcap.toFixed(1)+
            " ("+shStats.nominalStats.shieldregen.toFixed(1)+")",color:"#FF5500"},
            { type: "text",position:[66,0,30,50],
            value:"\u{1f529}"+(shStats.mass*massToTonnes).toFixed(1)+"t",color:"#444444"},

            { type: "text",position:[0,50,30,50],
            value:"\u{1f5d8}"+shStats.nominalStats.rotation.toFixed(1),color:"#2200FF"},
            { type: "text",position:[33,50,30,50],
            value:"\u{1f680}"+shStats.nominalStats.agility.toFixed(1),color:"#FF00FF"},
          ]
          }
        );
      }catch(e){log(e)}
    }
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
    //if(input == "close")
    //  switchScreen(ship,0);
    if(input.startsWith("option")){
      var id = input[6];
      var current = ship.custom.shipHangarScreen.currentLinks[id];
      if(current.item.type == 1){
        ship.custom.shipHangarScreen.path += "."+current.path;
        ship.custom.shipHangarScreen.scroll = 0;
      }else if(current.item.type == 0){
        ship.custom.selectedShip = current.item.data;
        sp.shipManager.respawn(ship,true);
      }else if(current.item.type == 2){
        current.item.data(ship);
      }
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "back"){
      var path = ship.custom.shipHangarScreen.path;
      ship.custom.shipHangarScreen.path = path.substring(0,path.lastIndexOf("."));
      ship.custom.shipHangarScreen.scroll = 0;
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "scrollUp"){
      var iam = ship.custom.shipHangarScreen.itemsAmount;
      ship.custom.shipHangarScreen.scroll--;
      if(ship.custom.shipHangarScreen.scroll<0)
        ship.custom.shipHangarScreen.scroll = Math.floor(iam/8);
      UISystem.events.pushEvent(ship,"redrawPage");
    }
    if(input == "scrollDown"){
      var iam = ship.custom.shipHangarScreen.itemsAmount;
      ship.custom.shipHangarScreen.scroll++;
      if(ship.custom.shipHangarScreen.scroll>Math.floor(iam/8))
        ship.custom.shipHangarScreen.scroll = 0;
      UISystem.events.pushEvent(ship,"redrawPage");
    }
  },
  root: {}
}
