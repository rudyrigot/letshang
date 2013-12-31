$(document).ready(function(){
	if (
	$('#appModeNote').length &&
	("standalone" in window.navigator) &&
	!window.navigator.standalone
	){
		setTimeout(function(){
			$.get('/core/ajaxmobile', function(data){
				$('#appModeNote').html(data);
				$('#appModeNote').slideDown();
				$('.closeAppMode').click(function(){ $(this).parent().slideToggle(); $('main').css('margin-bottom', '0'); });
				setTimeout(function(){ $('main').css('margin-bottom', $('#appModeNote').height()+'px'); }, 500);
			});
		}, 1000);
	}
});