const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
	event.preventDefault();
	const form = new FormData(this);
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			Accept: 'aplication/json',
		},
	});
	if (response.ok) {
		alert('Gracias por contactarme, te respondere pronto.');
		$form.reset();
	}
}

window.onscroll = function () {
	console.log(window.scrollY);
	const activeElement = document.getElementsByClassName('active')[0];
	const home = document.querySelectorAll('a')[1];
	const about = document.querySelectorAll('a')[2];
	const projetcs = document.querySelectorAll('a')[3];
	const contact = document.querySelectorAll('a')[4];

	if (window.scrollY >= 0 && window.scrollY < 883) {
		activeElement.classList.remove('active');
		home.classList.add('active');
	} else if (window.scrollY >= 883 && window.scrollY < 1448) {
		activeElement.classList.remove('active');
		about.classList.add('active');
	} else if (window.scrollY >= 1448 && window.scrollY < 2400) {
		activeElement.classList.remove('active');
		projetcs.classList.add('active');
	} else if (window.scrollY >= 2400) {
		activeElement.classList.remove('active');
		contact.classList.add('active');
	}
};

document.getElementById('cv').addEventListener('click', function () {
	alert('Aun no tengo CV :)');
});
