$(document).ready(function() {
	resetDisplay();
});

var choices = () => document.getElementsByClassName('choice');

function resetDisplay () {
	$('.choice').addClass('hide');
}

function randomChoices () {
	var length = choices().length;
	resetDisplay();
	var random_number = Math.floor(Math.random() * length);
	console.info(random_number + " - " + (length - 1));
	showChoices(random_number, length - 1);
}

function showChoices (number, max) {
	var prev, curr = number + 1, next;
	if(number == 0){
		prev = max + 1;
		next = curr + 1;
	}
	else if (number == max) {
		prev = curr - 1;
		next = 1;
	}
	else{
		prev = curr - 1;
		next = curr + 1;
	}


	$('div.choice:nth-of-type(' + prev + ')').removeClass('hide');
	$('div.choice:nth-of-type(' + curr + ')').removeClass('hide');
	$('div.choice:nth-of-type(' + next + ')').removeClass('hide');
}
