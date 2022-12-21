const minutesNode = document.getElementById('minutes');
const secondsNode = document.getElementById('seconds');
const millisecondsNode = document.getElementById('milliseconds');
const hoursNode = document.getElementById('hours');
const buttonParentDivName = document.querySelector('.button--areas');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchTimer = null;
//using event delegation pattern here so that I don't need to use events again and again
function TimerButton(event){
    let buttonClassName = event.target.classList[0];
    
    if(buttonClassName=="startTimer"){
        // console.log(buttonClassName);
        // alert(buttonClassName);
        if(stopwatchTimer){
            return;
        }

        stopwatchTimer = window.setInterval(()=>{
            millisecondsNode.innerText = milliseconds.toString().slice(0,2);
            milliseconds +=10;

            if(hours == 23 &&minutes == 59 && seconds == 59 && milliseconds===990){
                stopInterval();
            }else if(milliseconds === 1000){
                milliseconds = 0;
                seconds++;
                secondsNode.innerText = seconds < 10 ? '0' + seconds : seconds;

            }else if(seconds === 60){
                seconds = 0;
                minutes++;
                minutesNode.innerText = minutes < 10 ? '0' + minutes:minutes;
            }else if(minutes === 60){
                minutes = 0;
                hours++;
                hoursNode.innerText = hours < 10 ? '0'+hours:hours;
            }



        },10);


    }
    
    if(buttonClassName=="pauseTimer"){
        
        pauseTimer();
    }

    if(buttonClassName=="stopTimer"){

        stopTimer();
    }

}

function stopTimer(){
    window.clearInterval(stopwatchTimer);
    stopwatchTimer = null;
    milliseconds=0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    millisecondsNode.innerText = '00';
    secondsNode.innerText = seconds < 10 ? '0' + seconds : seconds;
    minutesNode.innerText = minutes < 10 ? '0' + minutes : minutes;
    hoursNode.innerText = hours < 10 ? '0' + hours: hours;
}

function pauseTimer(){
    window.clearInterval(stopwatchTimer);
    stopwatchTimer = null;
}

buttonParentDivName.addEventListener('click',TimerButton);

