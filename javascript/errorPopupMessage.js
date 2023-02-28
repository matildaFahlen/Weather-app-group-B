const popupBox = document.getElementById("error-message-container");
const popupText = document.getElementById("error-message");

const clearMessage = () => {
	popupBox.style.top = "-50px";
	setTimeout(() => {
		popupText.innerText = "";
	}, 1000);
};

const errorPopupMessage = (message) => {
	popupText.innerText = message;
	popupBox.style.top = "12px";
	setTimeout(() => {
		clearMessage();
	}, 3000);
};

document.getElementById("error-button").addEventListener("click", function () {
	clearMessage();
});
