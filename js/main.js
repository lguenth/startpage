function dateTime() {
	const date = new Date();
	const weekdayOptions = { weekday: 'long' };
	const dateOptions = {year: 'numeric', month: '2-digit', day: '2-digit' }
	const dayToday = date.toLocaleDateString('de-DE', weekdayOptions);
  	const dateToday = date.toLocaleDateString('de-DE', dateOptions)
	const time = date.toLocaleTimeString('de-DE');
	document.getElementById('date-time').innerHTML = '<p id="date">' + dayToday + ', ' + dateToday + '</p><p id="time">' + time + '</p>';
	setTimeout(dateTime, 1000);
}
