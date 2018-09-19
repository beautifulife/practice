// -----------------시계-----------------
function realTime(){
  var clockInfo = document.getElementById("clockInfo");
  var clockTime = document.getElementById("realClock");
  var clockYear = document.getElementById("clockYear");
  var clockMonth = document.getElementById("clockMonth");
  var clockDate = document.getElementById("clockDate");
  var clock = new Date();
  var timeZone = clock.toLocaleString('en', {timeZoneName:'long'}).split(' ');
  // (function () {
    for (let i=0; i<3; i++){
      timeZone.shift();
    }    
  // })();
  clockInfo.innerHTML = timeZone.join(' ');
  clockTime.innerHTML = clock.toLocaleTimeString();
  clockYear.innerHTML = clock.getFullYear() + " /";
  clockMonth.innerHTML = clock.getMonth()+ 1 + " /";
  clockDate.innerHTML = clock.getDate();
  
  setTimeout(realTime, 1000);
}
window.onload = realTime;

// -----------------스탑와치-----------------

(function () {
  var watchStart = document.getElementById("start");
  var watchPause = document.getElementById("pause");
  var watchReset = document.getElementById("reset");
  var watchRecord = document.getElementById("record");
  var watchTimeFlow = document.getElementById("timeFlow");
  var recordList = document.getElementById("ol");
  var watchClear = document.getElementById("recordsClear");
  
  var hours = 0;
      minutes = 0;
      seconds =0;
      miliSeconds = 0;
      t= 0;
  var running= false;

  function runningTime () {
    miliSeconds ++
    if (miliSeconds >= 100){
      miliSeconds = 0;
      seconds ++
    }
    if (seconds >= 60){
      seconds =0;
      minutes ++
    }
    if (minutes >= 60){
      minutes =0;
      hours ++;
    }
    if (hours >= 99){
      hours=0;
    }
    watchTimeFlow.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliSeconds > 9? miliSeconds: "0"+ miliSeconds);
    flowing();
  }
  
  function flowing() {
    t = setTimeout(runningTime, 10);
  }

  watchStart.addEventListener("click", start);
  watchPause.addEventListener("click", pause);
  watchReset.addEventListener("click", reset);
  watchRecord.addEventListener("click", record);
  watchClear.addEventListener("click", recordsClear);

  function start(){
    if (!running) {
      flowing();
      running = true;
    }
  }

  function pause(){
    if (running) {
      clearTimeout(t);
      running = false;
    }
  }

  function reset(){
    watchTimeFlow.textContent = '00:00:00:00';
    hours = 0;
    minutes = 0;
    seconds =0;
    miliSeconds = 0;
  }
  
  function record(){
    if (running === true) {
      var list = document.createElement('li');
      list.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliSeconds > 9? miliSeconds: "0"+ miliSeconds);
      console.log(list.textContent);
      console.log(recordList);
      recordList.appendChild(list);

      // console.log('a');
    }
  }

  function recordsClear(){
    while(recordList.firstElementChild.firstChild){
    recordList.firstElementChild.removeChild(recordList.firstElementChild.firstChild);
    }
  }
})();