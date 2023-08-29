const circularprocesser = document.querySelector('.circular-processer'),
progresservalue = document.querySelector('.progresser-value');

let progressStartValue = 0,
progressEndValue = 100,
speed = 100;

let progress = setInterval(()=>{
    progressStartValue++;

   progresservalue.innerHTML = `${progressStartValue}%`;
  circularprocesser.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`


    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    console.log(progressStartValue);
}, speed);