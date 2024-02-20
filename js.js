// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minsEl = document.getElementById('mins');
// const secondsEl = document.getElementById('second');

// const newYears = "1 Jan 2024";
// function countdown(){
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();
    
//     const totalseconds = (newYearsDate - currentDate) / 1000;
    
//      const days = Math.floor (totalseconds / 3600/ 24);
//     const hours = Math.floor (totalseconds / 3600) % 24;
//     const minutes = Math.floor (totalseconds / 60) % 60;
//     const seconds = Math.floor(totalseconds) % 60;

//     daysEl.innerHTML= days;
//     hoursEl.innerHTML= hours;
//     minsEl.innerHTML= mins;
//     secondsEl.innerHTML= second;

    
//     // console.log(days, hours, minutes);
// }
//  countdown();
// setInterval(countdown, 1000);

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl =document.getElementById('seconds');
const newYears = " Jan 01 2025";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalseconds = (newYearsDate - currentDate) / 1000;
    
     const days = Math.floor (totalseconds /3600/ 24);
    const hours = Math.floor (totalseconds / 3600) % 24;
    const mins = Math.floor (totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML= days;
    hoursEl.innerHTML= formatTime(hours);
    minsEl.innerHTML= formatTime(mins);
    secondsEl.innerHTML= formatTime(seconds);

}
    function formatTime(time) {
        return time < 10 ?  '0$(time)': time;
}
 
  countdown();
 setInterval(countdown, 1000);

 

