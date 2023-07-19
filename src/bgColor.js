// Have a function determine the background colour for the timezone
// pass the timezone string for each timezone to the function
// if the timezone is before midday- set bg early morning color
// grab the span for each timezone string

export const controlClassName = (elements) => {
	elements.forEach((timezone) => {
		// Extract the timezone string from the span element
		const timezoneName = timezone.textContent;

		// Create a new Date object using the timezone string
		const date = new Date();
		const options = { timeZone: timezoneName, hour12: false };
		const hours = date
			.toLocaleString('en-US', options)
			.split(', ')[1]
			.split(':')[0];

		console.log(hours);

		// Determine the appropriate background color based on the time in the timezone
		let className = '';
		switch (true) {
			case hours >= 0 && hours < 7:
				className = 'earlyMorning';
				break;
			case hours >= 7 && hours < 12:
				className = 'morning';
				break;
			case hours >= 12 && hours < 16:
				className = 'day';
				break;
			case hours >= 16 && hours < 18:
				className = 'day';
				break;
			case hours >= 18 && hours < 24:
				className = 'night';
				break;
			default:
				className = 'night'; // night
				break;
		}

		// Set the background color of the parent element using the determined color
		timezone.parentElement.classList.add(className);
	});
};
