jQuery(function ($) {
    $(document).ready(function () {
        //change for main question
        $('.first-question').on('change', 'input[type=radio]', function(e){
            $(this).parents('.first-question').find('.hidden-btn').removeClass('hidden-btn');
            $(this).parents('.first-question').find('.comment-wrap').removeClass('hidden');
            let answer = $(this).val();
            showTextForRange(answer);
        });

        //change for main question
        $('.first-question').on('change', 'input[type=range]', function(e){
            $(this).parents('.first-question').find('.hidden-btn').removeClass('hidden-btn');
            $(this).parents('.first-question').find('.comment-wrap').removeClass('hidden');
            let answer = $(this).val();
            showTextForRange(answer);
        });

        //show text for main question
        function showTextForRange(answer){
            $('.text-to-range').fadeOut(0);
            if(answer > 8){
                $('.text-9-10').fadeIn(300);
            } else if(answer < 9 && answer > 6) {
                $('.text-7-8').fadeIn(300);
            } else {
                $('.text-0-6').fadeIn(300);
            }
        }

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
    });
});