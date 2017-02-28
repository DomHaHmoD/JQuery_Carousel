$(function() {
	function toggleSlide(slides, i, prev=false) {
		slides.eq(i).css({'display':'none'});

		if(prev) {
			i--;
		}
		else {
			i++;
		}

		if(i < 0) {
			i = slides.length - 1;
		}
		else if(i > slides.length - 1) {
			i = 0;
		}

		slides.eq(i).css({'display':'block'});

		return i;
	}

	let slides = $('.slide');
	let i = 0;
	slides.css({'display':'none'});
	slides.first().css({'display':'block'});

	$('#prev').click(function() {
		i = toggleSlide(slides, i, true);
		})

	$('#next').click(function() {
		i = toggleSlide(slides, i);
		})

	setInterval(
		function() {
			i = toggleSlide(slides, i);
		}, 3000)
});
