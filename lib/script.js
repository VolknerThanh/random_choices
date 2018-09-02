var current_number = 1;

var choices = () => document.getElementsByClassName('choice');

function resetDisplay () {
	$('.choice').addClass('hide');
}

function randomChoices () {
	var length = choices().length / 3;
	resetDisplay();
	var random_number;

	do{
		random_number = Math.floor(Math.random() * length);
	} while(Math.abs(current_number - random_number) <= 3);

	console.info(random_number + " - " + (length));
	// showChoices(random_number, length);
	animateChoices(random_number, length);
}

function showChoices (number, max) {
	var prev, curr = number + 1, next;

	if (curr == max) {
		prev = curr - 1;
		next = 1;
	}
	else if (curr == 1) {
		prev = max;
		next = curr + 1
	}
	else {
		prev = curr - 1;
		next = curr + 1;
	}

	$('#choices1 div.choice:nth-child(' + prev + ')').removeClass('hide');
	$('#choices2 div.choice:nth-child(' + curr + ')').removeClass('hide');
	$('#choices3 div.choice:nth-child(' + next + ')').removeClass('hide');
}

function animateChoices (number, max) {
	var once_time = true;
	var timer = setInterval(function() {
		console.info(">> current: " + current_number);
		console.info(">> number: " + number);
		if(current_number == number) { 
			if (once_time == true){
				randomChoices();
				once_time = false;
			}
			else{
				clearInterval(timer);
			}
		}
		else {
			once_time = false;
			resetDisplay();
			showChoices(current_number, max);
			if(current_number == max - 1) { current_number = 0; }
			else { current_number++; }
		}
	}, 100);
}