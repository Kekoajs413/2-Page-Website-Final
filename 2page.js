window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
  document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
    setTimeout(clock, 1000);
    }
}



function run1(){

  document.case.display.value += "1"
};
function run2(){

  document.case.display.value += "2"
};
function run3(){

  document.case.display.value += "3"
};
function run4(){

  document.case.display.value += "4"
};
function run5(){

  document.case.display.value += "5"
};

function run6(){

  document.case.display.value += "6"
};

function run7(){

  document.case.display.value += "7"
};

function run8(){

  document.case.display.value += "8"
};

function run9(){

  document.case.display.value += "9"
};

function run0(){

  document.case.display.value += "0"
};
function runPlus(){

  document.case.display.value += "+"
};
function runMinus(){

  document.case.display.value += "-"
};
function runDivide(){

  document.case.display.value += "/"
};
function runMultiply(){

  document.case.display.value += "*"
};

function runC(){

  document.case.display.value = ""
};

function runEquals() {
  var equals = eval(document.case.display.value)
  document.case.display.value = equals;
}



function myFunction() {
  alert("Thank you for viewing my website!");
}