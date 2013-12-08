$(document).ready(function(){
	if (
	$('main#index').length &&
	("standalone" in window.navigator) &&
	!window.navigator.standalone
	){
		setTimeout(function(){
			if (navigator.userAgent.indexOf('iPhone') > 0) {
				$('#appModeNoteiPhone').slideDown();
				setTimeout(function(){ $('main').css('margin-bottom', $('#appModeNoteiPhone').height()+'px'); }, 500);
			}
			else if (navigator.userAgent.indexOf('iPad') > 0) {
				$('#appModeNoteiOS').slideDown();
				setTimeout(function(){ $('main').css('margin-bottom', $('#appModeNoteiOS').height()+'px'); }, 500);
			}
			else {
				$('#appModeNoteOther').slideDown();
				setTimeout(function(){ $('main').css('margin-bottom', $('#appModeNoteOther').height()+'px'); }, 500);
			}
		}, 1000);
		$('.closeAppMode').click(function(){ $(this).parent().slideToggle(); $('main').css('margin-bottom', '0'); });
	}
});