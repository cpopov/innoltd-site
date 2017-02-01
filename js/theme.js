$(function () {
    services.initialize();
    contactForm.initialize();

    // retina display
    if (window.devicePixelRatio >= 1.2) {
        $("[data-2x]").each(function () {
            if (this.tagName == "IMG") {
                $(this).attr("src", $(this).attr("data-2x"));
            } else {
                $(this).css({"background-image": "url(" + $(this).attr("data-2x") + ")"});
            }
        });
    }
});

window.utils = {
    isFirefox: function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
};

var contactForm = {
    initialize: function () {
        var $contactForm = $("#contact-form");
        if (!$contactForm.length) {
            return;
        }

        $contactForm.validate({
            rules: {
                "name": {
                    required: true
                },
                "email": {
                    required: true,
                    email: true
                },
                "message": {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('success').addClass('error')
            },
            success: function (element) {
                element.addClass('valid').closest('.form-group').removeClass('error').addClass('success')
            }
        });
    }
};

var services = {
    tabs: function () {
        $tabs = $(".services-tabs");
        $hexagons = $tabs.find(".hexagon");
        $sections = $tabs.find(".section");

        $hexagons.click(function () {
            $hexagons.removeClass("active");
            $(this).addClass("active");
            var index = $hexagons.index(this);
            $sections.fadeOut();
            $sections.eq(index).fadeIn();
        });
    },

    screenHover: function () {
        $screens = $(".features-hover-section .images img");
        $features = $(".features-hover-section .features .feature");
        $features.mouseenter(function () {
            if (!$(this).hasClass("active")) {
                $features.removeClass("active");
                $(this).addClass("active");
                var index = $features.index(this);
                $screens.stop().fadeOut();
                $screens.eq(index).fadeIn();
            }
        });
    },

    initialize: function () {
        this.tabs();
        this.screenHover();
    }
};