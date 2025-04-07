const currentDate = new Date();

function main() {
	const currentYear = currentDate.getFullYear();

	const christmasThisYear = new Date(`${currentYear}-12-25`);
	const nextChristmasDate = currentDate > christmasThisYear
		? new Date(`${currentYear + 1}-12-25`) : christmasThisYear;

	const nextNewYearDate = new Date(`${currentYear + 1}-01-01`);

	updateCountdown(nextChristmasDate, "days-until-christmas");
	updateCountdown(nextNewYearDate, "days-until-new-year");
}

function updateCountdown(targetDate, elementId) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysUntilTarget = Math.round((targetDate - currentDate) / millisecondsPerDay);

  const element = document.getElementById(elementId);
  if (element) element.innerText = daysUntilTarget;
}

main();
