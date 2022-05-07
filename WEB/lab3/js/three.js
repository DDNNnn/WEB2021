
var canvas = document.getElementById('p1');
// var context = canvas.getContext('2d');
var num=0;
function trun_red() {
  canvas.style.color="red";
}

function the_date()  {
      var today=new Date();
      var h=today.getFullYear();
      var m=today.getMonth()+1;
      var s=today.getDate();
      m=checkTime(m);
      s=checkTime(s);
      document.getElementById('head').innerHTML=h+":"+m+":"+s;
      t=setTimeout('the_date()',500);
    }
    function checkTime(i) {
      // add a zero in front of numbers<10
      if (i<10)  {i="0" + i;}
      return i;
    }

function Add() {
  document.getElementById("p3").classList.add("fn-active");
}

function Delete() {
  
    if(num===0){
      var parent=document.getElementById("ul");
  var child=document.getElementById("p8");
  parent.removeChild(child);
    }
    num=1;
}


function web() {
    window.open("https://www.taobao.com/");    
}

function again() {
  var para=document.createElement("p9");
  var node=document.createTextNode("p9");
  para.appendChild(node);
  var element=document.getElementById("ul");
  element.appendChild(para);
   
}

function lab(event){
  x=event.clientX
        y=event.clientY
        if((x>=30)&&(x<=70)){
          if((y>=85)&&(y<=250)){
            alert (parseInt((y-85)/20.625+1))
          }
        }
}

function width(){
   var div = document.getElementById("m-box");
    div.style.width = window.innerWidth + "px";
}

