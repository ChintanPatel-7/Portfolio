$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        // if(this.scrollY > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }
    })

    // toggle menu/navbar

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    //highlight nav link
    $('#nav div ul li a').on('click', function (event) {
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function () {
        $('.target').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 80) {
                var id = $(this).attr('id');

                $('#nav div ul li a').removeClass('active');
                $('#nav div ul li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // $(".social-icons").css({
    //     'width': ($(".about .about-content .left img").width() + 'px')
    //   });

    //filter portfolio images box
    $('.portfolio .links ul li').click(function () {
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.portfolio .data .data-box').show();

        }
        else {
            $('.portfolio .data .data-box').not('.' + filter).hide();
            $('.portfolio .data .data-box').filter('.' + filter).show();
        }

        $(this).addClass('active').siblings().removeClass('active');
    })

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Back-end Developer", "Web Designer"],
        typeSpeed: 120,
        backSpeed: 100,
        loop: true
    });

    //portfolio gallery

    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});
