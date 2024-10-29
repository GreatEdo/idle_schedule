
function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hourDeg = (hours + minutes / 60 ) * 15;
    const minuteDeg = minutes * 6;

    document.querySelector(".hour_hand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.querySelector(".minute_hand").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;

}
setInterval(updateClock, 1000);
updateClock();


