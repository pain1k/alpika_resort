function autoPosition(){
    $('body').on('click', '.flatpickr-wrapper', function () {	
            const elm = $(this)
            const off = elm.offset();
            if (window.innerHeight + window.pageYOffset < elm.height() + elm.find('.flatpickr-calendar').height() + off.top) {
                
                elm.find('.flatpickr-calendar').css({'bottom': '101%', 'top': 'auto'});
            } else {										
                elm.find('.flatpickr-calendar').css({'top': '101%', 'bottom': 'auto'});
            }								
        });
    $('body').on('click', '.width-drop', function () {	
            const elm = $(this)
            const off = elm.offset();
            if (window.innerHeight + window.pageYOffset < elm.height() + elm.find('.booking__dropdown').height() + off.top) {
                
                elm.find('.booking__dropdown').css({'bottom': '101%', 'top': 'auto'});
            } else {										
                elm.find('.booking__dropdown').css({'top': '101%', 'bottom': 'auto'});
            }								
        });
    
}

export const autoPositionOnScroll = () => {
    autoPosition()
    $(document).on('scroll',()=>{
        autoPosition()
    })
}