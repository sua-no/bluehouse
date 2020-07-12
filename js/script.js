window.addEventListener("DOMContentLoaded",function(){
    const section = $('.section');
    let pageTimer = true, pageCount = 0;

    $('.page1').on("scroll",scrollManager); //첫페이지에서 스크롤 닿으면 wheel 이벤트 실행
    $('.navigation__prev').on("click",wheelManager); //오른쪽 내비 클릭시 페이지 이동
    $('.navigation__next').on("click",wheelManager);
    $('.gnb .gnb__depth1 li').on('mouseover',function(e){ //gnb 마우스 오버시 2depth 메뉴 슬라이드
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });
    $('.gnb .gnb__depth1 li').on('mouseout',function(e){
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });
    
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