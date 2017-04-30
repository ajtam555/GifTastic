var cars = ['Ferrari','Lamborghini','Aston Martin','Porsche','Pagani','Bugatti','Jaguar','Maserati'];

function render() {

	$('#buttons').empty();

	for(var i=0; i<cars.length; i++) {
		var button = $('<button>');
		button.addClass('cars');
		button.attr('data-name', cars[i]);
		button.text(cars[i]);
		$('#buttons').append(button);
	}	
}

function displayCarsGif() {

	$('#gifs').empty();

	var car = $(this).attr('data-name');
	var limits = '&limit=10';
	var APIKey = '&api_key=dc6zaTOxFJmzC';
	var query = 'http://api.giphy.com/v1/gifs/search?q=' + car + limits + APIKey;


	$.ajax({
		url: query,
		method: 'GET'
	}).done(function(response) {

		for(var j=0; j<=10; j++){
			// Create div to hold car
			var carDiv = $('<div class="car">');

			// Get rating from response and store in variable
	 		var rating = response.data[j].rating;

	 		// Store rating and associated P tag in variable
	 		var ratingHeader = $('<p>').text('Rating: ' + rating);

	 		// Prepend the ratingHeader to the new div
	 		carDiv.prepend(ratingHeader);

	 		// Get image URL from response and store in variable
	 		var imgURL = response.data[j].images.downsized.url;

	 		// Store image and associated img tag in variable
	 		var imgCar = $('<img>').attr('src', imgURL);

	 		// Append the image to the new div
	 		carDiv.append(imgCar);

	 		// Append the new div existing div id=gifs
	 		$('#gifs').append(carDiv);

	 		// var dynamicURL = $('<img>');

	 		// var dynamicURL = response.data[j].images.fixed_height_small_still.url;

	 		// var dynamicURL = response.data[j].images.fixed_height_small.url;

	 		// dynamicURL.attr('data-still', stillURL);

	 		// dynamicURL.attr('data-animate', animatedURL);

	 		// dynamicURL.attr('data-state', 'still');

	 		// dynamicURL.addClass('dynamic_image');

	 		// carDiv.append(dynamicURL);

	 		// $('#gifs').append(carDiv);

 		}

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

	// $(document).on('click', '.dynamic_image', function() {
	// 	var state = $(this).attr('data-state');
	// 	if(state === 'still') {
	// 		$(this).attr('src', $(this).data('data-animate'));
	// 		$(this).attr('data-state', 'data-animate');
	// 	} else {
	// 		$(this).attr('src', $(this).data('data-still'));
	// 		$(this).attr('data-state', 'still'); 
	// 	}
	// });

	// Render buttons to display initial buttons
	render();

