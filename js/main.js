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

function weatherBalloon(cityID) {
	var apiKey = ''; //OpenWeather API key
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + apiKey)
		.then(function(resp) {
			return resp.json()
		})
		.then(function(data) {
			let weatherIcon = data.weather[0].icon;
			let tempK = parseFloat(data.main.temp);
			let tempC = Math.round(tempK - 273.15);
			let tempF = Math.round((tempK - 273.15) * 1.8) + 32;
			document.getElementById('weather').innerHTML = '<p id="location">' + data.name + '</p><p id="details" ' + 'title="' + tempF + '&deg;F">' + '<img src="https://openweathermap.org/img/wn/' + weatherIcon + '.png">' + data.weather[0].description + '<span class="separator">|</span>' + tempC + '&deg;C</p>';
		});
}

function traichu() {
	dateTime();
	// weatherBalloon(); //OpenWeather city ID
}
