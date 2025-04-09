const currentDate = new Date();

function getNextChristmasDate() {
	const currentYear = currentDate.getFullYear();
	const christmasThisYear = new Date(`${currentYear}-12-25`);
	return currentDate > christmasThisYear ? new Date(`${currentYear + 1}-12-25`) : christmasThisYear;
}

function getNextNewYearDate() {
	const currentYear = currentDate.getFullYear();
	return new Date(`${currentYear + 1}-01-01`);
}

function updateCountdown(targetDate, elementId) {
	const daysUntilTarget = calculateDaysUntil(targetDate, currentDate);
	const element = document.getElementById(elementId);
	if (element) element.innerText = daysUntilTarget;
}

function calculateDaysUntil(targetDate) {
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	return Math.round((targetDate - currentDate) / millisecondsPerDay);
}

function updateChristmasCountdown() {
	const nextChristmasDate = getNextChristmasDate();
	updateCountdown(nextChristmasDate, "days-until-christmas");
}

function updateNewYearCountdown() {
	const nextNewYearDate = getNextNewYearDate();
	updateCountdown(nextNewYearDate, "days-until-new-year");
}

function init() {
	updateChristmasCountdown();
	updateNewYearCountdown();
}

init();