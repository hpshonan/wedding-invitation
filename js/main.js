
const weddingDay = new Date("Sep 27, 2026 09:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const gap = weddingDay - now;

const day = Math.floor(gap / (1000*60*60*24));
const hour = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
const minute = Math.floor((gap % (1000*60*60))/60000);
const second = Math.floor((gap % 60000)/1000);

document.getElementById("days").innerText = day;
document.getElementById("hours").innerText = hour;
document.getElementById("minutes").innerText = minute;
document.getElementById("seconds").innerText = second;

},1000);
