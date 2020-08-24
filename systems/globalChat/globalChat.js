/*vocabulary = [
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
    ] ;*/

//TODO: merge with playerlog system... maybe?
//TODO: flush messages every now and then

if(startSettings.globalChat){
  sp.systems.globalChat = {
    vocabulary: {
      O:{shortcut: "O", symbol:"\u{1f446}", text:"You"},
      E:{shortcut: "E", symbol:"\u{1f447}", text:"Me"},
      Y:{shortcut: "Y", symbol:"\u{1f44d}", text:"Yes"},
      N:{shortcut: "N", symbol:"\u{1f44e}", text:"No"},

      T:{shortcut: "T", symbol:"\u{270b}", text:"Wait"},
      K:{shortcut: "K", symbol:"\u{1f480}", text:"Kill"},
      B:{shortcut: "B", symbol:"\u{1f6a9}", text:"Objective"},
      Q:{shortcut: "Q", symbol:"?", text:"Hmm?"},

      A:{shortcut: "A", symbol:"\u{1f5e1}", text:"Attack"},
      F:{shortcut: "F", symbol:"\u{1f885}", text:"Follow"},
      D:{shortcut: "D", symbol:"\u{1f6e1}",text:"Defend"},

      H:{shortcut: "H", symbol:"\u{2719}",text:"Heal"},

      G:{shortcut: "G", symbol:"GG", text:"Good Game"},
      P:{shortcut: "P", symbol:"\u{270c}", text:"No Prob"},
      X:{shortcut: "X", symbol:"\u{1f60a}", text:"Thanks"},
      S:{shortcut: "S", symbol:"\u{1f61e}", text:"Sorry"},
    },
    combos:[
      {combo: ["O","O"], symbol:"\u{1f46a}", text:"Y'all"},
      {combo: ["Y","Y","Y","Y"], symbol:"\u{1f386}", text:"Yeah!"},
      {combo: ["Q","Q","Q","Q"], symbol:"?!", text:"WTF?!"},
      {combo: ["F","F"], symbol:"\u{1f91d}", text:"Help"},
      {combo: ["G","G"], symbol:"GGWP", text:""},
      {combo: ["N","O"], symbol:"\u{2b8d}", text:"NO U"},
    ],
    messageBuffer: {
      //sample message, "Y'all GG":
      /*244502: {sender: "PLAYERNAME", parts:[".0","G"]}*/
    },
    msgCounter: 0,
    tick: function(ship){
      if(this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]!=null)
        ship.custom.globalChat.writeTimer++;
      if(ship.custom.globalChat.writeTimer>3){
        this.startNewMsg(ship)
      }
    },
    getMsg: function(id){
      if(this.messageBuffer[id]!=null){
        var msg = this.messageBuffer[id]
        var render = []
        for(var p = 0; p<msg.parts.length; p++){
          if(msg.parts[p][0]=="."){
            render.push(this.combos[msg.parts[p].substring(1)])
          }else{
            render.push(this.vocabulary[msg.parts[p]])
          }
        }
        var updated = ((game.step-msg.lastChanged)<120);
        //log("getMsg: updated = "+updated)
        return {sender: msg.sender, color:msg.color, render: render, updated: updated};
      }
      return {sender: "error", color:"#AA0000", render: []};
    },
    addMsg: function(ship, key){
      msg = this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]
      if(msg==null){
        msg = {
          sender: ship.name, color:teams[ship.custom.team].color, parts:[]
        }
        this.messageBuffer[ship.custom.globalChat.currentlyWritingTo] = msg;
        playerLog.pushPlayerLogTeamOrProximity({id:ship.custom.globalChat.currentlyWritingTo}, ship.custom.team, ship.x, ship.y);
      }

      msg.parts.push(key);

      nextCombo:
      for(var i = 0; i<this.combos.length; i++){
        for(var j = 0; j<this.combos[i].combo.length; j++){
          if(msg.parts[msg.parts.length-1-j]!=this.combos[i].combo[this.combos[i].combo.length-1-j])
            continue nextCombo;
        }
        msg.parts = msg.parts.slice(0,-this.combos[i].combo.length);
        msg.parts.push("."+i)
        break;
      }

      msg.lastChanged = game.step;
      //log("addMsg: lastChanged = "+msg.lastChanged);

      ship.custom.globalChat.writeTimer = 0
    },
    startNewMsg: function(ship){
      if(this.messageBuffer[ship.custom.globalChat.currentlyWritingTo]!=null){
        this.msgCounter++;
        ship.custom.globalChat.currentlyWritingTo = this.msgCounter;
        ship.custom.globalChat.writeTimer = 0
      }
    },
    init: function(ship){
      ship.custom.globalChat = {
        currentlyWritingTo: this.msgCounter,
        writeTimer: 0
      }
      this.msgCounter++;
      for(var k in this.vocabulary){
        var msg = this.vocabulary[k]
        ship.setUIComponent({
          id:"chatSend"+msg.shortcut,
          position: [0,0,1,1],
          clickable: true,
          shortcut: msg.shortcut,
          visible: true,
          components:[
            { type: "text",position: [0,0,100,100],color: "#FFF",value: " "}
          ]
        })
      }
      ship.setUIComponent({
        id:"chatNewMsg",
        position: [0,0,1,1],
        clickable: true,
        shortcut: "C",
        visible: true,
        components:[
          { type: "text",position: [0,0,100,100],color: "#FFF",value: " "}
        ]
      })
    }
  }
}
