import Swiper,{ Navigation, Pagination } from 'swiper'
const hasBlock = (selector) => {
      return document.querySelector(selector) == null
    }

export const Sliders = () => {
   

        $('.conference__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {
            modules: [Navigation, Pagination],
            speed: 1500,
            spaceBetween:4,
            slidesPerView:1,
            pagination: {                
                el: t.closest('.conference__wrapp').find('.conference__nav')[0],
                clickable:true
                },
            navigation: {
                nextEl: t.closest('.conference__wrapp').find('.conference__arrow-next')[0],
                prevEl: t.closest('.conference__wrapp').find('.conference__arrow-prev')[0]
            },
            
            on:{
              
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }
            }
           
            });
            
        })   

        $('.restaurants__nav-wrapp').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {            
            speed: 1500,
            spaceBetween:0,
            slidesPerView:'auto',                       
           
            });
            
        })       
        $('.services__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {
            modules: [Navigation, Pagination],
            speed: 1500,
            spaceBetween:0,
            pagination: {                
                el: t.closest('.services__container').find('.services__nav')[0],
                clickable:true
                },
            navigation: {
                nextEl: t.closest('.services__container').find('.services__arrow-next')[0],
                prevEl: t.closest('.services__container').find('.services__arrow-prev')[0]
            },
            breakpoints:{
                992:{
                  spaceBetween:20
                   
                },
                0:{
                  spaceBetween:4,
                  autoHeight:false,                 
                }
            },
            on:{
              init:function(){
                
              },
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }
            }
           
            });
            
        })       
        $('.events__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {
            modules: [Navigation, Pagination],
            speed: 1500,
            spaceBetween:20,
            slidesPerView:'auto',
             slideToClickedSlide:true,            
            navigation: {
                nextEl: t.closest('.events__container').find('.events__arrow-next')[0],
                prevEl: t.closest('.events__container').find('.events__arrow-prev')[0]
            },
            breakpoints:{
                992:{
                  spaceBetween:20
                   
                },
                0:{
                  spaceBetween:4,
                  autoHeight:false,                 
                }
            },
            on:{
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }
            }
           
            });
            
        })      
            

        $('.news-feed__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {
            modules: [Navigation, Pagination],
            speed: 1500,
            spaceBetween:20,
            slidesPerView:'auto',
            slideToClickedSlide:true,     
            pagination: {                
                el: t.closest('.news-feed__container').find('.news__pagination')[0]                
                },        
            navigation: {
                nextEl: t.closest('.news-feed__container').find('.news-feed__arrow-next')[0],
                prevEl: t.closest('.news-feed__container').find('.news-feed__arrow-prev')[0]
            },
             breakpoints:{
                992:{
                  spaceBetween:20
                   
                },
                0:{
                  spaceBetween:4,
                  autoHeight:false,                 
                }
            },on:{
              init:function(){
                sizeBullets(this)
              },
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  },
              orientationchange:function(){
                sizeBullets(this)
              },
              resize:function(){
                sizeBullets(this)
              }
            }
           
            });
            
        })       

        
        $('.infrastructure__slider').each(function(){
            var t = $(this)
            var infrastructure = new Swiper(t[0], {
            modules: [Navigation, Pagination],
            speed: 1500,
            spaceBetween:20,
            slidesPerView:2.4,
            slideToClickedSlide:false, 
            observer:true,        
            pagination: {                
                el: t.closest('.infrastructure__container').find('.infrastructure__pagination')[0]                
                },    
            navigation: {
                nextEl: t.closest('.infrastructure__container').find('.infrastructure__arrow-next')[0],
                prevEl: t.closest('.infrastructure__container').find('.infrastructure__arrow-prev')[0]
            },
             breakpoints:{
                992:{
                  spaceBetween:20,
                  observer:true                   
                },
                768:{
                  slidesPerView:2.4,
                  spaceBetween:4,
                  observer:true               
                },
                0:{
                  spaceBetween:4,
                   slidesPerView:1,
                   observer:true                
                }
            },
            on:{        
              init:function(){
                sizeBullets(this)
              },     
              orientationchange:function(){
                sizeBullets(this)
              },
              resize:function(){
                sizeBullets(this)
              },  
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }
            }
           
            });
            
        })       


    
    
    const initSwiper = () => {
      $('.home-gallery__swiper').each(function(){
        let t = $(this)
        let swt = new Swiper(t[0], {               
              speed: 1500,
              spaceBetween:0,  
              slidesPerView:'auto',           
              loop:true,       
              observer:true, 
                               
              });
  
              t.find('[data-fslightbox]').each(function(){
                refreshFsLightbox();                
              })
              
              
          })
    }
    initSwiper()
    let galleryLinks = document.querySelectorAll('[data-url]')
    const fetchGallery = (galleryLinks) => {
      for(let item of galleryLinks){
        item.addEventListener('click',(e)=>{
          const url = e.currentTarget.dataset.url
          fetchData(url)
          .then(data=>new DOMParser().parseFromString(data,'text/html'))
          .then(
            (section)=>{document.querySelector('.home-gallery').innerHTML = section.querySelector('.home-gallery').innerHTML
             
            document.querySelector('.home-gallery').classList.add('loaded')             
            fetchGallery(document.querySelectorAll('[data-url]'))   
          })
          .then(()=>{
            setTimeout(()=>{
              initSwiper() 
              document.querySelector('.home-gallery').classList.remove('loaded') 
            },1000)
          })
        })
      }
    }

     fetchGallery(galleryLinks)

        

    const fetchData = async (url) => {
      let res = await fetch(url)
      return await res.text()
    }

    $('.history__slider').each(function(){
        let t = $(this)
        let historySwiper = new Swiper(t[0], {     
              modules: [Navigation, Pagination],          
              speed: 1500,
              spaceBetween:20,  
              slidesPerView:1,                     
              observer:true,  
              pagination: {                
                el: t.closest('.history__container').find('.history__slider-dots')[0]                
                },
              navigation: {
                  nextEl: t.closest('.history__container').find('.history__slider-next')[0],
                  prevEl: t.closest('.history__container').find('.history__slider-prev')[0]
              },
                breakpoints:{
                  
                  992:{
                    spaceBetween:20,
                    observer:true  
                    
                  },
                  0:{
                    spaceBetween:4,
                    autoHeight:false,   
                    observer:true                
                  }
                },
              on: {
                  init: function () {
                    this.slides.forEach((slide,i)=>{
                      let num = slide.dataset.year
                      let bullet = $(this.pagination.bullets[i])                     
                      $(bullet.get(0)).html('<mark>'+num+'</mark>');
                      let mark = $(bullet.get(0)).find('mark')
                      mark.css({'left':mark.innerWidth()*-1+ 5 + 'rem','bottom':mark.innerHeight()*-1 - 6+'rem'})
                      $(window).on('resize',()=>{
                         mark.css({'left':mark.innerWidth()*-1+ 5 + 'rem','bottom':mark.innerHeight()*-1 - 6+'rem'})
                      })
                    })
                  },  
                  slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }                
                },                 
              });
  
      
              
              
          })

    function addStyle(){
      $('.services__nav').each(function(i,_){
        let el = $(this)
        let container = el.parents('.services__container')
        let title = container.find('.services__title')
        let image = container.find('.services__item-image')
        let titleHeight = title.innerHeight() + parseInt(title.css('marginBottom'))
        let imageHeight = image.innerHeight()
        let arrows = $('.services__arrows')
        if($(window).width() < 992){
          el.css(
            'top',titleHeight + imageHeight + 14 + 'rem')
          $(arrows[i]).css('top',titleHeight + imageHeight + 14 + 'rem')          
        }
      })
    }

    addStyle()

    $(window).on('resize',()=>{
      let title = $('.services__title');
      let image = $('.services__item-image');
      let titleHeight = title.innerHeight() + parseInt(title.css('marginBottom'))
      let imageHeight = image.innerHeight()
      if($(window).width() < 992){
        addStyle()
      }else{
        $('.services__nav').removeAttr('style')
        $('.services__arrows').removeAttr('style')
      }
    })

    $('.masters__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {           
            speed: 1500,
            spaceBetween:20,
            slidesPerView:3,        
            
            breakpoints:{                  
                  992:{
                    spaceBetween:20,
                    slidesPerView:3                      
                  },
                  768:{
                    spaceBetween:4,
                    slidesPerView:2                      
                  },
                  0:{
                    spaceBetween:4,
                    slidesPerView:1               
                  }
                }

            });
            
        })  
    $('.instructors__slider').each(function(){
            var t = $(this)
            var slider = new Swiper(t[0], {  
            modules: [Navigation, Pagination],         
            speed: 1500,
            spaceBetween:20,
            slidesPerView:3,  
            pagination: {                
                el: t.closest('.instructors__container').find('.instructors__pagination')[0]                
                },      
            navigation: {
                  nextEl: t.closest('.instructors__container').find('.instructors__arrow-next')[0],
                  prevEl: t.closest('.instructors__container').find('.instructors__arrow-prev')[0]
              },
            on:{     
              init:function(){
                sizeBullets(this)
              },
              orientationchange:function(){
                sizeBullets(this)
              },
              resize:function(){
                sizeBullets(this)
              },         
              slideChange:function(){
                    if(!$(this.navigation.nextEl).hasClass('swiper-button-disabled') && !$(this.navigation.prevEl).hasClass('swiper-button-disabled')){
                      $(this.navigation.nextEl).addClass('enable')
                      $(this.navigation.prevEl).addClass('enable')
                    }else{
                      $(this.navigation.nextEl).removeClass('enable')
                      $(this.navigation.prevEl).removeClass('enable')
                    }
                  }
            },
            breakpoints:{                  
                  992:{
                    spaceBetween:20,
                    slidesPerView:3                      
                  },
                  768:{
                    spaceBetween:4,
                    slidesPerView:2                      
                  },
                  0:{
                    spaceBetween:4,
                    slidesPerView:1.2               
                  }
                }

            });
            
        })  
    
}


function sizeBullets(el){
    if($(window).width() <= 1200){
      el.pagination.bullets.forEach(item => {
        item.style.width = 100 / el.pagination.bullets.length + '%'
      })
    }else{
      el.pagination.bullets.forEach(item => {
        item.removeAttribute('style')
      })
    }
  }