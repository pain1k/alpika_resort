export const Restourants = () => {
  const brone = $('.restaurants__brone')
  const topFooter = $('.main-top__footer').innerHeight()
  const banerHeight = $('.main-top').innerHeight()
  if(brone.length){
    $(document).on('scroll',function(){
      let current = $(this).scrollTop()
      if(current >= banerHeight){
        brone.addClass('fixed')
        $('.fixed-button-menu').css('bottom',brone.innerHeight() + 12 + 'rem')
      }else{
        brone.removeClass('fixed')
      }
    })
  }
  if($('.restaurants__brone-fixed').length){
    $('.fixed-button-menu').css('bottom',$('.restaurants__brone-fixed').innerHeight() + 12 + 'rem')
  }
}