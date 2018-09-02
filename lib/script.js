var choices = () => document.getElementsByClassName('choice');

function resetDisplay () {
	$('.choice').addClass('hide');
}

function randomChoices () {
	var length = choices().length / 3;
	resetDisplay();
	var random_number = Math.floor(Math.random() * length);
	console.info(random_number + " - " + (length));
	showChoices(random_number, length);
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

function animateChoices () {
	var time = 7;

}