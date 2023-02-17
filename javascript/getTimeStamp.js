const timeStamp = new Date();

console.log(timeStamp.toTimeString());

const timeStampContainer = document.getElementById("time-stamp-info");

const setTimeStampLoading = () => {
	const timeStampElement = timeStampContainer.getElementsByClassName("time-stamp")[0];
	timeStampElement.innerText = `Loading...`;
};

const setTimeStampError = () => {
	const timeStampElement = timeStampContainer.getElementsByClassName("time-stamp")[0];
	timeStampElement.innerText = `Error`;
};

const updateTimeStamp = () => {
	const timeStampElement = timeStampContainer.getElementsByClassName("time-stamp")[0];
	timeStampElement.innerText = `Prognos Utfärdad: ${timeStamp.toTimeString().slice(0, 5)}`;
};
