$(document).on('page:fetch', function(){ $('#main').fadeOut('slow'); });

$(document).on('page:restore', function(){ $('#main').fadeIn('slow'); });
