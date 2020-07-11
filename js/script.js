window.addEventListener("DOMContentLoaded",function(){

    
    $('.gnb .gnb__depth1 li').on('mouseover',function(e){
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });
    $('.gnb .gnb__depth1 li').on('mouseout',function(e){
        depth2down(e,$(this),$(this).find('.gnb__depth2'));
    });

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