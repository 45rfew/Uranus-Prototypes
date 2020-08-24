var parsingPage = 0;

var parsePushPage = function(name, page){
  var parsed = [];

  var extractedElements = [];

  var element = "";
  for(i=0;i<page.length;i++){
    if(page[i]=="<"||page[i]=="\n"){
      extractedElements.push(element)
      element = "";
    }
    element+=page[i];
  }

  extractedElements.push(element)
  var i = 0;
  while(i<extractedElements.length){
    element = extractedElements[i];
    if(element[0]=='\n')
      tag = '\n'
    else
      tag = element.substring(0, element.indexOf(">")+1)
    if(tag.includes("<title>")){
      parsed.push({type:1,data:element.substring(7)})
    }
    if(tag.includes("<p>")){
      parsed.push({type:0,data:element.substring(3)})
    }
    if(tag=="\n"){
      parsed.push({type:0,data:element.substring(1)})
    }
    if(tag.includes("<sep>")){
      parsed.push({type:2})
    }
    if(tag.includes("<column")){
      widths = [];
      cWidth = "";
      for(j=0;j<tag.length;j++){
        if(".0123456789".indexOf(tag[j])!=-1){
          cWidth += tag[j]
        }else if(cWidth.length>0){
          widths.push(+cWidth)
          cWidth = "";
        }
      }

      columns = [element.substring(element.indexOf(">")+1)];
      for(j=1;j<widths.length;j++){
        i++
        columns.push(extractedElements[i].substring(1))
      }


      parsed.push({type:3,widths:widths,data:columns})
    }
    i++;
  }
  /*
  for(i=0;i<parsed.length;i++){
    switch(parsed[i].type){
      case 0: log(parsed[i].data); break;
      case 1: log("["+parsed[i].data+"]"); break;
      case 2: log("--------------------"); break;
      case 3:
        s = "|";
        for(j=0;j<parsed[i].widths.length;j++){
          s+=parsed[i].widths[j]+":"+parsed[i].data[j]+"|"
        }
        log(s);  break;
    }
  }*/

  SPPages[name] = parsed;

}

/*
parsePushPage("test","<p>Test page. This should be parsed by the parser."+
"<title>This is a title!"+
"<column:50:40>Column 1\nColumn 2\n"+
"Let's say there's a %page2%link to some other page.\n"+
"Then there's a new paragraph. Holy shit!\n"+
"We need to test a really, really, really long paragraph. This is such a paragraph."+
"If all goes well, SPPB will properly cut the string at some space chars several times "+
"so as to display everything properly. Also just in case we need a %page5%link here"+
" and another %homepage%there."+
"<sep>\nThat's all for now i assume\n"+
"But wait! There's more!"+
"Let's just add a bunch of links: %page15%, %page66%,%credits%,%homepage%"
)*/
/*
parsePushPage("test1",
"<p>Let's do some link testing. This page is page test1, and it links to %test2%test2 and %test3%test3");

parsePushPage("test2",
"<p>This is page test2, and it doesn't link anywhere.");

parsePushPage("test3",
"<p>This is page test3, and it links to %test2%test2");
*/

var pagesToParse = [];

pagesToParse.push("changelog",
"<title>Changelog"+
"<sep>"+
"Allan please add details"
/*"<title>24.11.2018"+
"<p>Implemented SPPages Browser, added %credits%credits, %wiki%wiki and, well, changelog."+
"<p>Also fixed some things."*/
);

pagesToParse.push("credits",
"<title>STARBLAST PROTOTYPES"+
"<column:50:50>Zero mining.\nPure combat.\n"+
"<title>Lead developer/idea by"+
"<p>/u/UranusOrbiter Uranus_is_big#7833"+
"<title>Main tester/obscure bug fixing/helper/developer"+
"<p>123 Notus"+
"<title>Ships by"+
"<p>UranusOrbiter"+
"<p>Goldman"+
"<p>Finalizer"+
"<p>Malefor"+
"<p>5STARS"+
"<p>Interdictor SD"+
"<sep>"+
"<p>Huge thanks for everyone who, in one way or another, contributed to the amazing cause of SPrototypes, "+
"the Moddest of all mods. Without your help, your contributions, none of this would exist. You wouldn't "+
"be reading this text in an in-game web browser."+
"<title>Thank you."+
"<p>Huge thanks to our beloved dev, pmgl, for designing this mind-bogglingly awesome modding system, for "+
"putting up with the incredibly annoying me, and for encouraging me to do all of this."+
"<p>Thanks to all playtesters, including but not limited to(because my brain's memory is very limited): "+
"<p>Nova, PearEatingBear, Zeul, L.Gaming, IRAN, ECLIPSE, Goldman, NeXagon, ACE, APPLE PIE, and all others."+
"<p>One cannot develop a mod for so many players without testing it with that many players. Thus, "+
"thank you for being my audience for all these weeks, and thank you for all the feedback and gameplay."+
"<p>Special thanks to 201X CAPTAIN and REBEL for letting me use their discord server for invites "+
"and announcements."+
"<p>Oh and of course, shoutout to all the haters! I'd like to thank y'all for providing me with motivation "+
"to keep going. You don't deserve having your names put here, though... sorry for that!"+
"<sep>"+
"<p>Also shoutout to these awesome sites that turned out to be very, very useful for developing such a large "+
"mod:"+
"<p>esprima.org - great online js syntax checker"+
"<p>color-hex.com - awesome color palettes for skins"+
"<p>stackoverflow.com - but of course"+
"<p>emojipedia.org - great insight into emojis"+
"<sep>"+
"<p>%wiki%In-game wiki(under construction)"+
"<p>%changelog%Changelog"+
"<p>%doesntExist%Go check out our 404 page lmao"+
"<sep>"+
"<p>{} by UranusOrbiter with \u{1f496}"
);

pagesToParse.push("wiki",
"<title>STARBLAST PROTOTYPES"+
"<column:50:50>Zero mining.\nPure combat.\n"+
"<sep>"+
"<title>In-game wiki"+
"<title>THIS IS A PROOF OF CONCEPT"+
"<p>This right here is just a placeholder page for the yet-to-be-added in-game encyclopedia."+
"The links currently point nowhere. It will be populated with pages in future."+
"<sep>"+
"<p>STARBLAST PROTOTYPES: Zero mining. Pure combat is a highly complex interactive mod for online "+
"multiplayer game Starblast. It's main premise is the idea that mining is a useless, poisonous feature "+
"that adds very little to gameplay, at the cost of making the game a huge uncompetitive timesink. "+
"SP is designed to be a quick, objective-based mode, where all players are treated as equal. "+
"It is, in a way, a merger of Pro DeathMatch and Vanilla Teams, taking best features from both modes "+
"while filtering out useless ones."+
"<sep>"+
"<p>Gameplay is spiced up by the addition of %abilities%abilities in an attempt to parody Overwatch. "+
"All ships have unique abilities that question the limits of Modding API. "+
"%effects%Effects can be applied to ships by abilities, increasing gameplay complexity and making room "+
"for strategy and tactics. Ships are completely free and the only penalty for dying is loss of points(kills)."+
"Most rounds last 10-20 minutes, with the shortest possible round being 5 minutes. Gameplay is fast and engaging."+
"<sep>"+
"<p>%ships%Ships"+
"<p>%shipStats%Ship stats"+
"<p>%abilities%Abilities"+
"<p>%effects%Effects"
);

/*
s = "<title>Ship stats"+
"<p>All ships' stats are listed on this page. These are pulled directly "+
"<column:20:10:10:10:10:10:10:10:10>Name\nShCap\nShReg\nEnCap\nEnReg\nBuDmg\nBuSpd\nAccel\nRotate";

for(i=0;i<origParsedShips.length;i++){
  s += "<column:20:10:10:10:10:10:10:10:10>"+origParsedShips[i].name+
  "\n"+origParsedShips[i].typespec.specs.shield.capacity[0]+
  "\n"+origParsedShips[i].typespec.specs.shield.reload[0]+
  "\n"+origParsedShips[i].typespec.specs.generator.capacity[0]+
  "\n"+origParsedShips[i].typespec.specs.generator.reload[0]+
  "\nNaN"+
  "\nNaN"+
  "\n"+origParsedShips[i].typespec.specs.ship.acceleration[0]+
  "\n"+origParsedShips[i].typespec.specs.ship.rotation[0]
}

pagesToParse.push("shipStats",s);*/
//log("loaded successfully "+pagesToParse.length)

modsys.scheduler.scheduleTask(
function(){
  if(parsingPage<pagesToParse.length){
    parsePushPage(pagesToParse[parsingPage],pagesToParse[parsingPage+1]);
    parsingPage+=2;
  }
},60,4)
