import "simplebar"
import './modules/fslightbox'
import {fixTopMenu} from './modules/fixTopMenu'
import {Booking} from './modules/book'
import {Sliders} from './modules/sliders'
import {toggleTrace} from './modules/holidays'
import {BookFixed} from './modules/book-fixed'
import {mainMenu} from './modules/mainMenu'
import {autoPositionOnScroll} from './modules/autoPosition'
import {Signup} from './modules/signup'
import {NewsFilter} from './modules/news'
import {SkyScroll} from './modules/sky'
import {Restourants} from './modules/restourants'
import {Roads} from './modules/roads'

$(function(){
  let tooltips = $('.tooltip-box')
  
  if(tooltips.length>0){
    tooltips.each(function(){
      $(this).css('top',(($(this).innerHeight() + 24)*-1) + 'rem')
      $(this).fadeIn()
    })
  
    $(document).on('click',(e)=>{
      if(e.target.closest('.tooltip-box__close')){
        $(e.target).parents('.tooltip-box').fadeOut()
      }
    })
  }

  $(document).on('click','.footer__item',function(e){
    if(e.target.closest('.show-md')){
      $(this).find('[data-mobile]').slideToggle()
      $(e.target.closest('.show-md')).toggleClass('active')
    }
  })

  if($('[type="tel"]').length){
        $('[type="tel"]').mask("+7(999) 999-9999")
    }
  if($('.mask-date').length){
        $('.mask-date').mask("99.99.9999")
    }
  if($('.mask-date').length){
        $('.mask-date').mask("99.99.9999-99.99.9999")
    }
  if($('.mask-hourse').length){
        $('.mask-hourse').mask("99:99")
    }
  
  fixTopMenu()
  Booking()
  Sliders() 
  toggleTrace()
  BookFixed()
  mainMenu()
  autoPositionOnScroll()
  Signup()
  NewsFilter()
  SkyScroll() 
  Restourants()
  Roads()
})

