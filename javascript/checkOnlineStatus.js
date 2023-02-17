let onlineStatus = document.getElementById("online-status");

const checkOnlinestatus = async () => {
    try {
        const online = await fetch("./assets/test-pixel.png");
        return online.status >= 200 && online.status < 300;
    } catch (err) {
        return false;
    }
}

setInterval(async () => {
    const result = await checkOnlinestatus();
    if (result === false) {
        console.log("offline");
        onlineStatus.innerText = "No internet connection";
    } else {
        console.log("online")
        onlineStatus.innerText = "";
    }
}, 15000);