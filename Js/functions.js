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

document.getElementById('cv').addEventListener('click', function () {
	alert('Aun no tengo CV :)');
});

const $home = document.querySelectorAll('a')[1];
const $about = document.querySelectorAll('a')[2];
const $projects = document.querySelectorAll('a')[3];
const $contact = document.querySelectorAll('a')[4];

function callback(entries, observer) {
	if (entries[0].isIntersecting) {
		const activeElement = document.getElementsByClassName('active')[0];
		switch (entries[0].target.id) {
			case 'hero':
				activeElement.classList.remove('active');
				$home.classList.add('active');
				break;
			case 'about':
				activeElement.classList.remove('active');
				$about.classList.add('active');
				break;
			case 'projects':
				activeElement.classList.remove('active');
				$projects.classList.add('active');
				break;
			case 'contact':
				activeElement.classList.remove('active');
				$contact.classList.add('active');
				break;
		}
	}
}

const observer = new IntersectionObserver(callback, { threshold: 0.9 });
const home = document.getElementById('hero');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const divs = [home, about, projects, contact];

divs.forEach((div) => {
	observer.observe(div);
});
