
// import {toggleAttr} from './pure'

export const toggleTrace = () => {
  const tg = $('.main-top__holidays-toggle')
  const dwup = $('.down-up')

  if(tg.length){
    tg.on('click',(e)=>{
      let el = e.target
      if(e.target.closest('.main-top__holidays-toggle')){
        dwup.slideToggle()
        $(e.target).toggleClass('active')
      }
    })

    $(document).on('scroll',function(){
      let header = $('.header').innerHeight()
      let btn = $('.main-top--holidays').height() - header
      let current = $(this).scrollTop()
      
      
        if((current) >= btn){          
          $('.main-top__pay').parents('.main-top__holidays').addClass('fixed')
          $('.fixed-button-menu').css('bottom',$('.main-top__holidays').innerHeight() + 16 + 'rem')
        }else{
          $('.main-top__pay').parents('.main-top__holidays').removeClass('fixed')
        }       
      
    })
  }
  
}