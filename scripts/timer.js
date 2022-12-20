const minutesNode = document.getElementById('minutes');
const secondsNode = document.getElementById('seconds');
const millisecondsNode = document.getElementById('milliseconds');

const buttonParentDivName = document.querySelector('.button--areas');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
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
        },10);


    }
    
    if(buttonClassName=="pauseTimer"){
        console.log(buttonClassName);
        alert(buttonClassName);
    }

    if(buttonClassName=="stopTimer"){
        console.log(buttonClassName);
        alert(buttonClassName);
    }

}

buttonParentDivName.addEventListener('click',TimerButton);

