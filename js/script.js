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

        //move to the next question
        $('.deliver-survey').on('change', 'input[type=radio]', function(e){
            let nextQuestion = $(this).parents('.question-wrap').next();
            if(nextQuestion.length > 0){
                setTimeout(() => {
                    nextQuestion.get(0).scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 500);
            }
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

        //validation
        var formValid = document.getElementsByClassName('form-valid')[0];
        $('.form-valid').on('click', '.btn-submit', function(e) {
            $(this).parents('form').submit(function (e) {
                e.preventDefault();
                var erroreArrayElemnts = [];
                var el = document.querySelectorAll('.form-valid input[type="radio"][data-reqired]');
                for (var i = 0; i < el.length; i++) {
                    if (el[i].tagName === 'INPUT') {
                        var name = el[i].getAttribute('name');
                        if (document.querySelectorAll('[name=' + name + ']:checked').length === 0) {
                            erroreArrayElemnts.push(el[i]);
                            $(el[i]).parents('.question-wrap').addClass('has-error');
                            $(el[i]).parents('.question-wrap').find('.error-text').fadeIn(300);
                            var inputname = $(el[i]).attr('name');
                            $('input[name='+ inputname + ']').change(function (e) {
                                $(this).parents('.question-wrap').removeClass('has-error');
                                $(this).parents('.question-wrap').find('.error-text').fadeOut(300);
                            });
                        }
                    }
                }

                if (erroreArrayElemnts.length == 0) {
                    formValid.submit();
                }
                if (erroreArrayElemnts.length > 0) {
                    console.log('Valid error');
                    erroreArrayElemnts.sort(function(a, b){
                        return parseInt($(a).parents('.question-wrap').offset().top)-parseInt($(b).parents('.question-wrap').offset().top)
                    });
                    setTimeout(() => {
                        $(erroreArrayElemnts[0]).parents('.question-wrap').get(0).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            });
        });
    });
});