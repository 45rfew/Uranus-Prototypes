screens[6] = {
  name: "Intro Sequence",

  introPhrases: [
    "Mining? We don't do that here.",
    "Zero mining. Pure combat.",
    "Putting 'blast' in 'Starblast'!",
    "Powerminers' worst nightmare!",
    "Warning: entering mining-free zone.",
    "Powerminers not welcome!",
    "Powerminers beware!",
    "Outplay, outsmart, outmaneuver.",
    "What Starblast should've always been.",
    "Let our skills decide the outcome.",
    "Join, select a ship, engage.",
    "Wow, this game is actually fun!",
    "Locked and loaded.",
    "Ready to blast.",
    "Mining?! Not even once!",
    "I'm here to blast ships to bits!",
    "We aren't born to mine. We are born to fight!",
    "Hundreds of ships destroyed, not a single gem mined.",
    "Starblast can be fun!",
    "loading engagingGameplay.js...",
    "Win by skill, not by tier",
    "Mining is boring. Literally.",
    "Mining enslaves. Fighting is freedom."//Anonymous
  ],
  loadingConsoleLog: [
    "POWER ON",
    "initializing systems...",
    "all systems nominal, proceeding to boot up PROTOTYPES.sc",
    "",
    "boot complete",
    "",
    "STARBLAST PROTOTYPES v0.31.5",
    "Checking access keys...",
    "Access granted.",
    "Loading IO protocols...",
    "Loading ship characteristics...",
    "Loading abilities...",
    "Initializing controls...",
    "",
    "MAIN SCREEN TURN ON"
  ],

  consoleText : function(txt,i){
      var t = { type: "text",position:[5,2+i*5,90,3],value:txt,color:"#CDE",align:"left"}
      return t;
  },

  consoleComps: [],
  introLength: 10,

  prepare: function(){
    for(i=0;i<this.loadingConsoleLog.length;i++){
      this.consoleComps.push(this.consoleText(this.loadingConsoleLog[i],i));
    }
  },
  tick: function(ship){
    this.redraw(ship, true);
    ship.custom.introSequence++;
  },
  redraw: function(ship, b){
    if(ship.custom.introSequence>this.introLength&&b){
      switchScreen(ship,0);
    }
    if(ship.custom.introSequence==null){
      ship.custom.introSequence = 0;
      ship.custom.introMotto = Math.floor(Math.random()*this.introPhrases.length);
    }else ship.custom.introSequence++;

    var showLines = 2;

    if(ship.custom.introSequence>this.introLength*0.1)
    showLines = 3;

    if(ship.custom.introSequence>this.introLength*0.25)
    showLines = 8;

    if(ship.custom.introSequence>this.introLength*0.3)
    showLines = 10;

    if(ship.custom.introSequence>this.introLength*0.4)
    showLines = 12;

    if(ship.custom.introSequence>this.introLength*0.45)
    showLines = 14;

    if(ship.custom.introSequence>this.introLength*0.5)
    showLines = 15;

    var showComps = [
      { type:"box",position:[0,0,100,100],fill:"#000",stroke:"#000",width:2},
          ];

    showComps = showComps.concat(this.consoleComps.slice(0,showLines));

    if(ship.custom.introSequence<this.introLength*0.7){
      ship.setUIComponent(
        {id: "console",
        position: [0,0,100,100],
        visible: true,
        components: showComps
        }
      );

    }else{
      ship.setUIComponent(
        {id: "console",
        position: [0,0,100,100],
        visible: false,
        components: [
         ]
        }
      );
      ship.setUIComponent(
        {id: "introLogo",
        position: [30,30,40,40],
        visible: ship.custom.introSequence<this.introLength,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#222",stroke:"#222",width:2},
          { type: "text",position:[0,0,100,40],value:"STARBLAST",color:"#CDE"},
        	{ type:"box",position:[0,40,100,40],fill:"#CDE",stroke:"#CDE",width:2},
        	{ type: "text",position:[0,40,100,40],value:"PROTOTYPES",color:"#222"},
      	{ type: "text",position:[0,80,100,20],value:this.introPhrases[ship.custom.introMotto],color:"#CDE"},
      		]
        }
      );
      if(ship.custom.introSequence == this.introLength)
        ship.setUIComponent(
          {id: "gemBar",
          position: [3,18.5,16,3],
          visible: true,
          components: [
              { type:"box",position:[0,0,100,100],fill:"#593332",stroke:"#593332",width:2},
              { type: "text",position:[5,0,90,100],value:"We don't mine here.",color:"#CDE"}]
          }
        );
    }

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    this.redraw(ship, true);
  },
  input: function(ship,input){

  }
}

//TODO: refactor, add to all screens, rename to init
screens[6].prepare();
