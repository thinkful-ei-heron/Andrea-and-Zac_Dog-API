/* eslint-disable indent */
'use strict';

// listens for submit button and passes input
// prints results to console
function onSubmit() {
	$('.inputForm').submit( event => {
		event.preventDefault();
		let numberOfDogs = $('.num').val();
		if (numberOfDogs > 50 || numberOfDogs < 1) {
			alert('Please enter a number between 1 and 50');
		}
		else {
		console.log(numberOfDogs);
		$('.output').html('');
		createHTML(numberOfDogs);
	}});
}

function createHTML(num) {
	for (let i = 0; i < num; i++) {
		fetch('https://dog.ceo/api/breeds/image/random')
		.then(result => result.json())
		.then(jsonData => extractImg(jsonData))
		.catch(e => console.log(e));
		
	}
}

function extractImg(data) {
	let {
		message,
		status,
	} = data;

	$('.output').append(`
			<img src='${data.message}'>
		`);
}

onSubmit();