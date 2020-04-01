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
		popUp = document.getElementById('popUp'),
		crossPopUp = document.getElementById('cross');

	buttonPopUp.addEventListener('click', function(){
		showPopUp();
	});

	crossPopUp.addEventListener('click', function(){
		hidePopUp();
	});

	function showPopUp() {
		popUp.classList.remove('isHidden')
		popUp.classList.add('isShown'),
		document.body.classList.add('scrollIsBlocked');
	}

	function hidePopUp() {
		popUp.classList.remove('isShown'),
		document.body.classList.remove('scrollIsBlocked');
	}
});