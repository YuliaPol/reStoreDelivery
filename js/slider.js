jQuery(function ($) {
    $(document).ready(function () {
        //slider for questions
        if($.fn.owlCarousel){
            var $owl = $('.owl-carousel').owlCarousel({
                items: 1,
                margin: 0,
                loop: false,
                center: true,
                nav: false,
                lazyLoad: true,
                autoHeight : true,
                dots: false,
                autoWidth: false,
            });
            var owl = $('.owl-carousel');
            owl.owlCarousel();
            $('.slider-block').on('click', '.next-question',function(e){
                nextSlider();
            });
            $('.slider-block').on('change', 'input[type=radio]', function(e){
                setTimeout(nextSlider, 500);
            });
            owl.on('translated.owl.carousel', function(event) {
                let currentItem = event.relatedTarget['_current'] + 1;
                let sum =  event.item.count;
                $('.slider-block').find('.slider-position .current').html(currentItem);
                if(currentItem === sum) {
                    $('.slider-block').find('.next-question').fadeOut(300);
                } else {
                    $('.slider-block').find('.next-question').fadeIn(300);
                }
            });
        }
        function nextSlider(){
            owl.trigger('next.owl.carousel')
        }
        //drag to the slider
        if($('.slider-content').length > 0){
            if(!$('.slider-content').hasClass('show-slider')){
                //for drag
                const delta = 6;
                let startX;
                document.addEventListener('mousedown', function (event) {
                    startX = event.pageX;
                });
                document.addEventListener('mouseup', function (event) {
                    const diffX = Math.abs(event.pageX - startX);
                    if (diffX > delta) {
                        showSlider();
                    }
                });

                //for touch
                document.addEventListener('touchstart', handleTouchStart, false);        
                document.addEventListener('touchmove', handleTouchMove, false);

                var xDown = null;                                                        
                var yDown = null;

                function getTouches(evt) {
                return evt.touches ||             // browser API
                        evt.originalEvent.touches; // jQuery
                }                                                     
                                                                                        
                function handleTouchStart(evt) {
                    const firstTouch = getTouches(evt)[0];                                      
                    xDown = firstTouch.clientX;                                      
                    yDown = firstTouch.clientY;                                      
                };                                                
                                                                                        
                function handleTouchMove(evt) {
                    if ( ! xDown || ! yDown ) {
                        return;
                    }

                    var xUp = evt.touches[0].clientX;                                    
                    var yUp = evt.touches[0].clientY;

                    var xDiff = xDown - xUp;
                    var yDiff = yDown - yUp;
                                                                                        
                    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                        showSlider();               
                    }
                    /* reset values */
                    xDown = null;
                    yDown = null;                                             
                };
            }
        }
        //click on show slider
        $('.start-slider').click(function(e){
            showSlider();
        });

        //move to the slider
        function showSlider(){
            $('.slider-content').addClass('show-slider');
        }
        
        //height of window
        var intFrameHeight = $(window).height();
        if(intFrameHeight < 601){
            $('body').addClass('height600');
        }
        if(intFrameHeight < 651){
            $('body').addClass('height650');

        }
        if(intFrameHeight < 701){
            $('body').addClass('height700');

        } 
        if(intFrameHeight < 751){
            $('body').addClass('height750');

        }
    });
});