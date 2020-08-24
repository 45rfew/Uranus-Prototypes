//refactoring required!

var roundsLog = []



var currentMap = 0;







var playerNames = [];

var durationEffectsPerShip = 10;

var currentVariation = 0;

var GPOClearChance = 0.001;
var GPOClear = false;

var modeVariations = [
  {
    name:"Starblast Prototypes Battlefield",
    shipCollectionTeamBlue: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    shipCollectionTeamRed: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  },
  {
    name:"GA Incursion",
    shipCollectionTeamBlue: [0,2,3,4,5,6,8,10,11,13],
    shipCollectionTeamRed: [9,16,17,18,19,20,21]
  }
]

var teams = [];

teams.push({x:170,y:0,name:"Blue",color:"#4cd5ff",hue:180,points:0,ctrlPoints:0});
teams.push({x:-170,y:0,name:"Red",color:"#FF2222",hue:0,points:0,ctrlPoints:0});

var controlPoints = [];

var shipsInGameData = [];
var lastShipsInGameData = [];
var lastshipsInGameData = []; //fuck. TODO: what the fuck?!
