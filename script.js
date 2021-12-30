const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const x = new Date().getFullYear()
const y = x+1;
const newYear = new Date(y,0,1,0,0,0,0)

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    console.log(days)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds =  Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown,1000)

