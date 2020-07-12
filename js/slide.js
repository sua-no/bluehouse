window.addEventListener("DOMContentLoaded",function(){
    let data1, data2, data3, data4, slideInterval, slideInterval2, slideInterval3, slideInterval4,
    slideNum = 1, slideNum2 = 1, slideNum3 = 1, slideNum4 = 1;

    //common
    init();
    function init(){
        liSort();
        $('.section__wrap ul').css({
            left : -100 + '%',
            transition : 0
        });
    }
    function liSort(){ //슬라이드 정렬
        $('.page2 .section__wrap ul li').each(function(i){ 
            $(this).css({
                left : 100 * i + "%"
            });
        });
        $('.page3 .section__wrap ul li').each(function(i){ 
            $(this).css({
                left : 100 * i + "%"
            });
        });
        $('.page4 .section__wrap ul li').each(function(i){ 
            $(this).css({
                left : 100 * i + "%"
            });
        });
        $('.page5 .section__wrap ul li').each(function(i){
            $(this).css({
                left : 100 * i + "%"
            });
        });
    }
    $.ajax({ //제이슨 데이터 로드
        url: "news.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            data1 = data.page2;
            data2 = data.page3;
            data3 = data.page4;
            data4 = data.page5;
            slideLoop();
            slideLoop2();
            slideLoop3();
            slideLoop4();
        }
    });

    //page2
    $('.page2 .controls__pause').on('click',slidePause); //슬라이드 일시정지
    $('.page2 .controls__button__wrap button').on('click',slideChange); //슬라이드 이동
    
    function slideChange(){
        clearInterval(slideInterval);
        slideNum = $(this).parent().index() + 1;
        slideAni(slideNum);
        $('.page2 .controls__button__wrap').removeClass('active');
        $(this).parent().addClass('active');
        slideLoop();
    }
    function slideLoop(){
        slideInterval = setInterval(slideManager,3500)
    }
    function slideManager(){
        slideNum++;
        slideAni(slideNum);
        textChange(slideNum);
        buttonChange(slideNum);
        if(slideNum == 4){
            setTimeout(function(){
                $('.page2 .section__wrap ul').css({
                    left : -100 + "%",
                    transition : "0s"
                });
                slideNum = 1;
            },700)  
        }      
    }
    function slideAni(){
        $('.page2 .section__wrap ul').css({
            left : -100 * slideNum +"%",
            transition : "0.8s"
        });
    }
    function textChange(num){
        if(num == 4){num = 1;}        
        $('.page2 .news__bar p').text(data1[num-1].title);
        $('.page2 .news__date h3').text(data1[num-1].date);
    }
    function buttonChange(num){
        if(num == 4){num = 1;}
        $('.page2 .controls__button__wrap').removeClass('active');
        $('.page2 .controls__button__wrap button').eq(num-1).parent().addClass('active');
    }
    function slidePause(){
        $(this).toggleClass('play');
        $(this).hasClass('play') ? clearInterval(slideInterval) : slideLoop();
    }
    
    //page3
    $('.page3 .controls__pause').on('click',slidePause2); //슬라이드 일시정지
    $('.page3 .controls__button__wrap button').on('click',slideChange2); //슬라이드 이동
    
    function slideChange2(){
        clearInterval(slideInterval2);
        slideNum2 = $(this).parent().index() + 2;
        slideAni2(slideNum2);
        $('.page3 .controls__button__wrap').removeClass('active');
        $(this).parent().addClass('active');
        slideLoop2();
    }
    function slideLoop2(){
        slideInterval2 = setInterval(slideManager2,3500)
    }
    function slideManager2(){
        slideNum2++;
        slideAni2(slideNum2);
        textChange2(slideNum2);
        buttonChange2(slideNum2);
        if(slideNum2 == 3){
            setTimeout(function(){
                $('.page3 .section__wrap ul').css({
                    left : -100 + "%",
                    transition : "0s"
                });
                slideNum2 = 1;
                console.log("back")
            },700)  
        }  
    }
    function slideAni2(slideNum2){
        $('.page3 .section__wrap ul').css({
            left : -100 * slideNum2 +"%",
            transition : "0.8s"
        });
    }
    function textChange2(num){
        if(num == 3){num = 1;}        
        $('.page3 .news__bar p').text(data2[num-1].title);
        $('.page3 .news__date h3').text(data2[num-1].date);
    }
    function buttonChange2(num){
        if(num == 3){num = 1;}
        $('.page3 .controls__button__wrap').removeClass('active');
        $('.page3 .controls__button__wrap button').eq(num-1).parent().addClass('active');
    }
    function slidePause2(){
        $(this).toggleClass('play');
        $(this).hasClass('play') ? clearInterval(slideInterval2) : slideLoop2();
    }

    //page4
    $('.page4 .controls__pause').on('click',slidePause3); //슬라이드 일시정지
    $('.page4 .controls__button__wrap button').on('click',slideChange3); //슬라이드 이동
    
    function slideChange3(){
        clearInterval(slideInterval3);
        slideNum3 = $(this).parent().index() + 1;
        slideAni3(slideNum3);
        $('.page4 .controls__button__wrap').removeClass('active');
        $(this).parent().addClass('active');
        slideLoop3();
    }
    function slideLoop3(){
        slideInterval3 = setInterval(slideManager3,3500)
    }
    function slideManager3(){
        slideNum3++;
        slideAni3(slideNum3);
        textChange3(slideNum3);
        buttonChange3(slideNum3);
        if(slideNum3 == 4){
            setTimeout(function(){
                $('.page4 .section__wrap ul').css({
                    left : -100 + "%",
                    transition : "0s"
                });
                slideNum3 = 1;
            },700)  
        }      
    }
    function slideAni3(){
        $('.page4 .section__wrap ul').css({
            left : -100 * slideNum3 +"%",
            transition : "0.8s"
        });
    }
    function textChange3(num){
        if(num == 4){num = 1;}        
        $('.page4 .news__bar p').text(data3[num-1].title);
        $('.page4 .news__date h3').text(data3[num-1].date);
    }
    function buttonChange3(num){
        if(num == 4){num = 1;}
        $('.page4 .controls__button__wrap').removeClass('active');
        $('.page4 .controls__button__wrap button').eq(num-1).parent().addClass('active');
    }
    function slidePause3(){
        $(this).toggleClass('play');
        $(this).hasClass('play') ? clearInterval(slideInterval3) : slideLoop3();
    }

    //page5
    $('.page5 .controls__pause').on('click',slidePause4); //슬라이드 일시정지
    $('.page5 .controls__button__wrap button').on('click',slideChange4); //슬라이드 이동
    
    function slideChange4(){
        clearInterval(slideInterval4);
        slideNum4 = $(this).parent().index() + 1;
        slideAni4(slideNum4);
        $('.page5 .controls__button__wrap').removeClass('active');
        $(this).parent().addClass('active');
        slideLoop4();
    }
    function slideLoop4(){
        slideInterval4 = setInterval(slideManager4,3500)
    }
    function slideManager4(){
        slideNum4++;
        slideAni4(slideNum4);
        textChange4(slideNum4);
        buttonChange4(slideNum4);
        if(slideNum4 == 4){
            setTimeout(function(){
                $('.page5 .section__wrap ul').css({
                    left : -100 + "%",
                    transition : "0s"
                });
                slideNum4 = 1;
            },700)  
        }      
    }
    function slideAni4(){
        $('.page5 .section__wrap ul').css({
            left : -100 * slideNum4 +"%",
            transition : "0.8s"
        });
    }
    function textChange4(num){
        if(num == 4){num = 1;}        
        $('.page5 .news__bar p').text(data4[num-1].title);
        $('.page5 .news__date h3').text(data4[num-1].date);
    }
    function buttonChange4(num){
        if(num == 4){num = 1;}
        $('.page5 .controls__button__wrap').removeClass('active');
        $('.page5 .controls__button__wrap button').eq(num-1).parent().addClass('active');
    }
    function slidePause4(){
        $(this).toggleClass('play');
        $(this).hasClass('play') ? clearInterval(slideInterval4) : slideLoop4();
    }
})