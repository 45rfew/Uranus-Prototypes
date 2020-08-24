//UI system

var UISystem = {

  init: function(ship){
    ship.custom.UISystem = {
      events: {
        in: {},
        out: {}
      },
      autoClearUI: {},
      rateLimiter: {
        heat: 0,
        sinceWarning: 0,
        sinceWarningMax: 0
      }
    }
  },

  rateLimiter:{
    settings:{
      kickHeat: 150,
      maxHeat: 50,
      warningHeat: 15,
      heatLossPerSecond: 3, //pressing the buttons less often than this will cool down the limiter
      warningEvery: 10
    },
    input: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var rt = ship.custom.UISystem.rateLimiter
      var sett = this.settings;
      rt.heat++;
      if(sett.kickHeat>0&&rt.heat>sett.kickHeat){
        ship.gameover({
          "Kicked":"UI input spam",
          "Don't hold interactive":" buttons down, please"
        })
      }
      if(rt.heat>sett.maxHeat){
        if(rt.sinceWarningMax>sett.warningEvery){
          playerLog.pushPlayerLog(ship, "OVERHEATED: UI DISABLED")
          playerLog.pushPlayerLog(ship, "Please do not abuse the interactive UI buttons")
          rt.sinceWarningMax = 0;
        }
        return false;
      }
      if(rt.heat>sett.warningHeat&&rt.sinceWarning>sett.warningEvery){
        playerLog.pushPlayerLog(ship, "Too fast! Cool down a bit!")
        playerLog.pushPlayerLog(ship, "You're pressing the buttons a bit too often.")
        rt.sinceWarning = 0;
      }
      return true;
    },
    tick: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var rt = ship.custom.UISystem.rateLimiter;
      var sett = this.settings;
      rt.heat -= sett.heatLossPerSecond;
      if(rt.heat<0)
        rt.heat = 0;
      rt.sinceWarning++;
      rt.sinceWarningMax++;
    }
  },

  events: {

    pushEvent:function(ship, event, duration=2){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      if(duration<1)
        duration = 1;
      var eshipin = ship.custom.UISystem.events.in;
      if(eshipin[event]>duration)
        return;
      eshipin[event] = duration;
    },

    shouldRedraw: function(ship, events){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var eshipin = ship.custom.UISystem.events.in;
      //var eshipout = ship.custom.UISystem.events.out;
      if(eshipin.forceRedraw)//||eshipout.forceRedraw)
        return true;
      if(events==null||events.length<1)
        return false;
      for(var i = 0; i<events.length; i++){
        if(eshipin[events[i]]>0)//||eshipout[events[i]])
          return true;
      }
      return false;
    },

    flushEvents: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var eship = ship.custom.UISystem.events;
      /*eship.in = eship.out;
      eship.out = {};*/
      //TODO: probably extremely inefficient. There's gotta be a better way!
      for(var k in eship.in){
        eship.in[k]--;
        if(eship.in[k]<1){
          delete eship.in[k];
        }
      }
    }

  },

  autoClearUI: {

    set: function(ship, UI, time){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      ship.custom.UISystem.autoClearUI[UI.id] = time;
      ship.setUIComponent(UI);
    },

    delay: function(ship, UIid, time){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      if(ship.custom.UISystem.autoClearUI[UIid]!=null){
        ship.custom.UISystem.autoClearUI[UIid] = time;
      }
    },

    tick: function(ship){
      if(ship.custom.UISystem==null)
        UISystem.init(ship);
      var ACUI = ship.custom.UISystem.autoClearUI;
      for(var e in ACUI){
          ACUI[e]--;
          if(ACUI[e]<0){
            ship.setUIComponent(
              {id: e,
              //position: [x,y,7,7],
              clickable: false,
              //shortcut: shortcut,
              visible: false,
              //components: components
              }
            );
            delete ACUI[e];
          }
      }
    }

  }
};

//generic functions
var drawButton = function(ship, x, y, id, fill, bordercol, textcol, visible, shortcut, text){
  components = [];
  tcol = textcol//"#CDE"
  /*if(parseInt(fill.substring(1,3),16)>128)
    tcol = "#222";
  if(parseInt(fill.substring(3,5),16)>128)
    tcol = "#222";
  if(parseInt(fill.substring(5,7),16)>128)
    tcol = "#222";*/
  if(visible)
    components = [
    { type:"box",position:[0,0,100,100],fill:fill/*+"33"*/,stroke:bordercol,width:10},
  	//{ type:"box",position:[10,10,80,80],fill:fill,stroke:fill,width:2},
  	{ type: "text",position:[11,20,78,30],value:text,color:tcol},
  	{ type: "text",position:[20,40,60,40],value:"["+shortcut+"]",color:tcol}
  	]
  ship.setUIComponent(
    {id: id,
    position: [x,y,7,7],
    clickable: visible,
    shortcut: shortcut,
    visible: visible,
    components: components
    }
  );
}

//UI system functions
var switchScreen = function(ship, id){
  if(id<0||id>=screens.length||screens[id]==null){
    log("Error: screen "+id+" does not exist");
    return;
  }
  //current = ship.custom.screen;
  if(ship.custom.UISystem==null)
    UISystem.init(ship);
  ship.custom.UISystem.events.in.forceRedraw = true;
  try{
    screens[ship.custom.screen].hide(ship);
  }catch(e){
    logError("ERROR-SWITCH-SCREEN-HIDE ",e)
  }
  ship.custom.screen = id;
  try{
    screens[id].show(ship);
  }catch(e){
    logError("ERROR-SWITCH-SCREEN-SHOW ",e)
  }
}

var skins = [
  {
      name:"The Abyss",
      main:"#CCCCCC",
      sec:"#222222",
      unicodeChar:"\u{1f30c}"
  },
  {
      name:"The Sun Is Up",
      main:"#222222",
      sec:"#CCCCCC",
      unicodeChar:"\u{2600}"
  },
  {
    //shoutout to color-hex
      name:"Blueprint",
      main:"#9ce5fb",
      sec:"#1183a5",
      unicodeChar:"\u{1f5c9}"
  },
  {
    //color-hex
      name:"Excess Heat",
      main:"#5e0000",
      sec:"#f9f37c",
      unicodeChar:"\u{1f7d2}"
  },
  {
    //color-hex
      name:"Radiant Star",
      main:"#156870",
      sec:"#0cffe1",
      unicodeChar:"\u{1f7c7}"
  },
  {
    //shoutout to f.lux
      name:"f.lux",
      main:"#000000",
      sec:"#efa55f",
      unicodeChar:"\u{269d}"
  },
  {
      name:"Burning Desire",
      main:"#380023",
      sec:"#ff003f",
      unicodeChar:"\u{1f352}"
  },
  {
      name:"Blaster Of Love",
      main:"#ffb3fe",
      sec:"#222222",
      unicodeChar:"\u{1f497}"
  },
  {
      name:"Cherry Blossom",
      main:"#5b4045",
      sec:"#ffb7c5",
      unicodeChar:"\u{1f338}"
  },
  {
      name:"Pure Gold",
      main:"#493e00",
      sec:"#ffd600",
      unicodeChar:"\u{269c}"
  },
  {
      name:"At The Beach",
      main:"#ffeead",
      sec:"#7fcdff",
      unicodeChar:"\u{1f3d6}"
  },
  {
      name:"Spring",
      main:"#f68f3c",
      sec:"#5e8d5a",
      unicodeChar:"\u{1f33c}"
  },
  {
      name:"Summer",
      main:"#e2f4c7",
      sec:"#ff4e50",
      unicodeChar:"\u{1f33b}"
  },
  {
      name:"Autumn",
      main:"#f47b20",
      sec:"#9c5708",
      unicodeChar:"\u{1f342}"
  },
  {
      name:"Winter",
      main:"#230745",
      sec:"#b3e3f4",
      unicodeChar:"\u{2744}"
  },
]


var UISkin = function(ship){
  if(ship.custom.skin==null)
    ship.custom.skin = 0;
  return skins[ship.custom.skin];
}

//screens
var screens = [];
