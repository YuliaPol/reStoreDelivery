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
                autoHeight : false,
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
                const dDelta = 6;
                let dStartX;
                document.addEventListener('touchstart', function (event) {
                    dStartX = event.pageX;
                });
                document.addEventListener('touchend', function (event) {
                    const diffX = Math.abs(event.pageX - dStartX);
                    if (diffX > dDelta) {
                        showSlider();
                    }
                });
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