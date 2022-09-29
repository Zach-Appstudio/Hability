$(document).ready(function(){
    $('[data-toggle="scroll"]').on('click', function(e){
        e.preventDefault();
        var target = $($(this).data('target'));
        if(target.length)
            $('body, html').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
    })

    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();

    if($('.grid').length)
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        })

    if($('.grid-isotope').length)
        $('.grid-isotope').isotope({
        })
    $('[data-toggle="isotope-filter"]').on('click', function(e){
        e.preventDefault();
        var target = $($(this).data('target'));
        var parent = $($(this).data('parent'));
        var filter = $($(this).data('filter'));
        target.isotope({ filter: filter });
        parent.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    })

    if($('.owl-carousel').length){
        $('.owl-carousel').each(function(i, item){
            item = $(item);
            var config = item.data();
            item.owlCarousel(config);
        })

        $('[data-toggle="owl-next"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('next.owl.carousel');
        })
        $('[data-toggle="owl-prev"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('prev.owl.carousel');
        })

    }
});

$("#home-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});

$("#features-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 2000);
});

$("#benefits-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#multi-platform").offset().top
    }, 2000);
});

$("#contact-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-us-div").offset().top
    }, 2000);
});

$("#hability-now").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-us-div").offset().top
    }, 2000);
});