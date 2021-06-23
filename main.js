
function ham() {
	var ham = document.querySelector('.bar');
	var ul = document.querySelector('.ul');
	var header = document.querySelector('.header');
	ham.classList.toggle('active');
	ul.classList.toggle('active');
	header.classList.toggle('active');
}

document.addEventListener('scroll', () => {
	if (window.scrollY > 150){
		document.getElementById('header').style.backgroundColor = "#001d45";
	}
	else {
		document.getElementById('header').style.backgroundColor = "transparent";	
	}
});