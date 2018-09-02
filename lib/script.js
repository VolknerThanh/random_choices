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
	var random_number;
	do{
		random_number = Math.floor(Math.random() * length);
	} while(random_number == 0 || random_number == length - 1);
	console.info(random_number + " - " + (length - 2));
	showChoices(random_number, length - 2);
}

function showChoices (number, max) {
	var prev, curr = number + 1, next;
	prev = curr - 1;
	next = curr + 1;

	$('div.choice:nth-of-type(' + prev + ')').removeClass('hide');
	$('div.choice:nth-of-type(' + curr + ')').removeClass('hide');
	$('div.choice:nth-of-type(' + next + ')').removeClass('hide');
}
