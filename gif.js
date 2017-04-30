var cars = ['Ferrari','Lamborghini','Aston Martin','Porsche','Pagani','Bugatti','Jaguar','Maserati'];

function render() {
	for(i=0; i<cars.length; i++) {
		var button = $('<button>');
		button.addClass('cars');
		button.attr('data-name', cars[i]);
		button.text(cars[i]);
		$('#buttons').append(button);
	}	
}

function displayCarsGif() {

	var car = $(this).attr('data-name');
	var APIKey = '&api_key=dc6zaTOxFJmzC';
	var limits = '&limit=10';
	var query = 'http://api.giphy.com/v1/gifs/search?q=' + car + limits + APIKey;
	

	$.ajax({
		url: query,
		method: 'GET'
	}).done(function(response) {

		// Create div to hold car
		var carDiv = $('<div class="car">');

		// Get rating from response and store in variable
 		var rating = response.rating;

 		// Store rating and associated P tag in variable
 		var ratingHeader = $('<p>').text('Rating: ' + rating);

 		// Prepend the ratingHeader to the new
 		carDiv.prepend(ratingHeader);

 		// Add gif
 		// Append gif to carDiv
	});
}

// When user inputs text and clicks submit
	$('#car-submit').on('click', function(event){
		event.preventDefault();

		// Grab value in textbox and store in variable
		var car = $('#car-input').val().trim();

		// Push the variable into the cars array 
		cars.push(car);

		render();
	});

	// Listener on the 'document' for any clicks on buttons of class 'cars'
	// Call displayCarsGif to run API
	$(document).on('click', '.cars', displayCarsGif);

	// Render buttons to display initial buttons
	render();

	// Text input function
		// Create button
		// Append button
		// Push into array
		// Call Render buttons function

	// API call function
		// Call API function for any buttons clicked

	// Clear gifs function
		// Call clear function for any button clicked
