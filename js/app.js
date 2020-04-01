document.addEventListener("DOMContentLoaded", function () {

	var mySwiper = new Swiper('.swiper-container', {
		speed: 1000,
		spaceBetween: 100,
		centeredSlides: true,
		navigation: {
			nextEl: '.fa-caret-right',
			prevEl: '.fa-caret-left'
		},
		autoplay: {
			delay: 4000,
		},
		loop: true,

		watchOverflow: true,
		setWrapperSize: true

	});

	// POPUP

	let buttonPopUp = document.querySelector('.login__button'),
		overlay = document.getElementById('overlay'),
		popUp = document.getElementById('popUp'),
		crossPopUp = document.getElementById('cross');

	buttonPopUp.addEventListener('click', function(){
		showPopUp();
	});

	crossPopUp.addEventListener('click', function(){
		hidePopUp();
	});

	function showPopUp() {
		overlay.classList.remove('isHidden'),
		overlay.classList.add('isShown');
		popUp.classList.remove('isHidden'),
		popUp.classList.add('isShown');
		// document.body.classList.add('scrollIsBlocked');
	}

	function hidePopUp() {
		overlay.classList.remove('isShown');
		popUp.classList.remove('isShown');
		// document.body.classList.remove('scrollIsBlocked');
	}

	// Check student ID

	let form = document.getElementById('submit'),
		inputValue = document.getElementById('value');

	form.addEventListener('click', function(){
		let studentID = inputValue.value;

		switch (studentID) {
			case '1nna': 
			alert(`RIGHT!`);
			break;
			default:
				alert(`there is no such ID`);
				event.preventDefault();
		}

	});
});