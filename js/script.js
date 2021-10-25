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

        //move to the next question
        $('.survey-list').on('change', 'input[type=radio]', function(e){
            let nextQuestion = $(this).parents('.question-wrap').next();
            setTimeout(() => {
                nextQuestion.get(0).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500);
        });

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
        //autoheight for textarea
        $("textarea").each(function () {
            this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
        }).on("input", function () {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        });
    });
});