/* eslint-disable indent */
'use strict';

// listens for submit button and passes input
// prints results to console
function onSubmit() {
	$('.inputForm').submit( event => {
		event.preventDefault();
		let breedOfDog = $('.breed').val();
		console.log(breedOfDog);
		$('.output').html('');
		createHTML(breedOfDog);
	});
}

function createHTML(breed) {
	fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
	.then(result => result.json())
	.then(jsonData => extractImg(jsonData))
	.catch(e => {
		console.log(e);
		notFound(breed);
	});
		
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

function notFound(search) {
	$('.output').append(`
			<h2>Request for ${search} cannot be found!</h2>
		`);
}

onSubmit();