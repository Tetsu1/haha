/*global console, alert, $*/
/*jslint plusplus: true, evil: true*/

    // Header Background

$(function () {
    
    "use strict";
    
    // Scroll
    
    $(window).resize(function () {
        
        $("header").height($(window).height());
       
        $("header .content").css("padding-top", ($(window).height() - $("header .content").height() - $("header nav").outerHeight(true)) / 2);
        
    });
    
    // Header Background
   
    $("header").height($(window).height());

    // Typed Js Header

    $(".typed1").typed({

        strings: ["HTML5, CSS3, Jquery, Bootstrap, Javascipt"],
        showCursor: false,
        callback: function () {
            
            $(".typed2").typed({

                strings: ["PHP, MySQL, Ajax, AngularJS, Asp.net"],
                showCursor: false,
                callback: function () {

                    $(".typed3").typed({

                        strings: ["Python, Ruby, XML, Base"],
                        showCursor: false

                    });

                }

            });

        }

    });
    
    // Content Padding
    
    $("header .content").css("padding-top", ($(window).height() - $("header .content").height() - $("header nav").outerHeight(true)) / 2);
    
    // Fit Text
    
    $("header .content h1").fitText(1.2, {maxFontSize: "40px"});
    $("header .typed").fitText(1.2, {maxFontSize: "18px"});
    $("#testimonilas .fs-1").fitText(1.2, {maxFontSize: "30px"});
    
    // Smooth Scroll 
    
    $("nav ul li").click(function () {
       
        $("html, body").animate({
            
            scrollTop: $("#" + $(this).data("link")).offset().top
            
        }, 700);
        
    });
    
    // Icon Scroll Bottom
    
    $("header i").click(function () {
       
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        });
        
    });
    
    // Testim Slider 
    
    $("#testimonials .names span").click(function () {
       
        $(this).addClass("name-active").siblings().removeClass("name-active");
        
        $("#" + $(this).data("click")).addClass("active").siblings().removeClass("active");
        
    });
    
    // WoW Js
    
    new WOW().init();
        
    
}); // End Document








