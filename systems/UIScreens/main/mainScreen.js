

var abilityStateColors = [
  "#22FF55",
  "#FFFF22",
  "#FF5522",
  "#666666",
  ]

var writeEffectsShip = function(ship, b){
    var ecomps = [];
    var w = 50;
    var h = 20;
    var columns = 2;
    if(ship.custom.effects!=null)
    for(e=0;e<durationEffectsPerShip;e++){
      if(ship.custom.effects[e]!=null){
        var edata = ship.custom.effects[e];
        var eFX = effectTypes[edata.type].FX;
        var column = Math.floor(e/(durationEffectsPerShip/columns))+1;
        /*
        FX: {
          colBkg: "#000055",
          colFrg: "#2222CC",
          char: "\u{1f6e1}",
          shortName: "ShCap"
        }
        */
        if(eFX!=null)
          ecomps.push(
            { type:"box",
            position:[100-column*w+0.1*w,e*h+h*0.1,w*0.8,h*0.8],
            fill:eFX.colBkg,stroke:"#00000000",width:2},
            { type: "text",
            position:[100-column*w+w*0.2,e*h+h*0.3,w*0.6,h*0.4],
            value:eFX.char,
            color:"#FFFFFF"},
            { type: "text",
            position:[100-column*w,e*h+h*0.7,w,h*0.2],
            value:eFX.shortName,
            color:"#FFFFFF"},
             { type: "text",
            position:[100-column*w,e*h+h*0.1,w,h*0.2],
            value:"x"+edata.strength+" "+edata.duration+"s",
            color:"#FFFFFF"}
          )


      }
    }
    if(UISystem.events.shouldRedraw(ship))
      ship.setUIComponent(
        {id: "effectslistTop",
        position: [70,0,10,5],
        visible: b,
        components: [
           { type:"box",position:[0,0,100,100],
          fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],
          value:"STATUS EFFECTS",color:UISkin(ship).main},
          ],

        }
      );
    ship.setUIComponent(
      {id: "effectslist",
      position: [70,5,10,25],
      visible: b,
      components: ecomps
      }
    );

  }

var drawShipState = function(ship, b){
  var data = sp.shipManager.getShipData(ship);
  var abil = sp.shipManager.getAbilities(ship);
  var currentStats = sp.shipManager.getCurrentStats(ship);

  if(UISystem.events.shouldRedraw(ship,["shipRespawn"])){
    var author = {};
    try{
    var shParsed = shipsByCode[sp.shipManager.getShipData(ship).configs[0]]
    if(shParsed.author!=null)
      author = { type: "text",position:[40,70,60,30],value:"by "+shParsed.author,color:UISkin(ship).main,align:"right"};
    }catch(e){}//TODO: empty catch
    ship.setUIComponent(
        {id: "shipInfo",
        position: [2,32,15,5],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:data.unicodeChar,color:data.color+"44"},
      	  { type: "text",position:[5,20,90,30],value:data.name,color:UISkin(ship).main},
      	  { type: "text",position:[5,50,90,30],value:data.cl,color:UISkin(ship).main},
      	  author
      	]
        }
      );
  }

    //i'll insert this here for now, but preferably into its own method in the future
    /*ship.setUIComponent(
      {id: "aliveBoosterStatus",
      position: [80,35,20,5],
      visible: b,
      components: [
          { type:"box",position:[0,47,100*ship.custom.aliveBooster.charge,6],fill:"#0044FF",stroke:"#0044FF",width:2},
          { type: "text",position:[0,0,100,40],value:ship.alive?"ALIVE":"KNOCKED OUT",color:ship.alive?"#00FF44":"#FF0000"},

          //ability reload boost
          { type: "text",position:[0,60,30,40],value:"\u{2756} x"+sp.systems.aliveBooster.getReloadBuff(ship).toFixed(2),color:"#0044FF"},
          //objective rate boost
          { type: "text",position:[33,60,30,40],value:"\u{1f6a9} x"+sp.systems.aliveBooster.getCaptureBuff(ship).toFixed(2),color:"#0044FF"},
          //booster charge rate
          { type: "text",position:[70,60,30,40],value:"+"+ship.custom.aliveBooster.lastChargeRate.toFixed(3),color:"#0044FF"}
        ]
      }
    );*/

  /*if(data.company!=null&&companies[data.company]!=null)
    ship.setUIComponent(
      {id: "companyLogo",
      position: [2,30,15,6],
      visible: b,
      components: companies[data.company].logo
      }
    );
  else ship.setUIComponent(
    {id: "companyLogo",
    position: [2,30,15,6],
    visible: false,
    //components: companies[data.company].logo
    }
  );*/
  if(ship.generator<0)
    UISystem.autoClearUI.set(ship,
          {id: "reactorBar",
          position: [3,14.5,18,3],
          visible: true,
          components: [
              { type:"box",position:[0,0,100,100],fill:"#615628",stroke:"#615628",width:2},
              { type: "text",position:[5,0,90,100],value:"\u{26a0} REACTOR STALLED \u{26a0}",color:"#CDE"}]
          },
          1
        );

  //TODO: maybe should make this into a func
  var postfix = "?";
  var value = 0;
  var stat = currentStats["shieldcap"].val;
  if(stat>998){

    if(ship.shield<1000000){
      postfix = "K";
      value = (ship.shield/1000).toFixed(2);
    }else if(ship.shield<1000000000){
      postfix = "M";
      value = (ship.shield/1000000).toFixed(2);
    }else{
      postfix = "WTF";
      value = "BRUH ";
    }
    var filled = ship.shield/stat;
    //TODO: autoClearUI
    UISystem.autoClearUI.set(ship,
        {id: "shieldBar",
        position: [3,10.5,18,3],
        visible: true,
        components: [
            { type:"box",position:[0,0,100,100],fill:"#305e56",stroke:"#305e56",width:2},
            { type:"box",position:[0,0,100*filled,100],fill:"#7ee3fd",stroke:"#7ee3fd",width:2},
            { type: "text",position:[80,0,20,100],value:value+postfix,color:"#222"}]
        },
        1
      );
  }
  var stat = currentStats["energycap"].val;
  if(stat>998){
    if(ship.generator<1000000){
      postfix = "K";
      value = (ship.generator/1000).toFixed(2);
    }else if(ship.generator<1000000000){
      postfix = "M";
      value = (ship.generator/1000000).toFixed(2);
    }else{
      postfix = "WTF";
      value = "BRUH ";
    }
    var filled = ship.generator/stat;
    //TODO: autoClearUI
    UISystem.autoClearUI.set(ship,
        {id: "reactorBar",
        position: [3,14.5,18,3],
        visible: true,
        components: [
            { type:"box",position:[0,0,100,100],fill:"#615628",stroke:"#615628",width:2},
            { type:"box",position:[0,0,100*filled,100],fill:"#fffc94",stroke:"#fffc94",width:2},
            { type: "text",position:[80,0,20,100],value:value+postfix,color:"#222"}]
        },
        1
      );
  }

  for(var a=1;a<8;a++){
    if(abil[a]!=null){

      var fill = "#FF00FF";
      if(abilityStateColors[abil[a].state]!=null)
        fill = abilityStateColors[abil[a].state];
      var ready = abil[a].ready;
      if(ready<0)ready=0
      if(ready>1)ready=1
      ship.setUIComponent(
        {id: "ability"+a,
        position: [2,37+(a-1)*6,15,10],
        clickable: b,
        shortcut: a+"",
        visible: b,
        components: [
      	{ type:"box",position:[5,5,20,30],fill:"#00000000",stroke:fill,width:4},
      	{ type:"box",position:[25,30,70*ready,5],fill:fill,stroke:fill,width:2},
      	]
        }
      );
      if(UISystem.events.shouldRedraw(ship,["shipRespawn","shipConfigChange"]))
      ship.setUIComponent(
        {id: "abilityInfo"+a,
        position: [2,37+(a-1)*6,15,10],
        clickable: b,
        visible: b,
        components: [
          { type: "text",position:[5,5,20,30],value:a,color:"#CDE"},
          { type: "text",position:[30,5,65,25],value:abil[a].name,color:"#CDE"},
          { type:"box",position:[5,35,90,1],fill:"#FFFFFF",stroke:UISkin(ship).main,width:2},
      	]
        }
      );

    }else if(UISystem.events.shouldRedraw(ship,["shipRespawn","shipConfigChange"])){
        ship.setUIComponent(
          {id: "ability"+a,
          position: [2,55+(a-1)*12,20,10],
          clickable: false,
          visible: false
          }
        );
        ship.setUIComponent(
          {id: "abilityInfo"+a,
          position: [2,55+(a-1)*12,20,10],
          clickable: false,
          visible: false
          }
        );
    }

  }

  //OPTIMIZE

  //OPTIMIZE: remove intoGlobalCoords calls where recal unnecessary
  var drawStatBackround = function(comps,name, pos, value, boostLevel, color, chars, charCol){

      comps.push({ type:"box",position:pos,fill:color,stroke:color,width:4})
      for(var i = 0; i<chars.length; i++){
        comps.push({ type: "text",position:intoGlobalCoords(pos,[5,0,30,100]),value:chars[i],color:charCol})
      }

  }

  var drawStatIndicator = function(comps,name, pos, value, boostLevel, color, chars, charCol){
    var vcol = "#CCC"
    if(boostLevel<0)
      vcol = "#C22"
    else if(boostLevel>0)
      vcol = "#2C2"



    comps.push(
    { type: "text",position:intoGlobalCoords(pos,[35,0,30,100]),value:value.toFixed(2),color:vcol},
    //{type: "text",position:[80,35,20,30],value:"\u29bf",color:"#F0F"}
  );
    //log(boostLevel)
    if(boostLevel==0){

      comps.push({type: "text",position:intoGlobalCoords(pos,[60,0,40,100]),value:"\u29bf",color:"#CCC"})
      log(intoGlobalCoords(pos,[60,0,40,100]));
    } else {

      if(boostLevel>3)boostLevel = 3
      if(boostLevel<-3)boostLevel = -3

      var grad = ["C","8","4"]
      var colStr = "#.00"
      var char = "\u{1f897}"
      var dir = 1
      var range = (Math.abs(boostLevel)-1)*20
      if(boostLevel>0){
        colStr = "#0.0"
        char = "\u{1f895}"
        dir = -1
      }

      for(var i = 0; i<Math.abs(boostLevel); i++){
        var col = colStr.replace(".",grad[i])
        comps.push({type: "text",position:
          intoGlobalCoords(pos,[60,(50-range+i*(range*2/Math.abs(boostLevel)))*dir,40,100]),
          value:char,color:col})

      }
    }

  }

  /*sc = cl(sdata.shieldcap+3,0,6);
  sr = cl(sdata.shieldregen+3,0,6);
  ec = cl(sdata.energycap+3,0,6);
  er = cl(sdata.energyregen+3,0,6);
  bd = cl(sdata.damage+3,0,6);
  bs = cl(sdata.bspeed+3,0,6);
  ss = cl(sdata.speed+3,0,6);
  sa = cl(sdata.agility+3,0,6);*/
  //OPTIMIZE

  var stats = [
    {id:"shieldcap",col:"#000055",chars:["\u{1f6e1}"],charCol:"#0022FF"},
    {id:"shieldregen",col:"#002255",chars:["\u{1f6e1}","\u{fe62}"],charCol:"#0066FF"},
    {id:"energycap",col:"#555500",chars:["\u{1f50b}"],charCol:"#CCCC00"},
    {id:"energyregen",col:"#554400",chars:["\u{26a1}"],charCol:"#CCAA00"},
    {id:"damage",col:"#552200",chars:["\u{1f4a5}"],charCol:"#CC5500"},
    {id:"bspeed",col:"#550033",chars:["\u{1f320}"],charCol:"#CC00CC"},
    {id:"speed",col:"#222222",chars:["\u{21f6}"],charCol:"#CCCCCC"},
    {id:"agility",col:"#220055",chars:["\u{1f680}"],charCol:"#5500CC"}
  ]

  var comps = [];
  var bkgComps = [];

  var statsChanged = false;
  if(ship.custom.mainScreen == null){
    ship.custom.mainScreen = {
      lastStats: {}
    };
    statsChanged = true;
  }else{
    for(var i = 0; i<stats.length; i++){
      if(ship.custom.mainScreen.lastStats[stats[i].id] != currentStats[stats[i].id].val){
        statsChanged = true;
        break;
      }
    }
  }

  if(statsChanged||UISystem.events.shouldRedraw(ship)){
    for(var i = 0; i<stats.length; i++){
      var stat = currentStats[stats[i].id].val;
      var boost = currentStats[stats[i].id].boost;
      drawStatIndicator(comps, stats[i].id, [i*10,95,10,5],
        stat,
      boost, stats[i].col, stats[i].chars, stats[i].charCol)

      //OPTIMIZE: don't call unless redrawing actually necessary
      drawStatBackround(bkgComps, stats[i].id, [i*10,95,10,5],
        stat,
      boost, stats[i].col, stats[i].chars, stats[i].charCol)

      ship.custom.mainScreen.lastStats[stats[i].id] = stat;
    }

    UISystem.autoClearUI.set(ship,{
      id: "stats",
      position: [0,0,100,100],
      clickable: false,
      visible: b,
      components: comps
    },1);
  }else if(b){
    UISystem.autoClearUI.delay(ship,"stats",1);
  }

  if(UISystem.events.shouldRedraw(ship)){
    ship.setUIComponent({
      id: "statsBkg",
      position: [0,0,100,100],
      clickable: false,
      visible: b,
      components: bkgComps
    });
  }

}

var tutorial = [
  {x:30,y:30,title:"Welcome!",texts:[
    "Welcome to STARBLAST PROTOTYPES! This quick",
    "tutorial should help you figure things out.",
    "Press [I] to proceed or [L] to skip the tutorial."
    ]
  },
  {x:30,y:30,title:"Zero mining. Pure combat.",texts:[
    "STARBLAST PROTOTYPES is built around the idea",
    "of no mining. Here, we don't mine: we fight.",
    "Don't waste your time shooting at rocks.",
    "Ships are small and agile, while bullets are",
    "somewhat slow, creating a very skillful and",
    "competitive environment. Have fun!"
    ]
  },
  {x:30,y:30,title:"Ships",texts:[
    "There's about a dozen of ships in this mod,",
    "and the amazing thing is, you may switch between",
    "them instantly, at any moment! Just visit your",
    "base and open the ship selection screen."
    ]
  },
  {x:25,y:50,title:"Abilities and such",texts:[
    "All ships feature unique, awesome abilities!",
    "Abilities are activated by pressing number keys",
    "(the keys you'd usually use to upgrade stats)",
    "Some abilities transform your ship, others",
    "apply buffs to teammates or nerfs to enemies.",
    "Some abilities require time to recharge."
    ],
    box:{x:1,y:28,w:20,h:60}
  },
  {x:50,y:20,title:"Status effects",texts:[
    "Some abilities, as previously mentioned, may",
    "apply buffs or nerfs to your or other ships.",
    "This UI piece shows all status effects currently",
    "affecting your ship."
    ],
    box:{x:68,y:0,w:14,h:30}
  },
  {x:25,y:60,title:"Ship 'upgrades'",texts:[
    "Ship upgrades are used as a way of applying",
    "said status effects(and also direct effects)",
    "to ships. All 'upgrades' have a nominal level,",
    "which represents your ship's normal state of",
    "operation - as of now, it is 3 bars for all stats."
    ],
    box:{x:0,y:95,w:80,h:5}
  },
  {x:50,y:40,title:"Teams and rounds",texts:[
    "In this mod, two teams fight for control",
    "over several(usually 3) points. Here you",
    "can see the composition of teams, and the",
    "state of the game."
    ],
    box:{x:80,y:0,w:20,h:40}
  },
  {x:30,y:30,title:"Victory condition",texts:[
    "The goal is to capture and hold the majority",
    "of points(>50%) and hold them for 5 minutes.",
    "If another team gains the majority, the timer",
    "is reset."
    ]
  },
  {x:30,y:30,title:"Good luck!",texts:[
    "This should be enough to get you started.",
    "No more mining holding you back. Spread",
    "your wings and fly!",
    "",
    "Have fun!"
    ]
  },
  ]

var drawTutorial = function(ship, b){
  //so apparently i broke the tutorial... lmfao
  //TODO: fix the frICKing tutorial
  return;
  if(ship.custom.tutorialStep==null){
    ship.custom.tutorialStep = 0;
  }

  if(ship.custom.tutorialStep>tutorial.length){
    return;
  }
  st = ship.custom.tutorialStep;

  if(ship.custom.tutorialStep==tutorial.length){
    ship.setUIComponent(
      {id: "tutorial",
      position: [30,30,40,40],
      visible: false
      }
    );
    drawButton(ship,30,80,"tutorialNext",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,false,"I","Next");
    drawButton(ship,40,80,"tutorialSkip",UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,false,"L","Skip");
    ship.setUIComponent(
      {id: "tutorialBox",
      position: [0,0,10,10],
      visible: false
      }
    );
    ship.custom.tutorialStep++;
  }else if(UISystem.events.shouldRedraw(ship,["tutorialUpdate"])){
    lines = tutorial[st].texts.length+2;
    tcomps = [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
        { type:"box",position:[0,0,100,(10/(lines*5))*100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
        { type: "text",position:[0,0,100,(10/(lines*5))*100],
        value:tutorial[st].title,color:UISkin(ship).sec},
      ];
    for(tt=0; tt<tutorial[st].texts.length; tt++){
      tcomps.push(
        { type: "text",
        position:[0,(tt+2)*5*100/(lines*5),100,5*100/(lines*5)],
        value:tutorial[st].texts[tt],color:UISkin(ship).main,align:"left"}
      )
    }
    ship.setUIComponent(
      {id: "tutorial",
      position: [tutorial[st].x,tutorial[st].y,40,(10+lines*5)/2],
      visible: b,
      components: tcomps
      }
    );
    drawButton(ship,tutorial[st].x,tutorial[st].y+(10+lines*5)/2,"tutorialNext",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I",st<tutorial.length-1?"Next":"Finish");
    drawButton(ship,tutorial[st].x+7,tutorial[st].y+(10+lines*5)/2,"tutorialSkip",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&st<tutorial.length-1,"L","Skip");
    if(tutorial[st].box!=null){
      ship.setUIComponent(
        {id: "tutorialBox",
        position: [tutorial[st].box.x,tutorial[st].box.y,tutorial[st].box.w,tutorial[st].box.h],
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:"#FF0000",width:10}
        ]
        }
      );
    }else{
      ship.setUIComponent(
        {id: "tutorialBox",
        position: [0,0,10,10],
        visible: false
        }
      );
    }

  }
}

screens[0] = {
  name: "Main screen",
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    if(ship.custom.objectiveStatusText==null)
      ship.custom.objectiveStatusText = "";
    if(
      ship.custom.objectiveStatusText!=ship.custom.objectiveStatusTextPrev||
      ship.custom.objectiveStatusTextTimeLeft==0||
      UISystem.events.shouldRedraw(ship)
    ){
      ship.setUIComponent(
        {id: "objectiveStatus",
        position: [32,5,37,3],
        visible: b&&ship.custom.objectiveStatusTextTimeLeft>0,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.objectiveStatusText,color:UISkin(ship).main}
        ]
      })
      ship.custom.objectiveStatusTextPrev = ship.custom.objectiveStatusText;
    }
    if(ship.custom.gameStatusText==null)
        ship.custom.gameStatusText = "";
    if(
      ship.custom.gameStatusText!=ship.custom.gameStatusTextPrev||
      UISystem.events.shouldRedraw(ship)
    ){
      ship.setUIComponent(
        {id: "gameStatus",
        position: [32,2,37,3],
        visible: b&&ship.custom.gameStatusText.length>0,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.gameStatusText,color:UISkin(ship).main}
        ]
      })
      ship.custom.gameStatusTextPrev = ship.custom.gameStatusText;
    }
    if(ship.custom.tip==null)
      ship.custom.tip = "";
    if(UISystem.events.shouldRedraw(ship,["bottomTipUpdate"]));
      ship.setUIComponent({
        id:"tip",
        position:[0,92,80,3],
        clickable: false,
        visible: b,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
          { type: "text",position:[0,0,100,100],value:ship.custom.tip,color:UISkin(ship).main}
        ]
        });

    var sh = shortestPath(ship.x, ship.y, teams[ship.custom.team].x, teams[ship.custom.team].y);


    drawButton(ship,24,10,"openShipSelector",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&!ship.custom.isInHangar&&(distance(sh[0],sh[1])<shipSelectRange),"L","Legacy ship selector");
    drawButton(ship,24,18,"dockHangar",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&!ship.custom.isInHangar&&(distance(sh[0],sh[1])<shipSelectRange),"I","Dock");
    drawButton(ship,24,10,"undockHangar",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b&&ship.custom.isInHangar,"I","Undock");

    drawShipState(ship,b)
    drawTutorial(ship,b)
    writeEffectsShip(ship,b)
    //draw2019(ship, b)
    if(UISystem.events.shouldRedraw(ship))
      drawButton(ship,24,2,"openMenu",
      UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Main menu");

    var data = sp.shipManager.getShipData(ship);
    if(data.augmentUI!=null) data.augmentUI(ship);
  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if (input=="tutorialSkip"){
      ship.custom.tutorialStep = tutorial.length;
      UISystem.events.pushEvent(ship,"tutorialUpdate");
    }
    if (input=="tutorialNext"){
      if(ship.custom.tutorialStep<tutorial.length)
        ship.custom.tutorialStep++;
      UISystem.events.pushEvent(ship,"tutorialUpdate");
    }
    if(input == "openMenu")
      switchScreen(ship,1);
    if(input == "openShipSelector")
      switchScreen(ship,3);
  }
}
