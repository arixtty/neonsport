$(function () {

    if($('.tag').length <= 0) {
      $('.tags-mobile').hide();
    }
    console.log($('.tags-mobile .tag').length)
    if($('.tags-mobile .tag').length <= 2) {
      $('.open-tags').hide();
    }

    $('.open-tags').on('click', function(){
      console.log($('.tags-mobile').hasClass('opened'));
      if($('.tags-mobile').hasClass('opened')) {
        $('.tags-mobile').removeClass('opened')
        $('.open-tags').html('еще');
      } else {
        $('.tags-mobile').addClass('opened')
        $('.open-tags').html('скрыть')
      }
    })

    //$('.menu-left li.has-child > a').attr('href', 'javascript:void(0)');

    $('li.has-child > a').click(function (e) {
      console.log('click');
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).parent().find('.sub-menu').toggleClass('active');
    });

    /*$('li.has-child').after().click(function (e) {
      $(this).toggleClass('active');
      $(this).find('.sub-menu').toggleClass('active');
    });*/

    $('.compare-btn:not(.no-hover)').on('mouseenter', function () {
        $(this).find('img').attr('src', 'catalog/view/theme/default/assets/images/graf-hover.png');
    });
    $('.compare-btn:not(.no-hover)').on('mouseleave', function () {
        if (!$(this).hasClass('no-hover')) {
            $(this).find('img').attr('src', 'catalog/view/theme/default/assets/images/graf.png');
        }
    });
    $('.compare-btn:not(.no-hover)').on('click', function () {
        $(this).find('img').attr('src', 'catalog/view/theme/default/assets/images/graf-hover.png');
        $(this).addClass('no-hover');
    });
    $(window).on('load', function () {
       var width = $(window).width();
       if (width >= 1170){
           $('.menu-left.toggled').removeClass('active');
           $('.inner .menu').hover(
               function() {
                   $(this).find('.menu-toggle').addClass('active');
                   $('.menu-left.toggled').addClass('active');
               }, function() {
                   $(this).find('.menu-toggle').removeClass('active');
                   $('.menu-left.toggled').removeClass('active');
               }
           );
       }else{
           $('.menu-left.toggled').removeClass('active');
       }

    });
    $(window).on('scroll load', function () {
        var header = $('header').height();
        var top = parseInt($('header .top-row').css('height')) + parseInt($('header .top-row').css('padding-top')) + parseInt($('header .top-row').css('padding-bottom'));
        var bottom = parseInt($('header .bottom-row').css('height')) + parseInt($('header .bottom-row').css('padding-top')) + parseInt($('header .bottom-row').css('padding-bottom'));
        var center = parseInt($('header .center-row').css('height')) + parseInt($('header .center-row').css('padding-top')) + parseInt($('header .center-row').css('padding-bottom'));
        var current_position = $(window).scrollTop();
        if (current_position >= (top+center)){
            $('.bottom-row').addClass('active');
            $('.menu-left.toggled:not(.not-front)').removeClass('front');
            $('header').css({'padding-top' : bottom});
            // $('.menu-left.toggle').css({'position': 'fixed', 'top' : '55px'});
        }else{
            // $('.bottom-row').css({'transform':'translateY(0)'});
            $('.bottom-row').removeClass('active');
            $('header').css({'padding-top' : '0'});
            $('.menu-left.toggled:not(.not-front)').addClass('front');
            // $('.menu-left.toggle').css({'position': 'absolute', 'top' : '90%'});
        }
    });
   // Popup
   var $popup_btn = $('.btn-popup, .btn-popup-no-style');
   var $popup_close = $('.pop-up .close-pop-up, .pop-up .close');
   $popup_btn.on('click', function () {
      var target = $(this).attr('data-popup');
      var $popup = $('.pop-up[data-popup="'+target+'"]');
      if ($popup.length) {
          $popup.addClass('active');
          $('.overlay').addClass('active');
      }
   });
    $popup_close.on('click', function () {
       $(this).parents('.pop-up').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('.overlay').on('click', function () {
        if ($('.pop-up.active').length) {
            $('.pop-up').removeClass('active');
            $(this).removeClass('active');
        }
    });

    // Select customizer
    $(window).on('load', function () {
        $('select.customize-select').each(function(index, $this){
            select_style($this);
        });
    });
    $('.up-btn').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $(document).on('scroll load', function () {
       var header = $('header').height();
       var current_position = $(window).scrollTop();
       if (current_position >= header){
           $('.scroll-bar').addClass('active');
       }else{
           $('.scroll-bar').removeClass('active');
       }
    });
    $('.filter-toggle-mobile').on('click', function () {
        $('.top-menu-mobile.active, .menu.active, .menu-left.active').removeClass('active');
       var width = $('.filter').width();
       if (!$('.filter').hasClass('active')) {
           $(this).css({'transform': 'translateX(' + width + 'px)'});

       }else{
           $(this).css({'transform': 'translateX(0px)'});

       }
       $('.filter').toggleClass('active');
    });

    $('.mobile-menu-page').on('click', function () {
      console.log('!!!!');
        $('.menu.active, .menu-left.active').removeClass('active');
        if ($('.filter').hasClass('active')) {
            $('.filter').removeClass('active');
            $('.filter-toggle-mobile').css({'transform': 'translateX(0px)'});
            $(this).css({'transform': 'translateX(0px)'});
        } else {

        }
        $('.top-menu-mobile').toggleClass('active');

        console.log($('.mobile-menu-page i').hasClass('fa-bars'));
        if($('.mobile-menu-page i').hasClass('fa-bars')){
          $('.mobile-menu-page i').removeClass('fa-bars').addClass('fa-close');
        } else {
          $('.mobile-menu-page i').removeClass('fa-close').addClass('fa-bars');
        }

    });

    $('.menu .menu-toggle').on('click', function () {
        $('.top-menu-mobile.active').removeClass('active');
        if ($('.filter').hasClass('active')) {
            $('.filter').removeClass('active');
            $('.filter-toggle-mobile').css({'transform': 'translateX(0px)'});
            $(this).find('.menu-toggle').css({'transform': 'translateX(0px)'});
        }
        $(this).find('.menu-toggle').toggleClass('active');
        $('.menu-left.toggled').toggleClass('active');
    });

    $('.cart').on('click', function () {
       $('.cart-inner').toggleClass('active');
    });
    $('.cart-inner').click(function (e) {
        e.stopPropagation();
    });
    $('body').on('click', '.view-block i', function (event) {
        $('.view-block i').removeClass('active');
        $(event.target).addClass('active');
        var view = $(event.target).parent('p').attr('data-view');
        $('.product-block > div').removeAttr('class');
        $('.product-block > div').addClass(view);
    });

    // Slider
    $('#main-slider').R_slider();
});
function select_style($target) {
    var $this = $($target), numberOfOptions = $($target).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled placeholder"></div>');

    var $styledSelect = $this.next('div.select-styled');
    // $styledSelect.text($this.children('option').eq(0).text());
    $styledSelect.text($this.children('option:selected').text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        if ($(this).attr('rel') == "false"){
            $styledSelect.addClass('placeholder');
        }else{
            $styledSelect.removeClass('placeholder');
        }
        if ($(this).parents('.sort-block').length > 0) {

        }
        console.log($(this).attr('rel').indexOf('http'));
        if ($(this).attr('rel').indexOf('http') >= 0 || $(this).attr('rel').indexOf('https') >= 0) {
            window.location = $(this).attr('rel');
        }
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
}
(function($) {
    $.fn.R_slider = function(options) {

        // var settings = $.extend({
        //     transition: options.transition
        // }, options);
        $slider = $(this);
        total = $slider.find('.slider-item').length -1;
        $next = $(this).find('.next');
        $prev = $(this).find('.prev');
        $first = $(this).find('.slider-item:first-child');
        $last = $(this).find('.slider-item:last-child');
        $wrap = $slider.find('.slider-wrap');
        $wrap.css({'transform':'translateX(0px)'});
        $first.addClass('active');
        $next.on('click', function () {
            var $current = $slider.find('.slider-item.active');
            var index = $current .index() + 1;
            if (index <= total){
                $next_slide = $current.next();
                $next_slide.addClass('active');
                $current.removeClass('active');
                $wrap.css({'transform':'translateX(-'+$slider.width()*index+'px)', 'transition' : '200ms'});
            }else if (index > total){
                $first.addClass('active');
                $current.removeClass('active');
                $wrap.css({'transform':'translateX(0px)', 'transition' : '200ms'});
            }
        });
        $prev.on('click', function () {
            var $current = $slider.find('.slider-item.active');
            var index = $current .index() + 1;
            if (index <= total){
                $prev_slide = $current.prev();
                $prev_slide.addClass('active');
                $current.removeClass('active');
                $wrap.css({'transform':'translateX('+$slider.width()*index+'px)', 'transition' : '200ms'});
            }else if (index <= 0){
                $last.addClass('active');
                $current.removeClass('active');
                $wrap.css({'transform':'translateX('+$slider.width()*index+'px)', 'transition' : '200ms'});
            }
        });
        $('body').on('load resize', function () {
            console.log('load resize')
        });
        return this.each(function() {
            var max_width = $slider.width();
            var $img = $slider.find('img');
            $img.css({'max-width': max_width});
            $slider.find('.slider-item').attr('data-translate', max_width);
        });
    };
}(jQuery));
