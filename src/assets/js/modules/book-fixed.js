
export const BookFixed = () => {
   const bookContainer = $('.main-top__booking')
   const banner = $('.main-top')
   const header = $('.header')
   const dropdownHotel = $('.reservation-hotel').next()
   const dropdownPersone = $('.reservation-person').next()
   let scrollFlag = false
   if(bookContainer.length){
    $(document).on('scroll',function(){
        let current = $(this).scrollTop()

        if(current >= banner.innerHeight() - header.innerHeight()){
            bookContainer.addClass('fixed')
             $('.fixed-button-menu').css('bottom',bookContainer.innerHeight() + 'rem')
             dropdownHotel.css('top',(dropdownHotel.innerHeight())*-1)
             dropdownPersone.css('top',(dropdownPersone.innerHeight())*-1)
             scrollFlag = true
        }else{
            bookContainer.removeClass('fixed')
            dropdownHotel.removeAttr('style')
            dropdownPersone.removeAttr('style')
            scrollFlag = false
        }
    })

    const bottonMd = $('.botton-md a')    
            
    bottonMd.on('click',(e) => {           
            e.preventDefault()
                const form = $('.botton-md').prev()
                const inputGroups = form.find('.input-groups')
                const lastGroup = inputGroups.find('.input-group:last')
                const formOptions = {
                    'display':'block',
                    'height':'80vh',        
                    'gropOtions':{
                        'height':'100%',     
                        'display':'flex',
                        'flexFlow':'column'
                    },
                    'bookHead':{
                        'justifyContent':'flex-end',
                        'alignItems':'center',
                        'marginBottom':'30rem',            
                    },
                    'container':{
                        'top':'0',
                        'backgroundColor':'#ffffff',
                        'zIndex':'1050',   
                        'height':'100%'
                    },
                    'formTitle':{
                        'display':'flex',
                        'justifyContent':'center',
                        'textAlign':'center',
                        'fontSize':'22rem',
                        'lineHeight':'24rem',
                        'letterSpacing':'1.8rem',
                        'fontWeight':'400',
                        'marginBottom':'40rem'
                    },
                    'lastGroup':{
                        'position':'fixed',
                        'bottom':'20rem',
                        'width':'calc(100% - 40rem)',
                        'left':'20rem'
                    },
                    'body':{
                        'overflow':'hidden',
                        'width':bookContainer.innerWidth()
                    }
                }

                const bookHead = $('<div>',{
                    class:'mobile-book-header d-flex',
                    html:`<span class="mobile-book-close">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.53268 19.3307L0.666016 17.4641L8.13268 9.9974L0.666016 2.53073L2.53268 0.664062L9.99935 8.13073L17.466 0.664062L19.3327 2.53073L11.866 9.9974L19.3327 17.4641L17.466 19.3307L9.99935 11.8641L2.53268 19.3307Z" fill="#222A2F"/></svg>
                        </span>`,
                    css:formOptions.bookHead
                })
                const formTitle = $('<div>',{
                    class:'mobile-book-title text-uppercase',
                    html:`<span>
                            забронируйте <br>проживание
                        </span>`,
                    css:formOptions['formTitle']
                    
                })
            form.css(formOptions)    
            bookContainer.addClass('fixed')
            bookContainer.css(formOptions['container'])
            bookContainer.prepend(formTitle).prepend(bookHead)
            inputGroups.css(formOptions['gropOtions'])
            lastGroup.css(formOptions['lastGroup'])
            $(e.currentTarget).css('display','none')
            $('body').css(formOptions['body'])
            
          })

    

    $(document).on('click','.mobile-book-close',function(){
        const form = $('.botton-md').prev()
        const inputGroups = form.find('.input-groups')
        const lastGroup = inputGroups.find('.input-group:last')
        
        const body = $('body')
        for(let item of [form,inputGroups,lastGroup,bookContainer,body]){
            item.removeAttr('style')
        }
        bottonMd.removeAttr('style')
        $('.mobile-book-title').remove()
        $('.mobile-book-header').remove()        
        if(!scrollFlag){
          bookContainer.removeClass('fixed')  
        }
    })
    

   }
}
