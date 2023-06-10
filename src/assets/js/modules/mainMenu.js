

export const mainMenu = () => {
    const toggler = $('.js-toggler')
    const menu = $('.main-menu')
    const closeBotton = $('[data-close]')
    toggler.on('click',()=>{
        menu.addClass('active')
        $('.header').css('top','-100%')
        $('body').css({'overflow':'hidden','width':menu.innerWidth()})
        
    })
    closeBotton.on('click',()=>{
        menu.removeClass('active')
        $('.header').removeAttr('style')
        $('body').removeAttr('style')
        
    })
  
}