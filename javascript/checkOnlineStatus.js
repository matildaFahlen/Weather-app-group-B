let onlineStatus = document.getElementById("online-status");

const checkOnlinestatus = async () => {
    return navigator.onLine;  
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
}, 5000);