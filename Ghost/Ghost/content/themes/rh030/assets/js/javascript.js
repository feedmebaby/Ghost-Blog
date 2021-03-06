
(function(MQ, $, window, document) {

    "use strict";

    var queries = [
        {
            context: 'mobile',
            match: function() {
                $("body").addClass("mobile");
                // Your mobile specific logic can go here. 
            },
            unmatch: function() {
                $("body").removeClass("mobile");
        
            }
        },
        {
            context: 'skinny',
            match: function() {
                console.log('skinny callback! Swap the class on the body element.');
                // Your tablet specific logic can go here.
            },
            unmatch: function() {
                console.log('leaving skinny context!');
            }

        },
        {
            context: 'wide-screen',
            match: function() {
                console.log('wide-screen callback woohoo! Load some heavy desktop JS badddness.');
                // your desktop specific logic can go here.
            }
        }

    ];

    // Go!
    MQ.init(queries);

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll > 500) {
            if (!$('.top.animate').hasClass('scrolled'))
                $('.top.animate').addClass('scrolled')
        } else {
            if ($('.top.animate').hasClass('scrolled'))
                $('.top.animate').removeClass('scrolled')
        }

    });
    $("#hamburger").on("click",function(){ 
        if ($(".navigation").hasClass("active")){
            $(".navigation").removeClass("active");

        } else {
        $(".navigation").addClass("active"); 
        }

    });

})(MQ, $, window, document);