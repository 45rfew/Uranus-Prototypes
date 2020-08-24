
var maxPTextLength = 80
var maxFewerCharactersNewline = 10
var SPPBDrawParagraph = function(comps, data, offsets, links){

  offsets.element+=3;

  var j = data.search(/%%/)
  while(j!=-1){
    data = data.replace(/%%/,"")
  }

  j = data.search(/%[^%]+%/)
  while(j!=-1){
    s = data.substring(j+1);
    links.push(s.substring(0,s.indexOf("%")));
    //log(s.substring(0,s.indexOf("%")))
    data = data.replace(/%[^%]+%/,"["+(offsets.linkNum+1)+"]")
    offsets.linkNum++;
    j = data.search(/%[^%]+%/)
  }

  var s = []
  var dataLeft = data;
  j = 0;
  while(dataLeft.length>0&&j<500){
    lastSpacePos = dataLeft.substring(0,maxPTextLength).lastIndexOf(" ")
    if(maxPTextLength-lastSpacePos<maxFewerCharactersNewline){
      s.push(dataLeft.substring(0,lastSpacePos))
      dataLeft = dataLeft.substring(lastSpacePos)
    }else{
      s.push(dataLeft.substring(0,maxPTextLength))
      dataLeft = dataLeft.substring(maxPTextLength)
    }
    j++
  }


  if(j>500)log("yeet alert")
  //for(j=0;j<s.length;j++)
  //  log(s[j]);

  for(j=0;j<s.length;j++){
    	comps.push({ type: "text",position:[5,offsets.element,90,5],value:s[j],color:UISkin(ship).main,align:"left"})
      offsets.element+=5;
  }

}

var SPPBDrawTitle = function(comps, data, offsets){
  comps.push(
    { type:"box",position:[0,offsets.element,100,7],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
    { type: "text",position:[0,offsets.element,100,7],value:data,color:UISkin(ship).sec}
  )
  offsets.element+=7;
}

var SPPBDrawSeparator = function(comps, data, offsets){
  comps.push(
    { type:"box",position:[0,offsets.element+1,100,1],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
  )
  offsets.element+=5;
}

var SPPBDrawColumns = function(comps, data, offsets, widths){
  leftShift = 0;
  for(j=0; j<widths.length;j++){
    if(j%2==0){
      colF = UISkin(ship).main
      colB = UISkin(ship).sec
    }else{
      colB = UISkin(ship).main
      colF = UISkin(ship).sec
    }
    comps.push(
      { type:"box",position:[leftShift,offsets.element,widths[j],7],fill:colB,stroke:colB,width:2},
      { type: "text",position:[leftShift,offsets.element,widths[j],7],value:data[j],color:colF}
    )
    leftShift+=widths[j]
  }
  offsets.element+=7;
}

screens[5] = {
  name: "SP Pages Browser",
  maxScroll: 200,
  tick: function(ship){
    this.redraw(ship, true);
  },
  redraw: function(ship, b){

    ship.setUIComponent(
      {id: "SPPBHeader",
      position: [25,25,30,7],
      visible: b,
      components: [
        { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2},
    	{ type: "text",position:[0,0,100,100],value:"SP Pages Browser",color:UISkin(ship).main},
    		]
      }
    );

    if(ship.custom.SPPB.redrawPage||!b){
      log("hey")
      log(SPPages);
      for(var i = 0; i<ship.custom.SPPB.chunksAmount; i++){
        ship.setUIComponent(
          {id: "SPPBChunk"+i,
          position: [25,35,50,40],
          visible: false,
          }
        );
      }
      /*ship.setUIComponent(
        {id: "SPPBPageBkg",
        position: [25,35,50,40],
        visible: false,
        components: [
          { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2}
        ]
        }
      );*/
      ship.custom.SPPB.redrawPage = false;
      ship.custom.SPPB.pageLoaded = false;
      ship.custom.SPPB.pageElementsLoaded = 0;
      ship.custom.SPPB.loadingOffset = 5;
      ship.custom.SPPB.chunksAmount = 0;
    }
    var chunkSize = 25;

    if(!ship.custom.SPPB.pageLoaded){
      var page = SPPages[ship.custom.SPPB.SPPage];

      var offsets = {linkNum: 0, element:ship.custom.SPPB.loadingOffset}

      var links = [];
      var comps = [];

      if(page!=null){
        for(var el = ship.custom.SPPB.scroll+ship.custom.SPPB.pageElementsLoaded; /*checked within the loop*/; el++){
          if(el<0)continue;
          if(offsets.element>100||el>=page.length){
            ship.custom.SPPB.pageLoaded = true;
            break;
          }
          if(comps.length>chunkSize){
            break;
          }
          switch(page[el].type){
            case 0:
              SPPBDrawParagraph(comps, page[el].data, offsets, links);
              break;
            case 1:
              SPPBDrawTitle(comps, page[el].data, offsets);
              break;
            case 2:
              SPPBDrawSeparator(comps, page[el].data, offsets);
              break;
            case 3:
              SPPBDrawColumns(comps, page[el].data, offsets, page[el].widths);
              break;
            default:
              log("wtf")
          }
        }
        ship.custom.SPPB.pageElementsLoaded = el-1;
        ship.custom.SPPB.loadingOffset = offsets.element;
        ship.custom.SPPB.chunksAmount++;
      }else{
        ship.custom.SPPB.pageLoaded = true;
      }

      ship.setUIComponent(
        {id: "SPPB404",
        position: [25,35,50,40],
        visible: b&&(page==null),
        components: [
      	   { type: "text",position:[0,10,100,10],value:"What? Where? When?",color:UISkin(ship).main},
           { type: "text",position:[0,20,100,20],value:"ERROR 404",color:UISkin(ship).main},
           { type: "text",position:[0,40,100,5],value:"So... this is awkward, but SPPB couldn't find the requested page",color:UISkin(ship).main},
      		]
        }
      );

      ship.custom.SPPBLinks = links;

      for(j=0;j<8;j++){
        if(j<links.length){
          ship.setUIComponent(
            {id: "SPPBLink"+j,
            position: [25+(j%4)*(50/4),75+Math.floor(j/4-1)*5,(50/4),5],
            visible: b,
            clickable: b,
            shortcut: ""+(j+1),
            components: [
              { type:"box",position:[0,0,100,100],fill:UISkin(ship).main,stroke:UISkin(ship).main,width:2},
          	   { type: "text",position:[0,30,100,40],value:"["+(j+1)+"] "+links[j],color:UISkin(ship).sec},
          		]
            }
          );
        }else{
          ship.setUIComponent(
            {id: "SPPBLink"+j,
            position: [25+(j%4)*(50/4),50,(50/4),5],
            visible: false
            }
          );
        }
      }

      ship.setUIComponent(
        {id: "SPPBChunk"+(ship.custom.SPPB.chunksAmount-1),
        position: [25,35,50,40],
        visible: b&&page!=null,
        components: comps
        }
      );

      //TODO: figure out this layering bullshit
      /*if(ship.custom.SPPB.chunksAmount==1){
        ship.setUIComponent(
          {id: "SPPBPageBkg",
          position: [25,35,50,40],
          visible: b&&page!=null,
          components: [
            { type:"box",position:[0,0,100,100],fill:UISkin(ship).sec,stroke:UISkin(ship).sec,width:2}
          ]
          }
        );
      }*/


    }

    drawButton(ship,58,25,"SPPBHomepage",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"0","Homepage");
    drawButton(ship,68,25,"close",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"U","Close");
    drawButton(ship,78,25,"scrollUp",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"I","Scroll up");
    drawButton(ship,78,68,"scrollDown",
    UISkin(ship).sec,UISkin(ship).sec,UISkin(ship).main,b,"L","Scroll down");

  },
  hide: function(ship){
    this.redraw(ship, false);
  },
  show: function(ship){
    if(ship.custom.SPPB==null){
      ship.custom.SPPB = {
        SPPage: null,
        scroll: 0,
        redrawPage: true,
        pageLoaded: false,
        pageElementsLoaded: 0,
        loadingOffset: 0,
        chunksAmount: 0
      };
    }
    ship.custom.SPPB.SPPage = "credits";
    this.redraw(ship, true);
  },
  input: function(ship,input){
    if(input == "close")
      switchScreen(ship,0);
    if(input == "SPPBHomepage"){
      ship.custom.SPPB.scroll = 0;
      ship.custom.SPPB.SPPage = "credits";
      ship.custom.SPPB.redrawPage = true;
    }
    if(SPPages[ship.custom.SPPB.SPPage]!=null){
      if(input == "scrollUp"){
        ship.custom.SPPB.scroll--;
        if(ship.custom.SPPB.scroll<0)
        ship.custom.SPPB.scroll=0;
        ship.custom.SPPB.redrawPage = true;
      }
      if(input == "scrollDown"){
        ship.custom.SPPB.scroll++;
        if(ship.custom.SPPB.scroll>=SPPages[ship.custom.SPPB.SPPage].length)
        ship.custom.SPPB.scroll=SPPages[ship.custom.SPPB.SPPage].length-1;
        ship.custom.SPPB.redrawPage = true;
      }
    }
    if(input.includes("SPPBLink")){
      try{
        ship.custom.SPPB.SPPage = ship.custom.SPPBLinks[+input[8]];
        ship.custom.SPPB.scroll = 0;
        ship.custom.SPPB.redrawPage = true;
      }catch(e){

      }
    }
  }
}
