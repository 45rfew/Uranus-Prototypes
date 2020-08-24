var modsys = {};

modsys.scheduler = {
  tasks: [],
  scheduleTask: function(func,period=60,offset=0,condition){
    var task = {
      enabled: true,
      period: period,
      offset: offset,
      condition: condition,
      exec: func
    };
    this.tasks.push(task);
  },
  tick: function(step){
    var tasks = this.tasks;
    for(var i = 0; i<tasks.length; i++){
      var t = tasks[i]
      if( (step+t.offset)%t.period==0 && (t.condition==null||t.condition()) ){
        t.exec();
      }
    }
  }
}
