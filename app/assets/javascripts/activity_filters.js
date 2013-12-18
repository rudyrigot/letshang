$(document).ready(function(){
	if($('#activities').length) {
		var foldmenu_init = function(id, nbElems) {
			$('<li class="list-group-item fold openFold"><a href="#'+id+'">&darr;&nbsp;&nbsp;&nbsp;more stuff &hellip;&nbsp;&nbsp;&nbsp;&darr;</a></li>').insertAfter('#'+id+' li.list-group-item:nth-child('+nbElems+')');
			$('<li class="list-group-item fold closeFold"><a href="#'+id+'">&uarr;&nbsp;&nbsp;&nbsp;fold back&nbsp;&nbsp;&nbsp;&uarr;</a></li>').insertAfter('#'+id+' li.openFold');
			$('<li class="list-group-item fold closeFold"><a href="#'+id+'">&uarr;&nbsp;&nbsp;&nbsp;fold back&nbsp;&nbsp;&nbsp;&uarr;</a></li>').insertAfter('#'+id+' li.list-group-item:last-child');
			var liArray = $('#'+id+' li.list-group-item');
			for (var i=nbElems+1; i < liArray.length; i++) { $(liArray[i]).hide(); }
			$('#'+id+' li.openFold').click(function(e){
				$('#'+id+' li.list-group-item').show();
				$(this).hide();
			});
			$('#'+id+' li.closeFold').click(function(e){
				var liArray = $('#'+id+' li.list-group-item');
				for (var i=nbElems+1; i < liArray.length; i++) { $(liArray[i]).hide(); }
				$('#'+id+' li.openFold').show();
			});
		}

		foldmenu_init('what', 6);
		foldmenu_init('where', 5);
	}
});