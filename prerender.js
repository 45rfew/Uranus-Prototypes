const fs = require('fs');

var childProcess = require('child_process');

//cheers
//https://stackoverflow.com/questions/22646996/how-do-i-run-a-node-js-script-from-within-another-node-js-script
function runScript(scriptPath, args, callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath, args);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });
}

//cheers.
//https://stackoverflow.com/questions/8403108/calling-eval-in-particular-context
evalWithContext = function(s){
  eval(s);
}

runScript("file-tape.js",["compile-main.txt","-override"],function(err){
    if(err!=null){
      console.error(err);
      return;
    }
    console.log("Prerendering SPrototypes...")
    var rendered = fs.readFileSync("prototypes.js","utf8");

    var SPContext = {};
    /*window = {};
    document = {
      getElementsByClassName: function(){}
    };*/
    game = {
      step: 0,
      ships: [],
      setObject: function(){},
      modding:{
        terminal:{
          echo: function(s){
            console.log(s);
          },
          error: function(s){
            console.log(s);
          }
        }
      }
    }
    /*performance = {
      now: function(){}
    }*/

    console.log("Mod startup.\n\n");
    evalWithContext.call(SPContext,rendered);
    console.log("Mod loaded.\n\n");
    var i = 0;
    while(i<1500){
      i++;
      SPContext.tick(game);
      game.step++;
      //console.log(parsingPage);
    }
    var result = "//Generated via prerender.js at "+new Date()+"\r\n\r\n"+SPContext.prerenderSP(false);

    fs.writeFileSync(__dirname+"\\init\\prerendered\\prerenderSP.js", result, 'utf8');

    runScript("file-tape.js",["compile-ships-prerendered.txt","-override","setflag=noTickWithoutPlayers"//
      //"setflag=onlySchedulerTick"
    ],function(err){
      if(err==null){
        console.log("Prerendered successfully.");
      }else{throw err;}
    })
})
