export const Roads = () => {
  const roadTop = $('.roads__top')  
  const roadList = $('.roads__list')
  const title = $('.roads__title')
  
  if(roadList.length){
    $(document).on('scroll',function(){
      let current = $(this).scrollTop()
      if(current >= title.offset().top + title.innerHeight() + parseInt(title.css('marginTop')) + $('.restaurants__nav').innerHeight()){
        roadTop.addClass('fixed')
        roadList.css('paddingTop',roadTop.innerHeight())
      }else{
        roadTop.removeClass('fixed')
        roadList.removeAttr('style')
      }
    })

    $('.roads__toggler').on('click',function(){
      $('.camera-dropbox').fadeOut(50)
      
      if($(this).next().css('display')!=='block'){
        $(this).next().fadeIn(50) 
      }else{
        $(this).next().fadeOut(50)
      }
    })

    $(document).on('mouseup',(e)=>{
      if(!e.target.closest('.roads__table-gradient__camera')){
        $('.roads__toggler').next().fadeOut(50)
      }
    })
  }
}