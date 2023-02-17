let onlineStatus = document.getElementById("online-status");

//hämtar bild i assets, return false om hämtningen inte går
const checkOnlinestatus = async () => {
    try {
        const online = await fetch("../assets/test-pixel.png");
        return online.status >= 200 && online.status < 300;
    } catch (err) {
        return false;
    }
}

//kollar var 30e sek
setInterval(async () => {
    const result = await checkOnlinestatus();
    if (result === false) {
        console.log("offline");
        onlineStatus.innerText = "Ingen anslutning till Internet";
    } else {
        console.log("online")
    }
}, 30000);