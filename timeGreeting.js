function currentTimeAndGreeting() {
    const now = new Date();

    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    const formatHour = String(currentHour).padStart(2, '0');
    const formatMinute = String(currentMinute).padStart(2, '0');
    
    
    document.querySelector(".hours").innerText = formatHour;
    document.querySelector(".minutes").innerText = formatMinute;   
    
    let greeting;
    if(currentHour < 12) {
    greeting ="Good morning,";
    } else if(currentHour > 12 && currentHour < 18){
        greeting = "Good afternoon,"
    } else {
        greeting = "Good evening,"
    }
document.querySelector(".greeting").innerText = greeting;
    
}

currentTimeAndGreeting();
setInterval(currentTimeAndGreeting, 1000);
