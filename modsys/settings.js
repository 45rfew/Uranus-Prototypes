var ms = 100;

var crashOnError = false;

var ships = [];
var gameplayShips = {};
var showcaseShips = [];
var shipsData = {};
var shipIdsToCodes = {};

var vocabulary;
if(!startSettings.globalChat){
  var vocabulary = [
        { text: "You", icon:"\u004e", key:"O" },
        { text: "Me", icon:"\u004f", key:"E" },
        { text: "Yes", icon:"\u004c", key:"Y" },
        { text: "No", icon:"\u004d", key:"N" },

        { text: "Attack", icon:"\u00bd", key:"A" },
        { text: "Follow", icon:"\u0050", key:"F" },
        //{ text: "Objective", icon:"\u0044", key:"M" },
        { text: "Defend", icon:"\u0025", key:"D" },

        { text: "Wait", icon:"\u0048", key:"T" },
        { text: "Kill", icon:"\u005b", key:"K" },
        { text: "Objective", icon:"\u{1f6a9}", key:"B" },
        { text: "Hmm", icon:"\u004b", key:"Q" },

        { text: "Heal", icon:"\u0037", key:"H" },

        { text: "Good Game", icon:"GG", key:"G" },
        { text: "No Prob", icon:"\u0047", key:"P" },
        { text: "Thanks", icon:"\u0041", key:"X" },
        { text: "Sorry", icon:"\u00a1", key:"S" }
      ] ;
}

this.options = {
  // see documentation for options reference
  //root_mode: "survival",
  map_size: ms,
  starting_ship:601,
  friendly_colors:2,
  asteroids_strength:100000,
  crystal_value:0,
  weapons_store:false,
  vocabulary:vocabulary,
  custom_map: [],
  max_players: 20,
  ships:ships
};
