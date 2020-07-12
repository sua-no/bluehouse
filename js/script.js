window.addEventListener("DOMContentLoaded",function(){
    const section = $('.section');
    let datas,pageTimer = true, pageCount = 0, slideInterval, slideNum = 1;
    

    init();

    $.ajax({ //제이슨 데이터 로드
        url: "news.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            datas = data;
            slideLoop();
        }
    });

    $('.page1').on("scroll",scrollManager); //첫페이지에서 스크롤 닿으면 wheel 이벤트 실행
    $('.navigation__prev').on("click",wheelManager); //오른쪽 내비 클릭시 페이지 이동
    $('.navigation__next').on("click",wheelManager);
    $('.gnb .gnb__depth1 li').on('mouseover',function(e){ //gnb 마우스 오버시 2depth 메뉴 슬라이드
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });
    $('.gnb .gnb__depth1 li').on('mouseout',function(e){
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });
    $('.controls__pause').on('click',slidePause); //슬라이드 일시정지
    $('.controls__button__wrap button').on('click',slideChange); //슬라이드 이동


    function init(){
        $('.section__wrap ul li').each(function(i){ //슬라이드 정렬
            $(this).css({
                left : 100 * i + "%"
            });
        });
        $('.section__wrap ul').css({
            left : -100 + '%',
            transition : 0
        });
    }
    function slideChange(){
        clearInterval(slideInterval);
        slideNum = $(this).parent().index() + 1;
        slideAni(slideNum);
        $('.controls__button__wrap').removeClass('active');
        $(this).parent().addClass('active');
        slideLoop();
    }
    function slideLoop(){
        slideInterval = setInterval(slideManager,3500)
    }
    function slideManager(){
        slideNum++;
        slideAni(slideNum);
        if(slideNum == 4){
            setTimeout(function(){
                $('.section__wrap ul').css({
                    left : -100 + "%",
                    transition : "0s"
                });
                slideNum = 1;
            },700)  
        }      
        textChange(slideNum);
        buttonChange(slideNum);
    }
    function slideAni(){
        $('.section__wrap ul').css({
            left : -100 * slideNum +"%",
            transition : "0.8s"
        });
    }
    function textChange(num){
        if(num == 4){num = 1;}        
        $('.news__bar p').text(datas.page2[num-1].title);
        $('.news__date h3').text(datas.page2[num-1].date);
    }
    function buttonChange(num){
        if(num == 4){num = 1;}
        $('.controls__button__wrap').removeClass('active');
        $('.controls__button__wrap button').eq(num-1).parent().addClass('active');
    }
    function slidePause(){
        $(this).toggleClass('play');
        $(this).hasClass('play') ? clearInterval(slideInterval) : slideLoop();
    }
    function scrollManager(){
        let scrollHeight = $(this).prop('scrollHeight') - $(window).height();
        if((scrollHeight - 20) <= $(this).scrollTop()){
            $(window).on("wheel",wheelManager);
        }
    }
    function wheelManager(e){
        if(pageTimer){
            pageTimer = false;
            if(e.type == 'click'){
                $(this).hasClass('navigation__next') ? pageDown() : pageUp();
            }else{
                0 < e.originalEvent.deltaY ? pageDown() : pageUp();
            }
            naviBtnVisible();
            numChange();
            setTimeout(function(){
                pageTimer = true;
            },1000)
        }
    }
    function pageDown(){
        if(pageCount <= 4){
            pageCount++;
            $('html').animate({
                scrollTop: section.eq(pageCount).offset().top
            },1000);
        }
    }
    function pageUp(){
        if(0 < pageCount){
            pageCount--;
            $('html').animate({
                scrollTop: section.eq(pageCount).offset().top
            },750);
        }
    }
    function naviBtnVisible(){
        if(pageCount == 1){
            $('.navigation').removeClass('page_start');
        }else if(pageCount == 5){
            $('.navigation').addClass('page_end');
        }else if(pageCount == 0){
            $('.navigation').addClass('page_start');
        }else{
            $('.navigation').removeClass('page_start');
            $('.navigation').removeClass('page_end');

        }
    }
    function numChange(){
        $('.navigation__num__page').text(pageCount+1);
    }
    function depth2down(e,li,depth2){
        if(e.type == 'mouseover'){
            depth2.stop().slideDown(300);
            li.addClass('hover');
        }else{
            depth2.stop().slideUp(300);
            li.removeClass('hover');
        }
    }
})