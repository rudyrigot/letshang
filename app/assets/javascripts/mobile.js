$(document).ready(function(){
	if (
	$('main#index').length &&
	("standalone" in window.navigator) &&
	!window.navigator.standalone
	){
		setTimeout(function(){
			if (navigator.userAgent.indexOf('iPhone') > 0) $('#appModeNoteiPhone').slideDown();
			else if (navigator.userAgent.indexOf('iPad') > 0) $('#appModeNoteiOS').slideDown();
			else $('#appModeNoteOther').slideDown();
		}, 1000);
		$('.closeAppMode').click(function(){ $(this).parent().slideToggle(); });
	}
});