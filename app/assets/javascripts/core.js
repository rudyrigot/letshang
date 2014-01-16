/* Hiding/showing more days on /new */
var moreDays = function(){
	if ($('#linkformoredays').length != 0) {
		$('#linkformoredays a').click(function(e){
			$('#seconddays').show();
			$('#linkformoredays').hide();
			e.preventDefault();
		});
	}
}

$(document).ready(moreDays);
$(document).on('page:load', moreDays);