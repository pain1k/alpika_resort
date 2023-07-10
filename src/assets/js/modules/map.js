$(document).ready(function(){
    $('.aside-btn').click((e)=>{
        e.preventDefault();
        $('.fixing .aside').toggleClass('hidden')
        if(innerWidth>767){
            $('.aside-btn').toggleClass('active');
        }
        if($('.fixing .aside').hasClass('hidden')){
            $('.fix').css('min-width','0')
        } else {
            $('.fix').css('min-width','534px')
        }
    })
    $('.close-btn').click(()=>{
        if(!$('.map-weather').hasClass('show')){
            $('.fixing .aside').addClass('hidden')
            $('.aside-btn').removeClass('active');
            $('.fix').css('min-width','0')
        }else{          

            $('.return').trigger('click')
        }
        
    })

})