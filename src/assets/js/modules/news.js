export const NewsFilter = () => {
  const select = $('.news__select')

  if(select.length){
    $('body').on('click','.news__select',function(e){
      $(this).next().fadeToggle(50)
      $(this).toggleClass('actived')
    })

    $('body .news__select-name').each(function(){
      $(this).on('click',function(){
        $('body .news__select-name').removeClass('actived')
        $(this).addClass('actived')
        $('.news__time').html($(this).html())
        select.removeClass('actived')
        select.next().fadeOut(50)
      })
    })

    $(document).on('mouseup',function(e){
      if(!e.target.closest('.news__formgroup')){
        select.removeClass('actived')
        select.next().fadeOut(50)
      }
    })
  }
}