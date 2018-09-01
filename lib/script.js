$(document).ready(function() {
	resetDisplay();
});

var choices = () => document.getElementsByClassName('choice');

function resetDisplay () {
	$('.choice').hide();
}

function randomChoices () {
	var length = choices().length;
	resetDisplay();
	var random_number = Math.floor(Math.random() * length);
	$('div.choice:nth-of-type(' + Number(random_number + 1) + ')').show();
}
