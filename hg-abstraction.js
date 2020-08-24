var childProcess = require('child_process');

//TODO: LMFAO duplicate code. Too lazy to extract it into a module
//not that i know how to do it :joy::gun:

//maybe run file-tape on prerender.js and hg-abstraction.js? :thinking:

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

function processArguments(arr){
  var options = {};
  for(var i = 0; i<arr.length; i++){
    var equalsIndex = arr[i].indexOf("=");
    if(equalsIndex>=0){
      switch(arr[i].substring(0,equalsIndex).toLowerCase()){
        case "message":
        case "m":
          options.commitMessage = arr[i].substring(equalsIndex+1);
          break;
        default:
          console.log("Unknown argument "+arr[i])
      }
    }else if(arr[i][0]=="-"){
      options[arr[i].substring(1).toLowerCase()] = true;
    }
  }
  return options;
}

//cheers.
//https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
executeCommand = function(cmd){
  childProcess.exec(cmd, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    if(stdout.length>0)
      console.log(`stdout: \n${stdout}`);
    if(stderr.length>0)
      console.log(`stderr: \n${stderr}`);
  });
}

if(process.argv.length<2){
  console.error("Expected 1 or more arguments.")
}else{
  var args = process.argv;

  var options = processArguments(args.slice(2));

  if(options.commit){
    if(options.commitMessage==null){
      console.error("No commit message specified.")
      return;
    }

    runScript("prerender.js",[],function(err){
      if(err!=null){throw err;}
    })

    executeCommand("hg addremove");
    executeCommand("hg commit -m \""+options.commitMessage+"\" -u strutinsky5386")

    if(options.push){
      executeCommand("hg push");
    }
  }
  if(!options.commit&&!options.push){
    executeCommand("hg status");
  }
}
