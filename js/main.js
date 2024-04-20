/*custom main js file*/

let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let contactBtn = document.querySelector('.contact_btn');

document.querySelector('#search-icon').onclick = () => {
	search.classList.toggle('active');
	navbar.classList.remove('active');
	contactBtn.classList.toggle('active');
}

document.querySelector('#menu-icon').onclick = () => {
	navbar.classList.toggle('active');
	search.classList.remove('active');
	contactBtn.classList.remove('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	search.classList.remove('active');
	contactBtn.classList.remove('active');
}

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});

/* enable and disable dark Mode */

let body = document.body;
let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
	toggleBtn.classList.replace('fa-sun', 'fa-moon');
	body.classList.add('dark');
	localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
	toggleBtn.classList.replace('fa-moon', 'fa-sun');
	body.classList.remove('dark');
	localStorage.setItem('dark-mode', 'disabled');
}

toggleBtn.onclick = (e) =>{
	let darkMode = localStorage.getItem('dark-mode');
	if(darkMode === 'disabled'){
		enableDarkMode();
	}else{
		disableDarkMode();
	}
}

if(darkMode === 'enabled'){
	enableDarkMode();
}








