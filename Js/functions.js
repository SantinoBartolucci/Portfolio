// Contact Form Funcionality
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

// Observer

function callback(entries, observer) {
	if (entries[0].isIntersecting) {
		const activeElement = document.getElementsByClassName('active')[0];
		if (screen.width > 700) {
			const $home = document.querySelectorAll('a')[1];
			const $about = document.querySelectorAll('a')[2];
			const $projects = document.querySelectorAll('a')[3];
			const $contact = document.querySelectorAll('a')[4];
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
		} else {
			const $home = document.querySelectorAll('a')[5];
			const $about = document.querySelectorAll('a')[6];
			const $projects = document.querySelectorAll('a')[7];
			const $contact = document.querySelectorAll('a')[8];

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

//Burger Button
const menuBtn = document.getElementsByClassName('menu-btn')[0];
let div = document.getElementsByClassName('uno')[0];
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		div.classList.remove('uno');
		div.classList.add('dos');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		div.classList.remove('dos');
		div.classList.add('uno');
		menuOpen = false;
	}
});

function closeCircle() {
	menuBtn.classList.remove('open');
	div.classList.remove('dos');
	div.classList.add('uno');
	menuOpen = false;
}
