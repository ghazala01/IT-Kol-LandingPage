
$(window).on("load", function() {
    /*---------- Preloader ----------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function(){
    /*----------- Navbar Shrink -----------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /*------------- Services Carousel -----------*/
    $('.services-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- Testimonials Carousel -----------*/
    $('.testimonials-carousel').owlCarousel({
        margin:0,
        loop:true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- Team Carousel -----------*/
    $('.team-carousel').owlCarousel({
        margin:0,
        loop:true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*-------------- Page Scrolling - ScrollIt ----------------*/
    $.scrollIt({
        topOffset: -50,
    });

    /*-------------- Navbar Collapse ----------------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    /*--------------- Toggle Theme ----------------*/
    function toggleTheme(){
        if(localStorage.getItem("It-theme") !== null){
            if(localStorage.getItem("It-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").addClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();


    $(".toggle-theme").on("click", function(){
      $("body").toggleClass("dark");
      if($("body").hasClass("dark")){
          localStorage.setItem("It-theme","dark");
      }
      else{
        localStorage.setItem("It-theme","light");
      }
      updateIcon();
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
           $(".toggle-theme i").removeClass("fa-moon");
           $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});