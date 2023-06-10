export const SkyScroll = () => {
  const skySection = $('.sky-passes')
  const skp = $('#skp')
  if(skySection.length){
    $(document).on('scroll',function(){
      let curr = $(this).scrollTop()
      if(curr >= $('#skp').offset().top - parseInt($('#skp').css('paddingTop'))){
        skySection.addClass('fixed')
        $('.header').css('opacity','0')
      }else{
        skySection.removeClass('fixed')
        $('.header').removeAttr('style')
      }
      document.querySelectorAll('.bx').forEach((el,i)=>{
        if(el.offsetTop - (parseInt($(el).css('paddingTop')) + parseInt($(el).prev().css('marginBottom'))) <= window.scrollY){
          document.querySelectorAll('.sky-passes__nav-item').forEach(el=>{
            if(el.classList.contains('active')){              
              el.classList.remove('active')            
            }
            document.querySelectorAll('.sky-passes__nav-item')[i].classList.add('active')
          })
        }
      })
    })

    $('.sky-passes__nav-item').on('click',function(){
      let box = $(this).data('box')
      $('.sky-passes__nav-item').removeClass('active')
      $('.sky-passes__nav-item').removeClass('flexed')
      $(this).addClass('active')
      $('html,body').animate({
        scrollTop:$(box).offset().top - (parseInt($(box).css('paddingTop')) + parseInt($(box).prev().css('marginBottom')) - 20)
      },500)
    })
  }

  $('.sky-passes__nav-angle').on('click',function(e){
    e.stopPropagation()
    $('.sky-passes__nav-item').toggleClass('flexed')
  })
}