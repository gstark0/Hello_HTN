var fadingTime = 500;
var currentSlide = 0

function changeSlide() {
	slides = $('.slide');
	if(currentSlide == slides.length - 1) {
		$(slides[currentSlide]).fadeOut(fadingTime);
		$(slides[0]).delay(fadingTime+100).fadeIn(fadingTime);
		currentSlide = 0;
	} else {
		$(slides[currentSlide]).fadeOut(fadingTime);
		$(slides[currentSlide + 1]).delay(fadingTime+100).fadeIn(fadingTime);
		currentSlide = currentSlide + 1;
	}
}

$('body').keypress(function() {
	changeSlide();
});

tippy('a')