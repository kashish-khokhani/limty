
// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// preloader
  $(document).ready(function(){
    setTimeout(function(){
      $('.preloader').fadeOut();
    },3000);
});


$('#banner_slider').owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="las la-long-arrow-alt-left"></i><span>PRE</span>','<span>NEXT</span><i class="las la-long-arrow-alt-right"></i>'],
    dots:false,
});

$('#service_box').owlCarousel({
    items: 3,
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="las la-long-arrow-alt-left"></i>','<i class="las la-long-arrow-alt-right"></i>'],
    dots:false,
});

$('#team_box').owlCarousel({
    items: 4,
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="las la-long-arrow-alt-left"></i>','<i class="las la-long-arrow-alt-right"></i>'],
    dots:false,
});

$('#client_image').owlCarousel({
    items: 5,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    smartSpeed:5000,
});


var a = 0;
    $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
    },

    {

        duration: 2000,
        easing: 'swing',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
        $this.text(this.countNum);
        //alert('finished');
    }

    });
});
    a = 1;
    }

});

$('#port_slider').owlCarousel({
    items: 4,
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    dotsEach:true,
});

$('#testimonial_slider').owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    navText: ['<i class="las la-long-arrow-alt-left"></i>','<i class="las la-long-arrow-alt-right"></i>'],
    dots:false,

});

$(document).ready(function(){
    progress_bar();
});

function progress_bar() {
    var speed = 30;
    var items = $('.progress_bar').find('.progress_bar_item');
    
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
        
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}

// bottom to top
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 
  
  AOS.init();