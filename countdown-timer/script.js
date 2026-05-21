const targetDate = new Date("December 31, 2026 23:00:00").getTime();
function updateCountdown(){
    const now = new Date().getTime();

    const difference =targetDate-now;

    const days=Math.floor(
        difference/(1000*60*60*24)
    );

    const hours=Math.floor(
        (difference % (1000*60*60*24))/(1000*60*60)
    );

    const minutes=Math.floor(
        (difference%(1000*60*60))/(1000*60)
);

const seconds=Math.floor(
(difference%(1000*60))/1000
);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();
