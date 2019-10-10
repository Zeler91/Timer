const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const startStop = document.querySelector('.start-stop');

let timeinterval;

seconds.value = 0;
minutes.value = 0;

const countDown = (btnText) => {	
	let total = seconds.value + minutes.value * 60;
  let textChild = btnText;
  timeinterval = setTimeout(countDown, 1000, btnText);
  if(btnText == "Start")
  {
    clearInterval(timeinterval);
  }

  if (total <= 0) {
    clearInterval(timeinterval);
    startStop.innerHTML = "Restart";
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(seconds.value > 0) seconds.value--;
  else{
  	seconds.value = 59;
    minutes.value--;
  } 
}


function CheckTime(elem){
  if (elem) {
    if (elem.value < 0) {
    elem.value = 59;
    }
    if (elem.value > 59) {
      elem.value = 0;
    }  
  } 
};
  
seconds.oninput = function(){
  CheckTime(this);
};

minutes.oninput = function(){
  CheckTime(this);
};

startStop.onclick = () => { 
  if(startStop.innerHTML == "Restart")
  {
    window.location.reload();
  }
  if(startStop.innerHTML == "Stop")
  {
    startStop.innerHTML = "Start";
    clearInterval(timeinterval);
  }
  else{
    startStop.innerHTML = "Stop";
    countDown("Stop");
  }
}