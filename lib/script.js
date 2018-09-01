var choices = () => document.getElementsByClassName('choice');

function resetDisplay (length) {
	$('#choices').hide();
}

function randomChoices () {
	var length = choices().length;
	resetDisplay(length);
	var random_number = Math.floor(Math.random() * length);
	$('#choices')
}
