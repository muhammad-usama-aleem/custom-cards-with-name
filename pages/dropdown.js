// ADDED TO SUPPORT TOUCH EVENTS You don't really need this to work on desktop, but it adds functionality for touch devices. 
$('dropdown_options a').on('touchstart', function (e) {
    'use strict'; 
    var link = $(this); 
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('a.taphover').not(this).removeClass('hover');
        e.preventDefault();
        return false; 
    }
});