jQuery(document).ready(function($) {

    // Small screens: Interests & Languages are collapsed behind a "More about me" button
    $('.sidebar-more-toggle').on('click', function() {
        var open = $(this).attr('aria-expanded') !== 'true';
        $(this).attr('aria-expanded', open).toggleClass('is-open', open);
        $('#sidebar-extra').toggleClass('is-open', open);
    });

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});