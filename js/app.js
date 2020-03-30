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

});