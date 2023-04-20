var min=0;
var sec=0;
var millisec=0;
var timer;

  function callTimer(){
    millisec++;
    if (millisec<100){
        if(millisec==99){
       millisec=0;
        sec++
     if(sec==0){
      sec=0;
      min++;

     }
    }
  }
   else{
    millisec=0;  
   }
  document.getElementById("timer").innerHTML=min + ":" + sec +":" + millisec;
  }

  function start(){
     document.getElementById("start").disabled=true;
     timer=setInterval(callTimer,10);
  }

  function stop(){
    document.getElementById("start").disabled=false;
    clearInterval(timer);
  }

  function reset(){
     stop();
     min=0;
     sec=0;
     sec=0;
     millisec=0;
     document.getElementById("timer").innerHTML=min+":"+sec +":"+millisec;



  }