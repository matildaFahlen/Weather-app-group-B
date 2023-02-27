let onlineStatus = document.getElementById("online-status");

const checkOnlinestatus = async () => {
    return navigator.onLine;  
}

setInterval(async () => {
    const result = await checkOnlinestatus();
    if (result === false) {
        onlineStatus.innerText = "No internet connection";
    } else {
        onlineStatus.innerText = "";
    }
}, 5000);