$(document).ready(function() {
    setTimeout(function(){
		$('body').addClass('loaded');
	}, 500);
    setTimeout(function(){
		$('#loader-wrapper').css({ zIndex: '0' });
	}, 500);
	setTimeout(function(){
		$('#loader-wrapper').css({ display: 'none' });
	}, 800);
 
});

//$(document).ready means when the page loads
$(document).ready(function () {
	$('.toshow h1').delay(800).animate({'opacity':'1'},1200);
	$('.toshow p').delay(1700).animate({'opacity':'1'},1200);
});

function myMove() {
  var elems = document.querySelectorAll(".gallery");
  var width = elems[0].offsetWidth
  var mov = 0;
  setInterval(frame, 2);
  function frame() {
    if (mov < width) {
      for (i = 0; i < elems.length; i++){
        elems[i].style.left = -mov + 'px'; 
      }
      mov++;
    }
  }
}