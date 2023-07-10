$(function (){
    if(innerWidth<1280){
        $('.fixing .aside').addClass('hidden')
        $('.aside-btn').removeClass('active')
    }
    $('.legend-weather').css('display','none')

    if($('.weather-block').length){
    const $weatherBlocks=$('.weather-block')

        const $weatherInfo=$('.aside-weather .table')
        let weatherTitle=$('.weather-title')

        let height=$('.aside-weather .table.active').data('height')
        let title=$('.weather-block.active').children('.info-block-title')[0].innerHTML
        weatherTitle.html(`${title} <span>${height}м</span>`)
        $weatherBlocks.on('click',function(e){
            const num=$(this).data('num')
            const title = $(this).children('.info-block-title')[0].innerHTML
            const height = $(this).data('height')
            weatherTitle.html(`${title} <span>${height}м</span>`)
            const $weatherTab = $(`[data-num=${num}]`);
            $weatherBlocks.removeClass('active')
            $weatherInfo.removeClass('active')
            $weatherTab.addClass('active')
            $(this).addClass('active')
        })

        const swipeRight=$('.title-wrapper .next')
        const swipeLeft=$('.title-wrapper .prev')

        swipeRight.on('click',function(){
            let current = $('.aside-weather .table.active')
            const num=current.data('num')
            let next = $(`[data-num=${num+1}]`)

            if(num===10){
                next=$(`[data-num=1]`)
            }
            let title=next.children('.info-block-title')[0].innerHTML
            const height=next.data('height')
            weatherTitle.html(`${title} <span>${height}м</span>`)
            $weatherBlocks.removeClass('active')
            $weatherInfo.removeClass('active')
            next.addClass('active')
        })

        swipeLeft.on('click',function(){
            let current = $('.aside-weather .table.active')
            const num=current.data('num')

            let prev = $(`[data-num=${num-1}]`)

            if(num===1){
                prev=$(`[data-num=10]`)
            }
            let title=prev.children('.info-block-title')[0].innerHTML
            const height=prev.data('height')
            weatherTitle.html(`${title} <span>${height}м</span>`)
            $weatherBlocks.removeClass('active')
            $weatherInfo.removeClass('active')
            prev.addClass('active')
        })

        const $tablinks = $('.switcher a');
        const $tabcontent = $('.tabcontent');
        const $map = $('.map picture');

        $tablinks.on('click', function (e){

            e.preventDefault();

            const $t = $(this);
            const id = $t .data('tab');
            const $tab = $(`[data-tab=${id}]`);


            $legendInfo.addClass('show')
            $legendWeather.removeClass('show')
            $tabcontent.removeClass('show');
            $map.removeClass('show');
            $tablinks.removeClass('active');

            $switchers.removeClass('active');
            $t.addClass('active');
            $(`[data-tab="${$t.data('tab')}"]`).addClass('active');
            $tab.addClass('show');
            $('.aside-weather').css('display','none')
            $('.aside .tablinks').css('display','block')
            $('.legend-weather').css('display','none')
            $('.aside .uptitle .date').css('display','flex')
        })


        const $switchers = $('.search-link');
        const $legendInfo = $('.legend-info div');
        $legendInfo.addClass('show')
        $switchers.on('click', function (e){

            e.preventDefault();

            const $t = $(this);
            const id = $t .data('tab');
            const $tab = $(`[data-${id}="true"]`);

            if(!$t.hasClass('active')){
                $legendInfo.removeClass('show');
                $legendWeather.removeClass('show');
                $switchers.removeClass('active');
                $t.addClass('active')
                $tab.addClass('show');
            }else{
                $t.removeClass('active')
                $tab.removeClass('show');
                $legendInfo.removeClass('show');
                $legendWeather.removeClass('show');
                $switchers.removeClass('active');
            }

            $('.routes-info').addClass('show')
            $('.aside .tablinks').css('display','block')
            $('.aside-weather').css('display','none')
            $('.legend-weather').css('display','none')
            $('.aside .uptitle .date').css('display','flex')
        });

        const $maps=$('.map picture')
        const $legendWeather = $('.legend-weather div');
        $('.weather').click(()=>{
            $maps.removeClass('show');
            $('.map-weather').addClass('show')
            $legendWeather.addClass('show')
            $legendInfo.removeClass('show')
            $('.aside .tablinks').css('display','none')
            $('.aside-weather').css('display','block')
            $('.legend-weather').css('display','block')
            $('.aside .uptitle .date').css('display','none')
            $tablinks.removeClass('active');
        })

        $('.return').click(()=>{
            $('.aside .tablinks').css('display','block')
            $('.aside-weather').css('display','none')
            $legendInfo.addClass('show')
            $legendWeather.removeClass('show')
            $('.legend-weather').css('display','none')
            $('.aside .uptitle .date').css('display','block')
            $tablinks[0].click();
        })

        const $more = $('.more');
        const $closePopup = $('.close-popup-btn')
        const $popUpImage = $('.popup .wallpaper img');

        $('.info-block').on('click', function (){

            const $t = $(this).find('.more');
            const src = $t .data('src');

            $('.popup').removeClass('hidden');
            $popUpImage.attr('src',`${src}`);
        });

        $closePopup.on('click',function(e){
            $('.popup').addClass('hidden');
        })

    }
})