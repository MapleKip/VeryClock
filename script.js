function updateTime() {
  var t = new Date(),
    h = t.getHours(),
    m = t.getMinutes(),
    s = t.getSeconds(),
    ms = t.getMilliseconds();
  function addZero(x) {
    if(x<10){
      return "0"+x.toString()
    }else{
      return x
    }
  } 
  document.getElementById("clock").innerHTML = `${h>12 ? h-12 : h} : ${addZero(m)} . ${addZero(s)}`;
  // document.getElementById("ms").innerHTML = `${ms.toString()[0]}`;

}

updateTime();
setInterval(updateTime, 10);
