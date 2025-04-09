const currentDate = new Date();

function getNextChristmasDate(fromDate) {
  const currentYear = fromDate.getFullYear();
  const christmasThisYear = new Date(`${currentYear}-12-25`);
  return fromDate > christmasThisYear ? new Date(`${currentYear + 1}-12-25`) : christmasThisYear;
}

function getNextNewYearDate(fromDate) {
  const currentYear = fromDate.getFullYear();
  return new Date(`${currentYear + 1}-01-01`);
}

function updateCountdown(targetDate, elementId) {
	const daysUntilTarget = calculateDaysUntil(targetDate, currentDate);
	const element = document.getElementById(elementId);
	if (element) element.innerText = daysUntilTarget;
}

function calculateDaysUntil(targetDate, fromDate) {
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	return Math.round((targetDate - fromDate) / millisecondsPerDay);
}

function main() {
  const nextChristmasDate = getNextChristmasDate(currentDate);
  const nextNewYearDate = getNextNewYearDate(currentDate);
  
  updateCountdown(nextChristmasDate, "days-until-christmas");
  updateCountdown(nextNewYearDate, "days-until-new-year");
}

main();
